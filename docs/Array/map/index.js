(function(){
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

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
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

describe('Array/map', function () {

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
}())
