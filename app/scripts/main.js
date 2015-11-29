var ns = ns || {};

(function(window, document, undefined) {

    'use strict';

    /**
    * Global Constants
    */
	
	// Get todays date
	let d = new Date();
	let day = d.getDate();
	
	// Temp setting
	day = 1;
    
    ns.CONST = {
		today : day
	};
	
	// Fire off modules
	ns.animationCtrl.init();
	
})(window, document);

