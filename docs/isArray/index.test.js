'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var isArray$1 = Array.isArray;

	describe('isArray', function () {

		it('should return false if the arguments are []', function () {
			assert.equal(isArray$1(), false);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isArray$1(null), false);
		});

		it('should return false if the arguments are [NaN]', function () {
			assert.equal(isArray$1(NaN), false);
		});

		it('should return false if the arguments are [123]', function () {
			assert.equal(isArray$1(123), false);
		});

		it('should return false if the arguments are [\'abc\']', function () {
			assert.equal(isArray$1('abc'), false);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isArray$1({}), false);
		});

		it('should return true if the arguments are [[]]', function () {
			assert.equal(isArray$1([]), true);
		});

		it('should return false if the arguments are [function () {}]', function () {
			assert.equal(isArray$1(function () {}), false);
		});
	});
});
