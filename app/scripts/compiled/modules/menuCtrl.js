var ns = ns || {};

(function (window, document, undefined) {

    'use strict';

    /**
    * Menu Controller
    */

    ns.menuCtrl = (function () {

        // App config and variables
        var DOM = {
            body: document.querySelectorAll('body')[0],
            menu: document.getElementById('menu')
        };

        var settings = {
            haveScrolled: false,
            offset: 0,
            checkInterval: 250
        };

        var s = settings;

        /**
        * @name init
        * @desc Initialises the menu
        */
        var init = function init() {

            // Check if menu exists, return if not
            if (DOM.menu === null) {
                return false;
            }

            // Initialise menu controller
            DOM.body.setAttribute('ui-menu-ctrl', 'is-started');
            s.haveScrolled = false;

            // Attach eventlistener
            $(window).on('scroll touchmove', function () {
                s.haveScrolled = true;
            });

            // Rotate items
            _checkIfScrolled();
        };

        /**
        * @name _checkIfScrolled
        * @desc Rotates list items
        */
        var _checkIfScrolled = function _checkIfScrolled() {

            if (didScroll) {
                $('.menu').toggleClass('fixed', $document.scrollTop() > offset);
                s.haveScrolled = false;
            }

            // Trigger next iteration
            setInterval(_checkIfScrolled, s.checkInterval);
        };

        //////////////////

        var module = {
            init: init
        };

        return module;
    })();
})(window, document);
//# sourceMappingURL=menuCtrl.js.map
