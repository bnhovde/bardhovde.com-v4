var ns = ns || {};

(function (window, document, undefined) {

    'use strict';

    /**
    * header Controller
    */

    ns.headerCtrl = (function () {

        // App config and variables
        var DOM = {
            body: document.querySelectorAll('body')[0],
            header: document.getElementById('header')
        };

        var settings = {
            haveScrolled: false,
            offset: 0,
            checkInterval: 250
        };

        var s = settings;

        /**
        * @name init
        * @desc Initialises the header
        */
        var init = function init() {

            // Check if header exists, return if not
            if (DOM.header === null) {
                return false;
            }

            // Initialise header controller
            DOM.body.setAttribute('ui-header-ctrl', 'is-started');
            s.haveScrolled = false;

            // Attach eventlistener
            window.addEventListener('scroll', function (e) {
                s.haveScrolled = true;
            });

            // Setup intervals
            setInterval(_checkIfScrolled, s.checkInterval);
        };

        /**
        * @name _checkIfScrolled
        * @desc Rotates list items
        */
        var _checkIfScrolled = function _checkIfScrolled() {

            if (s.haveScrolled) {

                var scrollDist = window.pageYOffset || document.documentElement.scrollTop;

                // Check scroll distance
                if (scrollDist > s.offset) {
                    DOM.header.setAttribute('ui-header', 'is-scrolled');
                } else {
                    DOM.header.setAttribute('ui-header', '');
                }
                s.haveScrolled = false;
            }
        };

        //////////////////

        var module = {
            init: init
        };

        return module;
    })();
})(window, document);
//# sourceMappingURL=headerCtrl.js.map
