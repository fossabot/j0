'use strict';

function forEach(iterable, fn) {
	var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : iterable;

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

it('should iterate an array', function () {
	var array = [1, 2, 3];
	forEach(array, function (value, index, arr) {
		assert.deepEqual([value, arr], [array[index], arr]);
	});
});