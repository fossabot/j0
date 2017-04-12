'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var stringify = JSON.stringify;

	describe('JSON/stringify', function () {

		it('should convert a string', function () {
			var value = 'abc';
			var expected = '"abc"';
			assert.equal(stringify(value), expected);
		});

		it('should convert a number', function () {
			var value = 123;
			var expected = '123';
			assert.equal(stringify(value), expected);
		});
	});
});
