(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function generator() {
	var _this = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this[index],
				done: length <= index++
			};
		}
	};
}

describe('Array/@iterator', function () {

	it('should return an iterator', function () {
		var array = [1, 2, 3];
		var iterator = generator.call(array);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next = iterator.next(),
			    value = _iterator$next.value,
			    done = _iterator$next.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, array);
	});
});

function noop(x) {
	return x;
}

var iteratorKey = Symbol.iterator;

function isFunction(x) {
	return typeof x === 'function';
}

var MAX_SAFE_INTEGER = 9007199254740991;

function _forEach(iterable, fn, thisArg) {
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
			var _iterator$next2 = iterator.next(),
			    value = _iterator$next2.value,
			    done = _iterator$next2.done;

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
				var value = _step.value;

				if (fn.call(thisArg, value, _index2, iterable)) {
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

function every(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = true;
	_forEach(iterable, function (value, index) {
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

function push(arrayLike) {
	var _Array$prototype$push;

	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
}

function filter(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = [];
	_forEach(iterable, function (value, index, iterable2) {
		if (fn.call(thisArg, value, index, iterable2)) {
			push(result, value);
		}
	});
	return result;
}

describe('Array/filter', function () {

	it('should filter an iterable', function () {
		function fn(x) {
			return x % 2;
		}
		var iterable = _defineProperty({}, iteratorKey, function () {
			var count = 0;
			return {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 5 < count
					};
				}
			};
		});
		var actual = filter(iterable, fn);
		var expected = [1, 3, 5];
		assert.deepEqual(actual, expected);
	});
});

function find(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = void 0;
	_forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = item;
			return true;
		}
	});
	return result;
}

describe('Array/find', function () {

	it('should find an item from iterable', function () {
		var iterable = _defineProperty({}, iteratorKey, function () {
			var count = 0;
			return {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 20 < count
					};
				}
			};
		});
		function matcher(x) {
			return 10 <= x;
		}
		var actual = find(iterable, matcher);
		var expected = 10;
		assert.equal(actual, expected);
	});
});

function find$2(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = -1;
	_forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

describe('Array/findIndex', function () {

	it('should find an index an item from iterable', function () {
		var iterable = _defineProperty({}, iteratorKey, function () {
			var count = 0;
			return {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 20 < count
					};
				}
			};
		});
		function matcher(x) {
			return 10 <= x;
		}
		var actual = find$2(iterable, matcher);
		var expected = 9;
		assert.equal(actual, expected);
	});
});

describe('Array/forEach', function () {

	it('should iterate over an array', function () {
		var array = [1, 2, 3];
		_forEach(array, function (value, index, arr) {
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
		_forEach(array, function (value, index, arr) {
			assert.deepEqual([value, arr], [array[index], arr]);
		});
	});

	it('should iterate over an iterable', function () {
		var iterable = _defineProperty({}, iteratorKey, function () {
			var count = 0;
			return {
				next: function next() {
					count += 1;
					return {
						value: count,
						done: 4 < count
					};
				}
			};
		});
		var results = [];
		_forEach(iterable, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [[1, 0, iterable], [2, 1, iterable], [3, 2, iterable], [4, 3, iterable]]);
	});

	it('should iterate over an iterator', function () {
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
		var results = [];
		_forEach(iterator, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [[1, 0, iterator], [2, 1, iterator], [3, 2, iterator], [4, 3, iterator]]);
	});

	it('should iterate over a string', function () {
		var text = 'abcd';
		var results = [];
		_forEach(text, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [['a', 0, text], ['b', 1, text], ['c', 2, text], ['d', 3, text]]);
	});

	it('should call fn in a specified context', function () {
		function fn(value) {
			this.sum += value;
		}
		var context = { sum: 0 };
		_forEach([0, 1, 2, 3, 4, 5], fn, context);
		assert.deepEqual(context, { sum: 15 });
	});
});

function map(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = [];
	_forEach(iterable, function (value, index) {
		push(result, fn.call(thisArg, value, index, iterable));
	});
	return result;
}

var isArray = Array.isArray;

describe('Array/from', function () {

	it('should create a new array from an array-like object', function () {
		var result = map({
			0: 1,
			1: 2,
			2: 3,
			length: 3
		});
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3]);
	});

	it('should create a new array from an iterable object', function () {
		var iterable = _defineProperty({}, iteratorKey, function () {
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
		var result = map(iterable);
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3, 4]);
	});

	it('should create a new array from an iterator object', function () {
		var count = 0;
		var iterator = {
			next: function next() {
				count += 1;
				return {
					value: count,
					done: 5 <= count
				};
			}
		};
		var result = map(iterator);
		assert.equal(isArray(result), true);
		assert.deepEqual(result, [1, 2, 3, 4]);
	});
});

function includes(iterable, searchElement, fromIndex) {
	var result = false;
	_forEach(iterable, function (value) {
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

	return map(iterable).join(separator);
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

function last(arrayLike) {
	return arrayLike[arrayLike.length - 1];
}

describe('Array/last', function () {

	it('should return the last item of an array', function () {
		var array = [1, 2, 3];
		assert.equal(last(array), 3);
	});

	it('should return the last item of an array-like object', function () {
		var arrayLike = {
			2: 3,
			length: 3
		};
		assert.equal(last(arrayLike), 3);
	});
});

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

function arrayOf() {
	for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		args[_key2] = arguments[_key2];
	}

	return args;
}

describe('Array/of', function () {

	it('should create an array', function () {
		var actual = arrayOf(1, 2, 3);
		var expected = [1, 2, 3];
		assert.deepEqual(actual, expected);
	});
});

function pop(array) {
	return array.pop();
}

describe('Array/pop', function () {

	it('should return the last item of array', function () {
		var array = [1, 2, 3, 4, 5];
		var actual = pop(array);
		var expected1 = 5;
		var expected2 = [1, 2, 3, 4];
		assert.equal(actual, expected1);
		assert.deepEqual(array, expected2);
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
	_forEach(iterable, function (item, index) {
		result = fn.call(thisArg, result, item, index, iterable);
	});
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

function isUndefined(x) {
	return typeof x === 'undefined';
}

function shift(arrayLike) {
	if (arrayLike.shift) {
		return arrayLike.shift();
	} else if (!isUndefined(arrayLike.length)) {
		var returnValue = arrayLike[0];
		var length = arrayLike.length;

		for (var i = 0; i < length; i += 1) {
			arrayLike[i] = arrayLike[i + 1];
		}
		delete arrayLike[length - 1];
		arrayLike.length = length - 1;
		return returnValue;
	}
	throw new TypeError('The object is not shift-able');
}

describe('Array/shift', function () {

	it('should remove the first item of an array', function () {
		var array = [1, 2, 3, 4];
		var expected1 = 1;
		var expected2 = [2, 3, 4];
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});

	it('should remove the first item of an array-like object', function () {
		var array = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			length: 4
		};
		var expected1 = 1;
		var expected2 = {
			0: 2,
			1: 3,
			2: 4,
			length: 3
		};
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});
});

function slice(iterable, start, end) {
	return map(iterable).slice(start, end);
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

function splice(array) {
	for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		args[_key3 - 1] = arguments[_key3];
	}

	return array.splice.apply(array, args);
}

describe('Array/splice', function () {

	it('should remove items from an array', function () {
		var array = [1, 2, 3, 4, 5];
		splice(array, 1, 2);
		assert.deepEqual(array, [1, 4, 5]);
	});
});

var lastMasks = [0x3f, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;
var baseMask = lastMasks[0];

/* eslint-disable no-bitwise */

function consume(view, index, length) {
	var lastMask = lastMasks[length];
	var charCode = 0;
	var i = 0;
	while (0 < length--) {
		var mask = length === 0 ? lastMask : baseMask;
		var shiftSize = availableBits * i++;
		charCode |= (view[index + length] & mask) << shiftSize;
	}
	return String.fromCharCode(charCode);
}
/* eslint-enable no-bitwise */

function arrayBufferToString(arrayBuffer) {
	var view = new Uint8Array(arrayBuffer);
	var chars = [];
	for (var i = 0; i < view.length; i++) {
		var byte = view[i];
		var length = void 0;
		if (byte < 0x80) {
			length = 1;
		} else if (byte < 0xe0) {
			length = 2;
		} else if (byte < 0xf0) {
			length = 3;
		} else if (byte < 0xf8) {
			length = 4;
		} else if (byte < 0xfc) {
			length = 5;
		} else {
			length = 6;
		}
		push(chars, consume(view, i, length));
		i += length - 1;
	}
	return chars.join('');
}

function read(data, type) {
	var reader = new FileReader();
	var promise = new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
		switch (type) {
			case 'ArrayBuffer':
				reader.readAsArrayBuffer(data);
				break;
			case 'BinaryString':
				reader.readAsBinaryString(data);
				break;
			case 'DataURL':
				reader.readAsDataURL(data);
				break;
			default:
				reader.readAsText(data);
				break;
		}
	});
	promise.reader = reader;
	return promise;
}

function createArrayBuffer(data) {
	return read(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', function () {
		var src = 'hello';
		return createArrayBuffer(src).then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});

	it('should return こんにちは', function () {
		var src = 'こんにちは';
		return createArrayBuffer(src).then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});
});

describe('ArrayBuffer', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new ArrayBuffer(1);
		});
	});
});

describe('Blob', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new Blob(['data']);
		});
	});
});

