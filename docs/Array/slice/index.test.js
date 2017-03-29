'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isFunction(x) {
		return typeof x === 'function';
	}

	function forEach(iterable, fn, thisArg) {
		var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var length = iterable.length;

		var index = void 0;
		if (0 <= length) {
			for (index = fromIndex; index < length; index += 1) {
				if (fn.call(thisArg, iterable[index], index, iterable)) {
					return;
				}
			}
		} else if (isFunction(iterable.next)) {
			index = 0;
			while (1) {
				var _iterable$next = iterable.next(),
				    value = _iterable$next.value,
				    done = _iterable$next.done;

				if (done || fromIndex <= index && fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
			}
		} else {
			index = fromIndex;
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
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function noop(x) {
		return x;
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function (value, index) {
			push(result, fn.call(thisArg, value, index, iterable));
		});
		return result;
	}

	function slice(iterable, start, end) {
		return map(iterable).slice(start, end);
	}

	describe('Array/slice', function () {

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
});
