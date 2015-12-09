var ns = ns || {};

(function(window, document, undefined) {

    'use strict';

    /**
    * helpers Module
    */

    ns.helpers = (function(){
        
        //////////////////

        /**
        * @name closest
        * @desc Walks up the DOM and returns the closest parent element of supplied tag type
        * @attr origin (HTMLElement) - Start element in DOM
        * @attr elem (string) - Tagname to look for
        */
        var closest = function(origin, elem) {
			
			var current = origin;
			elem = elem.toLowerCase();
			
			while (current.tagName.toLowerCase() !== 'body' && current.tagName.toLowerCase() !== elem) {
				current = current.parentNode;
			}
            
            if (current.tagName.toLowerCase() === 'body') { return false; }
			return current;

        };

        /**
        * @name closestClass
        * @desc Walks up the DOM and returns the closest parent element of supplied class
        * @attr origin (HTMLElement) - Start element in DOM
        * @attr className (string) - Classname to look for
        */
        var closestClass = function(origin, _className) {
			
			var current = origin;
			var className = _className.toLowerCase();
			
			while (current.tagName.toLowerCase() !== 'body' && !_hasClass(current, className) ) {
				current = current.parentNode;
			}
            
            if (current.tagName.toLowerCase() === 'body') { return false; }
			return current;

        };
        
        
        /**
        * @name _hasClass
        * @desc Checks if element has class, returns true if so
        * @attr el (HTMLelement) - Element to check
        * @attr className (string) - Class to look for
        */
        var _hasClass = function( el, className ) {
            if (el.classList) {
                return el.classList.contains(className);
            } else {
                return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
            }
        };
        
        
        /**
        * @name getQueryVariable
        * @desc Checks URL for query variable
        * @attr variable (string) - var to check
        * @returns value (string), false if none found
        */
        var getQueryVariable = function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');
            
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if ( pair[0] === variable ){ return pair[1]; }
            }
            return(false);
        };

        //////////////////

        var module = {
			closest: closest,
            closestClass: closestClass,
            getQueryVariable: getQueryVariable
        };

        return module;
    })();

  
})(window, document);