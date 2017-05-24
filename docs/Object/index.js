(function(){
'use strict';

var iteratorSymbol = Symbol.iterator;

function isFunction(x) {
	return typeof x === 'function';
}

var Number = window.Number;

function forEach(iterable, fn, thisArg) {
	var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var length = iterable.length;

	var iterator = iterable[iteratorSymbol] ? iterable[iteratorSymbol]() : iterable;
	if (0 <= length) {
		for (var index = fromIndex; index < length; index += 1) {
			if (fn.call(thisArg, iterable[index], index, iterable)) {
				return;
			}
		}
	} else if (isFunction(iterator.next)) {
		var _index = 0;
		while (_index < Number.MAX_SAFE_INTEGER) {
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

function forEachKey(obj, fn, thisArg) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

function assign(target) {
	for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		sources[_key - 1] = arguments[_key];
	}

	forEach(sources, function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}

describe('Object/assign', function () {
	it('should assign values', function () {
		var target = {
			a: 0,
			b: 0,
			c: 0
		};
		var src1 = { b: 1 };
		var src2 = {
			b: 2,
			c: 3
		};
		var returnValue = assign(target, src1, src2);
		var expected = {
			a: 0,
			b: 2,
			c: 3
		};
		assert.equal(target, returnValue);
		assert.deepEqual(returnValue, expected);
	});
});

var Array = window.Array;

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		args[_key2 - 1] = arguments[_key2];
	}

	return arrayPush.apply(arrayLike, args);
}

describe('Object/forEachKey', function () {

	it('should iterate over an object', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			push(results, args);
		});
		assert.deepEqual(results, [[0, 'a', obj], [1, 'b', obj]]);
	});

	it('should stop iteration if fn returns truthy value', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				args[_key4] = arguments[_key4];
			}

			push(results, args);
			return true;
		});
		assert.deepEqual(results, [[0, 'a', obj]]);
	});

	it('should ignore properties which is not its own', function () {
		var obj = [1, 2];
		var results = [];
		forEachKey(obj, function () {
			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			push(results, args);
		});
		assert.deepEqual(results, [[1, '0', obj], [2, '1', obj]]);
	});
});

var keys = Object.keys;

describe('Object/keys', function () {

	it('should return an array of keys', function () {
		var data = {
			a: 0,
			b: 0,
			c: 0
		};
		var actual = keys(data);
		var expected = ['a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});
});

function toString(o) {
	return Object.prototype.toString.call(o);
}

describe('Object/toString', function () {

	it('should convert [] to [object Array]', function () {
		var value = [];
		var expected = '[object Array]';
		assert.equal(toString(value), expected);
	});
});
}())
