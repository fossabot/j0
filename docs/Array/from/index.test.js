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

	var isArray = Array.isArray;

	function createArrayFromArguments() {
		return map(arguments);
	}

	describe('Array/from', function () {

		it('should create a new array from arguments', function () {
			var result = createArrayFromArguments(1, 2, 3);
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new array from an array-like object', function () {
			var result = map({
				0: 1,
				1: 2,
				2: 3,
				length: 3
			});
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new array from an iterable object', function () {
			var count = 0;
			var iterator = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 5 <= count
					};
				}
			};
			var result = map(iterator);
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3, 4]);
		});
	});
});
