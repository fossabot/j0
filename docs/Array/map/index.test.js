'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

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

	function noop(x) {
		return x;
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function () {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			push(result, fn.call.apply(fn, [thisArg].concat(args)));
		});
		return result;
	}

	it('should iterate over an array', function () {
		var actual = map([0, 1, 2, 3], function (x) {
			return x * 2;
		});
		var expected = [0, 2, 4, 6];
		assert.deepEqual(actual, expected);
	});

	it('should iterate over an array-like', function () {
		var actual = map({
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		}, function (x) {
			return x * 2;
		});
		var expected = [0, 2, 4, 6];
		assert.deepEqual(actual, expected);
	});

	it('should iterate over a string', function () {
		var actual = map('xyz', function (x) {
			return x + x;
		});
		var expected = ['xx', 'yy', 'zz'];
		assert.deepEqual(actual, expected);
	});

	it('should iterate over an iterable', function () {
		var counter = 0;
		var iterable = {
			next: function next() {
				counter += 1;
				return {
					value: counter,
					done: 4 < counter
				};
			}
		};
		var actual = map(iterable, function (x) {
			return x * 2;
		});
		var expected = [2, 4, 6, 8];
		assert.deepEqual(actual, expected);
	});

	it('should call fn in a specified context', function () {
		function fn(value) {
			this.sum += value;
			return this.sum;
		}
		var context = { sum: 0 };
		var result = map([0, 1, 2, 3, 4, 5], fn, context);
		var expected = [0, 1, 3, 6, 10, 15];
		assert.deepEqual(result, expected);
	});
});
