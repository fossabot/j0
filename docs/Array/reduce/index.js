'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var iteratorKey = Symbol.iterator;

	function isFunction(x) {
		return typeof x === 'function';
	}

	var MAX_SAFE_INTEGER = 9007199254740991;

	function forEach(iterable, fn, thisArg) {
		var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var length = iterable.length;

		var iterator = iterable[iteratorKey] ? iterable[iteratorKey]() : iterable;
		if (0 <= length) {
			for (var index = fromIndex; index < length; index += 1) {
				if (fn.call(thisArg, iterable[index], index, iterable)) {
					return;
				}
			}
		} else if (isFunction(iterator.next)) {
			var _index = 0;
			while (_index < MAX_SAFE_INTEGER) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done || fromIndex <= _index && fn.call(thisArg, value, _index, iterable)) {
					return;
				}
				_index += 1;
			}
		} else {
			var _index2 = fromIndex;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					if (fn.call(thisArg, value, _index2, iterable)) {
						return;
					}
					_index2 += 1;
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
	}

	function reduce(iterable, fn) {
		var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var thisArg = arguments[3];

		var result = initialValue;
		forEach(iterable, function (item, index) {
			result = fn.call(thisArg, result, item, index, iterable);
		});
		return result;
	}

	describe('Array/reduce', function () {

		it('should iterate over an array', function () {
			var array = [1, 2, 3];
			var result = [];
			reduce(array, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, array);
				return memo;
			}, result);
			assert.deepEqual(result, array);
		});

		it('should iterate over an array-like', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			var result = [];
			var expected = [1, 2, 3];
			reduce(array, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, array);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should iterate over an iterable', function () {
			var count = 0;
			var iterable = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
			var expected = [1, 2, 3, 4];
			var result = [];
			reduce(iterable, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, iterable);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should iterate over a string', function () {
			var text = 'abcd';
			var expected = ['a', 'b', 'c', 'd'];
			var result = [];
			reduce(text, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, text);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should call fn in a specified context', function () {
			var array = [1, 2, 3];
			var context = { sum: 0 };
			var result = [];
			var expected = [2, 5, 9];
			function fn(memo, value, index, arr) {
				this.sum += value;
				memo[index] = value + this.sum;
				assert.equal(arr, array);
				return memo;
			}
			reduce(array, fn, result, context);
			assert.deepEqual(context, { sum: 6 });
			assert.deepEqual(result, expected);
		});
	});
});
