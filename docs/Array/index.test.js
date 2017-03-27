'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function every(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		return from(iterable).every(fn, thisArg);
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

	function isFunction(x) {
		return typeof x === 'function';
	}

	function getMatcher(ref) {
		return function (value) {
			return ref === value;
		};
	}

	function find(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = void 0;
		if (!isFunction(fn)) {
			fn = getMatcher(fn);
		}
		forEach(iterable, function (item, index) {
			if (fn.call(thisArg, item, index, iterable)) {
				result = item;
				return true;
			}
		});
		return result;
	}

	function getArguments() {
		return arguments;
	}

	describe('Array/find', function () {

		it('should find an item', function () {
			function matcher(x) {
				return x === 3;
			}
			var actual = find([0, 1, 2, 3], matcher);
			var expected = 3;
			assert.equal(actual, expected);
		});

		it('should find the first truthy item', function () {
			var actual = find([0, false, null, 1]);
			var expected = 1;
			assert.equal(actual, expected);
		});

		it('should find an item from arguments', function () {
			function matcher(x) {
				return x === 3;
			}
			var actual = find(getArguments(0, 1, 2, 3), matcher);
			var expected = 3;
			assert.equal(actual, expected);
		});

		it('should find an item from iterable', function () {
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
			var expected = 10;
			assert.equal(actual, expected);
		});

		it('should find a character from a string', function () {
			function matcher(x) {
				return x === 'b';
			}
			var actual = find('abc', matcher);
			var expected = 'b';
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

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	describe('Array/forEach', function () {

		it('should iterate over an array', function () {
			var array = [1, 2, 3];
			forEach(array, function (value, index, arr) {
				assert.deepEqual([value, arr], [array[index], arr]);
			});
		});

		it('should iterate over an array-like', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			forEach(array, function (value, index, arr) {
				assert.deepEqual([value, arr], [array[index], arr]);
			});
		});

		it('should iterate over an iterable', function () {
			var count = 0;
			var iterable = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
			var results = [];
			forEach(iterable, function (value, index, arr) {
				push(results, [value, index, arr]);
			});
			assert.deepEqual(results, [[1, 0, iterable], [2, 1, iterable], [3, 2, iterable], [4, 3, iterable]]);
		});

		it('should iterate over a string', function () {
			var text = 'abcd';
			var results = [];
			forEach(text, function (value, index, arr) {
				push(results, [value, index, arr]);
			});
			assert.deepEqual(results, [['a', 0, text], ['b', 1, text], ['c', 2, text], ['d', 3, text]]);
		});

		it('should call fn in a specified context', function () {
			function fn(value) {
				this.sum += value;
			}
			var context = { sum: 0 };
			forEach([0, 1, 2, 3, 4, 5], fn, context);
			assert.deepEqual(context, { sum: 15 });
		});
	});

	var isArray = Array.isArray;

	function createArrayFromArguments() {
		return Array.from(arguments);
	}

	describe('Array/from', function () {

		it('should create a new instance of array from arguments', function () {
			var result = createArrayFromArguments(1, 2, 3);
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new instance of array from an array-like object', function () {
			var result = Array.from({
				0: 1,
				1: 2,
				2: 3,
				length: 3
			});
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});
	});

	function includes(iterable, searchElement, fromIndex) {
		return Array.from(iterable).includes(searchElement, fromIndex);
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
						done: 4 < count
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

	describe('Array/isArray', function () {

		it('should return false if the argument is undefined', function () {
			assert.equal(isArray(), false);
		});

		it('should return false if the argument is null', function () {
			assert.equal(isArray(null), false);
		});

		it('should return false if the argument is NaN', function () {
			assert.equal(isArray(NaN), false);
		});

		it('should return false if the argument is a number', function () {
			assert.equal(isArray(123), false);
		});

		it('should return false if the argument is a string', function () {
			assert.equal(isArray('xyz'), false);
		});

		it('should return false if the argument is an object', function () {
			assert.equal(isArray({}), false);
		});

		it('should return true if the argument is an array', function () {
			assert.equal(isArray([]), true);
		});

		it('should return false if the argument is a function', function () {
			assert.equal(isArray(function () {}), false);
		});
	});

	function join(iterable) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

		return from(iterable).join(separator);
	}

	describe('Array/join', function () {

		it('should join items of an array', function () {
			var array = [1, 2, 3];
			var expected = '1,2,3';
			assert.equal(join(array), expected);
		});

		it('should join items of an array with specified separator', function () {
			var array = [1, 2, 3];
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of an array-like object with specified separator', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of a string with specified separator', function () {
			var array = '123';
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});

		it('should join items of an iterable with specified separator', function () {
			var count = 0;
			var array = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 3 < count
					};
				}
			};
			var expected = '1--2--3';
			assert.equal(join(array, '--'), expected);
		});
	});

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function () {
			for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				args[_key2] = arguments[_key2];
			}

			push(result, fn.call.apply(fn, [thisArg].concat(args)));
		});
		return result;
	}

	describe('Array/map', function () {

		it('should iterate over an array', function () {
			var actual = map([0, 1, 2, 3], function (x) {
				return x * 2;
			});
			var expected = [0, 2, 4, 6];
			assert.deepEqual(actual, expected);
		});

		it('should iterate over an array-like', function () {
			var actual = map({
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			}, function (x) {
				return x * 2;
			});
			var expected = [0, 2, 4, 6];
			assert.deepEqual(actual, expected);
		});

		it('should iterate over a string', function () {
			var actual = map('xyz', function (x) {
				return x + x;
			});
			var expected = ['xx', 'yy', 'zz'];
			assert.deepEqual(actual, expected);
		});

		it('should iterate over an iterable', function () {
			var counter = 0;
			var iterable = {
				next: function next() {
					counter += 1;
					return {
						value: counter,
						done: 4 < counter
					};
				}
			};
			var actual = map(iterable, function (x) {
				return x * 2;
			});
			var expected = [2, 4, 6, 8];
			assert.deepEqual(actual, expected);
		});

		it('should call fn in a specified context', function () {
			function fn(value) {
				this.sum += value;
				return this.sum;
			}
			var context = { sum: 0 };
			var result = map([0, 1, 2, 3, 4, 5], fn, context);
			var expected = [0, 1, 3, 6, 10, 15];
			assert.deepEqual(result, expected);
		});
	});

	describe('Array/from', function () {

		it('should create an array', function () {
			var actual = Array.of(1, 2, 3);
			var expected = [1, 2, 3];
			assert.deepEqual(actual, expected);
		});
	});

	describe('Array/push', function () {

		it('should append an item to an array', function () {
			var item = 3;
			var array = [0, 1, 2];
			var expected = [0, 1, 2, 3];
			push(array, item);
			assert.deepEqual(array, expected);
		});

		it('should append 3 items to an array', function () {
			var items = [3, 4, 5];
			var array = [0, 1, 2];
			var expected = [0, 1, 2, 3, 4, 5];
			push.apply(undefined, [array].concat(items));
			assert.deepEqual(array, expected);
		});

		it('should append an item to an array-like object', function () {
			var item = 3;
			var array = {
				0: 0,
				1: 1,
				2: 2,
				length: 3
			};
			push(array, item);
			assert.deepEqual(array, {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			});
		});

		it('should append 3 items to an array-like object', function () {
			var items = [3, 4, 5];
			var array = {
				0: 0,
				1: 1,
				2: 2,
				length: 3
			};
			push.apply(undefined, [array].concat(items));
			assert.deepEqual(array, {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				length: 6
			});
		});
	});

	function reduce(iterable, fn) {
		var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
		var thisArg = arguments[3];

		var result = initialValue;
		var index = 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var item = _step2.value;

				result = fn.call(thisArg, result, item, index, iterable);
				index += 1;
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		return result;
	}

	describe('Array/reduce', function () {

		it('should iterate over an array', function () {
			var array = [1, 2, 3];
			var result = [];
			reduce(array, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, array);
				return memo;
			}, result);
			assert.deepEqual(result, array);
		});

		it('should iterate over an array-like', function () {
			var array = {
				0: 1,
				1: 2,
				2: 3,
				length: 3
			};
			var result = [];
			var expected = [1, 2, 3];
			reduce(array, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, array);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should iterate over an iterable', function () {
			var count = 0;
			var iterable = {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
			var expected = [1, 2, 3, 4];
			var result = [];
			reduce(iterable, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, iterable);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should iterate over a string', function () {
			var text = 'abcd';
			var expected = ['a', 'b', 'c', 'd'];
			var result = [];
			reduce(text, function (memo, value, index, arr) {
				memo[index] = value;
				assert.equal(arr, text);
				return memo;
			}, result);
			assert.deepEqual(result, expected);
		});

		it('should call fn in a specified context', function () {
			var array = [1, 2, 3];
			var context = { sum: 0 };
			var result = [];
			var expected = [2, 5, 9];
			function fn(memo, value, index, arr) {
				this.sum += value;
				memo[index] = value + this.sum;
				assert.equal(arr, array);
				return memo;
			}
			reduce(array, fn, result, context);
			assert.deepEqual(context, { sum: 6 });
			assert.deepEqual(result, expected);
		});
	});

	function slice(iterable, start, end) {
		return from(iterable).slice(start, end);
	}

	describe('Array/slice', function () {

		it('should copy an array', function () {
			var array = [1, 2, 3, 4, 5];
			var actual = slice(array);
			var expected = [1, 2, 3, 4, 5];
			assert.deepEqual(actual, expected);
		});

		it('should slice an array', function () {
			var array = [1, 2, 3, 4, 5];
			var actual = slice(array, 3);
			var expected = [4, 5];
			assert.deepEqual(actual, expected);
		});

		it('should create an empty array from an array', function () {
			var array = [1, 2, 3, 4, 5];
			var actual = slice(array, 0, 0);
			var expected = [];
			assert.deepEqual(actual, expected);
		});

		it('should slice from end of an array', function () {
			var array = [1, 2, 3, 4, 5];
			var actual = slice(array, -2);
			var expected = [4, 5];
			assert.deepEqual(actual, expected);
		});

		it('should create a new array from arguments', function () {
			var args = function () {
				return arguments;
			}(1, 2, 3, 4, 5);
			var actual = slice(args);
			var expected = [1, 2, 3, 4, 5];
			assert.deepEqual(actual, expected);
		});
	});
});
