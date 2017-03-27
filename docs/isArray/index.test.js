'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var isArray$1 = Array.isArray;

	describe('isArray', function () {

		it('should return false if the argument is a number', function () {
			assert.equal(isArray$1(0), false);
		});

		it('should return true if the argument is an array', function () {
			assert.equal(isArray$1([]), true);
		});
	});
});
