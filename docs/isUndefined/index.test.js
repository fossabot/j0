'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	describe('isUndefined', function () {

		it('should return true if the arguments are []', function () {
			assert.equal(isUndefined(), true);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isUndefined(null), false);
		});

		it('should return false if the arguments are [NaN]', function () {
			assert.equal(isUndefined(NaN), false);
		});

		it('should return false if the arguments are [123]', function () {
			assert.equal(isUndefined(123), false);
		});

		it('should return false if the arguments are [\'abc\']', function () {
			assert.equal(isUndefined('abc'), false);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isUndefined({}), false);
		});

		it('should return false if the arguments are [[]]', function () {
			assert.equal(isUndefined([]), false);
		});

		it('should return false if the arguments are [function () {}]', function () {
			assert.equal(isUndefined(function () {}), false);
		});
	});
});
