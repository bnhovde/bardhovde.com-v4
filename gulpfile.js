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
    return sass('app/styles/main.scss', { style: 'expanded' })
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

gulp.task('jshint', function() {
    return gulp.src('app/scripts/**/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish'))
        .pipe($.jshint.reporter('fail'));
});



gulp.task('babel', function () {
    return gulp.src(['app/scripts/**/*.js', '!app/scripts/compiled/**/*.js'])
        .pipe($.sourcemaps.init())
        .pipe($.babel())
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('app/scripts/compiled/'));
});




gulp.task('html', ['pixrem'], function() {    


    var assets = $.useref.assets({
        searchPath: '{.tmp,app}'
    });

    
    var filesToProcess = 'app/*.html';
    

    return gulp.src(filesToProcess)
        .pipe(assets)
        .pipe($.if('*.js', $.uglify()))
        .pipe($.if('*.css', $.csso()))
        .pipe(assets.restore())
        .pipe($.useref())
        .pipe($.if('*.html', $.minifyHtml({
            conditionals: true,
            loose: true
        })))
        .pipe(gulp.dest('dist'));
});



gulp.task('images', function() {
    return gulp.src('app/images/**/*')
        .pipe($.cache($.imagemin({
            progressive: true,
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', function() {
    return gulp.src(require('main-bower-files')().concat('app/fonts/**/*'))
        .pipe($.filter('**/*.{eot,svg,ttf,woff,woff2}'))
        .pipe($.flatten())
        .pipe(gulp.dest('dist/fonts'));
});

gulp.task('extras', function() {
    return gulp.src([
        'app/*.*',
        '!app/*.html'
    ], {
        dot: true
    }).pipe(gulp.dest('dist'));
});

gulp.task('clean', require('del').bind(null, ['.tmp', 'dist']));

gulp.task('connect', ['pixrem'], function() {
    var serveStatic = require('serve-static');
    var serveIndex = require('serve-index');
    var client = require('connect')()
        .use(require('connect-livereload')({
            port: 35729
        }))
        .use(serveStatic('.tmp'))
        .use(serveStatic('app'))
        // paths to bower_components should be relative to the current file
        // e.g. in client/index.html you should use ../bower_components
        .use('/bower_components', serveStatic('bower_components'))
        .use(serveIndex('app'));

    require('http').createServer(client)
        .listen(9000)
        .on('listening', function() {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'watch'], function() {
    require('opn')('http://localhost:9000');
});

// inject bower components
gulp.task('wiredep', function() {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep())
        .pipe(gulp.dest('app/styles'));


    gulp.src('app/*.html')
        .pipe(wiredep())
        .pipe(gulp.dest('app'));

});

// inject bower components without dev
gulp.task('wiredepBuild', function() {
    var wiredep = require('wiredep').stream;

    gulp.src('app/styles/*.scss')
        .pipe(wiredep())
        .pipe(gulp.dest('app/styles'));


    gulp.src('app/*.html')
        .pipe(wiredep())
        .pipe(gulp.dest('app'));

});


gulp.task('watch', ['connect'], function() {
    $.livereload.listen();

    // watch for changes
    gulp.watch([
        'app/*.html',
        '.tmp/styles/**/*.css',
        'app/scripts/**/*.js',
        'app/images/**/*'
    ]).on('change', $.livereload.changed);

    gulp.watch('app/styles/**/*.scss', ['pixrem']);
     
    gulp.watch(['app/scripts/**/*.js', '!app/scripts/compiled/**/*.js'], ['babel']);
     
    gulp.watch('bower.json', ['wiredep']);
});




gulp.task('build', ['wiredepBuild', 'jshint',  'babel',  'html', 'images', 'fonts', 'extras'], function() {
    return gulp.src('dist/**/*').pipe($.size({
        title: 'build',
        gzip: true
    }));
});




gulp.task('default', ['clean'], function() {
    gulp.start('build');
});
