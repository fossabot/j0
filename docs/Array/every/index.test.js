'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function every(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		return from(iterable).every(fn, thisArg);
	}

	it('should return true if items are truthy', function () {
		assert.equal(every([-1, 1, [], {}]), true);
	});

	it('should return false if the array have falthy value', function () {
		assert.equal(every([-1, 1, [], {}, 0]), false);
	});

	it('should use given functions', function () {
		function fn(x) {
			return -3 < x && x < 3;
		}
		assert.equal(every([-2, -1, 0, 1, 2], fn), true);
	});

	it('should use given functions', function () {
		function fn(x) {
			return -3 < x && x < 3;
		}
		assert.equal(every([-2, -1, 0, 1, 2], fn), true);
	});

	it('should stop iteration at failure', function () {
		var consumed = [];
		function fn(x) {
			consumed[consumed.length] = x;
			return x < 3;
		}
		assert.equal(every([0, 1, 2, 3, 4, 5], fn), false);
		assert.deepEqual(consumed, [0, 1, 2, 3]);
	});
});
