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

	function join(iterable) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

		return map(iterable).join(separator);
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
