(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var wait = function () {
	var _ref27 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(duration, data) {
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						_context2.next = 2;
						return new Promise(function (resolve) {
							setTimeout(resolve, duration);
						});

					case 2:
						return _context2.abrupt('return', data);

					case 3:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function wait(_x30, _x31) {
		return _ref27.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

/* global window */
var w = window;
var _window = window,
    String = _window.String;
var _window2 = window,
    Array = _window2.Array;
var _window3 = window,
    parseInt = _window3.parseInt;
var _window4 = window,
    ArrayBuffer = _window4.ArrayBuffer;
var _window5 = window,
    DataView = _window5.DataView;
var _window6 = window,
    document = _window6.document;
var _window7 = window,
    setTimeout$1 = _window7.setTimeout;
var _window8 = window,
    decodeURIComponent = _window8.decodeURIComponent;
var _window9 = window,
    TypeError$1 = _window9.TypeError;
var _window10 = window,
    Uint8Array = _window10.Uint8Array;
var _window11 = window,
    Uint8ClampedArray = _window11.Uint8ClampedArray;
var _window12 = window,
    Uint16Array = _window12.Uint16Array;
var _window13 = window,
    Uint32Array = _window13.Uint32Array;
var _window14 = window,
    Int8Array = _window14.Int8Array;
var _window15 = window,
    Int16Array = _window15.Int16Array;
var _window16 = window,
    Int32Array = _window16.Int32Array;
var _window17 = window,
    Float32Array = _window17.Float32Array;
var _window18 = window,
    Float64Array = _window18.Float64Array;
var _window19 = window,
    XMLHttpRequest = _window19.XMLHttpRequest;
var _window20 = window,
    Promise$1 = _window20.Promise;
var _window21 = window,
    Blob = _window21.Blob;
var _window22 = window,
    Boolean = _window22.Boolean;


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

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
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
	throw new TypeError$1('The object is not shift-able object');
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

var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

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
				return this.isUsed || Promise$1.resolve(this.bodyArrayBuffer);
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
				return Promise$1.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return Promise$1.resolve(new Blob([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return Promise$1.resolve(new Blob([this.bodyText]));
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
				return Promise$1.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return Promise$1.resolve(this.bodyText);
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
				return Promise$1.reject(new TypeError$1('Already used'));
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

var nodeKey = Symbol('node');
var eventsKey = Symbol('events');

var J0Element = function () {

	/* eslint-disable max-statements */
	function J0Element() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, J0Element);

		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = document.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			var _source$t = source.t,
			    t = _source$t === undefined ? 'div' : _source$t,
			    _source$a = source.a,
			    a = _source$a === undefined ? [] : _source$a,
			    _source$c = source.c,
			    c = _source$c === undefined ? [] : _source$c,
			    _source$e = source.e,
			    e = _source$e === undefined ? [] : _source$e;

			this[nodeKey] = wrap(document['createElement' + (t.indexOf(':') < 0 ? '' : 'NS')](t)).node;
			for (var i = 0, length = c.length; i < length; i++) {
				var item = c[i];
				if (item) {
					this.append(item);
				}
			}
			for (var _i = 0, _length = e.length; _i < _length; _i++) {
				var _item = e[_i];
				if (_item) {
					this.on(_item[0], _item[1]);
				}
			}
			for (var _i2 = 0, _length2 = a.length; _i2 < _length2; _i2++) {
				var _item2 = a[_i2];
				if (_item2) {
					this.setAttribute.apply(this, _toConsumableArray(_item2));
				}
			}
		}
		this[eventsKey] = [];
	}
	/* eslint-enable max-statements */

	_createClass(J0Element, [{
		key: 'append',
		value: function append(element) {
			this.node.appendChild(wrap(element).node);
			return this;
		}
	}, {
		key: 'remove',
		value: function remove() {
			var parent = this.parent;

			if (parent) {
				parent.node.removeChild(this.node);
			}
			return this;
		}
	}, {
		key: 'empty',
		value: function empty() {
			var childNodes = this.childNodes;

			for (var i = 0, length = childNodes.length; i < length; i++) {
				childNodes[i].remove();
			}
			return this;
		}
	}, {
		key: 'setAttribute',
		value: function setAttribute(name) {
			for (var _len6 = arguments.length, value = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
				value[_key6 - 1] = arguments[_key6];
			}

			this.node.setAttribute(name, value.join(' '));
			return this;
		}
	}, {
		key: 'getAttribute',
		value: function getAttribute(name) {
			return this.node.getAttribute(name);
		}
	}, {
		key: 'on',
		value: function on(eventName, fn) {
			var _this3 = this;

			var wrapped = function wrapped(event) {
				fn.call(_this3, event);
			};
			this.node.addEventListener(eventName, wrapped);
			this.events.push([eventName, fn, wrapped]);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventName, fn) {
			var events = this.events;

			for (var i = events.length; i--;) {
				var _events$i = _slicedToArray(events[i], 3),
				    e = _events$i[0],
				    f = _events$i[1],
				    wrapped = _events$i[2];

				if (e === eventName && (!fn || fn === f)) {
					this.node.removeEventListener(eventName, wrapped);
					events.splice(i, 1);
				}
			}
		}
	}, {
		key: 'node',
		get: function get() {
			return this[nodeKey];
		}
	}, {
		key: 'text',
		get: function get() {
			return this.node.textContent;
		},
		set: function set() {
			var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			this.node.textContent = text;
		}
	}, {
		key: 'parent',
		get: function get() {
			var parentNode = this.node.parentNode;

			return parentNode && wrap(parentNode);
		},
		set: function set(source) {
			wrap(source).append(this);
		}
	}, {
		key: 'childNodes',
		get: function get() {
			return [].concat(_toConsumableArray(this.node.childNodes)).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return [].concat(_toConsumableArray(this.node.children)).map(wrap);
		}
	}, {
		key: 'events',
		get: function get() {
			return this[eventsKey];
		}
	}, {
		key: 'attributes',
		get: function get() {
			return this.node.attributes;
		}
	}]);

	return J0Element;
}();

function wrap(source) {
	return new J0Element(source);
}

// import '../*/test';
describe('$', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in wrap(), true);
	});
});

