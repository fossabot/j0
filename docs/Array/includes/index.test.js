'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function includes(iterable, searchElement, fromIndex) {
		return Array.from(iterable).includes(searchElement, fromIndex);
	}

	describe('Array/includes', function () {

		it('should find an item', function () {
			var array = [0, 1, 2, 3];
			assert.equal(includes(array, 1), true);
			assert.equal(includes(array, 4), false);
		});

		it('should find an item from array-like', function () {
			var arrayLike = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			};
			assert.equal(includes(arrayLike, 1), true);
			assert.equal(includes(arrayLike, 4), false);
		});

		it('should find an item from iterable', function () {
			var count = 0;
			var iterator = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
			assert.equal(includes(iterator, 1), true);
			assert.equal(includes(iterator, 4), false);
		});

		it('should find a character from a string', function () {
			var string = 'abcde';
			assert.equal(includes(string, 'c'), true);
			assert.equal(includes(string, 'f'), false);
		});
	});
});
