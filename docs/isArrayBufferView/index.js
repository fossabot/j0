(function(){
'use strict';

function noop(x) {
	return x;
}

var iteratorSymbol = Symbol.iterator;

function isFunction(x) {
	return typeof x === 'function';
}

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

function find(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = -1;
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var Uint8Array$1 = window.Uint8Array;

var Uint8ClampedArray$1 = window.Uint8ClampedArray;

var Uint16Array$1 = window.Uint16Array;

var Uint32Array$1 = window.Uint32Array;

var Int8Array$1 = window.Int8Array;

var Int16Array$1 = window.Int16Array;

var Int32Array$1 = window.Int32Array;

var Float32Array$1 = window.Float32Array;

var Float64Array$1 = window.Float64Array;

var viewClasses = [Uint8Array$1, Uint8ClampedArray$1, Uint16Array$1, Uint32Array$1, Int8Array$1, Int16Array$1, Int32Array$1, Float32Array$1, Float64Array$1];
function isArrayBufferView(obj) {
	return 0 <= find(viewClasses, function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

describe('isArrayBufferView', function () {

	it('should return true if the argument is Int8Array', function () {
		assert.equal(isArrayBufferView(new Int8Array(1)), true);
	});

	it('should return true if the argument is Int16Array', function () {
		assert.equal(isArrayBufferView(new Int16Array(1)), true);
	});

	it('should return true if the argument is Int32Array', function () {
		assert.equal(isArrayBufferView(new Int32Array(1)), true);
	});

	it('should return true if the argument is Uint8ClampedArray', function () {
		assert.equal(isArrayBufferView(new Uint8ClampedArray(1)), true);
	});

	it('should return true if the argument is Uint8Array', function () {
		assert.equal(isArrayBufferView(new Uint8Array(1)), true);
	});

	it('should return true if the argument is Uint16Array', function () {
		assert.equal(isArrayBufferView(new Uint16Array(1)), true);
	});

	it('should return true if the argument is Uint32Array', function () {
		assert.equal(isArrayBufferView(new Uint32Array(1)), true);
	});

	it('should return true if the argument is Float32Array', function () {
		assert.equal(isArrayBufferView(new Float32Array(1)), true);
	});

	it('should return true if the argument is Float64Array', function () {
		assert.equal(isArrayBufferView(new Float64Array(1)), true);
	});

	it('should return false if the argument is Object', function () {
		assert.equal(isArrayBufferView({}), false);
	});

	it('should return false if the argument is Number', function () {
		assert.equal(isArrayBufferView(1), false);
	});
});
}())
