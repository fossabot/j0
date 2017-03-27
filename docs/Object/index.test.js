'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	describe('Object/polyfill', function () {

		it('should make array-like iterable', function () {
			var arrayLike = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			var expected = [1, 2, 3];
			assert.deepEqual(Array.from(arrayLike), expected);
		});
	});

	function toString(o) {
		return Object.prototype.toString.call(o);
	}

	describe('Object/toString', function () {

		it('should convert null to [object Null]', function () {
			var value = null;
			var expected = '[object Null]';
			assert.equal(toString(value), expected);
		});

		it('should convert undefined to [object Undefined]', function () {
			var expected = '[object Undefined]';
			assert.equal(toString(), expected);
		});
	});
});
