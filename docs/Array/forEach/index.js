(function(){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
				var _value = _step.value;

				if (fn.call(thisArg, _value, _index2, iterable)) {
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

describe('Array/forEach', function () {

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
		var iterable = _defineProperty({}, iteratorKey, function () {
			var count = 0;
			return {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
		});
		var results = [];
		forEach(iterable, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [[1, 0, iterable], [2, 1, iterable], [3, 2, iterable], [4, 3, iterable]]);
	});

	it('should iterate over an iterator', function () {
		var count = 0;
		var iterator = {
			next: function next() {
				count += 1;
				return {
					value: count,
					done: 4 < count
				};
			}
		};
		var results = [];
		forEach(iterator, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [[1, 0, iterator], [2, 1, iterator], [3, 2, iterator], [4, 3, iterator]]);
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
}())
