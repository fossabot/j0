'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var Event = CustomEvent;
	try {
		new Event('G');
	} catch (error) {
		Event = null;
	}
	var CustomEvent$1 = Event;

	describe('CustomEvent', function () {

		it('should be a constructor or null', function () {
			if (CustomEvent$1) {
				assert.doesNotThrow(function () {
					return new CustomEvent$1('G');
				});
			} else {
				assert.equal(CustomEvent$1, null);
			}
		});
	});
});
