'use strict';

var ns = ns || {};

(function (window, document, undefined) {

    'use strict';

    /**
    * Video Controller
    */

    ns.videoCtrl = (function () {

        // App config and variables
        var DOM = {
            body: document.querySelectorAll('body')[0],
            navToggle: document.querySelectorAll('[ui-nav-toggle]')[0],
            navContainer: document.querySelectorAll('[ui-nav-container]')[0]
        };

        var settings = {
            data: [],
            date: 0
        };

        var s = settings;

        /**
        * @name init
        * @desc Initialises the menu
        */
        var init = function init() {

            // Initialise video controller
            DOM.body.setAttribute('ui-video-ctrl', 'is-started');

            // Get todays date
            s.date = ns.CONST.today;

            // DOM.navToggle.addEventListener('click', _toggleMenu, false);
            _getVideoPath();
        };

        /**
        * @name _toggleMenu
        * @desc Toggles menu visibility
        */
        var _getVideoPath = function _getVideoPath() {

            var request = new XMLHttpRequest();
            request.open('GET', 'https://spreadsheets.google.com/feeds/list/1PPrpZfJEgJEry1Qsk61jtXLIz_5eZBDvKXzhJWKxWz0/od6/public/values?hl=en_US&alt=json', true);

            request.onload = function () {
                if (request.status >= 200 && request.status < 400) {
                    var response = JSON.parse(request.response);
                    s.data = response.feed.entry;

                    // Populate video embed
                    _createEmbed();
                } else {
                    // We reached our target server, but it returned an error
                }
            };

            request.onerror = function () {
                // There was a connection error of some sort
            };

            request.send();
        };

        /**
        * @name _toggleMenu
        * @desc Toggles menu visibility
        */
        var _createEmbed = function _createEmbed() {

            var vimeoURL = s.data[s.date].gsx$embedpath.$t;

            console.log(vimeoURL);
        };

        //////////////////

        var module = {
            init: init
        };

        return module;
    })();
})(window, document);
//# sourceMappingURL=videoCtrl.js.map