function isString(x) {
	return typeof x === 'string';
}

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var viewClasses = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
function isArrayBufferView(obj) {
	return 0 <= find$2(viewClasses, function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

function trim(string) {
	return string.trim();
}

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();

	_forEach(trim(body).split('&'), function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    name = _data$split2[0],
			    parts = _data$split2.slice(1);

			name = decodeURIComponent(name.replace(/\+/g, ' '));
			parts = decodeURIComponent(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}

var parse$2 = JSON.parse;

function bufferClone(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new Uint8Array(buf.byteLength);
	view.set(new Uint8Array(buf));
	return view.buffer;
}

var Body$1 = function () {
	function Body$1() {
		_classCallCheck(this, Body$1);

		this.bodyUsed = false;
	}

	_createClass(Body$1, [{
		key: 'initBody',
		value: function initBody(body) {
			this.bodyInit = body;
			if (!body) {
				this.bodyText = '';
			} else if (isString(body)) {
				this.bodyText = body;
			} else if (isInstanceOf(body, Blob)) {
				this.bodyBlob = body;
			} else if (isInstanceOf(body, FormData)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, URLSearchParams)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, DataView)) {
				this.bodyArrayBuffer = bufferClone(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new Blob([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, ArrayBuffer) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = bufferClone(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (isString(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof URLSearchParams) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || Promise.resolve(this.bodyArrayBuffer);
			}
			return this.blob().then(function (blob) {
				return read(blob, 'ArrayBuffer');
			});
		}
	}, {
		key: 'blob',
		value: function blob() {
			var rejected = this.isUsed;
			if (rejected) {
				return rejected;
			}
			if (this.bodyBlob) {
				return Promise.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return Promise.resolve(new Blob([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return Promise.resolve(new Blob([this.bodyText]));
			}
		}
	}, {
		key: 'text',
		value: function text() {
			var rejected = this.isUsed;
			if (rejected) {
				return rejected;
			}
			if (this.bodyBlob) {
				return read(this.bodyBlob, 'Text');
			} else if (this.bodyArrayBuffer) {
				return Promise.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return Promise.resolve(this.bodyText);
			}
		}
	}, {
		key: 'formData',
		value: function formData() {
			return this.text().then(parse);
		}
	}, {
		key: 'json',
		value: function json() {
			return this.text().then(parse$2);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return Promise.reject(new TypeError('Already used'));
			}
			this.bodyUsed = true;
		}
	}]);

	return Body$1;
}();

function tests(Body, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Body();
			});
		});
	});
}

tests(Body$1, 'J0Body');

tests(Body, 'Body');

describe('Boolean', function () {

	it('should convert 0 to false', function () {
		assert.equal(Boolean(0), false);
	});

	it('should convert 100 to true', function () {
		assert.equal(Boolean(100), true);
	});
});

describe('cancelAnimationFrame', function () {

	it('', function () {});
});

function getContext(canvas) {
	var contextType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '2d';
	var contextAttributes = arguments[2];

	return canvas.getContext(contextType, contextAttributes);
}

function isNode(x) {
	return x instanceof Node;
}

function setAttribute(element, attrName) {
	for (var _len4 = arguments.length, value = Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
		value[_key4 - 2] = arguments[_key4];
	}

	element.setAttribute(attrName, value.join(' '));
}

function appendChild(parentNode, newNode) {
	parentNode.appendChild(newNode);
}

var key = Symbol('events');

function getEventListeners(element) {
	var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	var allEvents = element[key];
	var events = void 0;
	if (!allEvents) {
		allEvents = new Map();
		element[key] = allEvents;
	}
	if (eventName) {
		events = allEvents.get(eventName);
		if (!events) {
			events = new Set();
			allEvents.set(eventName, events);
		}
		return events;
	}
	return allEvents;
}

function addEventListener(element, eventName, fn) {
	element.addEventListener(eventName, fn);
	getEventListeners(element, eventName).add(fn);
}

function processTace() {
	var tace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var _tace$t = tace.t,
	    t = _tace$t === undefined ? 'div' : _tace$t,
	    _tace$a = tace.a,
	    a = _tace$a === undefined ? [] : _tace$a,
	    _tace$c = tace.c,
	    c = _tace$c === undefined ? [] : _tace$c,
	    _tace$e = tace.e,
	    e = _tace$e === undefined ? [] : _tace$e;

	var element = document.createElement(t);
	_forEach(filter(a), function (args) {
		setAttribute.apply(undefined, [element].concat(_toConsumableArray(args)));
	});
	_forEach(filter(c), function (data) {
		appendChild(element, createElement(data));
	});
	_forEach(filter(e), function (args) {
		addEventListener.apply(undefined, [element].concat(_toConsumableArray(args)));
	});
	return element;
}

function createElement(data) {
	if (isNode(data)) {
		return data;
	} else if (isString(data)) {
		return document.createTextNode(data);
	}
	return processTace(data);
}

describe('Canvas/getContext', function () {

	it('should return context', function () {
		var canvas = createElement({ t: 'canvas' });
		assert.doesNotThrow(function () {
			return getContext(canvas);
		});
	});
});

var WAIT = 100;

describe('clearTimeout', function () {

	it('should cancel calling', function () {
		var count = 0;
		return new Promise(function (resolve) {
			var timer = setTimeout(function () {
				count += 1;
			});
			clearTimeout(timer);
			setTimeout(resolve, WAIT);
		}).then(function () {
			assert.equal(count, 0);
		});
	});
});

var Event = CustomEvent;
try {
	new Event('G');
} catch (error) {
	Event = null;
}
var CustomEvent$1 = Event;

describe('CustomEvent', function () {

	it('should be a constructor or null', function () {
		if (CustomEvent$1) {
			assert.doesNotThrow(function () {
				return new CustomEvent$1('G');
			});
		} else {
			assert.equal(CustomEvent$1, null);
		}
	});
});

describe('DataView', function () {

	it('should create a new DataView', function () {
		assert.doesNotThrow(function () {
			return new DataView(new ArrayBuffer(0));
		});
	});
});

function leftpad(x) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

	var s = x.toString();
	var pad = length - s.length;
	return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
}

var century = 100;
var shortenedLength = 3;

var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function format(src, template) {
	var date = new Date(src);
	if (0 < date) {
		var Y = date.getFullYear();
		var M = date.getMonth();
		var D = date.getDate();
		var d = date.getDay();
		var h = date.getHours();
		var m = date.getMinutes();
		return template.replace(/%YYYY/g, Y.toString()).replace(/%YY/g, leftpad(Y % century)).replace(/%MMMM/g, MonthNames[M]).replace(/%MMM/g, MonthNames[M].slice(0, shortenedLength)).replace(/%MM/g, leftpad(M + 1)).replace(/%M/g, (M + 1).toString()).replace(/%DD/g, leftpad(D)).replace(/%D/g, D.toString()).replace(/%dddd/g, DayNames[d]).replace(/%ddd/g, DayNames[d].slice(0, shortenedLength)).replace(/%hh/, leftpad(h)).replace(/%h/, h.toString()).replace(/%mm/, leftpad(m)).replace(/%m/, m.toString());
	}
	return '';
}

describe('format', function () {

	it('should format a date', function () {
		var src = '2016-01-01T12:00Z';
		var template = '%YYYY%MMM';
		var expected = '2016Jan';
		assert.equal(format(src, template), expected);
	});
});

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this2 = this;

		for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			args[_key5] = arguments[_key5];
		}

		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call.apply(fn, [thisArg || _this2].concat(args));
		}, delay);
	};
}

describe('debounce', function () {

	it('should call the function after the last call', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(value);
			}, 50);
			execute(1);
			execute(2);
			execute(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});

	it('should call the function with its context', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(this);
			}, 50);
			execute.call(1);
			execute.call(2);
			execute.call(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});
});

describe('decodeURIComponent', function () {

	it('should decode an encoded string', function () {
		assert.equal(decodeURIComponent('%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF'), 'こんにちは');
	});
});

describe('document', function () {

	it('should have document.createElement', function () {
		assert.equal(isFunction(document.createElement), true);
	});
});

function addClass(element, className) {
	element.classList.add(className);
}

function hasClass(_ref, className) {
	var classList = _ref.classList;

	return classList && classList.contains(className);
}

describe('dom/addClass', function () {

	it('should add a class', function () {
		var element = createElement({});
		var className = 'abc';
		assert.equal(hasClass(element, className), false);
		addClass(element, className);
		assert.equal(hasClass(element, className), true);
	});
});

describe('dom/addEventListener', function () {

	it('should add a listener', function () {
		function fn() {}
		var element = createElement();
		var eventName = 'abc';
		addEventListener(element, eventName, fn);
		assert.equal(getEventListeners(element, eventName).has(fn), true);
	});
});

