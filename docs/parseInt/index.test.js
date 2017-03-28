'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var dec = 10;
	var hex = 16;

	describe('parseInt', function () {

		it('should convert a dec to an integer', function () {
			var value = '100';
			var expected = 100;
			assert.equal(parseInt(value, dec), expected);
		});

		it('should convert a hex to an integer', function () {
			var value = '100';
			var expected = 256;
			assert.equal(parseInt(value, hex), expected);
		});
	});
});
