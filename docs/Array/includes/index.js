(function(){
'use strict';

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

function includes(iterable, searchElement, fromIndex) {
	var result = false;
	forEach(iterable, function (value) {
		result = value === searchElement;
		return result;
	}, null, fromIndex);
	return result;
}

describe('Array/includes', function () {

	it('should find an item', function () {
		var array = [0, 1, 2, 3];
		assert.equal(includes(array, 1), true);
		assert.equal(includes(array, 4), false);
	});

	it('should find an item from array-like', function () {
		var arrayLike = {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		};
		assert.equal(includes(arrayLike, 1), true);
		assert.equal(includes(arrayLike, 4), false);
	});

	it('should find an item from iterable', function () {
		var count = 0;
		var iterator = {
			next: function next() {
				count += 1;
				return {
					value: count,
					done: 4 <= count
				};
			}
		};
		assert.equal(includes(iterator, 1), true);
		assert.equal(includes(iterator, 4), false);
	});

	it('should find a character from a string', function () {
		var string = 'abcde';
		assert.equal(includes(string, 'c'), true);
		assert.equal(includes(string, 'f'), false);
	});
});
}())