describe('dom/appendChild', function () {

	it('should append an element', function () {
		var parent = createElement();
		var child = createElement();
		appendChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

	it('should append a text element', function () {
		var parent = createElement();
		var child = createElement('text');
		appendChild(parent, child);
		assert.equal(child.parentNode, parent);
	});
});

function childNodes(node) {
	return node.childNodes;
}

describe('dom/childNodes', function () {

	it('should get a list of children', function () {
		var c1 = createElement();
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		assert.deepEqual(map(childNodes(parent)), [c1, c2]);
	});
});

function children(node) {
	return filter(childNodes(node), function (_ref2) {
		var _ref2$nodeType = _ref2.nodeType,
		    nodeType = _ref2$nodeType === undefined ? 0 : _ref2$nodeType;

		return nodeType === 1;
	});
}

describe('dom/children', function () {

	it('should get a list of children', function () {
		var c1 = createElement('c1');
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		assert.deepEqual(map(children(parent)), [c2]);
	});
});

function cloneNode(node, deep) {
	return node.cloneNode(deep);
}

function getTextContent(node) {
	return node ? node.textContent : '';
}

describe('cloneNode', function () {

	it('should clone a node', function () {
		var element = createElement({
			c: ['a', {
				c: ['b', {
					c: ['c']
				}]
			}]
		});
		assert.equal(getTextContent(cloneNode(element)), '');
	});

	it('should clone a node deeply', function () {
		var element = createElement({
			c: ['a', {
				c: ['b', {
					c: ['c']
				}]
			}]
		});
		assert.equal(getTextContent(cloneNode(element, true)), 'abc');
	});
});

describe('dom/createElement', function () {

	it('should create a <div>', function () {
		var element = createElement();
		assert.equal(element.tagName.toLowerCase(), 'div');
	});
});

function parentNode(node) {
	return node.parentNode;
}

function removeChild(childNode) {
	var parentElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parentNode(childNode);

	if (parentElement) {
		parentElement.removeChild(childNode);
	}
}

function empty(element) {
	while (element.firstChild) {
		removeChild(element.firstChild, element);
	}
}

describe('dom/empty', function () {

	it('should clear an element', function () {
		var element = createElement({ c: ['abc'] });
		assert.equal(element.childNodes.length, 1);
		empty(element);
		assert.equal(element.childNodes.length, 0);
	});
});

function firstChild(element) {
	return element.firstChild;
}

describe('dom/firstChild', function () {

	it('should return the first child', function () {
		var c1 = createElement('');
		var parent = createElement({ c: [c1, {}, {}] });
		assert.equal(firstChild(parent), c1);
	});
});

function getAttribute(element, attributeName) {
	return element.getAttribute(attributeName);
}

describe('dom/getAttribute', function () {

	it('should get an attribute from an element', function () {
		var attributeName = 'a';
		var attributeValue = 'b';
		var element = createElement({
			a: [[attributeName, attributeValue]]
		});
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

	it('should get a "data-" prefixed attribute from an element', function () {
		var attributeName = 'data-a';
		var attributeValue = 'b';
		var element = createElement({
			a: [[attributeName, attributeValue]]
		});
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});
});

function getBoundingClientRect(element) {
	return element.getBoundingClientRect();
}

function setStyle(element, name, value) {
	element.style[name] = value;
}

describe('dom/getBoundingClientRect', function () {

	var element = void 0;

	beforeEach(function () {
		element = createElement();
		appendChild(document.body, element);
	});

	afterEach(function () {
		removeChild(element, document.body);
	});

	it('should return a rect', function () {
		var expected = {
			left: 50,
			top: 60,
			width: 70,
			height: 80
		};
		setStyle(element, 'position', 'fixed');
		setStyle(element, 'left', expected.left + 'px');
		setStyle(element, 'top', expected.top + 'px');
		setStyle(element, 'width', expected.width + 'px');
		setStyle(element, 'height', expected.height + 'px');
		setStyle(element, 'margin', 0);
		appendChild(document.body, element);
		var rect = getBoundingClientRect(element);
		assert.deepEqual({
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		}, expected);
	});
});

function querySelectorAll(selectors) {
	var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return element.querySelector(selectors);
}

function getElementById(id, element) {
	return querySelectorAll('[id=\'' + id + '\']', element);
}

describe('getElementById', function () {

	it('should return an element', function () {
		var id = 'abc';
		var data = {
			a: [['id', id]]
		};
		var c1 = createElement(data);
		var c2 = createElement(data);
		var parent = createElement({ c: [c1, c2] });
		var element = getElementById(id, parent);
		assert.equal(element, c1);
	});
});

function getElementsByClassName(className) {
	var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return element.getElementsByClassName(className);
}

describe('getElementsByClassName', function () {

	it('should return a live list of elements', function () {
		var className = 'abc';
		var data = {
			a: [['class', className]]
		};
		var c1 = createElement(data);
		var c2 = createElement(data);
		var parent = createElement({ c: [c1] });
		var list = getElementsByClassName(className, parent);
		appendChild(parent, c2);
		assert.deepEqual(map(list), [c1, c2]);
	});
});

describe('dom/getEventListeners', function () {

	it('should get a Map', function () {
		function fn1() {}
		function fn2() {}
		var eventName1 = 'abc';
		var eventName2 = 'def';
		var element = createElement({
			e: [[eventName1, fn1], [eventName2, fn2]]
		});
		var result = getEventListeners(element);
		assert.deepEqual(map(result.keys()), [eventName1, eventName2]);
		assert.deepEqual(map(result.values(), function (set) {
			return map(set);
		}), [[fn1], [fn2]]);
	});

	it('should get a Set', function () {
		function fn1() {}
		function fn2() {}
		var eventName1 = 'abc';
		var eventName2 = 'def';
		var element = createElement({
			e: [[eventName1, fn1], [eventName2, fn2]]
		});
		var result = getEventListeners(element, eventName2);
		assert.deepEqual(map(result), [fn2]);
	});
});

function getScrollY(element) {
	return element ? element.scrollTop : window.pageYOffset;
}

describe('getScrollY', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= getScrollY(), true);
	});
});

describe('dom/getTextContent', function () {

	it('should return textContent', function () {
		var element = createElement({
			c: ['h', {
				c: ['e', {
					c: ['l', {
						c: ['l', {
							c: ['o']
						}]
					}]
				}]
			}]
		});
		assert.equal(getTextContent(element), 'hello');
	});
});

describe('dom/createElement', function () {

	it('should return true if the element has the class', function () {
		var className = 'abc';
		var element = createElement({
			a: [['class', className]]
		});
		assert.equal(hasClass(element, className), true);
	});

	it('should return false if the element does not have the class', function () {
		var className1 = 'abc';
		var className2 = 'def';
		var element = createElement({
			a: [['class', className1]]
		});
		assert.equal(hasClass(element, className2), false);
	});
});

function hasEventListener(element, eventName, fn) {
	var events = getEventListeners(element, fn ? eventName : null);
	return events && events.has(fn ? fn : eventName);
}

describe('dom/hasEventListener', function () {

	it('should return true if the element has a listener for abc events', function () {
		function fn() {}
		var eventName = 'abc';
		var element = createElement({
			e: [[eventName, fn]]
		});
		assert.equal(hasEventListener(element, eventName), true);
	});

	it('should return false if the element has no listeners for abc events', function () {
		function fn() {}
		var eventName1 = 'abc';
		var eventName2 = 'def';
		var element = createElement({
			e: [[eventName2, fn]]
		});
		assert.equal(hasEventListener(element, eventName1), false);
	});

	it('should return true if the element has a specified listener for abc events', function () {
		function fn() {}
		var eventName = 'abc';
		var element = createElement({
			e: [[eventName, fn]]
		});
		assert.equal(hasEventListener(element, eventName, fn), true);
	});

	it('should return false if the element does not have a specified listener for abc events', function () {
		function fn() {}
		function fn2() {}
		var eventName = 'abc';
		var element = createElement({
			e: [[eventName, fn]]
		});
		assert.equal(hasEventListener(element, eventName, fn2), false);
	});
});

function insertBefore(newNode, referenceNode) {
	var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : parentNode(referenceNode);

	return parent.insertBefore(newNode, referenceNode);
}

function nextSibling(element) {
	return element.nextSibling;
}

function insertAfter(newNode, referenceNode, parentNode) {
	return insertBefore(newNode, referenceNode ? nextSibling(referenceNode) : firstChild(parentNode), parentNode);
}

describe('dom/insertAfter', function () {

	it('should insert an element after a specified element', function () {
		var c1 = createElement();
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		var newNode = createElement();
		insertAfter(newNode, c1);
		assert.deepEqual(map(childNodes(parent)), [c1, newNode, c2]);
	});

	it('should insert an element before the first child', function () {
		var c1 = createElement();
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		var newNode = createElement();
		insertAfter(newNode, null, parent);
		assert.deepEqual(map(childNodes(parent)), [newNode, c1, c2]);
	});
});

describe('dom/insertBefore', function () {

	it('should insert an element before a specified element', function () {
		var c1 = createElement();
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		var newNode = createElement();
		insertBefore(newNode, c2);
		assert.deepEqual(map(childNodes(parent)), [c1, newNode, c2]);
	});

	it('should insert an element after the last child', function () {
		var c1 = createElement();
		var c2 = createElement();
		var parent = createElement({
			c: [c1, c2]
		});
		var newNode = createElement();
		insertBefore(newNode, null, parent);
		assert.deepEqual(map(childNodes(parent)), [c1, c2, newNode]);
	});
});

describe('dom/nextSibling', function () {

	it('should return the previous element', function () {
		var c1 = createElement('a');
		var c2 = createElement();
		createElement({ c: [c1, c2] });
		assert.equal(nextSibling(c1), c2);
	});
});

describe('dom/parentNode', function () {

	it('should return a parent of a node', function () {
		var child = createElement('');
		var parent = createElement({ c: [child] });
		assert.equal(parentNode(child), parent);
	});
});

function prependChild(parentNode, newNode) {
	insertBefore(newNode, firstChild(parentNode), parentNode);
}

