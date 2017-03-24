'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function slice(iterable, start, end) {
		return from(iterable).slice(start, end);
	}

	it('should copy an array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = slice(array);
		var expected = [1, 2, 3, 4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should slice an array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = slice(array, 3);
		var expected = [4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should create an empty array from an array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = slice(array, 0, 0);
		var expected = [];
		assert.deepEqual(actual, expected);
	});

	it('should slice from end of an array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = slice(array, -2);
		var expected = [4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should create a new array from arguments', function () {
		var args = function () {
			return arguments;
		}(1, 2, 3, 4, 5);
		var actual = slice(args);
		var expected = [1, 2, 3, 4, 5];
		assert.deepEqual(actual, expected);
	});
});
