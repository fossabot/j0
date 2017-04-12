'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function repeat(s, length) {
		return s.repeat(length);
	}

	describe('String/repeat', function () {

		it('should repeat the string for specified times', function () {
			var src = '3';
			var count = 10;
			var expected = '3333333333';
			assert.equal(repeat(src, count), expected);
		});
	});
});