describe('dom/prependChild', function () {

	it('should append an element', function () {
		var parent = createElement();
		var child = createElement();
		prependChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

	it('should append a text element', function () {
		var parent = createElement();
		var child = createElement('text');
		prependChild(parent, child);
		assert.equal(child.parentNode, parent);
	});
});

function previousSibling(element) {
	return element.previousSibling;
}

describe('dom/previousSibling', function () {

	it('should return the previous element', function () {
		var c1 = createElement('a');
		var c2 = createElement();
		createElement({ c: [c1, c2] });
		assert.equal(previousSibling(c2), c1);
	});
});

describe('dom/querySelector', function () {

	it('should get an element', function () {
		var className = 'abc';
		var child = createElement({
			a: [['class', className]]
		});
		var parent = createElement({
			c: [{ c: [child] }]
		});
		assert.equal(querySelectorAll('.' + className, parent), child);
	});
});

function querySelectorAll$1(selectors) {
	var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return element.querySelectorAll(selectors);
}

describe('dom/querySelectorAll', function () {

	it('should get elements', function () {
		var className = 'abc';
		var child1 = createElement({
			a: [['class', className]]
		});
		var child2 = createElement({
			a: [['class', className]]
		});
		var parent = createElement({
			c: [{ c: [child1] }, child2]
		});
		assert.deepEqual(map(querySelectorAll$1('.' + className, parent)), [child1, child2]);
	});
});

function removeAttribute(element, attributeName) {
	element.removeAttribute(attributeName);
}

describe('dom/removeAttribute', function () {

	it('should remove an arrtibute', function () {
		var attrName = 'abc';
		var value = '1';
		var element = createElement({
			a: [[attrName, value]]
		});
		assert.equal(getAttribute(element, attrName), value);
		removeAttribute(element, attrName);
		assert.equal(getAttribute(element, attrName), null);
	});
});

describe('dom/removeChild', function () {

	it('should remove a child', function () {
		var child = createElement();
		var parent = createElement({ c: [child] });
		assert.equal(child.parentNode, parent);
		removeChild(child);
		assert.equal(child.parentNode, null);
	});
});

function removeClass(element, className) {
	element.classList.remove(className);
}

describe('dom/removeClass', function () {

	it('should add a class', function () {
		var className = 'abc';
		var element = createElement({
			a: [['class', className]]
		});
		assert.equal(hasClass(element, className), true);
		removeClass(element, className);
		assert.equal(hasClass(element, className), false);
	});
});

function removeEventListener(element, eventName, fn) {
	var events = getEventListeners(element, eventName);
	if (fn) {
		element.removeEventListener(eventName, fn);
		events.delete(fn);
	} else if (eventName) {
		_forEach(events, function (f) {
			removeEventListener(element, eventName, f);
		});
		events.clear();
	} else {
		_forEach(events, function (_ref3) {
			var _ref4 = _slicedToArray(_ref3, 2),
			    key = _ref4[0],
			    set = _ref4[1];

			_forEach(set, function (f) {
				removeEventListener(element, key, f);
			});
		});
	}
}

describe('dom/removeEventListener', function () {

	it('should remove a listener', function () {
		function fn() {}
		var eventName = 'abc';
		var element = createElement({
			e: [[eventName, fn]]
		});
		assert.equal(hasEventListener(element, eventName, fn), true);
		removeEventListener(element, eventName, fn);
		assert.equal(hasEventListener(element, eventName, fn), false);
	});
});

describe('dom/setAttribute', function () {

	it('should set an attribute to an element', function () {
		var attributeName = 'a';
		var attributeValue = 'b';
		var element = createElement({});
		setAttribute(element, attributeName, attributeValue);
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

	it('should set a "data-" prefixed attribute to an element', function () {
		var attributeName = 'data-a';
		var attributeValue = 'b';
		var element = createElement({});
		setAttribute(element, attributeName, attributeValue);
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});
});

describe('dom/setStyle', function () {

	it('should set css property', function () {
		var element = createElement();
		var key = 'color';
		var value = 'rgb(0, 0, 0)';
		setStyle(element, key, value);
		assert.equal(/color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/.test(getAttribute(element, 'style')), true);
	});
});

function setTextContent(node, text) {
	node.textContent = text;
}

describe('dom/setTextContent', function () {

	it('should set a text', function () {
		var element = createElement();
		var text = 'abc';
		assert.equal(element.childNodes.length, 0);
		setTextContent(element, text);
		assert.equal(element.textContent, text);
	});
});

function tagName() {
	var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	var name = node.tagName;

	return name ? name.toLowerCase() : name;
}

describe('dom/tagName', function () {

	it('should return a tagName', function () {
		var element = createElement();
		var expected = 'div';
		assert.equal(tagName(element), expected);
	});
});

function toggleClass(element, className) {
	return element.classList.toggle(className);
}

describe('dom/toggleClass', function () {

	it('should add a class', function () {
		var element = createElement({});
		var className = 'abc';
		toggleClass(element, className);
		assert.equal(hasClass(element, className), true);
	});

	it('should remove a class', function () {
		var element = createElement({});
		var className = 'abc';
		toggleClass(element, className);
		assert.equal(hasClass(element, className), true);
		toggleClass(element, className);
		assert.equal(hasClass(element, className), false);
	});
});

var createEvent = void 0;

if (CustomEvent$1) {
	createEvent = function createEvent(eventName, data) {
		return new CustomEvent$1(eventName, {
			detail: data,
			bubbles: false,
			cancelable: false
		});
	};
} else {
	createEvent = function createEvent(eventName, data) {
		var event = document.createEvent('CustomEvent');
		event.initCustomEvent(eventName, false, false, data);
		return event;
	};
}

function trigger(element, eventName, data) {
	element.dispatchEvent(createEvent(eventName, data));
}

describe('dom/trigger', function () {

	it('should trigger an event', function () {
		var count = 0;
		var element = createElement({
			e: [['abc', function () {
				count += 1;
			}]]
		});
		trigger(element, 'abc');
		assert.equal(count, 1);
	});
});

describe('DOMParser', function () {

	it('should parse a string', function () {
		var src = '\n\t\t\t<note>\n\t\t\t\t<to>A</to>\n\t\t\t\t<from>B</from>\n\t\t\t\t<heading>C</heading>\n\t\t\t\t<body>D</body>\n\t\t\t</note>\n\t\t';
		var parser = new DOMParser();
		var doc = parser.parseFromString(src, "application/xml");
		var body = filter(map(childNodes(childNodes(doc)[0]), function (node) {
			return node.textContent.replace(/\s+/g, '');
		}));
		assert.deepEqual(body, ['A', 'B', 'C', 'D']);
	});
});

describe('encodeURIComponent', function () {

	it('should encode an decoded string', function () {
		assert.equal(encodeURIComponent('こんにちは'), '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF');
	});
});

describe('Error', function () {

	it('should have message', function () {
		var message = 'abc';
		var error = new Error(message);
		assert.equal(error.message, message);
	});
});

var StringList = function () {
	function StringList(iterable) {
		var _this3 = this;

		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			map(iterable, function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 2),
				    key = _ref6[0],
				    value = _ref6[1];

				_this3.append(key, value);
			});
		}
	}

	_createClass(StringList, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return find$2(this.data, function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 1),
				    itemName = _ref8[0];

				return itemName === name;
			});
		}
	}, {
		key: 'has',
		value: function has(name) {
			return 0 <= this.indexOf(name);
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			push(this.data, [name, value]);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			var index = this.indexOf(name);
			if (index < 0) {
				this.append(name, value);
			} else {
				this.data[index][1] = value;
			}
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			this.data = filter(this.data, function (_ref9) {
				var _ref10 = _slicedToArray(_ref9, 1),
				    itemName = _ref10[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = find(this.data, function (_ref11) {
				var _ref12 = _slicedToArray(_ref11, 1),
				    itemName = _ref12[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			_forEach(this.data, function (_ref13) {
				var _ref14 = _slicedToArray(_ref13, 2),
				    itemName = _ref14[0],
				    value = _ref14[1];

				if (itemName === name) {
					push(result, value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref15) {
				var _ref16 = _slicedToArray(_ref15, 2),
				    name = _ref16[0],
				    _ref16$ = _ref16[1],
				    value = _ref16$ === undefined ? '' : _ref16$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorKey]();
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

					return {
						value: value && value[1],
						done: done
					};
				}
			};
		}
	}, {
		key: iteratorKey,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

function forEachKey(obj, fn, thisArg) {
	for (var _key6 in obj) {
		if (obj.hasOwnProperty(_key6)) {
			if (fn.call(thisArg, obj[_key6], _key6, obj)) {
				return;
			}
		}
	}
}

function toLowerCase(string) {
	return ('' + string).toLowerCase();
}

var Headers$1 = function (_StringList) {
	_inherits(Headers$1, _StringList);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				push(init, [key, value]);
			});
		}
		return _possibleConstructorReturn(this, (Headers$1.__proto__ || Object.getPrototypeOf(Headers$1)).call(this, init));
	}

	_createClass(Headers$1, [{
		key: 'indexOf',
		value: function indexOf(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'indexOf', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'has', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'append', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'set', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'delete', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'get',
		value: function get(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'getAll', this).call(this, toLowerCase(name)).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			var _this5 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return {
				next: function next() {
					while (1) {
						var _iterator$next4 = iterator.next(),
						    value = _iterator$next4.value,
						    done = _iterator$next4.done;

						var _key7 = value && value[0];
						if (done || history.indexOf(_key7) < 0) {
							push(history, _key7);
							return {
								value: [_key7, _this5.get(_key7)],
								done: done
							};
						}
					}
				}
			};
		}
	}]);

	return Headers$1;
}(StringList);

var Request$1 = function (_Body$) {
	_inherits(Request$1, _Body$);

	function Request$1(input) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Request$1);

		var body = init.body;

		var _this6 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this6.inheritFrom(input, body, init);
		} else {
			_this6.url = '' + input;
		}
		_this6.credentials = init.credentials || _this6.credentials || 'omit';
		if (init.headers || !_this6.headers) {
			_this6.headers = new Headers$1(init.headers);
		}
		_this6.method = (init.method || _this6.method || 'GET').toUpperCase();
		_this6.mode = init.mode || _this6.mode || null;
		_this6.referrer = null;
		if ((_this6.method === 'GET' || _this6.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this6.initBody(body);
		return _this6;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref17) {
			var headers = _ref17.headers;

			if (input.bodyUsed) {
				throw new TypeError('Already read');
			}
			this.url = input.url;
			this.credentials = input.credentials;
			if (!headers) {
				this.headers = new Headers$1(input.headers);
			}
			this.method = input.method;
			this.mode = input.mode;
			if (!body && input.bodyInit !== null) {
				body = input.bodyInit;
				input.bodyUsed = true;
			}
			return body;
		}
	}, {
		key: 'clone',
		value: function clone() {
			return new Request$1(this, { body: this.bodyInit });
		}
	}]);

	return Request$1;
}(Body$1);

var minOkStatus = 200;
var maxOkStatus = 300;
var redirectStatuses = [301, 302, 303, 307, 308];

var Response$1 = function (_Body$2) {
	_inherits(Response$1, _Body$2);

	function Response$1(body) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Response$1);

		var _this7 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this7.type = 'default';
		_this7.status = 'status' in init ? init.status : minOkStatus;
		_this7.ok = _this7.status >= minOkStatus && _this7.status < maxOkStatus;
		_this7.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this7.headers = new Headers$1(init.headers);
		_this7.url = init.url || '';
		_this7.initBody(body);
		return _this7;
	}

	_createClass(Response$1, [{
		key: 'clone',
		value: function clone() {
			return new Response$1(this.bodyInit, {
				status: this.status,
				statusText: this.statusText,
				headers: new Headers$1(this.headers),
				url: this.url
			});
		}
	}, {
		key: 'redirect',
		value: function redirect(url, status) {
			if (redirectStatuses.indexOf(status) < 0) {
				throw new RangeError('Invalid status code');
			}
			return new Response$1(null, {
				status: status,
				headers: { location: url }
			});
		}
	}], [{
		key: 'error',
		value: function error() {
			var response = new Response$1(null, {
				status: 0,
				statusText: ''
			});
			response.type = 'error';
			return response;
		}
	}]);

	return Response$1;
}(Body$1);

