'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

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

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function (value, index) {
			push(result, fn.call(thisArg, value, index, iterable));
		});
		return result;
	}

	function every(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		return map(iterable).every(fn, thisArg);
	}

	describe('Array/every', function () {

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
});
