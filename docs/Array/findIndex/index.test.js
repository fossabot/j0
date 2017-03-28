'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

	function forEach(iterable, fn, thisArg) {
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

	function getArguments() {
		return arguments;
	}

	describe('Array/findIndex', function () {

		it('should find an index an item', function () {
			function matcher(x) {
				return x === 3;
			}
			var actual = find([0, 1, 2, 3], matcher);
			var expected = 3;
			assert.equal(actual, expected);
		});

		it('should find an index the first truthy item', function () {
			var actual = find([0, false, null, 1]);
			var expected = 3;
			assert.equal(actual, expected);
		});

		it('should find an index an item from arguments', function () {
			function matcher(x) {
				return x === 3;
			}
			var actual = find(getArguments(0, 1, 2, 3), matcher);
			var expected = 3;
			assert.equal(actual, expected);
		});

		it('should find an index an item from iterable', function () {
			var count = 0;
			var iterator = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 20 < count
					};
				}
			};
			function matcher(x) {
				return 10 <= x;
			}
			var actual = find(iterator, matcher);
			var expected = 9;
			assert.equal(actual, expected);
		});

		it('should find an index a character from a string', function () {
			function matcher(x) {
				return x === 'b';
			}
			var actual = find('abc', matcher);
			var expected = 1;
			assert.equal(actual, expected);
		});

		it('should call matcher in a specified context', function () {
			function matcher(x) {
				this.sum += x;
				return 4 < x;
			}
			var context = { sum: 0 };
			var actual = find([0, 1, 2, 3, 4, 5, 6], matcher, context);
			var expected = 5;
			assert.equal(actual, expected);
			assert.deepEqual(context, { sum: 15 });
		});
	});
});