function parse$3(rawHeaders) {
	var headers = new Headers();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(trim(key), trim(parts.join(':')));
		}
	});
	return headers;
}

function fetch$1(input, init) {
	return new Promise(function (resolve, reject) {
		var request = new Request$1(input, init);
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			var options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parse$3(xhr.getAllResponseHeaders() || '')
			};
			options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
			var body = 'response' in xhr ? xhr.response : xhr.responseText;
			resolve(new Response$1(body, options));
		};
		xhr.onerror = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.ontimeout = function () {
			reject(new TypeError('Network request failed'));
		};
		xhr.open(request.method, request.url, true);
		if (request.credentials === 'include') {
			xhr.withCredentials = true;
		}
		xhr.responseType = 'blob';
		_forEach(request.headers, function (_ref18) {
			var _ref19 = _slicedToArray(_ref18, 2),
			    name = _ref19[0],
			    value = _ref19[1];

			xhr.setRequestHeader(name, value);
		});
		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

function tests$2(fetch, name) {

	describe(name, function () {

		it('should get this page', function () {
			return fetch('./index.html').then(function (response) {
				return response.text();
			}).then(function (text) {
				assert.equal(/<!doctype/.test(text), true);
			});
		});

		it('should get json', function () {
			return fetch(getTextContent(getElementById('root')) + '/fetch/test.json').then(function (response) {
				return response.json();
			}).then(function (data) {
				assert.deepEqual(data, { a: 'b' });
			});
		});
	});
}

tests$2(fetch$1, 'J0Fetch');

tests$2(fetch, 'Fetch');

describe('FileReader', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new FileReader();
		});
	});
});

describe('FormData/parse', function () {

	it('should parse string', function () {
		var form = parse('a=b&c=d', {
			data: {},
			append: function append(key, value) {
				this.data[key] = value;
			}
		});
		assert.deepEqual(form.data, {
			a: 'b',
			c: 'd'
		});
	});
});

describe('FormData', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new FormData();
		});
	});
});

var INTERVAL = 100;

var getBody = new Promise(function (resolve) {
	function get() {
		var _document = document,
		    body = _document.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout(get, INTERVAL);
		}
	}
	get();
});

describe('getBody', function () {

	it('should return a promise', function () {
		return getBody.then(function (body) {
			assert.equal(!body.appendChild, false);
		});
	});
});

describe('getComputedStyle', function () {

	it('should get color in rgb', function () {
		var element = createElement({
			a: [['style', 'color:#ff0099']]
		});
		appendChild(document.body, element);
		var style = getComputedStyle(element);
		assert.equal(style.color, 'rgb(255, 0, 153)');
	});
});

function tests$4(Headers, testName) {

	describe(testName, function () {

		it('should have has()', function () {
			var init = {
				'Content-Type': 'text/html',
				'Content-Length': '100'
			};
			var headers = new Headers(init);
			assert.equal(headers.has('Content-Type'), true);
			assert.equal(headers.has('Location'), false);
		});

		it('should have append()', function () {
			var headers = new Headers();
			var name = 'a';
			var value = 'b';
			headers.append(name, value);
			headers.append(name, value);
			assert.deepEqual(headers.get(name), [value, value].join(','));
		});

		it('should have set()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.set(name, value1);
			headers.set(name, value2);
			assert.deepEqual(headers.get(name), value2);
		});

		it('should have get()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.equal(headers.get(name), value1 + ',' + value2);
		});

		it('should have delete()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.equal(headers.has(name), true);
			headers.delete(name);
			assert.equal(headers.has(name), false);
		});

		it('should have entries()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = headers.entries();
			while (1) {
				var _iterator$next5 = iterator.next(),
				    value = _iterator$next5.value,
				    done = _iterator$next5.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[name, value1 + ',' + value2]]);
		});

		it('should have values()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = headers.values();
			while (1) {
				var _iterator$next6 = iterator.next(),
				    value = _iterator$next6.value,
				    done = _iterator$next6.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1 + ',' + value2]);
		});
	});
}

tests$4(Headers$1, 'Headers/j0');

describe('Headers/parse', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse$3(src);
		assert.deepEqual(map(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});

tests$4(Headers, 'Headers');

describe('history', function () {

	it('should have replaceState()', function () {
		assert.equal(isFunction(history.replaceState), true);
	});
});

function generator$2() {
	var _this8 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this8[index],
				done: length <= index++
			};
		}
	};
}

describe('HTMLCollection/@iterator', function () {

	it('should create an iterator', function () {
		var expected = [createElement(), createElement()];
		var parent = createElement({ c: expected });
		var iterator = generator$2.call(childNodes(parent));
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next7 = iterator.next(),
			    value = _iterator$next7.value,
			    done = _iterator$next7.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});
});

function innerHeight() {
	return window.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});

function innerWidth() {
	return window.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});

