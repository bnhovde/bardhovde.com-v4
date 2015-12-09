var ns = ns || {};
var Velocity = Velocity || {};

(function (window, document, undefined) {

    'use strict';

    /**
    * Rotator Animation Controller
    */

    ns.animationCtrl = (function () {

        // App config and variables
        var DOM = {
            body: document.querySelectorAll('body')[0],
            rotator: document.getElementById('things'),
            rotatorItems: document.querySelectorAll('.rotator__item')
        };

        var settings = {
            items: 0,
            activeItem: 0
        };

        var s = settings;

        /**
        * @name init
        * @desc Initialises the menu
        */
        var init = function init() {

            // Check if rotator exists, return if not
            if (DOM.rotator === null) {
                return false;
            }

            // Initialise animation controller
            DOM.body.setAttribute('ui-animation-ctrl', 'is-started');

            // Count the amount of list items
            s.items = DOM.rotatorItems.length;

            // Rotate items
            _rotateItems();
        };

        /**
        * @name _rotateItems
        * @desc Rotates list items
        */
        var _rotateItems = function _rotateItems() {

            // Set active item to +1, unless that's above length of items
            s.activeItem = s.items >= s.activeItem + 1 ? s.activeItem + 1 : 1;

            // Show the current Item
            DOM.rotator.setAttribute('ui-active-item', s.activeItem + 1);

            // Trigger next iteration
            setTimeout(_rotateItems, 2000);
        };

        //////////////////

        var module = {
            init: init
        };

        return module;
    })();
})(window, document);
//# sourceMappingURL=rotatorCtrl.js.map
