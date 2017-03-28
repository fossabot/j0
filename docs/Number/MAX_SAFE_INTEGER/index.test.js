'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var MAX_SAFE_INTEGER = 9007199254740991;

	describe('Number/MAX_SAFE_INTEGER', function () {

		it('should evaluate to true', function () {
			assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
		});
	});
});
