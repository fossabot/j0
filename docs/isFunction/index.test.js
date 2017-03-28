'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isFunction(x) {
		return typeof x === 'function';
	}

	describe('isFunction', function () {

		it('should return false if the arguments are []', function () {
			assert.equal(isFunction(), false);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isFunction(null), false);
		});

		it('should return false if the arguments are [NaN]', function () {
			assert.equal(isFunction(NaN), false);
		});

		it('should return false if the arguments are [123]', function () {
			assert.equal(isFunction(123), false);
		});

		it('should return false if the arguments are [\'abc\']', function () {
			assert.equal(isFunction('abc'), false);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isFunction({}), false);
		});

		it('should return false if the arguments are [[]]', function () {
			assert.equal(isFunction([]), false);
		});

		it('should return true if the arguments are [function () {}]', function () {
			assert.equal(isFunction(function () {}), true);
		});
	});
});
