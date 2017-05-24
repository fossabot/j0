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

/* global window */

var _window = window,
    Boolean = _window.Boolean;


function noop(x) {
	return x;
}

function every(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = true;
	forEach(iterable, function (value, index) {
		result = fn.call(thisArg, value, index, iterable);
		return !result;
	});
	return Boolean(result);
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
}())
