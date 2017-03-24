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

	it('should iterate over an array', function () {
		var array = [1, 2, 3];
		forEach(array, function (value, index, arr) {
			assert.deepEqual([value, arr], [array[index], arr]);
		});
	});

	it('should iterate over an array-like', function () {
		var array = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		forEach(array, function (value, index, arr) {
			assert.deepEqual([value, arr], [array[index], arr]);
		});
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
		var results = [];
		forEach(iterable, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [[1, 0, iterable], [2, 1, iterable], [3, 2, iterable], [4, 3, iterable]]);
	});

	it('should iterate over a string', function () {
		var text = 'abcd';
		var results = [];
		forEach(text, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [['a', 0, text], ['b', 1, text], ['c', 2, text], ['d', 3, text]]);
	});

	it('should call fn in a specified context', function () {
		function fn(value) {
			this.sum += value;
		}
		var context = { sum: 0 };
		forEach([0, 1, 2, 3, 4, 5], fn, context);
		assert.deepEqual(context, { sum: 15 });
	});
});
