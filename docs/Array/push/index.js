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

console.log(Object, join);
var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
}

describe('Array/push', function () {

	it('should append an item to an array', function () {
		var item = 3;
		var array = [0, 1, 2];
		var expected = [0, 1, 2, 3];
		push(array, item);
		assert.deepEqual(array, expected);
	});

	it('should append 3 items to an array', function () {
		var items = [3, 4, 5];
		var array = [0, 1, 2];
		var expected = [0, 1, 2, 3, 4, 5];
		push.apply(undefined, [array].concat(items));
		assert.deepEqual(array, expected);
	});

	it('should append an item to an array-like object', function () {
		var item = 3;
		var array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push(array, item);
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		});
	});

	it('should append 3 items to an array-like object', function () {
		var items = [3, 4, 5];
		var array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push.apply(undefined, [array].concat(items));
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			length: 6
		});
	});
});
}())
