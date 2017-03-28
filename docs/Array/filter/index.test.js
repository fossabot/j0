'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

	function forEach(iterable, fn, thisArg) {
		var index = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				if (fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function filter(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function (value, index, iterable2) {
			if (fn.call(thisArg, value, index, iterable2)) {
				push(result, value);
			}
		});
		return result;
	}

	describe('Array/filter', function () {

		it('should filter an array', function () {
			function fn(x) {
				return x % 2;
			}
			var array = [1, 2, 3, 4, 5];
			var actual = filter(array, fn);
			var expected = [1, 3, 5];
			assert.deepEqual(actual, expected);
		});

		it('should filter an array-like object', function () {
			function fn(x) {
				return x % 2;
			}
			var array = {
				0: 1,
				1: 2,
				2: 3,
				3: 4,
				4: 5,
				length: 5
			};
			var actual = filter(array, fn);
			var expected = [1, 3, 5];
			assert.deepEqual(actual, expected);
		});

		it('should filter an iterable', function () {
			function fn(x) {
				return x % 2;
			}
			var count = 0;
			var array = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 5 < count
					};
				}
			};
			var actual = filter(array, fn);
			var expected = [1, 3, 5];
			assert.deepEqual(actual, expected);
		});
	});
});