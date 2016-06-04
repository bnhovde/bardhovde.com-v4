/* jshint node:true */
'use strict';
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var $ = require('gulp-load-plugins')();

gulp.task('injectScss', function() {

    var target = gulp.src('app/styles/main.scss');
    var sources = gulp.src(['app/styles/modules/**/*.scss'], {read: false});

    return target.pipe($.inject(sources, {
        starttag: '// inject:scss',
        endtag: '// endinject',
        relative: true,
        transform: function (filepath) {
            // Return path without file ext
            return '\'' + filepath.slice(0, -5) + '\',';
        }
    }))
    .pipe(gulp.dest('app/styles'));
});

gulp.task('styles', ['injectScss'], function() {
    return sass('app/styles/main.scss', { style: 'compressed' })
        .pipe($.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(gulp.dest('.tmp/styles/temp'));
});

gulp.task('pixrem', ['styles'], function() {
    return gulp.src('.tmp/styles/temp/main.css')
        .pipe($.pixrem('16px'))
        .pipe(gulp.dest('.tmp/styles'))
        .pipe(gulp.dest('app/styles'));
});

// inject SASS components
gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep())
        .pipe(gulp.dest('app/styles'));
});

gulp.task('generate-service-worker', function(callback) {
    var path = require('path');
    var swPrecache = require('sw-precache');
    var rootDir = 'app/_site';

    swPrecache.write('app/service-worker.js', {
        staticFileGlobs: [rootDir + '/**/*.{html,css,svg}'],
        stripPrefix: rootDir
    }, callback);
});

gulp.task('watch', function() {
    // watch for changes
    gulp.watch('app/styles/**/*.scss', ['pixrem']);
});