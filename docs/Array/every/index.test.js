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