describe('J0Element.prototype.text', function () {

	it('should return its textContent', function () {
		var text = '' + Date.now();
		var element = wrap(text);
		assert.equal(element.text, text);
	});

	it('should set its textContent', function () {
		var text1 = Date.now() + '-1';
		var element1 = wrap();
		var text2 = Date.now() + '-2';
		var element2 = wrap({
			c: [element1, text2]
		});
		element1.text = text1;
		console.log(element2);
		assert.equal(element2.text, '' + text1 + text2);
	});
});

var StringList = function () {
	function StringList(iterable) {
		var _this4 = this;

		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			map(iterable, function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				_this4.append(key, value);
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
			return find$2(this.data, function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 1),
				    itemName = _ref4[0];

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
			this.data = filter(this.data, function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 1),
				    itemName = _ref6[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = find(this.data, function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 1),
				    itemName = _ref8[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			_forEach(this.data, function (_ref9) {
				var _ref10 = _slicedToArray(_ref9, 2),
				    itemName = _ref10[0],
				    value = _ref10[1];

				if (itemName === name) {
					push(result, value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref11) {
				var _ref12 = _slicedToArray(_ref11, 2),
				    name = _ref12[0],
				    _ref12$ = _ref12[1],
				    value = _ref12$ === undefined ? '' : _ref12$;

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
	for (var _key7 in obj) {
		if (obj.hasOwnProperty(_key7)) {
			if (fn.call(thisArg, obj[_key7], _key7, obj)) {
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
			var _this6 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return {
				next: function next() {
					while (1) {
						var _iterator$next4 = iterator.next(),
						    value = _iterator$next4.value,
						    done = _iterator$next4.done;

						var _key8 = value && value[0];
						if (done || history.indexOf(_key8) < 0) {
							push(history, _key8);
							return {
								value: [_key8, _this6.get(_key8)],
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

		var _this7 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this7.inheritFrom(input, body, init);
		} else {
			_this7.url = '' + input;
		}
		_this7.credentials = init.credentials || _this7.credentials || 'omit';
		if (init.headers || !_this7.headers) {
			_this7.headers = new Headers$1(init.headers);
		}
		_this7.method = (init.method || _this7.method || 'GET').toUpperCase();
		_this7.mode = init.mode || _this7.mode || null;
		_this7.referrer = null;
		if ((_this7.method === 'GET' || _this7.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this7.initBody(body);
		return _this7;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref13) {
			var headers = _ref13.headers;

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

		var _this8 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this8.type = 'default';
		_this8.status = 'status' in init ? init.status : minOkStatus;
		_this8.ok = _this8.status >= minOkStatus && _this8.status < maxOkStatus;
		_this8.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this8.headers = new Headers$1(init.headers);
		_this8.url = init.url || '';
		_this8.initBody(body);
		return _this8;
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
	return new Promise$1(function (resolve, reject) {
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
		_forEach(request.headers, function (_ref14) {
			var _ref15 = _slicedToArray(_ref14, 2),
			    name = _ref15[0],
			    value = _ref15[1];

			xhr.setRequestHeader(name, value);
		});
		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

function querySelectorAll(selectors) {
	var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return element.querySelector(selectors);
}

function getElementById(id, element) {
	return querySelectorAll('[id=\'' + id + '\']', element);
}

function getTextContent(node) {
	return node ? node.textContent : '';
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

var getBody = new Promise$1(function (resolve) {
	function get() {
		var body = document.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout$1(get, INTERVAL);
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
	var _this9 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this9[index],
				done: length <= index++
			};
		}
	};
}

function childNodes(node) {
	return node.childNodes;
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
		var _this10 = this;

		_classCallCheck(this, Map$2);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (_ref16) {
				var _ref17 = _slicedToArray(_ref16, 2),
				    key = _ref17[0],
				    value = _ref17[1];

				_this10.set(key, value);
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
			return find$2(this.data, function (_ref18) {
				var _ref19 = _slicedToArray(_ref18, 1),
				    itemKey = _ref19[0];

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
			var found = find(this.data, function (_ref20) {
				var _ref21 = _slicedToArray(_ref20, 1),
				    itemKey = _ref21[0];

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
		var _ref22 = [H, L];
		L = _ref22[0];
		H = _ref22[1];
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

function nextSibling(node) {
	return node.nextSibling;
}

describe('Node/nextSibling', function () {

	it('should return the next node', function () {
		var n1 = createElement({});
		var n2 = createElement('');
		createElement({ c: [n1, n2] });
		assert.equal(nextSibling(n1), n2);
	});

	it('should return null if there is nothing', function () {
		var n1 = createElement({});
		createElement({ c: [n1] });
		assert.equal(nextSibling(n1), null);
	});
});

function previousSibling(node) {
	return node.previousSibling;
}

describe('Node/previousSibling', function () {

	it('should return the previous node', function () {
		var n1 = createElement({});
		var n2 = createElement('');
		createElement({ c: [n1, n2] });
		assert.equal(previousSibling(n2), n1);
	});

	it('should return null if there is nothing', function () {
		var n1 = createElement({});
		createElement({ c: [n1] });
		assert.equal(previousSibling(n1), null);
	});
});

function generator$8() {
	var _this12 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this12[index],
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

	var _loop = function _loop(n, expected) {
		it('should return ' + expected + ' if the argument is ' + n, function () {
			assert.equal(toOrdinalString(n), expected);
		});
	};

	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
		for (var _iterator2 = tests[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
			var _ref23 = _step2.value;

			var _ref24 = _slicedToArray(_ref23, 2);

			var n = _ref24[0];
			var expected = _ref24[1];

			_loop(n, expected);
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
	for (var _len7 = arguments.length, sources = Array(_len7 > 1 ? _len7 - 1 : 0), _key9 = 1; _key9 < _len7; _key9++) {
		sources[_key9 - 1] = arguments[_key9];
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
			for (var _len8 = arguments.length, args = Array(_len8), _key10 = 0; _key10 < _len8; _key10++) {
				args[_key10] = arguments[_key10];
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
			for (var _len9 = arguments.length, args = Array(_len9), _key11 = 0; _key11 < _len9; _key11++) {
				args[_key11] = arguments[_key11];
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
			for (var _len10 = arguments.length, args = Array(_len10), _key12 = 0; _key12 < _len10; _key12++) {
				args[_key12] = arguments[_key12];
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
if (!w.immediateId) {
	w.immediateId = 0;
}
w.immediateId += 1;
var setImmediateNative = w.setImmediate;

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
	return setTimeout$1(fn);
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
setTimeout$1(function () {
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
			var _this13 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this13.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this13.reject(error);
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
					throw new TypeError$1('A promise cannot be resolved with itself');
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
			var _this14 = this;

			_forEach(this.deferreds, function (deferred) {
				_this14.handle(deferred);
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

function test$1(Promise, name) {

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
			var timeout = 100;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), new Promise(function (resolve) {
				setTimeout(resolve, timeout);
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
			var timeout = 100;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), Promise.reject(expected)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
}

test$1(J0Promise, 'Promise/j0');

test$1(Promise, 'Promise');

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
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

	return element.scrollTop || element.pageYOffset || 0;
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
		var _this15 = this;

		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			_forEach(iterable, function (value) {
				_this15.add(value);
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
			var _this16 = this;

			_forEach(this.data, function (value) {
				fn.call(thisArg, value, value, _this16);
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
				for (var _len11 = arguments.length, args = Array(_len11), _key13 = 0; _key13 < _len11; _key13++) {
					args[_key13] = arguments[_key13];
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

function test$2(_Symbol) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Symbol';


	describe(name, function () {

		it('should generate a new symbol', function () {
			var s1 = _Symbol();
			var s2 = _Symbol();
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol even if they have same key', function () {
			var key = 'key';
			var s1 = _Symbol(key);
			var s2 = _Symbol(key);
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol unless the symbol has created by Symbol.for', function () {
			var key = 'key';
			var s1 = _Symbol(key);
			var s2 = _Symbol.for(key);
			assert.equal(s1 !== s2, true);
		});

		it('should get a symbol from a key', function () {
			var key = 'key1';
			var s = _Symbol.for(key);
			assert.equal(_Symbol.for(key), s);
		});

		it('should get a key from a symbol', function () {
			var key = 'key1';
			var s = _Symbol.for(key);
			assert.equal(_Symbol.keyFor(s), key);
		});

		it('should have Symbol.iterator', function () {
			assert.equal(!_Symbol.iterator, false);
		});
	});
}

test$2(Symbol, 'J0Symbol');

test$2(Symbol);

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = isUndefined(context) ? this : context;

		for (var _len12 = arguments.length, args = Array(_len12), _key14 = 0; _key14 < _len12; _key14++) {
			args[_key14] = arguments[_key14];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout$1(function () {
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
			return map(this.data, function (_ref25) {
				var _ref26 = _slicedToArray(_ref25, 2),
				    name = _ref26[0],
				    _ref26$ = _ref26[1],
				    value = _ref26$ === undefined ? '' : _ref26$;

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

describe('wait', function () {
	it('should return a promise and it should resolved with given data', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.9;
						_context3.next = 6;
						return wait(duration, data);

					case 6:
						actual = _context3.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});

describe('window', function () {

	it('should have document', function () {
		assert.equal(window.document.defaultView, window);
	});
});
}())