describe('isArray', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isArray(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isArray(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isArray(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isArray(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isArray('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isArray({}), false);
	});

	it('should return true if the arguments are [[]]', function () {
		assert.equal(isArray([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isArray(function () {}), false);
	});
});

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

describe('isFunction', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isFunction(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isFunction(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isFunction(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isFunction(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isFunction('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isFunction({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isFunction([]), false);
	});

	it('should return true if the arguments are [function () {}]', function () {
		assert.equal(isFunction(function () {}), true);
	});
});

describe('isInstanceOf', function () {

	it('should return true if the first argument is an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = new A();
		assert.equal(isInstanceOf(a, A), true);
	});

	it('should return false if the first argument is not an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = 0;
		assert.equal(isInstanceOf(a, A), false);
	});
});

describe('isNode', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNode(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNode(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isNode(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isNode(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNode('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNode({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNode([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNode(function () {}), false);
	});
});

function isNumber(x) {
	return typeof x === 'number';
}

describe('isNumber', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNumber(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNumber(null), false);
	});

	it('should return true if the arguments are [NaN]', function () {
		assert.equal(isNumber(NaN), true);
	});

	it('should return true if the arguments are [123]', function () {
		assert.equal(isNumber(123), true);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNumber('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNumber({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNumber([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNumber(function () {}), false);
	});
});

describe('isString', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isString(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isString(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isString(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isString(123), false);
	});

	it('should return true if the arguments are [\'abc\']', function () {
		assert.equal(isString('abc'), true);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isString({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isString([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isString(function () {}), false);
	});
});

describe('isUndefined', function () {

	it('should return true if the arguments are []', function () {
		assert.equal(isUndefined(), true);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isUndefined(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isUndefined(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isUndefined(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isUndefined('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isUndefined({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isUndefined([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isUndefined(function () {}), false);
	});
});

describe('JSON/parse', function () {

	it('should parse JSON string', function () {
		assert.deepEqual(parse$2('[0, [1], {"a": "b"}]'), [0, [1], { a: 'b' }]);
	});
});

var stringify = JSON.stringify;

describe('JSON/stringify', function () {

	it('should convert a string', function () {
		var value = 'abc';
		var expected = '"abc"';
		assert.equal(stringify(value), expected);
	});

	it('should convert a number', function () {
		var value = 123;
		var expected = '123';
		assert.equal(stringify(value), expected);
	});
});

var storage = void 0;
try {
	storage = localStorage;
	storage.is = 'available';
} catch (err) {
	storage = 0;
}
if (storage) {
	storage.removeItem('is');
} else {
	storage = {
		removeItem: function removeItem(key) {
			delete this[key];
		}
	};
}
var localStorage$1 = storage;

var key$1 = Date.now();

describe('localStorage', function () {

	it('should be writable/readable', function () {
		localStorage$1[key$1] = key$1;
		assert.equal(localStorage$1[key$1], key$1);
	});

	it('should remove data', function () {
		localStorage$1.removeItem(key$1);
		assert.equal(localStorage$1[key$1], {}[key$1]);
	});
});

describe('location', function () {

	it('should have href', function () {
		assert.equal(!location.href, false);
	});
});

function generator$4() {
	return this.entries();
}

describe('Map/@iterator', function () {

	it('should return an iterator', function () {
		var data = [[1, 2], [3, 4]];
		var map = new Map(data);
		var iterator = generator$4.call(map);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next8 = iterator.next(),
			    value = _iterator$next8.value,
			    done = _iterator$next8.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});
});

var Map$2 = function () {
	function Map$2(iterable) {
		var _this9 = this;

		_classCallCheck(this, Map$2);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (_ref20) {
				var _ref21 = _slicedToArray(_ref20, 2),
				    key = _ref21[0],
				    value = _ref21[1];

				_this9.set(key, value);
			});
		}
	}

	_createClass(Map$2, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOfKey',
		value: function indexOfKey(key) {
			return find$2(this.data, function (_ref22) {
				var _ref23 = _slicedToArray(_ref22, 1),
				    itemKey = _ref23[0];

				return itemKey === key;
			});
		}
	}, {
		key: 'has',
		value: function has(key) {
			return 0 <= this.indexOfKey(key);
		}
	}, {
		key: 'set',
		value: function set(key, value) {
			var index = this.indexOfKey(key);
			if (0 <= index) {
				this.data[index][1] = value;
			} else {
				push(this.data, [key, value]);
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var found = find(this.data, function (_ref24) {
				var _ref25 = _slicedToArray(_ref24, 1),
				    itemKey = _ref25[0];

				return itemKey === key;
			});
			if (found) {
				return found[1];
			}
		}
	}, {
		key: 'delete',
		value: function _delete(key) {
			var index = this.indexOfKey(key);
			if (0 <= index) {
				splice(this.data, index, 1);
				return true;
			}
			return false;
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[Symbol.iterator]();
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			_forEach(this.data, fn, thisArg);
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next9 = iterator.next(),
					    value = _iterator$next9.value,
					    done = _iterator$next9.done;

					return {
						value: value && value[0],
						done: done
					};
				}
			};
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next10 = iterator.next(),
					    value = _iterator$next10.value,
					    done = _iterator$next10.done;

					return {
						value: value && value[1],
						done: done
					};
				}
			};
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Map$2;
}();

function tests$6(Map, name) {

	describe(name, function () {

		it('should create an instance', function () {
			assert.doesNotThrow(function () {
				var map$$1 = new Map();
				return map$$1;
			});
		});

		it('should return keys', function () {
			var map$$1 = new Map();
			assert.deepEqual(map(map$$1.keys()), []);
		});

		it('should return values', function () {
			var map$$1 = new Map();
			assert.deepEqual(map(map$$1.values()), []);
		});

		it('should initialize with given array', function () {
			var map$$1 = new Map([[0, 1]]);
			assert.deepEqual({
				keys: map(map$$1.keys()),
				values: map(map$$1.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

		it('should initialize with given iterable', function () {
			var iterable = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee() {
				var count;
				return regeneratorRuntime.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								count = 0;

							case 1:
								if (!(count < 1)) {
									_context.next = 7;
									break;
								}

								_context.next = 4;
								return [count, count + 1];

							case 4:
								count += 1;
								_context.next = 1;
								break;

							case 7:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));
			var map$$1 = new Map(iterable);
			assert.deepEqual({
				keys: map(map$$1.keys()),
				values: map(map$$1.values())
			}, {
				keys: [0],
				values: [1]
			});
		});
	});
}

tests$6(Map$2, 'J0Map');

tests$6(Map, 'Map');

function clamp(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref26 = [H, L];
		L = _ref26[0];
		H = _ref26[1];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

describe('Math/clamp', function () {

	it('should return 1 if the arguments are [0, 1, 2]', function () {
		assert.equal(clamp(0, 1, 2), 1);
	});

	it('should return 2 if the arguments are [0, 2]', function () {
		assert.equal(clamp(0, 2), 2);
	});

	it('should return 2 if the arguments are [2, 1, 3]', function () {
		assert.equal(clamp(2, 1, 3), 2);
	});

	it('should return 2 if the arguments are [2, 3, 1]', function () {
		assert.equal(clamp(2, 3, 1), 2);
	});
});

function p(p1, p2, t) {
	return (1 - 3 * p2 + 3 * p1) * t * t * t + 3 * (p2 - 2 * p1) * t * t + 3 * p1 * t;
}

function cubicBezier(x1, y1, x2, y2, x) {
	function getT(lower, upper) {
		var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var t = (lower + upper) / 2;
		if (8 < depth) {
			return t;
		} else if (p(x1, x2, t) < x) {
			// gotten x is lower than x
			return getT(t, upper, depth + 1);
		} else {
			// gotten x is larger than x
			return getT(lower, t, depth + 1);
		}
	}
	return p(y1, y2, getT(0, 1));
}

describe('Math/cubicBezier', function () {

	it('should be linear', function () {
		var sum = 0;
		for (var t = 0; t <= 1; t += 0.1) {
			var d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});
});

function generator$6() {
	var _this10 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this10[index],
				done: length <= index++
			};
		}
	};
}

describe('NamedNodeMap/@iterator', function () {

	it('should create an iterator', function () {
		var expected = [createElement(), createElement()];
		var parent = createElement({ c: expected });
		var iterator = generator$6.call(childNodes(parent));
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next11 = iterator.next(),
			    value = _iterator$next11.value,
			    done = _iterator$next11.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});
});

describe('navigator', function () {

	it('should have userAgent', function () {
		assert.equal(0 < navigator.userAgent.length, true);
	});
});

function nextSibling$2(node) {
	return node.nextSibling;
}

describe('Node/nextSibling', function () {

	it('should return the next node', function () {
		var n1 = createElement({});
		var n2 = createElement('');
		createElement({ c: [n1, n2] });
		assert.equal(nextSibling$2(n1), n2);
	});

	it('should return null if there is nothing', function () {
		var n1 = createElement({});
		createElement({ c: [n1] });
		assert.equal(nextSibling$2(n1), null);
	});
});

function previousSibling$2(node) {
	return node.previousSibling;
}

describe('Node/previousSibling', function () {

	it('should return the previous node', function () {
		var n1 = createElement({});
		var n2 = createElement('');
		createElement({ c: [n1, n2] });
		assert.equal(previousSibling$2(n2), n1);
	});

	it('should return null if there is nothing', function () {
		var n1 = createElement({});
		createElement({ c: [n1] });
		assert.equal(previousSibling$2(n1), null);
	});
});

function generator$8() {
	var _this11 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this11[index],
				done: length <= index++
			};
		}
	};
}

describe('NodeList/@iterator', function () {

	it('should create an iterator', function () {
		var expected = [createElement(), createElement()];
		var parent = createElement({ c: expected });
		var iterator = generator$8.call(childNodes(parent));
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next12 = iterator.next(),
			    value = _iterator$next12.value,
			    done = _iterator$next12.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});
});

function noopTrue() {
	return true;
}

describe('noop/true', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});
});

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop();
		});
	});

	it('should return the first argument', function () {
		var data = new Date();
		assert.equal(noop(data), data);
	});
});

describe('Number/MAX_SAFE_INTEGER', function () {

	it('should evaluate to true', function () {
		assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
	});
});

var suffixes = ['th', 'st', 'nd', 'rd'];
var TEN = 10;
var HUNDRED = 100;

function getOrdinalSuffix(n) {
	var type = n % TEN;
	var r2 = n % HUNDRED;
	if (10 < r2 && r2 < 20 || 3 < type) {
		type = 0;
	}
	return suffixes[type];
}

function toOrdinalString(n, radix) {
	var i = parseInt(n, radix);
	return '' + i + getOrdinalSuffix(i);
}

describe('Number/toOrdinalString', function () {

	var tests = [[0, '0th'], [1, '1st'], [2, '2nd'], [3, '3rd'], [4, '4th'], [5, '5th'], [6, '6th'], [7, '7th'], [8, '8th'], [9, '9th'], [10, '10th'], [11, '11th'], [12, '12th'], [13, '13th'], [14, '14th'], [15, '15th'], [16, '16th'], [17, '17th'], [18, '18th'], [19, '19th'], [20, '20th'], [121, '121st'], [122, '122nd'], [123, '123rd'], [124, '124th']];

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		var _loop = function _loop() {
			var _step2$value = _slicedToArray(_step2.value, 2),
			    n = _step2$value[0],
			    expected = _step2$value[1];

			it('should return ' + expected + ' if the argument is ' + n, function () {
				assert.equal(toOrdinalString(n), expected);
			});
		};

		for (var _iterator2 = tests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			_loop();
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
});

function assign(target) {
	for (var _len6 = arguments.length, sources = Array(_len6 > 1 ? _len6 - 1 : 0), _key8 = 1; _key8 < _len6; _key8++) {
		sources[_key8 - 1] = arguments[_key8];
	}

	_forEach(sources, function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}

describe('Object/assign', function () {
	it('should assign values', function () {
		var target = {
			a: 0,
			b: 0,
			c: 0
		};
		var src1 = { b: 1 };
		var src2 = {
			b: 2,
			c: 3
		};
		var returnValue = assign(target, src1, src2);
		var expected = {
			a: 0,
			b: 2,
			c: 3
		};
		assert.equal(target, returnValue);
		assert.deepEqual(returnValue, expected);
	});
});

function clone(obj) {
	return parse$2(stringify(obj));
}

describe('Object/clone', function () {

	it('should clone an object', function () {
		var data = { a: 1 };
		var actual = clone(data);
		var expected = { a: 1 };
		assert.deepEqual(actual, expected);
	});

	it('should remove functions', function () {
		var data = {
			a: noop,
			b: 0,
			c: noop
		};
		var actual = clone(data);
		var expected = { b: 0 };
		assert.deepEqual(actual, expected);
	});

	it('should isolate original', function () {
		var data = {
			a: noop,
			b: {},
			c: noop
		};
		var actual = clone(data);
		actual.b.a = 0;
		var expected = { b: { a: 0 } };
		assert.deepEqual(actual, expected);
		assert.deepEqual(data.b, {});
	});
});

describe('Object/forEachKey', function () {

	it('should iterate over an object', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len7 = arguments.length, args = Array(_len7), _key9 = 0; _key9 < _len7; _key9++) {
				args[_key9] = arguments[_key9];
			}

			push(results, args);
		});
		assert.deepEqual(results, [[0, 'a', obj], [1, 'b', obj]]);
	});

	it('should stop iteration if fn returns truthy value', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len8 = arguments.length, args = Array(_len8), _key10 = 0; _key10 < _len8; _key10++) {
				args[_key10] = arguments[_key10];
			}

			push(results, args);
			return true;
		});
		assert.deepEqual(results, [[0, 'a', obj]]);
	});

	it('should ignore properties which is not its own', function () {
		var obj = [1, 2];
		var results = [];
		forEachKey(obj, function () {
			for (var _len9 = arguments.length, args = Array(_len9), _key11 = 0; _key11 < _len9; _key11++) {
				args[_key11] = arguments[_key11];
			}

			push(results, args);
		});
		assert.deepEqual(results, [[1, '0', obj], [2, '1', obj]]);
	});
});

var keys = Object.keys;

describe('Object/keys', function () {

	it('should return an array of keys', function () {
		var data = {
			a: 0,
			b: 0,
			c: 0
		};
		var actual = keys(data);
		var expected = ['a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});
});

function toString(o) {
	return Object.prototype.toString.call(o);
}

describe('Object/toString', function () {

	it('should convert [] to [object Array]', function () {
		var value = [];
		var expected = '[object Array]';
		assert.equal(toString(value), expected);
	});
});

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

describe('onError', function () {

	it('should call its listener', function () {
		var count = 0;
		function listener(x) {
			count += x;
		}
		onError.listener = listener;
		onError(1);
		onError(2);
		assert.equal(count, 3);
	});
});

var dec = 10;
var hex = 16;

describe('parseInt', function () {

	it('should convert a dec to an integer', function () {
		var value = '100';
		var expected = 100;
		assert.equal(parseInt(value, dec), expected);
	});

	it('should convert a hex to an integer', function () {
		var value = '100';
		var expected = 256;
		assert.equal(parseInt(value, hex), expected);
	});
});

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(window.global, window);
	});
});

