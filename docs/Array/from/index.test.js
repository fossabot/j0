'use strict';

function noop(x) {
	return x;
}

function every(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : iterable;

	var index = 0;
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var value = _step.value;

			if (!fn.call(thisArg, value, index, iterable)) {
				return false;
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

	return true;
}

function isUndefined(x) {
	return typeof x === 'undefined';
}

var isUndefined$1 = function isUndefined$1() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return every(args, isUndefined);
};

function isFunction(x) {
	return typeof x === 'function';
}

var isFunction$1 = function isFunction$1() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	return every(args, isFunction);
};

function clamp(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref = [H, L];
		L = _ref[0];
		H = _ref[1];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

var MAX_SAFE_INTEGER = 9007199254740991;

function toLength(value) {
	var len = parseInt(value, 10);
	return clamp(len, 0, MAX_SAFE_INTEGER);
}

function from(arrayLike, mapFn, thisArg) {
	if (arrayLike === null) {
		throw new TypeError('Array.from: requires an array-like object - not null or undefined');
	}
	if (!(isUndefined$1(mapFn) || isFunction$1(mapFn))) {
		throw new TypeError('Array.from: when provided, the second argument must be a function');
	}
	var C = this;
	var items = Object(arrayLike);
	var length = toLength(items.length);
	var A = isFunction$1(C) ? Object(new C(length)) : [];
	for (var k = 0; k < length; k += 1) {
		var value = items[k];
		A[k] = mapFn ? mapFn.call(thisArg, value, k) : value;
	}
	A.length = length;
	return A;
}

var toString = Object.prototype.toString;

function isArray(x) {
	return toString.call(x) === '[object Array]';
}

function fromArguments() {
	return from(arguments);
}

it('should create a new instance of array from arguments', function () {
	var result = fromArguments(1, 2, 3);
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});

it('should create a new instance of array from an array-like object', function () {
	var result = from({ 0: 1, 1: 2, 2: 3, length: 3 });
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});