'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isString(x) {
		return typeof x === 'string';
	}

	describe('isString', function () {

		it('should return false if the arguments are []', function () {
			assert.equal(isString(), false);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isString(null), false);
		});

		it('should return false if the arguments are [NaN]', function () {
			assert.equal(isString(NaN), false);
		});

		it('should return false if the arguments are [123]', function () {
			assert.equal(isString(123), false);
		});

		it('should return true if the arguments are [\'abc\']', function () {
			assert.equal(isString('abc'), true);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isString({}), false);
		});

		it('should return false if the arguments are [[]]', function () {
			assert.equal(isString([]), false);
		});

		it('should return false if the arguments are [function () {}]', function () {
			assert.equal(isString(function () {}), false);
		});
	});
});
