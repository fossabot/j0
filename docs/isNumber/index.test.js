'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isNumber(x) {
		return typeof x === 'number';
	}

	describe('isNumber', function () {

		it('should return false if the arguments are []', function () {
			assert.equal(isNumber(), false);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isNumber(null), false);
		});

		it('should return true if the arguments are [NaN]', function () {
			assert.equal(isNumber(NaN), true);
		});

		it('should return true if the arguments are [123]', function () {
			assert.equal(isNumber(123), true);
		});

		it('should return false if the arguments are [\'abc\']', function () {
			assert.equal(isNumber('abc'), false);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isNumber({}), false);
		});

		it('should return false if the arguments are [[]]', function () {
			assert.equal(isNumber([]), false);
		});

		it('should return false if the arguments are [function () {}]', function () {
			assert.equal(isNumber(function () {}), false);
		});
	});
});