var postMessage = window.postMessage;

describe('postMessage', function () {

	it('should be a function', function () {
		assert.equal(isFunction(postMessage), true);
	});
});

function preventDefault(event) {
	event.preventDefault();
}

describe('preventDefault', function () {

	it('should be a function', function () {
		assert.equal(isFunction(preventDefault), true);
	});
});

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!window.immediateId) {
	window.immediateId = 0;
}
window.immediateId += 1;
var _window = window,
    setImmediateNative = _window.setImmediate;

var setImmediateAvailable = void 0;
// let firstImmediate = true;
// let immediateCount = 0;
// const tasks = {};
// const suffix = `_setImmediate${window.immediateId}`;

// function setImmediatePostMessage(fn) {
// 	if (firstImmediate) {
// 		firstImmediate = false;
// 		addEventListner(window, 'message', function ({data}) {
// 			if (data.split) {
// 				const [key] = data.split(suffix);
// 				const task = tasks[key];
// 				if (task) {
// 					task();
// 				}
// 				delete tasks[key];
// 			}
// 		});
// 	}
// 	immediateCount += 1;
// 	postMessage(`${immediateCount}${suffix}`, '*');
// 	tasks[immediateCount] = fn;
// 	return immediateCount;
// }

function setImmediateTimeout(fn) {
	return setTimeout(fn);
}

function testImmediate(fn, onSuccess) {
	var value = 1;
	var expected = (1 + 1) * 2;
	fn(function () {
		value *= 2;
		if (value === expected) {
			onSuccess();
		}
	});
	value += 1;
}

setImmediateAvailable = setImmediateTimeout;
setTimeout(function () {
	// if (postMessage) {
	// 	testImmediate(setImmediatePostMessage, function () {
	// 		if (setImmediateAvailable !== setImmediateNative) {
	// 			setImmediateAvailable = setImmediatePostMessage;
	// 		}
	// 	});
	// }
	if (setImmediateNative) {
		testImmediate(setImmediateNative, function () {
			setImmediateAvailable = setImmediateNative;
		});
	}
});

var setImmediate = function setImmediate(fn) {
	return setImmediateAvailable(fn);
};

/* eslint-disable no-underscore-dangle */
var PENDING = 0;
var RESOLVED = 1;
var REJECTED = 2;
var CHAINED = 3;

var Deferred = function Deferred() {
	var onResolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	var onRejected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

	_classCallCheck(this, Deferred);

	/* eslint-disable no-use-before-define */
	this.promise = new J0Promise(noop);
	/* eslint-enable no-use-before-define */
	this.onResolved = onResolved;
	this.onRejected = onRejected;
};

var J0Promise = function () {
	function J0Promise(fn) {
		_classCallCheck(this, J0Promise);

		this.deferreds = [];
		this.state = PENDING;
		this.exec(fn);
	}

	_createClass(J0Promise, [{
		key: 'is',
		value: function is(state) {
			return this.state === state;
		}
	}, {
		key: 'exec',
		value: function exec(fn) {
			var _this12 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this12.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this12.reject(error);
			};
			try {
				fn(onResolve, onReject);
			} catch (error) {
				onReject(error);
			}
		}
	}, {
		key: 'resolve',
		value: function resolve(value) {
			try {
				if (value === this) {
					throw new TypeError('A promise cannot be resolved with itself');
				}
				this.value = value;
				if (isThennable(value)) {
					this.state = CHAINED;
					this.exec(function (resolve, reject) {
						value.then(resolve, reject);
					});
				} else {
					this.state = RESOLVED;
				}
				this.finish();
			} catch (error) {
				this.reject(error);
			}
		}
	}, {
		key: 'reject',
		value: function reject(error) {
			this.state = REJECTED;
			this.value = error;
			this.finish();
		}
	}, {
		key: 'finish',
		value: function finish() {
			var _this13 = this;

			_forEach(this.deferreds, function (deferred) {
				_this13.handle(deferred);
			});
			this.deferreds = null;
		}
	}, {
		key: 'handle',
		value: function handle(deferred) {
			/* eslint-disable consistent-this */
			var self = this;
			/* eslint-enable consistent-this */
			while (self.is(CHAINED)) {
				self = self.value;
			}
			if (self.is(PENDING)) {
				push(self.deferreds, deferred);
				return;
			}
			setImmediate(function () {
				var promise = deferred.promise,
				    _deferred$onResolved = deferred.onResolved,
				    onResolved = _deferred$onResolved === undefined ? null : _deferred$onResolved,
				    _deferred$onRejected = deferred.onRejected,
				    onRejected = _deferred$onRejected === undefined ? null : _deferred$onRejected;

				var resolved = self.is(RESOLVED);
				var callback = resolved ? onResolved : onRejected;
				if (callback === null) {
					if (resolved) {
						promise.resolve(self.value);
					} else {
						promise.reject(self.value);
					}
					return;
				}
				var value = void 0;
				try {
					value = callback(self.value);
				} catch (error) {
					promise.reject(error);
					return;
				}
				promise.resolve(value);
			});
		}
	}, {
		key: 'catch',
		value: function _catch(onRejected) {
			return this.then(null, onRejected);
		}
	}, {
		key: 'then',
		value: function then(onResolved, onRejected) {
			var deferred = new Deferred(onResolved, onRejected);
			this.handle(deferred);
			return deferred.promise;
		}
	}], [{
		key: 'resolve',
		value: function resolve(value) {
			if (isThennable(value)) {
				return value;
			}
			return new J0Promise(function (resolve) {
				resolve(value);
			});
		}
	}, {
		key: 'reject',
		value: function reject(error) {
			return new J0Promise(function (resolve, reject) {
				reject(error);
			});
		}
	}, {
		key: 'race',
		value: function race(promises) {
			return new J0Promise(function (resolve, reject) {
				_forEach(promises, function (promise) {
					promise.then(resolve, reject);
				});
			});
		}
	}, {
		key: 'all',
		value: function all(values) {
			return new J0Promise(function (resolve, reject) {
				var length = values.length;

				if (length === 0) {
					resolve([]);
					return;
				}
				var remaining = length;
				function check(value, index) {
					if (isThennable(value)) {
						value.then(function (value2) {
							check(value2, index);
						}, reject);
						return;
					}
					values[index] = value;
					remaining -= 1;
					if (remaining === 0) {
						resolve(values);
					}
				}
				_forEach(values, function (value, index) {
					check(value, index);
				});
			});
		}
	}]);

	return J0Promise;
}();

function isThennable(value) {
	return value && isFunction(value.then) && isFunction(value.catch);
}

function spec$1(Promise, name) {

	function onUnexpectedFullfill() {
		throw new Error('onFulfilled was called unexpectedly');
	}

	function onUnexpectedReject(error) {
		throw error || new Error('onRejected was called unexpectedly');
	}

	describe(name, function () {

		it('should call onFulfilled', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onRejected', function () {
			var expected = 123;
			return new Promise(function (resolve, reject) {
				reject(expected);
			}).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			});
		});

		it('should support chained thennables', function () {
			var expected = 32;
			return new Promise(function (resolve) {
				resolve(1);
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled immediately if the promise is finished', function () {
			var expected = 123;
			var promise = new Promise(function (resolve) {
				resolve(expected);
			});
			return promise.then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled added on changing state', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return results of promises', function () {
			var expected = [1, 2, 3];
			return Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(function (results) {
				assert.deepEqual(results, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of a rejected promise', function () {
			var expected = 2;
			return Promise.all([Promise.resolve(1), Promise.reject(expected), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the last promise', function () {
			var expected = 3;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), Promise.resolve(expected)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the last promise', function () {
			var expected = 3;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), new Promise(function (resolve) {
				setTimeout(resolve, 100);
			}), Promise.reject(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
}

spec$1(J0Promise, 'Promise/j0');

spec$1(Promise, 'Promise');

describe('RegExp', function () {

	it('should create a regular expression', function () {
		var exp = new RegExp('Hello', 'gi');
		assert.deepEqual('HeLLohellO'.match(exp), ['HeLLo', 'hellO']);
	});
});

function tests$9(Request, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Request('/');
			});
		});
	});
}

tests$9(Request$1, 'J0Request');

tests$9(Request, 'Request');

describe('requestAnimationFrame', function () {

	it('', function () {});
});

function tests$11(Response, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Response();
			});
		});
	});
}

tests$11(Response$1, 'J0Response');

tests$11(Response, 'Response');

describe('scrollBy', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollBy(1, 1);
		});
	});
});

describe('scrollTo', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollTo(1, 1);
		});
	});
});

function scrollX() {
	return window.pageXOffset;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	return window.pageYOffset;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});

function generator$10() {
	return this.values();
}

describe('Set/@iterator', function () {

	it('should return an iterator', function () {
		var data = [1, 2];
		var map = new Set(data);
		var iterator = generator$10.call(map);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next13 = iterator.next(),
			    value = _iterator$next13.value,
			    done = _iterator$next13.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});
});

var Set$2 = function () {
	function Set$2(iterable) {
		var _this14 = this;

		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (value) {
				_this14.add(value);
			});
		}
	}

	_createClass(Set$2, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(item) {
			return this.data.indexOf(item);
		}
	}, {
		key: 'has',
		value: function has(item) {
			return 0 <= this.indexOf(item);
		}
	}, {
		key: 'add',
		value: function add(item) {
			if (!this.has(item)) {
				push(this.data, item);
			}
			return this;
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			var index = this.indexOf(item);
			if (0 <= index) {
				splice(this.data, index, 1);
			}
			return 0 <= index;
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this15 = this;

			_forEach(this.data, function (value) {
				fn.call(thisArg, value, value, _this15);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data[iteratorKey]();
		}
	}, {
		key: iteratorKey,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next14 = iterator.next(),
					    value = _iterator$next14.value,
					    done = _iterator$next14.done;

					return {
						value: !done && [value, value],
						done: done
					};
				}
			};
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Set$2;
}();

