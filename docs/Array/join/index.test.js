'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function join(iterable) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

		return from(iterable).join(separator);
	}

	describe('Array/join', function () {

		it('should join items of an array', function () {
			var array = [1, 2, 3];
			var expected = '1,2,3';
			assert.equal(join(array), expected);
		});

		it('should join items of an array with specified separator', function () {
			var array = [1, 2, 3];
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of an array-like object with specified separator', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of a string with specified separator', function () {
			var array = '123';
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of an iterable with specified separator', function () {
			var count = 0;
			var array = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 3 < count
					};
				}
			};
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});
	});
});
