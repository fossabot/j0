'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isFunction(x) {
		return typeof x === 'function';
	}

	function forEach(iterable, fn, thisArg) {
		var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var length = iterable.length;

		var index = void 0;
		if (0 <= length) {
			for (index = fromIndex; index < length; index += 1) {
				if (fn.call(thisArg, iterable[index], index, iterable)) {
					return;
				}
			}
		} else if (isFunction(iterable.next)) {
			index = 0;
			while (1) {
				var _iterable$next = iterable.next(),
				    value = _iterable$next.value,
				    done = _iterable$next.done;

				if (done || fromIndex <= index && fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
			}
		} else {
			index = fromIndex;
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
});
