'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	function shift(arrayLike) {
		if (arrayLike.shift) {
			return arrayLike.shift();
		} else if (!isUndefined(arrayLike.length)) {
			var returnValue = arrayLike[0];
			var length = arrayLike.length;

			for (var i = 0; i < length; i += 1) {
				arrayLike[i] = arrayLike[i + 1];
			}
			delete arrayLike[length - 1];
			arrayLike.length = length - 1;
			return returnValue;
		}
		throw new TypeError('The object is not shift-able');
	}

	describe('Array/shift', function () {

		it('should remove the first item of an array', function () {
			var array = [1, 2, 3, 4];
			var expected1 = 1;
			var expected2 = [2, 3, 4];
			assert.equal(shift(array), expected1);
			assert.deepEqual(array, expected2);
		});

		it('should remove the first item of an array-like object', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				3: 4,
				length: 4
			};
			var expected1 = 1;
			var expected2 = {
				0: 2,
				1: 3,
				2: 4,
				length: 3
			};
			assert.equal(shift(array), expected1);
			assert.deepEqual(array, expected2);
		});
	});
});
