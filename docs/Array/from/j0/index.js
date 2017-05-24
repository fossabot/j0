(function(){
'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isUndefined(x) {
	return typeof x === 'undefined';
}

function arrayFrom(iterable) {
	var result = [];
	if (isUndefined(iterable.length)) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				result.push(item);
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
	} else {
		for (var i = 0, length = iterable.length; i < length; i++) {
			result[i] = iterable[i];
		}
	}
	return result;
}

function test(arrayFrom) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.from';


	describe(name, function () {

		it('should create a new array from an array-like object', function () {
			var result = arrayFrom({
				0: 1,
				1: 2,
				2: 3,
				length: 3
			});
			assert.equal(Array.isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new array from an iterable object', function () {
			var iterable = _defineProperty({}, Symbol.iterator, function () {
				var count = 0;
				return {
					next: function next() {
						count += 1;
						return {
							value: count,
							done: 5 <= count
						};
					}
				};
			});
			var result = arrayFrom(iterable);
			assert.equal(Array.isArray(result), true);
			assert.deepEqual(result, [1, 2, 3, 4]);
		});
	});
}

test(arrayFrom, 'Array.from.j0');
}())
