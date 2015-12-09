var ns = ns || {};

(function (window, document, undefined) {

				'use strict';

				/**
    * Global Constants
    */

				// Get todays date
				var d = new Date();
				var day = d.getDate();

				// Temp setting
				day = 1;

				ns.CONST = {
								today: day
				};

				// Fire off modules
				ns.animationCtrl.init();
})(window, document);
//# sourceMappingURL=main.js.map