function tests$13(Set, name) {

	describe(name, function () {

		it('should support constructor arguments', function () {
			var data = [1, 2, 3];
			var set = new Set(data);
			assert.equal(set.size, 3);
		});

		it('should have add()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.add(4);
			assert.equal(set.size, 4);
		});

		it('should return itself', function () {
			var set = new Set();
			assert.equal(set.add(1), set);
		});

		it('should keep uniqueness', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			set.add(3);
			assert.equal(set.size, 3);
		});

		it('should return true on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(3);
			assert.equal(set.size, 2);
			assert.equal(returnValue, true);
		});

		it('should return false on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(4);
			assert.equal(set.size, 3);
			assert.equal(returnValue, false);
		});

		it('should have forEach()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var index = 0;
			var results = [];
			var context = {};
			set.forEach(function () {
				for (var _len10 = arguments.length, args = Array(_len10), _key12 = 0; _key12 < _len10; _key12++) {
					args[_key12] = arguments[_key12];
				}

				args[3] = this;
				results[index++] = args;
			}, context);
			assert.deepEqual(results, [[1, 1, set, context], [2, 2, set, context], [3, 3, set, context]]);
		});

		it('should have has()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			assert.deepEqual([set.has(3), set.has(4)], [true, false]);
		});

		it('should have values()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.values();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next15 = iterator.next(),
				    value = _iterator$next15.value,
				    done = _iterator$next15.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [1, 2, 3]);
		});

		it('should have entries()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.entries();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next16 = iterator.next(),
				    value = _iterator$next16.value,
				    done = _iterator$next16.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[1, 1], [2, 2], [3, 3]]);
		});
	});
}

tests$13(Set$2, 'J0Set');

tests$13(Set, 'Set');

describe('setImmediate', function () {

	it('should call the function at end of current processes', function () {
		var order = 3;
		var expected = 36;
		return new Promise(function (resolve) {
			setImmediate(function () {
				order *= order;
			});
			order += order;
			setTimeout(resolve, 50);
		}).then(function () {
			assert.equal(order, expected);
		});
	});
});

var WAIT$1 = 50;
var MARGIN = 0.9;

describe('setTimeout', function () {

	it('should call fn after ' + WAIT$1 + 'ms', function () {
		var start = Date.now();
		return new Promise(function (resolve) {
			setTimeout(resolve, WAIT$1);
		}).then(function () {
			var elapsed = Date.now() - start;
			assert.equal(WAIT$1 * MARGIN < elapsed, true);
		});
	});
});

function stopPropagation(event) {
	event.stopPropagation();
}

describe('stopPropagation', function () {

	it('should be a function', function () {
		assert.equal(isFunction(stopPropagation), true);
	});
});

describe('String/leftpad', function () {

	it('should pad a string with 0', function () {
		assert.equal(leftpad(1), '01');
	});

	it('should pad a string with 0 [length=10]', function () {
		assert.equal(leftpad(1, 10), '0000000001');
	});

	it('should pad a string with * [length=10]', function () {
		assert.equal(leftpad(1, 10, '*+='), '*********1');
	});
});

describe('String/polyfill', function () {

	it('should have repeat', function () {
		assert.equal('a'.repeat(2), 'aa');
	});
});

function repeat(s, length) {
	return s.repeat(length);
}

describe('String/repeat', function () {

	it('should repeat the string for specified times', function () {
		var src = '3';
		var count = 10;
		var expected = '3333333333';
		assert.equal(repeat(src, count), expected);
	});
});

describe('toLowerCase', function () {

	it('should convert cases', function () {
		assert.equal(toLowerCase('ABc'), 'abc');
	});
});

describe('String/trim', function () {

	it('should trim spaces at beginning and ending', function () {
		assert.equal(trim('\r\n\tab\tc\n\r\t'), 'ab\tc');
	});
});

describe('StringList', function () {

	it('should have has()', function () {
		var searchParams = new StringList([['topic', 'a']]);
		assert.equal(searchParams.has('topic'), true);
		assert.equal(searchParams.has('topick'), false);
	});

	it('should have append()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value = 'b';
		searchParams.append(name, value);
		searchParams.append(name, value);
		assert.equal(searchParams.toString(), 'a:b,a:b');
	});

	it('should have set()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.set(name, value1);
		searchParams.set(name, value2);
		assert.equal(searchParams.toString(), 'a:c');
	});

	it('should have get()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.equal(searchParams.get(name), value1);
	});

	it('should have getAll()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.deepEqual(searchParams.getAll(name), [value1, value2]);
	});

	it('should have delete()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		searchParams.delete(name);
		assert.equal(searchParams.toString(), '');
	});

	it('should have entries()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		var index = 0;
		var results = [];
		var iterator = searchParams.entries();
		while (1) {
			var _iterator$next17 = iterator.next(),
			    value = _iterator$next17.value,
			    done = _iterator$next17.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [[name, value1], [name, value2]]);
	});

	it('should have values()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		var index = 0;
		var results = [];
		var iterator = searchParams.values();
		while (1) {
			var _iterator$next18 = iterator.next(),
			    value = _iterator$next18.value,
			    done = _iterator$next18.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [value1, value2]);
	});
});

describe('Symbol/iterator', function () {

	it('should not be undefined', function () {
		assert.equal(isUndefined(iteratorKey), false);
	});
});

describe('Symbol/polyfill', function () {

	it('should generate a new symbol', function () {
		var s1 = Symbol();
		var s2 = Symbol();
		assert.equal(s1 !== s2, true);
	});

	it('should generate a new symbol even if they have same key', function () {
		var key = 'key';
		var s1 = Symbol(key);
		var s2 = Symbol(key);
		assert.equal(s1 !== s2, true);
	});

	it('should generate a new symbol unless the symbol has created by Symbol.for', function () {
		var key = 'key';
		var s1 = Symbol(key);
		var s2 = Symbol.for(key);
		assert.equal(s1 !== s2, true);
	});

	it('should get a symbol from a key', function () {
		var key = 'key1';
		var s = Symbol.for(key);
		assert.equal(Symbol.for(key), s);
	});

	it('should get a key from a symbol', function () {
		var key = 'key1';
		var s = Symbol.for(key);
		assert.equal(Symbol.keyFor(s), key);
	});

	it('should have Symbol.iterator', function () {
		assert.equal(!Symbol.iterator, false);
	});
});

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = isUndefined(context) ? this : context;

		for (var _len11 = arguments.length, args = Array(_len11), _key13 = 0; _key13 < _len11; _key13++) {
			args[_key13] = arguments[_key13];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout(function () {
				timer = null;
				if (scheduled) {
					scheduled = null;
					call.apply(thisArg, lastArgs);
				}
			}, interval);
		}
	}
	return call;
}

describe('throttle', function () {

	it('should call the function intermittently', function () {
		return new Promise(function (resolve) {
			var count = 0;
			var execute = throttle(function (value) {
				count += value;
				if (1 < count) {
					resolve(count);
				}
			}, 50);
			execute(1);
			execute(2);
			execute(3);
			execute(4);
			execute(5);
		}).then(function (result) {
			assert.equal(result, 6);
		});
	});
});

describe('TypeError', function () {

	it('should have message', function () {
		var message = 'abc';
		var error = new TypeError(message);
		assert.equal(error.message, message);
	});
});

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_StringList2) {
	_inherits(URLSearchParams$2, _StringList2);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? map(init.replace(/^\?/, '').split(separator), function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref27) {
				var _ref28 = _slicedToArray(_ref27, 2),
				    name = _ref28[0],
				    _ref28$ = _ref28[1],
				    value = _ref28$ === undefined ? '' : _ref28$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

function tests$15(URLSearchParams, testName) {

	describe(testName, function () {

		it('should have has()', function () {
			var paramsString = 'q=URLUtils.searchParams&topic=api';
			var searchParams = new URLSearchParams(paramsString);
			assert.equal(searchParams.has('topic'), true);
			assert.equal(searchParams.has('topick'), false);
		});

		it('should have append()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value = 'b';
			searchParams.append(name, value);
			searchParams.append(name, value);
			assert.equal(searchParams.toString(), 'a=b&a=b');
		});

		it('should have set()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.set(name, value1);
			searchParams.set(name, value2);
			assert.equal(searchParams.toString(), 'a=c');
		});

		it('should have get()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			assert.equal(searchParams.get(name), value1);
		});

		it('should have getAll()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			assert.deepEqual(searchParams.getAll(name), [value1, value2]);
		});

		it('should have delete()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			searchParams.delete(name);
			assert.equal(searchParams.toString(), '');
		});

		it('should have entries()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = searchParams.entries();
			while (1) {
				var _iterator$next19 = iterator.next(),
				    value = _iterator$next19.value,
				    done = _iterator$next19.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[name, value1], [name, value2]]);
		});

		it('should have values()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = searchParams.values();
			while (1) {
				var _iterator$next20 = iterator.next(),
				    value = _iterator$next20.value,
				    done = _iterator$next20.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1, value2]);
		});
	});
}

tests$15(URLSearchParams$2, 'J0URLSearchParams');

tests$15(URLSearchParams, 'URLSearchParams');

function wait(duration, data) {
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	}).then(function () {
		return data;
	});
}

describe('wait', function () {
	it('should return a promise', function () {
		var start = Date().now();
		return wait(100).then(function () {
			assert.equal(80 < Date.now() - start, true);
		});
	});
});

describe('window', function () {

	it('should have document', function () {
		assert.equal(window.document.defaultView, window);
	});
});

describe('XMLHttpRequest', function () {

	it('should get this page', function () {
		return new Promise(function (resolve, reject) {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', '.');
			xhr.onerror = function () {
				reject(xhr.error);
			};
			xhr.onload = function () {
				resolve(xhr.response);
			};
			xhr.send();
		}).then(function (result) {
			assert.equal(/<!doctype/.test(result), true);
		});
	});
});
}())
