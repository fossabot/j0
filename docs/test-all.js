(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _operators;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var wait = function () {
	var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(duration, data) {
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return new x$3(function (resolve) {
							x$27(resolve, duration);
						});

					case 2:
						return _context4.abrupt('return', data);

					case 3:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	}));

	return function wait(_x20, _x21) {
		return _ref5.apply(this, arguments);
	};
}();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable no-constant-condition */
function test(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
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

		it('should return an iterator which is iterable in for-of syntax', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var iterator = generator.call(array);
			var results = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					results.push(value);
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

			assert.deepEqual(results, array);
		});
	});
}

var x = Symbol;

var iteratorSymbol = x.iterator;

var Iterator = function () {
	function Iterator(fn) {
		_classCallCheck(this, Iterator);

		this.next = fn;
	}

	_createClass(Iterator, [{
		key: iteratorSymbol,
		value: function value() {
			return this;
		}
	}]);

	return Iterator;
}();

function generator() {
	var array = this.slice();
	var length = array.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: array[index],
			done: length <= index++
		};
	});
}

test(generator, 'Array.prototype[Symbol.iterator]#j0');

test(Array.prototype[x.iterator]);

function test$2(copyWithin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.copyWithin';


	describe(name, function () {

		it('should support (2, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var actual = copyWithin.call(array, target);
			var expected = [v1, v2, v1, v2, v3];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = 3;
			var actual = copyWithin.call(array, target, start);
			var expected = [v1, v2, v4, v5, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3, 4)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = 3;
			var end = 4;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3, -1)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = 3;
			var end = -1;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = -4;
			var actual = copyWithin.call(array, target, start);
			var expected = [v1, v2, v2, v3, v4];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = -4;
			var end = 3;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, -2)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = 2;
			var start = -4;
			var end = -2;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var actual = copyWithin.call(array, target);
			var expected = [v1, v2, v1, v2, v3];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = 3;
			var actual = copyWithin.call(array, target, start);
			var expected = [v1, v2, v4, v5, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3, 4)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = 3;
			var end = 4;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3, -1)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = 3;
			var end = -1;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = -4;
			var actual = copyWithin.call(array, target, start);
			var expected = [v1, v2, v2, v3, v4];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = -4;
			var end = 3;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, -2)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var target = -3;
			var start = -4;
			var end = -2;
			var actual = copyWithin.call(array, target, start, end);
			var expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});
	});
}

function copyWithin(target) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
	var length = this.length;

	if (target < 0) {
		target = length + target;
	}
	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	var copied = this.slice(start, end);
	var total = copied.length;

	if (length < target + total) {
		total = length - target;
	}
	for (var i = 0; i < total; i++) {
		this[target + i] = copied[i];
	}
	return this;
}

test$2(copyWithin, 'Array.prototype.copyWithin#j0');

test$2(Array.prototype.copyWithin);

/* eslint-disable no-constant-condition */
function test$4(entries) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.entries';


	describe(name, function () {

		it('should return an iterator', function () {
			var array = [Math.random(), Math.random(), Math.random()];
			var iterator = entries.call(array);
			var results = [];
			while (1) {
				var _iterator$next2 = iterator.next(),
				    value = _iterator$next2.value,
				    done = _iterator$next2.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			var expected = array.map(function (value, index) {
				return [index, value];
			});
			assert.deepEqual(results, expected);
		});
	});
}

function entries() {
	var _this = this;

	var index = 0;
	return new Iterator(function () {
		return {
			value: [index, _this[index]],
			done: _this.length < ++index
		};
	});
}

test$4(entries, 'Array.prototype.entries#j0');

test$4(Array.prototype.entries);

function test$6(copyWithin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.fill';


	describe(name, function () {

		it('should support (value, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var actual = copyWithin.call(array, value);
			var expected = [value, value, value, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = 3;
			var actual = copyWithin.call(array, value, start);
			var expected = [v1, v2, v3, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3, 4)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = 3;
			var end = 4;
			var actual = copyWithin.call(array, value, start, end);
			var expected = [v1, v2, v3, value, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3, -1)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = 3;
			var end = -1;
			var actual = copyWithin.call(array, value, start, end);
			var expected = [v1, v2, v3, value, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, 0)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = -4;
			var actual = copyWithin.call(array, value, start);
			var expected = [v1, value, value, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, 3)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = -4;
			var end = 3;
			var actual = copyWithin.call(array, value, start, end);
			var expected = [v1, value, value, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, -2)', function () {
			var v1 = Math.random();
			var v2 = Math.random();
			var v3 = Math.random();
			var v4 = Math.random();
			var v5 = Math.random();
			var array = [v1, v2, v3, v4, v5];
			var value = Math.random();
			var start = -4;
			var end = -2;
			var actual = copyWithin.call(array, value, start, end);
			var expected = [v1, value, value, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});
	});
}

function copyWithin$2(value) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
	var length = this.length;

	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	for (var i = start; i < end; i++) {
		this[i] = value;
	}
	return this;
}

test$6(copyWithin$2, 'Array.prototype.fill#j0');

test$6(Array.prototype.fill);

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

function test$8(find) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.find';


	describe(name, function () {

		it('should return 1', function () {
			var expected = Date.now();
			var array = [new Date(), expected, new Date().toISOString()];
			var actual = find.call(array, function (x) {
				return x === this.expected;
			}, { expected: expected });
			assert.equal(actual, expected);
		});

		it('should return undefined', function () {
			var _ref = [],
			    expected = _ref[0];

			var array = [new Date(), Date.now(), new Date().toISOString()];
			var actual = find.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});
	});
}

test$8(findIndex, 'Array.prototype.find#j0');

test$8(Array.prototype.find);

function findIndex$2(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

function test$10(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.findIndex';


	describe(name, function () {

		it('should return 0', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var expected = 1;
			var actual = findIndex.call(array, function (x) {
				return x === array[this.expected];
			}, { expected: expected });
			assert.equal(actual, expected);
		});

		it('should return -1', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var expected = -1;
			var actual = findIndex.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});
	});
}

test$10(findIndex$2, 'Array.prototype.findIndex#j0');

test$10(Array.prototype.findIndex);

function isUndefined(x) {
	return typeof x === 'undefined';
}

function passThrough(x) {
	return x;
}

function arrayFrom(iterable) {
	var mapFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : passThrough;
	var thisArg = arguments[2];

	var result = [];
	if (isUndefined(iterable.length)) {
		var i = 0;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var item = _step2.value;

				result.push(mapFn.call(thisArg, item, i++));
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
	} else {
		for (var _i = 0, length = iterable.length; _i < length; _i++) {
			result[_i] = mapFn.call(thisArg, iterable[_i], _i);
		}
	}
	return result;
}

function test$12(arrayFrom) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.from';


	describe(name, function () {

		it('should create a new array from an array-like object', function () {
			var v1 = new Date();
			var v2 = Date.now();
			var v3 = new Date().toISOString();
			var actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			});
			var expected = [v1, v2, v3];
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should create a new array from an iterable object', function () {
			var expected = [new Date(), Date.now(), new Date().toISOString()];
			var iterable = _defineProperty({}, x.iterator, function () {
				var count = 0;
				return {
					next: function next() {
						var value = expected[count++];
						return {
							value: value,
							done: !value
						};
					}
				};
			});
			var actual = arrayFrom(iterable);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an array-like object', function () {
			var v1 = new Date();
			var v2 = Date.now();
			var v3 = new Date().toISOString();
			function mapFn(value, index) {
				return [value, index, this];
			}
			var thisArg = {};
			var actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			}, mapFn, thisArg);
			var expected = [v1, v2, v3].map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an iterable object', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var iterable = _defineProperty({}, x.iterator, function () {
				var count = 0;
				return {
					next: function next() {
						var value = array[count++];
						return {
							value: value,
							done: !value
						};
					}
				};
			});
			var thisArg = {};
			function mapFn(value, index) {
				return [value, index, this];
			}
			var actual = arrayFrom(iterable, mapFn, thisArg);
			var expected = array.map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});
	});
}

test$12(arrayFrom, 'Array.from#j0');

test$12(Array.from);

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var length = this.length, i = fromIndex < 0 ? length + fromIndex : fromIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test$14(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.includes';


	describe(name, function () {

		it('should return whether the array has the value', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[0]), true);
			assert.equal(includes.call(array, array[array.length]), false);
		});

		it('should support positive fromIndex', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[1], 1), true);
			assert.equal(includes.call(array, array[1], 2), false);
		});

		it('should support negative fromIndex', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			assert.equal(includes.call(array, array[1], -1), false);
			assert.equal(includes.call(array, array[1], -2), true);
		});
	});
}

test$14(includes, 'Array.prototype.includes#j0');

test$14(Array.prototype.includes);

function arrayOf() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args;
}

function test$16(arrayOf) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.of';


	describe(name, function () {

		it('should create an array', function () {
			var expected = [new Date(), Date.now(), new Date().toString()];
			var actual = arrayOf.apply(undefined, expected);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});
	});
}

test$16(arrayOf, 'Array.of#j0');

test$16(Array.of);

var x$1 = Uint8Array;

var fromCharCode = String.fromCharCode;


var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

function arrayBufferToString(arrayBuffer) {
	var view = new x$1(arrayBuffer);
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
		var lastMask = lastMasks[length];
		var charCode = 0;
		var j = 0;
		var offset = length;
		while (0 < offset--) {
			var mask = offset === 0 ? lastMask : baseMask;
			/* eslint-disable no-bitwise */
			charCode |= (view[i + offset] & mask) << availableBits * j++;
			/* eslint-disable no-bitwise */
		}
		chars.push(charCode);
		i += length - 1;
	}
	var strings = [];
	var chunkLength = 4096;
	while (0 < chars.length) {
		strings.push(fromCharCode.apply(undefined, _toConsumableArray(chars.splice(0, chunkLength))));
	}
	return strings.join('');
}

var x$2 = FileReader;

var x$3 = Promise;

function readBlob(data, type) {
	var reader = new x$2();
	var promise = new x$3(function (resolve, reject) {
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

var x$4 = document;

var x$5 = Blob;

var x$6 = fetch;

function createArrayBuffer(data) {
	return readBlob(new x$5([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						src = 'hello';
						_context.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));

	it('should return こんにちは', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						src = 'こんにちは';
						_context2.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context2.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));

	it('should return wagahaiha-nekodearu.txt', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
		var root, src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						this.timeout(8000);
						root = x$4.getElementById('root').text;
						_context3.next = 4;
						return x$6(root + '/arrayBufferToString/wagahaiha-nekodearu.txt');

					case 4:
						_context3.next = 6;
						return _context3.sent.text();

					case 6:
						src = _context3.sent;
						_context3.next = 9;
						return createArrayBuffer(src);

					case 9:
						arrayBuffer = _context3.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 11:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});

function test$18(assign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Object.assign';


	describe(name, function () {

		it('should assign properties', function () {
			var _assign, _assign2, _assert$deepEqual;

			var key1 = Date.now() + '_1';
			var key2 = Date.now() + '_2';
			var key3 = Date.now() + '_3';
			var value1 = Date.now() + '_4';
			var value2 = Date.now() + '_5';
			var value3 = Date.now() + '_6';
			var seed = _defineProperty({}, key1, value3);
			var result = assign(seed, (_assign = {}, _defineProperty(_assign, key1, value1), _defineProperty(_assign, key2, value2), _assign), (_assign2 = {}, _defineProperty(_assign2, key2, value3), _defineProperty(_assign2, key3, value2), _assign2));
			assert.equal(result, seed);
			assert.deepEqual(result, (_assert$deepEqual = {}, _defineProperty(_assert$deepEqual, key1, value1), _defineProperty(_assert$deepEqual, key2, value3), _defineProperty(_assert$deepEqual, key3, value2), _assert$deepEqual));
		});
	});
}

var x$7 = Object;

var assign = x$7.assign;

test$18(assign, 'assign');

var x$8 = JSON;

var x$9 = ArrayBuffer;

var x$10 = DataView;

var x$11 = TypeError;

var x$12 = FormData;

var x$13 = decodeURIComponent;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new x$12();

	body.trim().split('&').forEach(function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    name = _data$split2[0],
			    parts = _data$split2.slice(1);

			name = x$13(name.replace(/\+/g, ' '));
			parts = x$13(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}

function isString(x) {
	return typeof x === 'string';
}

var x$14 = URLSearchParams;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var x$15 = Uint8ClampedArray;

var x$16 = Uint16Array;

var x$17 = Uint32Array;

var x$18 = Int8Array;

var x$19 = Int16Array;

var x$20 = Int32Array;

var x$21 = Float32Array;

var x$22 = Float64Array;

var viewClasses = [x$1, x$15, x$16, x$17, x$18, x$19, x$20, x$21, x$22];
function isArrayBufferView(obj) {
	return 0 <= viewClasses.findIndex(function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new x$1(buf.byteLength);
	view.set(new x$1(buf));
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
			} else if (isInstanceOf(body, x$5)) {
				this.bodyBlob = body;
			} else if (isInstanceOf(body, x$12)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, x$14)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, x$10)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new x$5([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, x$9) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (isString(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof x$14) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || x$3.resolve(this.bodyArrayBuffer);
			}
			return this.blob().then(function (blob) {
				return readBlob(blob, 'ArrayBuffer');
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
				return x$3.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return x$3.resolve(new x$5([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return x$3.resolve(new x$5([this.bodyText]));
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
				return readBlob(this.bodyBlob, 'Text');
			} else if (this.bodyArrayBuffer) {
				return x$3.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return x$3.resolve(this.bodyText);
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
			return this.text().then(x$8.parse);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return x$3.reject(new x$11('Already used'));
			}
			this.bodyUsed = true;
		}
	}]);

	return Body$1;
}();

function tests(Body) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Body';


	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Body();
			});
		});
	});
}

tests(Body$1, 'J0Body');

/* global Body */
tests(Body);

var x$23 = navigator;

var x$24 = parseInt;

var browser = {};

x$23.userAgent.replace(/safari\/([\d.]+)/i, function (match, version) {
	browser.name = 'safari';
	browser.version = version;
}).replace(/chrome\/([\d.]+)/i, function (match, version) {
	browser.name = 'chrome';
	browser.version = version;
}).replace(/firefox\/([\d.]+)/i, function (match, version) {
	browser.name = 'firefox';
	browser.version = version;
}).replace(/edge\/([\d.]+)/i, function (match, version) {
	browser.name = 'edge';
	browser.version = version;
}).replace(/trident\/([\d.]+)/i, function (match, version) {
	browser.name = 'ie';
	browser.version = version.replace(/^\d+/, function (majorVersion) {
		return x$24(majorVersion, 10) + 4;
	});
});

describe('browser', function () {

	it('should have browser: ' + browser.name, function () {
		assert(browser.name, x$23.userAgent);
	});

	it('should have version: ' + browser.version, function () {
		assert(browser.version, x$23.userAgent);
	});
});

var x$25 = console;

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	x$25.error(error);
};

function call(fn, thisArg, args) {
	var errorHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : onError;

	try {
		var result = fn.apply(thisArg, args);
		x$3.resolve(result).catch(errorHandler);
	} catch (error) {
		errorHandler(error);
	}
}

var x$26 = Date;

var x$27 = setTimeout;

describe('call', function () {

	it('should call a sync function', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
		var thisArg, arg1, arg2, results, expected;
		return regeneratorRuntime.wrap(function _callee5$(_context5) {
			while (1) {
				switch (_context5.prev = _context5.next) {
					case 0:
						thisArg = x$26.now() + '-1';
						arg1 = x$26.now() + '-2';
						arg2 = x$26.now() + '-3';
						_context5.next = 5;
						return new x$3(function (resolve, reject) {
							call(function (a1, a2, a3) {
								resolve([this, a1, a2, a3]);
							}, thisArg, [arg1, arg2], reject);
						});

					case 5:
						results = _context5.sent;
						expected = [thisArg, arg1, arg2, undefined];

						assert.deepEqual(results, expected);

					case 8:
					case 'end':
						return _context5.stop();
				}
			}
		}, _callee5, this);
	})));

	it('should call an async function', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
		var thisArg, arg1, arg2, results, expected;
		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						thisArg = x$26.now() + '-1';
						arg1 = x$26.now() + '-2';
						arg2 = x$26.now() + '-3';
						_context7.next = 5;
						return new x$3(function (resolve, reject) {
							call(function () {
								var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(a1, a2, a3) {
									return regeneratorRuntime.wrap(function _callee6$(_context6) {
										while (1) {
											switch (_context6.prev = _context6.next) {
												case 0:
													_context6.next = 2;
													return wait(50);

												case 2:
													resolve([this, a1, a2, a3]);

												case 3:
												case 'end':
													return _context6.stop();
											}
										}
									}, _callee6, this);
								}));

								return function (_x22, _x23, _x24) {
									return _ref8.apply(this, arguments);
								};
							}(), thisArg, [arg1, arg2], reject);
						});

					case 5:
						results = _context7.sent;
						expected = [thisArg, arg1, arg2, undefined];

						assert.deepEqual(results, expected);

					case 8:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, this);
	})));

	it('should catch an error from a sync function', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
		var thisArg, arg1, arg2, results, expected;
		return regeneratorRuntime.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						thisArg = x$26.now() + '-1';
						arg1 = x$26.now() + '-2';
						arg2 = x$26.now() + '-3';
						_context8.next = 5;
						return new x$3(function (resolve) {
							call(function (a1, a2, a3) {
								throw [this, a1, a2, a3];
							}, thisArg, [arg1, arg2], resolve);
						});

					case 5:
						results = _context8.sent;
						expected = [thisArg, arg1, arg2, undefined];

						assert.deepEqual(results, expected);

					case 8:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, this);
	})));

	it('should catch an error from an async function', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
		var thisArg, arg1, arg2, results, expected;
		return regeneratorRuntime.wrap(function _callee10$(_context10) {
			while (1) {
				switch (_context10.prev = _context10.next) {
					case 0:
						thisArg = x$26.now() + '-1';
						arg1 = x$26.now() + '-2';
						arg2 = x$26.now() + '-3';
						_context10.next = 5;
						return new x$3(function (resolve) {
							call(function () {
								var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(a1, a2, a3) {
									return regeneratorRuntime.wrap(function _callee9$(_context9) {
										while (1) {
											switch (_context9.prev = _context9.next) {
												case 0:
													_context9.next = 2;
													return wait(50);

												case 2:
													throw [this, a1, a2, a3];

												case 3:
												case 'end':
													return _context9.stop();
											}
										}
									}, _callee9, this);
								}));

								return function (_x25, _x26, _x27) {
									return _ref11.apply(this, arguments);
								};
							}(), thisArg, [arg1, arg2], resolve);
						});

					case 5:
						results = _context10.sent;
						expected = [thisArg, arg1, arg2, undefined];

						assert.deepEqual(results, expected);

					case 8:
					case 'end':
						return _context10.stop();
				}
			}
		}, _callee10, this);
	})));
});

var x$28 = cancelAnimationFrame;

var x$29 = requestAnimationFrame;

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
		var baseInterval, timeoutMargin;
		return regeneratorRuntime.wrap(function _callee11$(_context11) {
			while (1) {
				switch (_context11.prev = _context11.next) {
					case 0:
						_context11.next = 2;
						return new x$3(function (resolve) {
							x$29(function (time1) {
								x$29(function (time2) {
									resolve(time2 - time1);
								});
							});
						});

					case 2:
						baseInterval = _context11.sent;
						timeoutMargin = 50;

						this.timeout(Math.max(10000, baseInterval * timeoutMargin));
						assert.equal(0 < baseInterval, true);
						_context11.next = 8;
						return new x$3(function (resolve) {
							x$29(resolve);
						});

					case 8:
						_context11.next = 10;
						return new x$3(function (resolve, reject) {
							x$27(resolve, baseInterval * timeoutMargin / 2);
							var id = x$29(reject);
							x$28(id);
						});

					case 10:
					case 'end':
						return _context11.stop();
				}
			}
		}, _callee11, this);
	})));
});

function clamp(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref13 = [H, L];
		L = _ref13[0];
		H = _ref13[1];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

/* eslint-disable no-magic-numbers */
describe('clamp', function () {

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

function clone(obj) {
	return x$8.parse(x$8.stringify(obj));
}

function noop() {
	return 0;
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

var AND = x('AND');
var OR = x('OR');
var XOR = x('XOR');
var NOT = x('NOT');
var SOLO = x('SOLO');
var nestable = [AND, OR, XOR, NOT];

function execute(condition, args) {
	if (condition.includes) {
		return condition.includes.apply(condition, _toConsumableArray(args));
	}
	return condition.apply(undefined, _toConsumableArray(args));
}

var operators = (_operators = {}, _defineProperty(_operators, SOLO, function (_ref14) {
	var _ref15 = _slicedToArray(_ref14, 1),
	    condition = _ref15[0];

	for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		args[_key2 - 1] = arguments[_key2];
	}

	return execute(condition, args);
}), _defineProperty(_operators, AND, function (conditions) {
	for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		args[_key3 - 1] = arguments[_key3];
	}

	return conditions.every(function (condition) {
		return execute(condition, args);
	});
}), _defineProperty(_operators, OR, function (conditions) {
	for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
		args[_key4 - 1] = arguments[_key4];
	}

	return 0 <= conditions.findIndex(function (condition) {
		return execute(condition, args);
	});
}), _defineProperty(_operators, XOR, function (conditions) {
	for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
		args[_key5 - 1] = arguments[_key5];
	}

	return conditions.filter(function (condition) {
		return execute(condition, args);
	}).length === 1;
}), _defineProperty(_operators, NOT, function (conditions) {
	for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
		args[_key6 - 1] = arguments[_key6];
	}

	return conditions.findIndex(function (condition) {
		return execute(condition, args);
	}) < 0;
}), _operators);

var ConditionalSet = function () {
	function ConditionalSet(operator) {
		_classCallCheck(this, ConditionalSet);

		this.operator = operators[operator];

		for (var _len7 = arguments.length, conditions = Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
			conditions[_key7 - 1] = arguments[_key7];
		}

		if (!this.operator) {
			throw new Error('Unknown operator: ' + operator);
		} else if (this.operator === SOLO && conditions.length !== 1) {
			throw new Error('Invalid condition count: ' + conditions.length);
		}
		this.conditions = conditions;
	}

	_createClass(ConditionalSet, [{
		key: 'includes',
		value: function includes() {
			for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
				args[_key8] = arguments[_key8];
			}

			return this.operator.apply(this, [this.conditions].concat(args));
		}
	}, {
		key: 'normalize',
		value: function normalize() {
			var conditions = this.conditions,
			    operator = this.operator;

			if (!nestable.includes(operator)) {
				return;
			}
			for (var i = 0; i < conditions.length; i++) {
				var condition = conditions[i];
				if (isInstanceOf(condition, ConditionalSet)) {
					if (condition.operator === operator) {
						switch (operator) {
							case AND:
							case OR:
							case XOR:
								operators.splice.apply(operators, [i, 1].concat(_toConsumableArray(condition.conditions)));
								break;
							default:
						}
					} else if (condition.operator === SOLO) {
						operators.splice.apply(operators, [i, 1].concat(_toConsumableArray(condition.conditions)));
					}
				}
			}
		}
	}], [{
		key: 'solo',
		value: function solo(fn) {
			return new ConditionalSet(SOLO, fn);
		}
	}, {
		key: 'and',
		value: function and() {
			for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
				args[_key9] = arguments[_key9];
			}

			return new (Function.prototype.bind.apply(ConditionalSet, [null].concat([AND], args)))();
		}
	}, {
		key: 'or',
		value: function or() {
			for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
				args[_key10] = arguments[_key10];
			}

			return new (Function.prototype.bind.apply(ConditionalSet, [null].concat([OR], args)))();
		}
	}, {
		key: 'xor',
		value: function xor() {
			for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
				args[_key11] = arguments[_key11];
			}

			return new (Function.prototype.bind.apply(ConditionalSet, [null].concat([XOR], args)))();
		}
	}, {
		key: 'not',
		value: function not() {
			for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
				args[_key12] = arguments[_key12];
			}

			return new (Function.prototype.bind.apply(ConditionalSet, [null].concat([NOT], args)))();
		}
	}]);

	return ConditionalSet;
}();

/* eslint-disable no-magic-numbers, no-control-regex */
// https://infra.spec.whatwg.org/#code-points


var surrogate = ConditionalSet.solo(function (x) {
	return 0xD800 <= x && x <= 0xDFFF;
});
var scalarValue = ConditionalSet.not(surrogate);
var noncharacter = ConditionalSet.or(function (x) {
	return 0xFDD0 <= x && x <= 0xFDEF;
}, function (x) {
	return [0xFFFE, 0xFFFF, 0x1FFFE, 0x1FFFF, 0x2FFFE, 0x2FFFF, 0x3FFFE, 0x3FFFF, 0x4FFFE, 0x4FFFF, 0x5FFFE, 0x5FFFF, 0x6FFFE, 0x6FFFF, 0x7FFFE, 0x7FFFF, 0x8FFFE, 0x8FFFF, 0x9FFFE, 0x9FFFF, 0xAFFFE, 0xAFFFF, 0xBFFFE, 0xBFFFF, 0xCFFFE, 0xCFFFF, 0xDFFFE, 0xDFFFF, 0xEFFFE, 0xEFFFF, 0xFFFFE, 0xFFFFF, 0x10FFFE, 0x10FFFF].includes(x);
});
var ASCIICodePoint = ConditionalSet.solo(function (x) {
	return 0 <= x && x <= 0x7F;
});
var ASCIITabOrNewline = ConditionalSet.solo(function (x) {
	return [0x09, 0x0A, 0x0D].includes(x);
});
var ASCIIWhitespace = ConditionalSet.solo(function (x) {
	return [0x09, 0x0A, 0x0C, 0x0D, 0x20].includes(x);
});
var C0Control = ConditionalSet.solo(function (x) {
	return 0 <= x && x <= 0x1F;
});
var C0ControlOrSpace = ConditionalSet.or(C0Control, function (x) {
	return x === 0x20;
});
var control = ConditionalSet.or(C0Control, function (x) {
	return 0x7F <= x && x <= 0x9F;
});
var ASCIIDigit = ConditionalSet.solo(function (x) {
	return 0x30 <= x && x <= 0x39;
});
var ASCIIUpperHexDigit = ConditionalSet.or(ASCIIDigit, function (x) {
	return 0x41 <= x && x <= 0x46;
});
var ASCIILowerHexDigit = ConditionalSet.or(ASCIIDigit, function (x) {
	return 0x61 <= x && x <= 0x66;
});
var ASCIIHexDigit = ConditionalSet.or(ASCIIUpperHexDigit, ASCIILowerHexDigit);
var ASCIIUpperAlpha = ConditionalSet.solo(function (x) {
	return 0x41 <= x && x <= 0x5A;
});
var ASCIILowerAlpha = ConditionalSet.solo(function (x) {
	return 0x61 <= x && x <= 0x7A;
});
var ASCIIAlpha = ConditionalSet.or(ASCIIUpperAlpha, ASCIILowerAlpha);
var ASCIIAlphanumeric = ConditionalSet.or(ASCIIDigit, ASCIIAlpha);

var C0ControlPercentEncodeSet = ConditionalSet.or(C0Control, function (x) {
	return 0x7E < x;
});

var pathPercentEncodeSet = ConditionalSet.or(C0ControlPercentEncodeSet, function (x) {
	return [0x20, 0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60, 0x7B, 0x7D].includes(x);
});
var userinfoPercentEncodeSet = ConditionalSet.or(pathPercentEncodeSet, function (x) {
	return [0x2F, 0x3A, 0x3B, 0x3D, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x7C].includes(x);
});
var forbiddenHost = ConditionalSet.solo(function (x) {
	return [0x00, 0x09, 0x0A, 0x0D, 0x20, 0x23, 0x25, 0x2F, 0x3A, 0x3F, 0x40, 0x5B, 0x5C, 0x5D].includes(x);
});

/* eslint-disable no-magic-numbers, max-lines, max-statements */
describe('codePoints', function () {

	describe('surrogate', function () {

		it('should detect surrogate code points', function () {
			var codePoint = 0xD800 - 1;
			assert.equal(surrogate.includes(codePoint), false);
			for (codePoint = 0xD800; codePoint <= 0xDFFF; codePoint++) {
				assert.equal(surrogate.includes(codePoint), true);
			}
			assert.equal(surrogate.includes(codePoint), false);
		});
	});

	describe('scalarValue', function () {

		it('should detect scalarValue code points', function () {
			var codePoint = 0xD7FF;
			assert.equal(scalarValue.includes(codePoint), true);
			for (codePoint = 0xD800; codePoint <= 0xDFFF; codePoint++) {
				assert.equal(scalarValue.includes(codePoint), false);
			}
			assert.equal(scalarValue.includes(codePoint), true);
		});
	});

	describe('noncharacter', function () {

		it('should detect noncharacter code points', function () {
			var codePoint = 0xFDD0 - 1;
			assert.equal(noncharacter.includes(codePoint), false);
			for (codePoint = 0xFDD0; codePoint <= 0xFDEF; codePoint++) {
				assert.equal(noncharacter.includes(codePoint), true);
			}
			assert.equal(noncharacter.includes(codePoint), false);
			[0xFFFE, 0xFFFF, 0x1FFFE, 0x1FFFF, 0x2FFFE, 0x2FFFF, 0x3FFFE, 0x3FFFF, 0x4FFFE, 0x4FFFF, 0x5FFFE, 0x5FFFF, 0x6FFFE, 0x6FFFF, 0x7FFFE, 0x7FFFF, 0x8FFFE, 0x8FFFF, 0x9FFFE, 0x9FFFF, 0xAFFFE, 0xAFFFF, 0xBFFFE, 0xBFFFF, 0xCFFFE, 0xCFFFF, 0xDFFFE, 0xDFFFF, 0xEFFFE, 0xEFFFF, 0xFFFFE, 0xFFFFF, 0x10FFFE, 0x10FFFF].forEach(function (c) {
				assert.equal(noncharacter.includes(c), true);
			});
		});
	});

	describe('ASCIICodePoint', function () {

		it('should detect ASCIICodePoint code points', function () {
			for (var codePoint = 0; codePoint <= 0x7F; codePoint++) {
				assert.equal(ASCIICodePoint.includes(codePoint), true);
			}
			for (var _codePoint = 0x80; _codePoint <= 0xFF; _codePoint++) {
				assert.equal(ASCIICodePoint.includes(_codePoint), false);
			}
		});
	});

	describe('ASCIITabOrNewline', function () {

		it('should detect ASCIITabOrNewline code points', function () {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = '\t\r\n'[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var char = _step3.value;

					assert.equal(ASCIITabOrNewline.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}

			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = ' 0123abcd'[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _char = _step4.value;

					assert.equal(ASCIITabOrNewline.includes(_char.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
		});
	});

	describe('ASCIIWhitespace', function () {

		it('should detect ASCIIWhitespace code points', function () {
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = ' \t\r\n'[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var char = _step5.value;

					assert.equal(ASCIIWhitespace.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError5 = true;
				_iteratorError5 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion5 && _iterator5.return) {
						_iterator5.return();
					}
				} finally {
					if (_didIteratorError5) {
						throw _iteratorError5;
					}
				}
			}

			var _iteratorNormalCompletion6 = true;
			var _didIteratorError6 = false;
			var _iteratorError6 = undefined;

			try {
				for (var _iterator6 = '0123abcd'[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
					var _char2 = _step6.value;

					assert.equal(ASCIIWhitespace.includes(_char2.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError6 = true;
				_iteratorError6 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion6 && _iterator6.return) {
						_iterator6.return();
					}
				} finally {
					if (_didIteratorError6) {
						throw _iteratorError6;
					}
				}
			}
		});
	});

	describe('C0Control', function () {

		it('should detect C0Control code points', function () {
			for (var codePoint = 0; codePoint <= 0x1F; codePoint++) {
				assert.equal(C0Control.includes(codePoint), true);
			}
			for (var _codePoint2 = 0x20; _codePoint2 <= 0x7F; _codePoint2++) {
				assert.equal(C0Control.includes(_codePoint2), false);
			}
			assert.equal(C0Control.includes(' '.codePointAt(0)), false);
		});
	});

	describe('C0ControlOrSpace', function () {

		it('should detect C0ControlOrSpace code points', function () {
			for (var codePoint = 0; codePoint <= 0x1F; codePoint++) {
				assert.equal(C0ControlOrSpace.includes(codePoint), true);
			}
			assert.equal(C0ControlOrSpace.includes(' '.codePointAt(0)), true);
			for (var _codePoint3 = 0x21; _codePoint3 <= 0x7F; _codePoint3++) {
				assert.equal(C0ControlOrSpace.includes(_codePoint3), false);
			}
		});
	});

	describe('control', function () {

		it('should detect control code points', function () {
			for (var codePoint = 0x6F; codePoint <= 0xAF; codePoint++) {
				assert.equal(control.includes(codePoint), 0x7F <= codePoint && codePoint <= 0x9F);
			}
		});
	});

	describe('ASCIIDigit', function () {

		it('should detect ASCIIDigit code points', function () {
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = '0123456789'[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var char = _step7.value;

					assert.equal(ASCIIDigit.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}

			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = ' \t\r\nabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var _char3 = _step8.value;

					assert.equal(ASCIIDigit.includes(_char3.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError8 = true;
				_iteratorError8 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion8 && _iterator8.return) {
						_iterator8.return();
					}
				} finally {
					if (_didIteratorError8) {
						throw _iteratorError8;
					}
				}
			}
		});
	});

	describe('ASCIIUpperHexDigit', function () {

		it('should detect ASCIIUpperHexDigit code points', function () {
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = '0123456789ABCDEF'[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var char = _step9.value;

					assert.equal(ASCIIUpperHexDigit.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError9 = true;
				_iteratorError9 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion9 && _iterator9.return) {
						_iterator9.return();
					}
				} finally {
					if (_didIteratorError9) {
						throw _iteratorError9;
					}
				}
			}

			var _iteratorNormalCompletion10 = true;
			var _didIteratorError10 = false;
			var _iteratorError10 = undefined;

			try {
				for (var _iterator10 = ' \t\r\nabcdefghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
					var _char4 = _step10.value;

					assert.equal(ASCIIUpperHexDigit.includes(_char4.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError10 = true;
				_iteratorError10 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion10 && _iterator10.return) {
						_iterator10.return();
					}
				} finally {
					if (_didIteratorError10) {
						throw _iteratorError10;
					}
				}
			}
		});
	});

	describe('ASCIILowerHexDigit', function () {

		it('should detect ASCIILowerHexDigit code points', function () {
			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = '0123456789abcdef'[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var char = _step11.value;

					assert.equal(ASCIILowerHexDigit.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError11 = true;
				_iteratorError11 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion11 && _iterator11.return) {
						_iterator11.return();
					}
				} finally {
					if (_didIteratorError11) {
						throw _iteratorError11;
					}
				}
			}

			var _iteratorNormalCompletion12 = true;
			var _didIteratorError12 = false;
			var _iteratorError12 = undefined;

			try {
				for (var _iterator12 = ' \t\r\nghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
					var _char5 = _step12.value;

					assert.equal(ASCIILowerHexDigit.includes(_char5.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError12 = true;
				_iteratorError12 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion12 && _iterator12.return) {
						_iterator12.return();
					}
				} finally {
					if (_didIteratorError12) {
						throw _iteratorError12;
					}
				}
			}
		});
	});

	describe('ASCIIHexDigit', function () {

		it('should detect ASCIIHexDigit code points', function () {
			var _iteratorNormalCompletion13 = true;
			var _didIteratorError13 = false;
			var _iteratorError13 = undefined;

			try {
				for (var _iterator13 = '0123456789abcdefABCDEF'[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
					var char = _step13.value;

					assert.equal(ASCIIHexDigit.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError13 = true;
				_iteratorError13 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion13 && _iterator13.return) {
						_iterator13.return();
					}
				} finally {
					if (_didIteratorError13) {
						throw _iteratorError13;
					}
				}
			}

			var _iteratorNormalCompletion14 = true;
			var _didIteratorError14 = false;
			var _iteratorError14 = undefined;

			try {
				for (var _iterator14 = ' \t\r\nghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
					var _char6 = _step14.value;

					assert.equal(ASCIIHexDigit.includes(_char6.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError14 = true;
				_iteratorError14 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion14 && _iterator14.return) {
						_iterator14.return();
					}
				} finally {
					if (_didIteratorError14) {
						throw _iteratorError14;
					}
				}
			}
		});
	});

	describe('ASCIIUpperAlpha', function () {

		it('should detect ASCIIUpperAlpha code points', function () {
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var char = _step15.value;

					assert.equal(ASCIIUpperAlpha.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError15 = true;
				_iteratorError15 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion15 && _iterator15.return) {
						_iterator15.return();
					}
				} finally {
					if (_didIteratorError15) {
						throw _iteratorError15;
					}
				}
			}

			var _iteratorNormalCompletion16 = true;
			var _didIteratorError16 = false;
			var _iteratorError16 = undefined;

			try {
				for (var _iterator16 = ' \t\r\n0123456789abcdefghijklmnopqrstuvwxyz'[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
					var _char7 = _step16.value;

					assert.equal(ASCIIUpperAlpha.includes(_char7.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError16 = true;
				_iteratorError16 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion16 && _iterator16.return) {
						_iterator16.return();
					}
				} finally {
					if (_didIteratorError16) {
						throw _iteratorError16;
					}
				}
			}
		});
	});

	describe('ASCIILowerAlpha', function () {

		it('should detect ASCIILowerAlpha code points', function () {
			var _iteratorNormalCompletion17 = true;
			var _didIteratorError17 = false;
			var _iteratorError17 = undefined;

			try {
				for (var _iterator17 = 'abcdefghijklmnopqrstuvwxyz'[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
					var char = _step17.value;

					assert.equal(ASCIILowerAlpha.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError17 = true;
				_iteratorError17 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion17 && _iterator17.return) {
						_iterator17.return();
					}
				} finally {
					if (_didIteratorError17) {
						throw _iteratorError17;
					}
				}
			}

			var _iteratorNormalCompletion18 = true;
			var _didIteratorError18 = false;
			var _iteratorError18 = undefined;

			try {
				for (var _iterator18 = ' \t\r\n0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
					var _char8 = _step18.value;

					assert.equal(ASCIILowerAlpha.includes(_char8.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError18 = true;
				_iteratorError18 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion18 && _iterator18.return) {
						_iterator18.return();
					}
				} finally {
					if (_didIteratorError18) {
						throw _iteratorError18;
					}
				}
			}
		});
	});

	describe('ASCIIAlpha', function () {

		it('should detect ASCIIAlpha code points', function () {
			var _iteratorNormalCompletion19 = true;
			var _didIteratorError19 = false;
			var _iteratorError19 = undefined;

			try {
				for (var _iterator19 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
					var char = _step19.value;

					assert.equal(ASCIIAlpha.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError19 = true;
				_iteratorError19 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion19 && _iterator19.return) {
						_iterator19.return();
					}
				} finally {
					if (_didIteratorError19) {
						throw _iteratorError19;
					}
				}
			}

			var _iteratorNormalCompletion20 = true;
			var _didIteratorError20 = false;
			var _iteratorError20 = undefined;

			try {
				for (var _iterator20 = ' \t\r\n0123456789'[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
					var _char9 = _step20.value;

					assert.equal(ASCIIAlpha.includes(_char9.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError20 = true;
				_iteratorError20 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion20 && _iterator20.return) {
						_iterator20.return();
					}
				} finally {
					if (_didIteratorError20) {
						throw _iteratorError20;
					}
				}
			}
		});
	});

	describe('ASCIIAlphanumeric', function () {

		it('should detect ASCIIAlphanumeric code points', function () {
			var _iteratorNormalCompletion21 = true;
			var _didIteratorError21 = false;
			var _iteratorError21 = undefined;

			try {
				for (var _iterator21 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
					var char = _step21.value;

					assert.equal(ASCIIAlphanumeric.includes(char.codePointAt(0)), true);
				}
			} catch (err) {
				_didIteratorError21 = true;
				_iteratorError21 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion21 && _iterator21.return) {
						_iterator21.return();
					}
				} finally {
					if (_didIteratorError21) {
						throw _iteratorError21;
					}
				}
			}

			var _iteratorNormalCompletion22 = true;
			var _didIteratorError22 = false;
			var _iteratorError22 = undefined;

			try {
				for (var _iterator22 = ' \t\r\n'[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
					var _char10 = _step22.value;

					assert.equal(ASCIIAlphanumeric.includes(_char10.codePointAt(0)), false);
				}
			} catch (err) {
				_didIteratorError22 = true;
				_iteratorError22 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion22 && _iterator22.return) {
						_iterator22.return();
					}
				} finally {
					if (_didIteratorError22) {
						throw _iteratorError22;
					}
				}
			}
		});
	});

	describe('C0ControlPercentEncodeSet', function () {

		it('should detect C0ControlPercentEncodeSet code points', function () {
			for (var codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(C0ControlPercentEncodeSet.includes(codePoint), !(0x20 <= codePoint && codePoint <= 0x7E), '0x' + codePoint.toString(16));
			}
			[0x20, 0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60, 0x7B, 0x7D, 0x2F, 0x3A, 0x3B, 0x3D, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x7C].forEach(function (codePoint) {
				assert.equal(C0ControlPercentEncodeSet.includes(codePoint), false, '0x' + codePoint.toString(16));
			});
		});
	});

	describe('pathPercentEncodeSet', function () {

		it('should detect pathPercentEncodeSet code points', function () {
			var added = [0x20, 0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60, 0x7B, 0x7D];
			for (var codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(pathPercentEncodeSet.includes(codePoint), !(0x20 <= codePoint && codePoint <= 0x7E) || added.includes(codePoint), '0x' + codePoint.toString(16));
			}
			[0x2F, 0x3A, 0x3B, 0x3D, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x7C].forEach(function (codePoint) {
				assert.equal(pathPercentEncodeSet.includes(codePoint), false, '0x' + codePoint.toString(16));
			});
		});
	});

	describe('userinfoPercentEncodeSet', function () {

		it('should detect userinfoPercentEncodeSet code points', function () {
			var added = [0x20, 0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60, 0x7B, 0x7D, 0x2F, 0x3A, 0x3B, 0x3D, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x7C];
			for (var codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(userinfoPercentEncodeSet.includes(codePoint), !(0x20 <= codePoint && codePoint <= 0x7E) || added.includes(codePoint), '0x' + codePoint.toString(16));
			}
		});
	});

	describe('forbiddenHost', function () {

		it('should detect forbiddenHost code points', function () {
			var added = [0x00, 0x09, 0x0A, 0x0D, 0x20, 0x23, 0x25, 0x2F, 0x3A, 0x3F, 0x40, 0x5B, 0x5C, 0x5D];
			for (var codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(forbiddenHost.includes(codePoint), added.includes(codePoint), '0x' + codePoint.toString(16));
			}
		});
	});
});

describe('ConditionalSet', function () {

	it('should create a set', function () {
		var set = ConditionalSet.and(function (x) {
			return 0 < x;
		});
		assert.equal(set.includes(-1), false);
		assert.equal(set.includes(1), true);
	});

	describe('ConditionalSet.prototype.includes', function () {

		describe('ConditionalSet:and', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
			var set;
			return regeneratorRuntime.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							set = ConditionalSet.and(function () {
								for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
									args[_key13] = arguments[_key13];
								}

								return args.every(function (arg) {
									return typeof arg === 'number';
								});
							}, function (x, y) {
								return (x + y) % 2 === 0;
							}, function (x, y) {
								return (x + y) % 3 === 0;
							});

							[['', 1, false], [0, 1, false], [1, 1, false], [3, 6, false], [6, 6, true]].forEach(function (_ref17) {
								var _ref18 = _slicedToArray(_ref17, 3),
								    x = _ref18[0],
								    y = _ref18[1],
								    expected = _ref18[2];

								it('set.includes(' + x + ', ' + y + ') \u2192 ' + expected, function () {
									assert.equal(set.includes(x, y), expected);
								});
							});

						case 2:
						case 'end':
							return _context12.stop();
					}
				}
			}, _callee12, this);
		})));

		describe('ConditionalSet:or', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
			var set;
			return regeneratorRuntime.wrap(function _callee13$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							set = ConditionalSet.or(function () {
								for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
									args[_key14] = arguments[_key14];
								}

								return args.every(function (arg) {
									return typeof arg === 'number';
								});
							}, function (x, y) {
								return (x + y) % 2 === 0;
							}, function (x, y) {
								return (x + y) % 3 === 0;
							});

							[['', 1, false], [0, 1, true], [1, 1, true], [3, 6, true], [6, 6, true]].forEach(function (_ref20) {
								var _ref21 = _slicedToArray(_ref20, 3),
								    x = _ref21[0],
								    y = _ref21[1],
								    expected = _ref21[2];

								it('set.includes(' + x + ', ' + y + ') \u2192 ' + expected, function () {
									assert.equal(set.includes(x, y), expected);
								});
							});

						case 2:
						case 'end':
							return _context13.stop();
					}
				}
			}, _callee13, this);
		})));

		describe('ConditionalSet:xor', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
			var set;
			return regeneratorRuntime.wrap(function _callee14$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							set = ConditionalSet.xor(function () {
								for (var _len15 = arguments.length, args = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
									args[_key15] = arguments[_key15];
								}

								return args.every(function (arg) {
									return typeof arg === 'number';
								});
							}, function (x, y) {
								return (x + y) % 2 === 0;
							}, function (x, y) {
								return (x + y) % 3 === 0;
							});

							[['', 1, false], [0, 1, true], [1, 1, false], [3, 6, false], [6, 6, false]].forEach(function (_ref23) {
								var _ref24 = _slicedToArray(_ref23, 3),
								    x = _ref24[0],
								    y = _ref24[1],
								    expected = _ref24[2];

								it('set.includes(' + x + ', ' + y + ') \u2192 ' + expected, function () {
									assert.equal(set.includes(x, y), expected);
								});
							});

						case 2:
						case 'end':
							return _context14.stop();
					}
				}
			}, _callee14, this);
		})));

		describe('ConditionalSet:not', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
			var set;
			return regeneratorRuntime.wrap(function _callee15$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							set = ConditionalSet.not(function () {
								for (var _len16 = arguments.length, args = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
									args[_key16] = arguments[_key16];
								}

								return args.every(function (arg) {
									return typeof arg === 'number';
								});
							}, function (x, y) {
								return (x + y) % 2 === 0;
							}, function (x, y) {
								return (x + y) % 3 === 0;
							});

							[['', 1, true], [0, 1, false], [1, 1, false], [3, 6, false], [6, 6, false]].forEach(function (_ref26) {
								var _ref27 = _slicedToArray(_ref26, 3),
								    x = _ref27[0],
								    y = _ref27[1],
								    expected = _ref27[2];

								it('set.includes(' + x + ', ' + y + ') \u2192 ' + expected, function () {
									assert.equal(set.includes(x, y), expected);
								});
							});

						case 2:
						case 'end':
							return _context15.stop();
					}
				}
			}, _callee15, this);
		})));
	});
});

function test$20(info) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console.info';


	describe(name, function () {

		it('should be a function', function () {
			assert.equal(typeof info === 'undefined' ? 'undefined' : _typeof(info), 'function');
		});
	});
}

/* eslint-disable no-console */
test$20(x$25.info);

function createTypedArray(TypedArray, source) {
	var length = source.length;

	var array = new TypedArray(length);
	for (var i = 0; i < length; i++) {
		array[i] = source[i];
	}
	return array;
}

/* global Uint8Array */
/* eslint-disable no-magic-numbers */
describe('createTypedArray', function () {

	it('should create an Uint8Array', function () {
		var src = [0, 1, 2, 3, 4, 5];
		var actual = createTypedArray(Uint8Array, src);
		assert.equal(actual instanceof Uint8Array, true);
		assert.deepEqual(Array.from(actual), src);
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
		}
		// gotten x is larger than x
		return getT(lower, t, depth + 1);
	}
	return p(y1, y2, getT(0, 1));
}

describe('cubicBezier', function () {

	it('should be linear', function () {
		var sum = 0;
		for (var t = 0; t <= 1; t += 0.1) {
			var d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});
});

var x$30 = CustomEvent;

function test$22(CustomEvent) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'CustomEvent';


	describe(name, function () {

		it('should create an event', function () {
			var type = '' + Date.now();
			var event = new CustomEvent(type);
			assert.equal(event.type, type);
		});
	});
}

var x$31 = Event;

function CustomEvent$2(event) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
		bubbles: false,
		cancelable: false
	};

	var evt = x$4.createEvent('CustomEvent');
	evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	return evt;
}
CustomEvent$2.prototype = x$31.prototype;

test$22(CustomEvent$2, 'CustomEvent#j0');

test$22(x$30);

var x$32 = clearTimeout;

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this2 = this;

		for (var _len17 = arguments.length, args = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
			args[_key17] = arguments[_key17];
		}

		x$32(timer);
		timer = x$27(function () {
			fn.call.apply(fn, [thisArg || _this2].concat(args));
		}, delay);
	};
}

describe('debounce', function () {
	var _this3 = this;

	this.timeout(5000);

	it('should call the function after the last call', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
		var result;
		return regeneratorRuntime.wrap(function _callee16$(_context16) {
			while (1) {
				switch (_context16.prev = _context16.next) {
					case 0:
						_context16.next = 2;
						return new x$3(function (resolve) {
							var execute = debounce(function (value) {
								resolve(value);
							}, 100);
							execute(1);
							execute(2);
							execute(3);
						});

					case 2:
						result = _context16.sent;

						assert.equal(result, 3);

					case 4:
					case 'end':
						return _context16.stop();
				}
			}
		}, _callee16, _this3);
	})));

	it('should call the function with its context', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
		var result;
		return regeneratorRuntime.wrap(function _callee17$(_context17) {
			while (1) {
				switch (_context17.prev = _context17.next) {
					case 0:
						_context17.next = 2;
						return new x$3(function (resolve) {
							var execute = debounce(function () {
								resolve(this);
							}, 100);
							execute.call(1);
							execute.call(2);
							execute.call(3);
						});

					case 2:
						result = _context17.sent;

						assert.equal(result, 3);

					case 4:
					case 'end':
						return _context17.stop();
				}
			}
		}, _callee17, _this3);
	})));
});

var keys = x$7.keys;

function isObject(x) {
	if (x === null) {
		return false;
	}
	var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
	return type === 'object' || type === 'function';
}

function deepEqual(a, b) {
	if (isObject(a) && isObject(b)) {
		return keys(a).every(function (key) {
			return deepEqual(a[key], b[key]);
		});
	} else {
		return a === b;
	}
}

describe('deepEqual', function () {

	[[123, 123, true], [123, 321, false], ['abc', 'abc', true], ['abc', 'abd', false], [{ 0: 0, 1: 1 }, [0, 1], true], [{ 0: 0, 1: 1 }, [0, 2], false], [{ 0: 0, 1: 1, 2: [3, 4] }, [0, 1, { 0: 3, 1: 4 }], true], [{ 0: 0, 1: 1, 2: [3, 4] }, [0, 1, { 0: 3, 1: 5 }], false], [{ 0: 0, 1: 1, 2: [3, 4] }, undefined, false]].forEach(function (_ref30) {
		var _ref31 = _slicedToArray(_ref30, 3),
		    a = _ref31[0],
		    b = _ref31[1],
		    expected = _ref31[2];

		it('(' + x$8.stringify(a) + ', ' + x$8.stringify(b) + ') => ' + expected, function () {
			assert.equal(deepEqual(a, b), expected);
		});
	});
});

var x$33 = DOMTokenList;

function generator$2() {
	var _this4 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this4[index],
				done: length <= index++
			};
		}
	};
}

/* eslint-disable no-constant-condition */
function test$24(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DOMTokenList/@iterator';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion23 = true;
			var _didIteratorError23 = false;
			var _iteratorError23 = undefined;

			try {
				for (var _iterator23 = expected[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
					var element = _step23.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError23 = true;
				_iteratorError23 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion23 && _iterator23.return) {
						_iterator23.return();
					}
				} finally {
					if (_didIteratorError23) {
						throw _iteratorError23;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next3 = iterator.next(),
				    value = _iterator$next3.value,
				    done = _iterator$next3.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, expected);
		});
	});
}

test$24(generator$2, 'DOMTokenList/@iterator/j0');

test$24(x$33.prototype[x.iterator]);

var x$34 = Array;

var x$35 = Node;

var isArray = x$34.isArray;

function isNode(x) {
	return isInstanceOf(x, x$35);
}

var x$36 = Set;

var x$37 = Map;

var x$38 = getComputedStyle;

function isFunction(x) {
	return typeof x === 'function';
}

var x$39 = addEventListener;

function checkPassiveSupport() {
	var supportsPassive = false;
	try {
		x$39('test', null, x$7.defineProperty({}, 'passive', {
			get: function get() {
				supportsPassive = true;
			}
		}));
	} catch (e) {
		supportsPassive = false;
	}
	return supportsPassive;
}

var addEventListenerWithOptions = checkPassiveSupport() ? function addEventListenerWithOptions(target, type, handler, options) {
	target.addEventListener(type, handler, options === true ? { capture: true } : options);
} : function addEventListenerWithOptions(target, type, handler, options) {
	target.addEventListener(type, handler, options === true || options && options.capture);
};

var x$40 = Math;

var x$41 = getSelection;

var J0Range = function () {
	function J0Range(range, container, textDirection) {
		_classCallCheck(this, J0Range);

		this.range = range || x$4.createRange();
		this.container = new N(container || new N(x$4.body));
		this.textDirection = textDirection;
	}

	_createClass(J0Range, [{
		key: 'diff',
		value: function diff(startContainer, startOffset) {
			var endContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startContainer;
			var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;

			var result = [];
			if (startContainer !== this.startContainer) {
				result.push('startContainer');
			}
			if (startOffset !== this.startOffset) {
				result.push('startOffset');
			}
			if (endContainer !== this.endContainer) {
				result.push('endContainer');
			}
			if (endOffset !== this.endOffset) {
				result.push('endOffset');
			}
			return result;
		}
	}, {
		key: 'equals',
		value: function equals(_ref32) {
			var startContainer = _ref32.startContainer,
			    startOffset = _ref32.startOffset,
			    _ref32$endContainer = _ref32.endContainer,
			    endContainer = _ref32$endContainer === undefined ? startContainer : _ref32$endContainer,
			    _ref32$endOffset = _ref32.endOffset,
			    endOffset = _ref32$endOffset === undefined ? startOffset : _ref32$endOffset;

			return this.diff(startContainer, startOffset, endContainer, endOffset).length === 0;
		}
	}, {
		key: 'clone',
		value: function clone() {
			return new J0Range(this.range.cloneRange(), this.container);
		}
	}, {
		key: 'apply',
		value: function apply() {
			var selection = x$41();
			selection.removeAllRanges();
			selection.addRange(this.range);
		}
	}, {
		key: 'setStart',
		value: function setStart(startContainer, startOffset) {
			this.range.setStart(startContainer, startOffset);
			return this;
		}
	}, {
		key: 'setEnd',
		value: function setEnd(endContainer, endOffset) {
			this.range.setEnd(endContainer, endOffset);
			return this;
		}
	}, {
		key: 'set',
		value: function set(startContainer) {
			var startOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var endContainer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : startContainer;
			var endOffset = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startOffset;

			return this.setStart(startContainer, startOffset).setEnd(endContainer, endOffset);
		}
	}, {
		key: 'getCollapsedBB',
		value: function getCollapsedBB(toStart) {
			var _ref33 = this.textDirection || this.container.textDirection,
			    _ref34 = _slicedToArray(_ref33, 1),
			    mainDirection = _ref34[0];

			var bb = this._bb;
			switch (mainDirection) {
				case 'lr':
					bb.left = bb.right = toStart ? bb.left : bb.right;
					bb.width = 0;
					break;
				case 'rl':
					bb.left = bb.right = toStart ? bb.right : bb.left;
					bb.width = 0;
					break;
				case 'tb':
					bb.top = bb.bottom = toStart ? bb.top : bb.bottom;
					bb.height = 0;
					break;
				case 'bt':
					bb.top = bb.bottom = toStart ? bb.bottom : bb.top;
					bb.height = 0;
					break;
			}
			return bb;
		}
	}, {
		key: 'forwardEnd',
		value: function forwardEnd() {
			try {
				this.setEnd(this.endContainer, this.endOffset + 1);
			} catch (error) {
				var nextText = new N(this.endContainer).getNextText(this.container);
				if (!nextText) {
					return false;
				}
				this.setEnd(nextText.node, 0);
			}
			return true;
		}
	}, {
		key: 'backwardStart',
		value: function backwardStart() {
			if (0 < this.startOffset) {
				this.setStart(this.startContainer, this.startOffset - 1);
			} else {
				var previousText = new N(this.startContainer).getPreviousText(this.container);
				if (!previousText) {
					return false;
				}
				var endContainer = this.endContainer,
				    endOffset = this.endOffset;

				this.range.selectNodeContents(previousText.node);
				this.set(this.endContainer, this.endOffset, endContainer, endOffset);
			}
			return true;
		}
	}, {
		key: 'product',
		value: function product(direction, crossDirection) {
			var textDirection = (this.textDirection || this.container.textDirection)[crossDirection ? 1 : 0];
			if (textDirection.slice(-1) === direction[0]) {
				return 1;
			} else if (textDirection[0] === direction[0]) {
				return -1;
			}
			return 0;
		}
	}, {
		key: 'modify',
		value: function modify(alter, direction) {
			var anchorBB = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bb;

			var mainProduct = this.product(direction);
			var forward = void 0;
			if (mainProduct === 1) {
				this.forwardChar();
				forward = true;
			} else if (mainProduct === -1) {
				this.backwardChar();
				forward = false;
			} else {
				var crossProduct = this.product(direction, true);
				if (crossProduct === 1) {
					this.forwardLine(direction, anchorBB);
					forward = true;
				} else {
					this.backwardLine(direction, anchorBB);
					forward = false;
				}
			}
			if (alter === 'move') {
				this.range.collapse(!forward);
			}
			return this;
		}
	}, {
		key: 'forwardChar',
		value: function forwardChar() {
			if (!this.forwardEnd()) {
				this.container.emit('range:last');
			}
		}
	}, {
		key: 'backwardChar',
		value: function backwardChar() {
			if (!this.backwardStart()) {
				this.container.emit('range:first');
			}
		}
	}, {
		key: 'getXY',
		value: function getXY(bb) {
			return {
				x: bb.left,
				y: bb.top
			};
		}
	}, {
		key: 'getTarget',
		value: function getTarget(direction) {
			var anchorBB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bb;

			var xy = this.getXY(anchorBB);
			var d = void 0;
			switch (direction) {
				case 'left':
					d = anchorBB.width;
					xy.x -= d;
					break;
				case 'right':
					d = anchorBB.width;
					xy.x += d;
					break;
				case 'bottom':
					d = anchorBB.height;
					xy.y += d;
					break;
				case 'top':
					d = anchorBB.height;
					xy.y -= d;
					break;
			}
			xy.d = d;
			return xy;
		}
	}, {
		key: 'getChecker',
		value: function getChecker(direction, forward) {
			var _this5 = this;

			var anchorBB = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bb;

			var _getTarget = this.getTarget(direction, anchorBB),
			    targetX = _getTarget.x,
			    targetY = _getTarget.y,
			    threshold = _getTarget.d;

			var _ref35 = this.textDirection || this.container.textDirection,
			    _ref36 = _slicedToArray(_ref35, 1),
			    mainDirection = _ref36[0];

			var vertical = /^[bt]/.test(mainDirection);
			var candidates = [];
			var candidates2 = [];
			var lastCandidate = void 0;
			var compare = function compare(x, y, useStart) {
				var dx = x - targetX;
				var dy = y - targetY;
				var d = Math.hypot(dx, dy);
				var crossD = Math.abs(vertical ? dx : dy);
				var candidate = useStart ? [d, _this5.startContainer, _this5.startOffset, crossD] : [d, _this5.endContainer, _this5.endOffset, crossD];
				if (d < threshold) {
					candidates.push(candidate);
				} else if (lastCandidate && lastCandidate[3] !== crossD) {
					candidates2.push(forward ? lastCandidate : candidate);
				}
				lastCandidate = candidate;
			};
			var checkEnds = void 0;
			switch (mainDirection) {
				case 'lr':
					checkEnds = forward ? function (bb) {
						compare(bb.left, bb.top, true);
						compare(bb.right, bb.top, false);
					} : function (bb) {
						compare(bb.right, bb.top, false);
						compare(bb.left, bb.top, true);
					};
					break;
				case 'rl':
					checkEnds = forward ? function (bb) {
						compare(bb.right, bb.top, true);
						compare(bb.left, bb.top, false);
					} : function (bb) {
						compare(bb.left, bb.top, false);
						compare(bb.right, bb.top, true);
					};
					break;
				case 'tb':
					checkEnds = forward ? function (bb) {
						compare(bb.left, bb.top, true);
						compare(bb.left, bb.bottom, false);
					} : function (bb) {
						compare(bb.left, bb.bottom, false);
						compare(bb.left, bb.top, true);
					};
					break;
				case 'bt':
					checkEnds = forward ? function (bb) {
						compare(bb.left, bb.bottom, true);
						compare(bb.left, bb.top, false);
					} : function (bb) {
						compare(bb.left, bb.top, false);
						compare(bb.left, bb.bottom, true);
					};
					break;
			}
			function selectNearest(candidates) {
				return candidates.sort(function (_ref37, _ref38) {
					var _ref40 = _slicedToArray(_ref37, 1),
					    a = _ref40[0];

					var _ref39 = _slicedToArray(_ref38, 1),
					    b = _ref39[0];

					return a < b ? -1 : 1;
				}).shift().slice(1, 3);
			}
			return assign(function () {
				var canditateCount = candidates.length;
				var bb = _this5._bb;
				if (0 < bb.width && 0 < bb.height) {
					checkEnds(bb);
					if (0 < canditateCount && canditateCount === candidates.length) {
						return selectNearest(candidates);
					} else if (1 < candidates2.length) {
						return selectNearest(candidates2);
					}
				}
			}, {
				checkEnds: checkEnds,
				anchorBB: anchorBB,
				target: {
					x: targetX,
					y: targetY
				},
				onEnd: function onEnd() {
					if (0 < candidates.length) {
						return selectNearest(candidates);
					}
				}
			});
		}
	}, {
		key: 'forwardLine',
		value: function forwardLine(direction, anchorBB) {
			var cloned = this.clone();
			var check = cloned.getChecker(direction, true, anchorBB);
			while (1) {
				cloned.setStart(cloned.endContainer, cloned.endOffset);
				if (cloned.forwardEnd()) {
					if (cloned.isInSameNode && !cloned.isLineBreak) {
						var result = check();
						if (result) {
							this.setEnd(result[0], result[1]);
							return;
						}
					}
				} else {
					break;
				}
			}
			this.container.emit('range:lastline', check.anchorBB);
		}
	}, {
		key: 'backwardLine',
		value: function backwardLine(direction, anchorBB) {
			var cloned = this.clone();
			var check = cloned.getChecker(direction, false, anchorBB);
			while (1) {
				cloned.setEnd(cloned.startContainer, cloned.startOffset);
				if (cloned.backwardStart()) {
					if (cloned.isInSameNode && !cloned.isLineBreak) {
						var _result = check();
						if (_result) {
							this.setStart(_result[0], _result[1]);
							return;
						}
					}
				} else {
					break;
				}
			}
			var result = check.onEnd();
			if (result) {
				this.setStart(result[0], result[1]);
			} else {
				this.container.emit('range:firstline', check.anchorBB);
			}
		}
	}, {
		key: 'collapsed',
		get: function get() {
			return this.range.collapsed;
		}
	}, {
		key: 'startContainer',
		get: function get() {
			return this.range.startContainer;
		}
	}, {
		key: 'startOffset',
		get: function get() {
			return this.range.startOffset;
		}
	}, {
		key: 'endContainer',
		get: function get() {
			return this.range.endContainer;
		}
	}, {
		key: 'endOffset',
		get: function get() {
			return this.range.endOffset;
		}
	}, {
		key: 'content',
		get: function get() {
			return this.range.cloneContents();
		}
	}, {
		key: 'textContent',
		get: function get() {
			return this.content.textContent;
		}
	}, {
		key: '_bb',
		get: function get() {
			var rect = this.range.getBoundingClientRect();
			return {
				left: rect.left,
				right: rect.right,
				top: rect.top,
				bottom: rect.bottom,
				width: rect.width,
				height: rect.height
			};
		}
	}, {
		key: 'isInSameNode',
		get: function get() {
			return this.startContainer === this.endContainer;
		}
	}, {
		key: 'isLineBreak',
		get: function get() {
			return (/\r|\n/.test(this.startContainer.textContent[this.startOffset])
			);
		}
	}, {
		key: 'bb',
		get: function get() {
			var cloned = this.clone();
			if (cloned.collapsed) {
				var startContainer = cloned.startContainer,
				    startOffset = cloned.startOffset,
				    endContainer = cloned.endContainer,
				    endOffset = cloned.endOffset;

				while (cloned.forwardEnd()) {
					if (!cloned.isLineBreak) {
						return cloned.getCollapsedBB(true);
					}
				}
				cloned.set(startContainer, startOffset, endContainer, endOffset);
				while (cloned.backwardStart()) {
					return cloned.getCollapsedBB(false);
				}
				var text = new N('A');
				cloned.container.append(text);
				cloned.range.selectNodeContents(text.node);
				var rect = cloned.getCollapsedBB(true);
				text.remove();
				return rect;
			} else {
				return cloned._bb;
			}
		}
	}]);

	return J0Range;
}();

var getBody = new x$3(function (resolve) {
	var interval = 50;
	function check() {
		var body = x$4.body;

		if (body) {
			resolve(new N(body));
		} else {
			x$27(check, interval);
		}
	}
	x$27(check);
});

function forEachItem(data, fn) {
	if (isArray(data)) {
		data.forEach(function (args) {
			fn(args);
		});
	} else if (isObject(data)) {
		keys(data).forEach(function (key) {
			fn([key, data[key]]);
		});
	}
}

function callMethod(event) {
	return this[event.type](event);
}

var nodeKey = x();

function wrap(element) {
	return new N(element);
}

function _find(selector, rootElement) {
	var element = (rootElement ? wrap(rootElement).node : x$4).querySelector(selector);
	return element ? wrap(element) : null;
}

function _findAll(selector, rootElement) {
	var list = (rootElement ? wrap(rootElement).node : x$4).querySelectorAll(selector);
	var result = [];
	for (var i = 0, length = list.length; i < length; i++) {
		result[i] = wrap(list[i]);
	}
	return result;
}

var N = function () {
	function N() {
		var _this6 = this;

		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, N);

		assign(this, {
			listeners: new x$36()
		});
		if (source instanceof N) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = x$4.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			var _ref41 = source || {},
			    t = _ref41.t,
			    a = _ref41.a,
			    c = _ref41.c,
			    e = _ref41.e,
			    n = _ref41.n,
			    o = _ref41.o;

			this[nodeKey] = wrap(n ? x$4.createElementNS(n, t, o) : x$4.createElement(t || 'div')).node;
			if (c) {
				this.append.apply(this, _toConsumableArray(c));
			}
			forEachItem(e, function (args) {
				_this6.on.apply(_this6, _toConsumableArray(isArray(args) ? args : [args]));
			});
			forEachItem(a, function (args) {
				_this6.setAttribute.apply(_this6, _toConsumableArray(args));
			});
		}
	}

	_createClass(N, [{
		key: 'find',
		value: function find(selector) {
			return _find(selector, this);
		}
	}, {
		key: 'findAll',
		value: function findAll(selector) {
			return _findAll(selector, this);
		}
	}, {
		key: 'equals',
		value: function equals(element) {
			return this.node === wrap(element).node;
		}
	}, {
		key: 'setText',
		value: function setText(text) {
			this.node.textContent = text;
			return this;
		}
	}, {
		key: 'setHTML',
		value: function setHTML(html) {
			this.node.innerHTML = html;
			return this;
		}
	}, {
		key: 'setParent',
		value: function setParent(source) {
			wrap(source).append(this);
			return this;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(newElement, referenceElement) {
			this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
		}
	}, {
		key: 'setPrevious',
		value: function setPrevious() {
			for (var _len18 = arguments.length, elements = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
				elements[_key18] = arguments[_key18];
			}

			while (0 < elements.length) {
				var element = wrap(elements.shift());
				this.parent.insertBefore(element, this);
			}
			return this;
		}
	}, {
		key: 'setNext',
		value: function setNext() {
			var lastElement = this.next;

			for (var _len19 = arguments.length, elements = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
				elements[_key19] = arguments[_key19];
			}

			while (0 < elements.length) {
				var element = wrap(elements.pop());
				this.parent.insertBefore(element, lastElement);
				lastElement = element;
			}
			return this;
		}
	}, {
		key: 'setFirstChild',
		value: function setFirstChild(element) {
			var firstChild = this.firstChild;

			if (firstChild) {
				firstChild.setPrevious(element);
			} else {
				this.append(element);
			}
			return this;
		}
	}, {
		key: 'setLastChild',
		value: function setLastChild(element) {
			var lastChild = this.lastChild;

			if (lastChild) {
				this.lastChild.setNext(element);
			} else {
				this.append(element);
			}
			return this;
		}
	}, {
		key: 'replaceChild',
		value: function replaceChild(newChild, oldChild) {
			this.node.replaceChild(wrap(newChild).node, wrap(oldChild).node);
			return this;
		}
	}, {
		key: 'replaceWith',
		value: function replaceWith() {
			for (var _len20 = arguments.length, newChilds = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
				newChilds[_key20] = arguments[_key20];
			}

			var lastNewChild = wrap(newChilds.pop());
			this.parent.replaceChild(lastNewChild, this);
			lastNewChild.setPrevious.apply(lastNewChild, newChilds);
		}
	}, {
		key: 'prepend',
		value: function prepend() {
			var _this7 = this;

			for (var _len21 = arguments.length, elements = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
				elements[_key21] = arguments[_key21];
			}

			elements.forEach(function (element) {
				_this7.setFirstChild(element);
			});
			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var node = this.node;

			for (var _len22 = arguments.length, elements = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
				elements[_key22] = arguments[_key22];
			}

			elements.forEach(function (element) {
				if (isString(element) || element) {
					node.appendChild(wrap(element).node);
				}
			});
			return this;
		}
	}, {
		key: 'remove',
		value: function remove(delay) {
			var _this8 = this;

			if (0 < delay) {
				x$27(function () {
					_this8.remove();
				}, delay);
			} else {
				var parent = this.parent;

				if (parent) {
					parent.node.removeChild(this.node);
				}
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
			for (var _len23 = arguments.length, value = Array(_len23 > 1 ? _len23 - 1 : 0), _key23 = 1; _key23 < _len23; _key23++) {
				value[_key23 - 1] = arguments[_key23];
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
		key: 'removeAttribute',
		value: function removeAttribute() {
			for (var _len24 = arguments.length, names = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
				names[_key24] = arguments[_key24];
			}

			var _iteratorNormalCompletion24 = true;
			var _didIteratorError24 = false;
			var _iteratorError24 = undefined;

			try {
				for (var _iterator24 = names[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
					var name = _step24.value;

					this.node.removeAttribute(name);
				}
			} catch (err) {
				_didIteratorError24 = true;
				_iteratorError24 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion24 && _iterator24.return) {
						_iterator24.return();
					}
				} finally {
					if (_didIteratorError24) {
						throw _iteratorError24;
					}
				}
			}

			return this;
		}
	}, {
		key: 'getMethodCaller',
		value: function getMethodCaller(methodName) {
			if (!isFunction(this[methodName])) {
				throw new Error(this.constructor.name + ' doesn\'t have ' + methodName + ' method');
			}
			return callMethod;
		}
	}, {
		key: 'once',
		value: function once(eventName) {
			var _this9 = this;

			var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMethodCaller(eventName);
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			var item = [eventName, fn];
			var wrapped = function wrapped(event) {
				_this9.node.removeEventListener(eventName, wrapped);
				_this9.listeners.delete(item);
				call(fn, _this9, [event]);
			};
			item.push(wrapped);
			addEventListenerWithOptions(this.node, eventName, wrapped, assign({ passive: true }, options));
			this.listeners.add(item);
			return this;
		}
	}, {
		key: 'on',
		value: function on(eventName) {
			var _this10 = this;

			var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMethodCaller(eventName);
			var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

			if (N.eventFilter && N.eventFilter.call(this, eventName, fn)) {
				return this;
			}
			var wrapped = function wrapped(event) {
				call(fn, _this10, [event]);
			};
			addEventListenerWithOptions(this.node, eventName, wrapped, assign({ passive: true }, options));
			this.listeners.add([eventName, fn, wrapped]);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventName, fn) {
			var _this11 = this;

			this.listeners.forEach(function (item) {
				var _item = _slicedToArray(item, 3),
				    e = _item[0],
				    f = _item[1],
				    wrapped = _item[2];

				if (e === eventName && (!fn || fn === f)) {
					_this11.node.removeEventListener(e, wrapped);
					_this11.listeners.delete(item);
				}
			});
			return this;
		}
	}, {
		key: 'emit',
		value: function emit(eventName, detail) {
			var event = new x$30(eventName, { detail: detail });
			this.node.dispatchEvent(event);
			return this;
		}
	}, {
		key: 'setStyle',
		value: function setStyle(styles) {
			assign(this.style, styles);
			return this;
		}
	}, {
		key: 'addClass',
		value: function addClass() {
			var _this12 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
					args[_key25] = arguments[_key25];
				}

				args.forEach(function (arg) {
					_this12.classList.add(arg);
				});
			}
			return this;
		}
	}, {
		key: 'removeClass',
		value: function removeClass() {
			var _this13 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
					args[_key26] = arguments[_key26];
				}

				args.forEach(function (arg) {
					_this13.classList.remove(arg);
				});
			}
			return this;
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass() {
			var _this14 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len27 = arguments.length, args = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
					args[_key27] = arguments[_key27];
				}

				args.forEach(function (arg) {
					_this14.classList.toggle(arg);
				});
			}
			return this;
		}
	}, {
		key: 'hasClass',
		value: function hasClass() {
			var _this15 = this;

			var classList = this.classList;

			for (var _len28 = arguments.length, args = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
				args[_key28] = arguments[_key28];
			}

			if (classList) {
				return args.every(function (arg) {
					return _this15.classList.contains(arg);
				});
			}
			return args.length === 0;
		}
	}, {
		key: 'clone',
		value: function clone() {
			var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

			return wrap(this.node.cloneNode(deep));
		}
	}, {
		key: 'toObject',
		value: function toObject() {
			if (this.isTextNode) {
				return this.text;
			} else if (this.isElementNode) {
				var result = {};
				var tagName = this.tagName,
				    attributes = this.attributes,
				    childNodes = this.childNodes;

				if (tagName !== 'div') {
					result.t = tagName;
				}
				if (0 < attributes.size) {
					result.a = x$34.from(attributes);
				}
				if (0 < childNodes.length) {
					result.c = childNodes.map(function (node) {
						return node.toObject();
					});
				}
				return result;
			}
			return null;
		}
	}, {
		key: 'normalize',
		value: function normalize() {
			this.node.normalize();
			return this;
		}
	}, {
		key: 'walk',
		value: function walk(fn) {
			var childNodes = this.childNodes;

			for (var i = 0, length = childNodes.length; i < length; i++) {
				var node = childNodes[i];
				if (fn(node)) {
					return true;
				}
				if (node.walk(fn)) {
					return true;
				}
			}
			return false;
		}
	}, {
		key: 'getForward',
		value: function getForward(limit) {
			var element = this.firstChild;
			if (element) {
				return element;
			}
			element = this;
			while (element) {
				if (element.equals(limit)) {
					return null;
				}
				var _element = element,
				    next = _element.next;

				if (next) {
					return next;
				}
				element = element.parent;
			}
			return null;
		}
	}, {
		key: 'getBackward',
		value: function getBackward(limit) {
			var element = this.lastChild;
			if (element) {
				return element;
			}
			element = this;
			while (element) {
				if (element.equals(limit)) {
					return null;
				}
				var _element2 = element,
				    previous = _element2.previous;

				if (previous) {
					return previous;
				}
				element = element.parent;
			}
			return null;
		}
	}, {
		key: 'walkForward',
		value: function walkForward(fn, limit, callTheFunction) {
			if (this.equals(limit)) {
				return null;
			}
			if (callTheFunction && fn(this)) {
				return this;
			}
			var forward = this.getForward(limit);
			if (forward) {
				return forward.walkForward(fn, limit, true);
			}
		}
	}, {
		key: 'walkBackward',
		value: function walkBackward(fn, limit, callTheFunction) {
			if (this.equals(limit)) {
				return null;
			}
			if (callTheFunction && fn(this)) {
				return this;
			}
			var backward = this.getBackward(limit);
			if (backward) {
				return backward.walkBackward(fn, limit, true);
			}
		}
	}, {
		key: 'forEachAncestor',
		value: function forEachAncestor(fn) {
			var skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

			var element = this;
			while (element && !element.equals(x$4)) {
				if (--skip < 0) {
					if (fn(element)) {
						break;
					}
				}
				element = element.parent;
			}
		}
	}, {
		key: 'getNextText',
		value: function getNextText(limit) {
			return this.walkForward(function (node) {
				return node.isTextNode;
			}, limit);
		}
	}, {
		key: 'getPreviousText',
		value: function getPreviousText(limit) {
			return this.walkBackward(function (node) {
				return node.isTextNode;
			}, limit);
		}
	}, {
		key: 'modifySelection',
		value: function modifySelection(expand, direction, anchorBB, textDirection) {
			var selection = x$41();
			var range = new J0Range(selection.getRangeAt(0), this, textDirection);
			selection.removeAllRanges();
			range.modify(expand ? 'expand' : 'move', direction, anchorBB);
			selection.addRange(range.range);
			return this;
		}
	}, {
		key: 'belongsTo',
		value: function belongsTo(anotherNode) {
			var result = false;
			this.forEachAncestor(function (node) {
				result = node.equals(anotherNode);
				return result;
			});
			return result;
		}
	}, {
		key: 'contains',
		value: function contains(anotherNode) {
			return new N(anotherNode).belongsTo(this);
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
		}
	}, {
		key: 'html',
		get: function get() {
			return this.node.innerHTML;
		}
	}, {
		key: 'parent',
		get: function get() {
			var parentNode = this.node.parentNode;

			return parentNode && wrap(parentNode);
		}
	}, {
		key: 'previous',
		get: function get() {
			var previousSibling = this.node.previousSibling;

			return previousSibling ? wrap(previousSibling) : null;
		}
	}, {
		key: 'next',
		get: function get() {
			var nextSibling = this.node.nextSibling;

			return nextSibling ? wrap(nextSibling) : null;
		}
	}, {
		key: 'childNodes',
		get: function get() {
			return x$34.from(this.node.childNodes).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return x$34.from(this.node.children).map(wrap);
		}
	}, {
		key: 'firstChild',
		get: function get() {
			var firstChild = this.node.firstChild;

			return firstChild ? wrap(firstChild) : null;
		}
	}, {
		key: 'lastChild',
		get: function get() {
			var lastChild = this.node.lastChild;

			return lastChild ? wrap(lastChild) : null;
		}
	}, {
		key: 'bb',
		get: function get() {
			return this.node.getBoundingClientRect();
		}
	}, {
		key: 'attributes',
		get: function get() {
			var result = new x$37();
			var attributes = this.node.attributes;

			if (attributes) {
				var _iteratorNormalCompletion25 = true;
				var _didIteratorError25 = false;
				var _iteratorError25 = undefined;

				try {
					for (var _iterator25 = attributes[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
						var _ref42 = _step25.value;
						var name = _ref42.name;
						var _value = _ref42.value;

						result.set(name, _value);
					}
				} catch (err) {
					_didIteratorError25 = true;
					_iteratorError25 = err;
				} finally {
					try {
						if (!_iteratorNormalCompletion25 && _iterator25.return) {
							_iterator25.return();
						}
					} finally {
						if (_didIteratorError25) {
							throw _iteratorError25;
						}
					}
				}
			}
			return result;
		}
	}, {
		key: 'style',
		get: function get() {
			return this.node.style;
		}
	}, {
		key: 'classList',
		get: function get() {
			return this.node.classList;
		}
	}, {
		key: 'computedStyle',
		get: function get() {
			return x$38(this.node);
		}
	}, {
		key: 'tagName',
		get: function get() {
			return ('' + (this.node.tagName || '')).toLowerCase();
		}
	}, {
		key: 'nodeType',
		get: function get() {
			return this.node.nodeType;
		}
	}, {
		key: 'isElementNode',
		get: function get() {
			return this.nodeType === x$35.ELEMENT_NODE;
		}
	}, {
		key: 'isTextNode',
		get: function get() {
			return this.nodeType === x$35.TEXT_NODE;
		}
	}, {
		key: 'focused',
		get: function get() {
			return this.equals(x$4.activeElement);
		}
	}, {
		key: 'textDirection',
		get: function get() {
			var node = this.node;
			if (!node._textDirection) {
				var contenteditable = this.getAttribute('contenteditable');
				if (!contenteditable) {
					this.setAttribute('contenteditable', 'true');
				}
				var texts = ['A', 'B', 'M', 'M'].map(function (text) {
					return new N(text).node;
				});
				var br = { t: 'br' };
				var _elements = [texts[3], br, texts[2], br, texts[1], texts[0]].map(function (element) {
					return new N(element);
				});
				this.prepend.apply(this, _toConsumableArray(_elements));

				var _texts$map = texts.map(function (textNode) {
					var range = x$4.createRange();
					range.setStart(textNode, 0);
					range.setEnd(textNode, 1);
					var rect = range.getBoundingClientRect();
					return [(rect.left + rect.right) / 2, (rect.top + rect.bottom) / 2];
				}),
				    _texts$map2 = _slicedToArray(_texts$map, 4),
				    _texts$map2$ = _slicedToArray(_texts$map2[0], 2),
				    x1 = _texts$map2$[0],
				    y1 = _texts$map2$[1],
				    _texts$map2$2 = _slicedToArray(_texts$map2[1], 2),
				    x2 = _texts$map2$2[0],
				    y2 = _texts$map2$2[1],
				    _texts$map2$3 = _slicedToArray(_texts$map2[2], 2),
				    x3 = _texts$map2$3[0],
				    y3 = _texts$map2$3[1],
				    _texts$map2$4 = _slicedToArray(_texts$map2[3], 2),
				    x4 = _texts$map2$4[0],
				    y4 = _texts$map2$4[1];

				_elements.forEach(function (element) {
					element.remove();
				});
				if (!contenteditable) {
					this.removeAttribute('contenteditable');
				}
				node._textDirection = [[y2 - y1, x2 - x1], [y4 - y3, x4 - x3]].map(function (_ref43) {
					var _ref44 = _slicedToArray(_ref43, 2),
					    y = _ref44[0],
					    x$$1 = _ref44[1];

					var arg = x$40.atan2(y, x$$1) / x$40.PI;
					var absArg = arg < 0 ? -arg : arg;
					if (absArg < 0.25) {
						return 'lr';
					} else if (0.75 < absArg) {
						return 'rl';
					} else if (arg < 0) {
						return 'bt';
					} else {
						return 'tb';
					}
				});
			}
			return node._textDirection;
		}
	}], [{
		key: 'ready',
		value: function () {
			var _ref45 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18(fn) {
				var body;
				return regeneratorRuntime.wrap(function _callee18$(_context18) {
					while (1) {
						switch (_context18.prev = _context18.next) {
							case 0:
								_context18.next = 2;
								return getBody;

							case 2:
								body = _context18.sent;

								if (fn) {
									fn(body);
								}
								return _context18.abrupt('return', body);

							case 5:
							case 'end':
								return _context18.stop();
						}
					}
				}, _callee18, this);
			}));

			function ready(_x51) {
				return _ref45.apply(this, arguments);
			}

			return ready;
		}()
	}, {
		key: 'wrap',
		get: function get() {
			return wrap;
		}
	}, {
		key: 'find',
		get: function get() {
			return _find;
		}
	}, {
		key: 'findAll',
		get: function get() {
			return _findAll;
		}
	}]);

	return N;
}();

function test$26(forEach) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'DOMTokenList.prototype.forEach';


	describe(name, function () {

		it('should iterate over classList', function () {
			var class1 = '1_' + x$26.now();
			var class2 = '2_' + x$26.now();
			var class3 = '3_' + x$26.now();
			var element = new N({
				a: [['class', class1, class2, class3]]
			});
			var actual = [];
			var classList = element.classList;

			classList.forEach(function () {
				for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
					args[_key29] = arguments[_key29];
				}

				actual.push(args);
			});
			var expected = [[class1, 0, classList], [class2, 1, classList], [class3, 2, classList]];
			assert.deepEqual(actual, expected);
		});
	});
}

test$26(x$33.prototype.forEach);

function emitAll(eventName, data, selector, rootElement) {
	N.findAll(selector, rootElement).forEach(function (element) {
		element.emit(eventName, data);
	});
}

describe('emitAll', function () {

	it('should emit for each element', function () {
		var results = [];
		function fn(event) {
			results.push([this, event.detail]);
		}
		var className = 'class' + Date.now();
		var eventName = 'event' + Date.now();
		var eventData = 'eventData' + Date.now();
		var element1 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		var element2 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		var element3 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		var element4 = new N({
			a: [['class', className]],
			e: [[eventName, fn]]
		});
		var element5 = new N({
			a: [['class', className]],
			c: [element3, element4],
			e: [[eventName, fn]]
		});
		var element = new N({
			c: [element1, element2, element5]
		});
		emitAll(eventName, eventData, '.' + className, element);
		var expected = [element1, element2, element5, element3, element4];
		assert.equal(results.length, expected.length);
		results.forEach(function (_ref46, index) {
			var _ref47 = _slicedToArray(_ref46, 2),
			    element = _ref47[0],
			    data = _ref47[1];

			assert.equal(data, eventData);
			assert.equal(element.equals(expected[index]), true);
		});
	});
});

var listenersKey = x();

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this[listenersKey] = new x$36();
	}

	_createClass(EventEmitter, [{
		key: 'emit',
		value: function emit(type) {
			var _this16 = this;

			for (var _len30 = arguments.length, data = Array(_len30 > 1 ? _len30 - 1 : 0), _key30 = 1; _key30 < _len30; _key30++) {
				data[_key30 - 1] = arguments[_key30];
			}

			this[listenersKey].forEach(function (item, index, listeners) {
				var _item2 = _slicedToArray(item, 3),
				    eventType = _item2[0],
				    fn = _item2[1],
				    once = _item2[2];

				if (eventType === type) {
					if (once) {
						listeners.delete(item);
					}
					call(fn, _this16, data);
				}
			});
			return this;
		}
	}, {
		key: 'off',
		value: function off(type, targetFn) {
			this[listenersKey].forEach(function (item, index, listeners) {
				var _item3 = _slicedToArray(item, 2),
				    eventType = _item3[0],
				    fn = _item3[1];

				if (eventType === type && (!targetFn || fn === targetFn)) {
					listeners.delete(item);
				}
			});
			return this;
		}
	}, {
		key: 'on',
		value: function on(type, fn) {
			this[listenersKey].add([type, fn]);
			return this;
		}
	}, {
		key: 'once',
		value: function once(type, fn) {
			this[listenersKey].add([type, fn, true]);
			return this;
		}
	}]);

	return EventEmitter;
}();

describe('EventEmitter', function () {

	it('should call listeners', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.on(name1, function () {
			for (var _len31 = arguments.length, data = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
				data[_key31] = arguments[_key31];
			}

			results.push([data, '1']);
		}).on(name1, function () {
			for (var _len32 = arguments.length, data = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
				data[_key32] = arguments[_key32];
			}

			results.push([data, '2']);
		}).on(name2, function () {
			for (var _len33 = arguments.length, data = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
				data[_key33] = arguments[_key33];
			}

			results.push([data, '3']);
		}).on(name2, function () {
			for (var _len34 = arguments.length, data = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
				data[_key34] = arguments[_key34];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value2, value3], '1'], [[value2, value3], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should call listeners once', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len35 = arguments.length, data = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
				data[_key35] = arguments[_key35];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len36 = arguments.length, data = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
				data[_key36] = arguments[_key36];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len37 = arguments.length, data = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
				data[_key37] = arguments[_key37];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len38 = arguments.length, data = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
				data[_key38] = arguments[_key38];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should call listeners once even if the functions are same', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		var count = 0;
		function listener() {
			for (var _len39 = arguments.length, data = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
				data[_key39] = arguments[_key39];
			}

			results.push([data, count++]);
		}
		emitter.once(name1, listener).once(name1, listener).once(name2, listener).once(name2, listener).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], 0], [[value1, value2], 1], [[value3, value1], 2], [[value3, value1], 3]]);
	});

	it('should remove listeners', function () {
		var emitter = new EventEmitter();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len40 = arguments.length, data = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
				data[_key40] = arguments[_key40];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len41 = arguments.length, data = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
				data[_key41] = arguments[_key41];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len42 = arguments.length, data = Array(_len42), _key42 = 0; _key42 < _len42; _key42++) {
				data[_key42] = arguments[_key42];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len43 = arguments.length, data = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
				data[_key43] = arguments[_key43];
			}

			results.push([data, '4']);
		}).off(name2).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2']]);
	});
});

var StringList = function () {
	function StringList(iterable) {
		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion26 = true;
			var _didIteratorError26 = false;
			var _iteratorError26 = undefined;

			try {
				for (var _iterator26 = iterable[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
					var _ref48 = _step26.value;

					var _ref49 = _slicedToArray(_ref48, 2);

					var key = _ref49[0];
					var value = _ref49[1];

					this.append(key, value);
				}
			} catch (err) {
				_didIteratorError26 = true;
				_iteratorError26 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion26 && _iterator26.return) {
						_iterator26.return();
					}
				} finally {
					if (_didIteratorError26) {
						throw _iteratorError26;
					}
				}
			}
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
			return this.data.findIndex(function (_ref50) {
				var _ref51 = _slicedToArray(_ref50, 1),
				    itemName = _ref51[0];

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
			this.data.push([name, value]);
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
			this.data = this.data.filter(function (_ref52) {
				var _ref53 = _slicedToArray(_ref52, 1),
				    itemName = _ref53[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = this.data.find(function (_ref54) {
				var _ref55 = _slicedToArray(_ref54, 1),
				    itemName = _ref55[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			this.data.forEach(function (_ref56) {
				var _ref57 = _slicedToArray(_ref56, 2),
				    itemName = _ref57[0],
				    value = _ref57[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref58) {
				var _ref59 = _slicedToArray(_ref58, 2),
				    name = _ref59[0],
				    _ref59$ = _ref59[1],
				    value = _ref59$ === undefined ? '' : _ref59$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorSymbol]();
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

				return {
					value: value && value[0],
					done: done
				};
			});
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next5 = iterator.next(),
				    value = _iterator$next5.value,
				    done = _iterator$next5.done;

				return {
					value: value && value[1],
					done: done
				};
			});
		}
	}, {
		key: iteratorSymbol,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

function toLowerCase(x) {
	return x ? x.toLowerCase() : '';
}

var Headers$1 = function (_StringList) {
	_inherits(Headers$1, _StringList);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			keys(headers).forEach(function (key) {
				init.push([key, headers[key]]);
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
			var _this18 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			/* eslint-disable no-constant-condition */
			return new Iterator(function () {
				while (1) {
					var _iterator$next6 = iterator.next(),
					    value = _iterator$next6.value,
					    done = _iterator$next6.done;

					var key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						history.push(key);
						return {
							value: [key, _this18.get(key)],
							done: done
						};
					}
				}
			});
			/* eslint-enable no-constant-condition */
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

		var _this19 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this19.inheritFrom(input, body, init);
		} else {
			_this19.url = '' + input;
		}
		_this19.credentials = init.credentials || _this19.credentials || 'omit';
		if (init.headers || !_this19.headers) {
			_this19.headers = new Headers$1(init.headers);
		}
		_this19.method = (init.method || _this19.method || 'GET').toUpperCase();
		_this19.mode = init.mode || _this19.mode || null;
		_this19.referrer = null;
		if ((_this19.method === 'GET' || _this19.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this19.initBody(body);
		return _this19;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref60) {
			var headers = _ref60.headers;

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

		var _this20 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this20.type = 'default';
		_this20.status = 'status' in init ? init.status : minOkStatus;
		_this20.ok = _this20.status >= minOkStatus && _this20.status < maxOkStatus;
		_this20.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this20.headers = new Headers$1(init.headers);
		_this20.url = init.url || '';
		_this20.initBody(body);
		return _this20;
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

var x$42 = Headers;

function parse$2(rawHeaders) {
	var headers = new x$42();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(key.trim(), parts.join(':').trim());
		}
	});
	return headers;
}

var x$43 = XMLHttpRequest;

function fetch$2(input, init, cb) {
	return new x$3(function (resolve, reject) {
		var request = new Request$1(input, init);
		var xhr = new x$43();
		if (isFunction(cb)) {
			cb(xhr);
		}
		xhr.onload = function () {
			var options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parse$2(xhr.getAllResponseHeaders() || '')
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
		var _iteratorNormalCompletion27 = true;
		var _didIteratorError27 = false;
		var _iteratorError27 = undefined;

		try {
			for (var _iterator27 = request.headers.entries()[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
				var _ref61 = _step27.value;

				var _ref62 = _slicedToArray(_ref61, 2);

				var name = _ref62[0];
				var value = _ref62[1];

				xhr.setRequestHeader(name, value);
			}
		} catch (err) {
			_didIteratorError27 = true;
			_iteratorError27 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion27 && _iterator27.return) {
					_iterator27.return();
				}
			} finally {
				if (_didIteratorError27) {
					throw _iteratorError27;
				}
			}
		}

		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

function tests$2(fetch) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fetch';


	describe(name, function () {

		it('should get this page', function () {
			return fetch('./index.html').then(function (response) {
				return response.text();
			}).then(function (text) {
				assert.equal(/<!doctype/.test(text), true);
			});
		});

		it('should get json', function () {
			return fetch(x$4.getElementById('root').textContent + '/fetch/test.json').then(function (response) {
				return response.json();
			}).then(function (data) {
				assert.deepEqual(data, { a: 'b' });
			});
		});
	});
}

tests$2(fetch$2, 'J0Fetch');

tests$2(x$6);

var century = 100;
var shortenedLength = 3;

var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function format(src, template, utc) {
	var date = new x$26(src);
	if (0 < date) {
		var methodPrefix = 'get' + (utc ? 'UTC' : '');
		var Y = date[methodPrefix + 'FullYear']();
		var M = date[methodPrefix + 'Month']();
		var D = date[methodPrefix + 'Date']();
		var d = date[methodPrefix + 'Day']();
		var h = date[methodPrefix + 'Hours']();
		var m = date[methodPrefix + 'Minutes']();
		var s = date[methodPrefix + 'Seconds']();
		return template.replace(/%(Y+|M+|D+|d+|h+|m+|s+)/g, function (match, type) {
			switch (type) {
				case 'YYYY':
					return '' + Y;
				case 'YY':
					return ('' + Y % century).padStart(2, '0');
				case 'MMMM':
					return MonthNames[M];
				case 'MMM':
					return MonthNames[M].slice(0, shortenedLength);
				case 'MM':
					return ('' + (M + 1)).padStart(2, '0');
				case 'M':
					return '' + (M + 1);
				case 'DD':
					return ('' + D).padStart(2, '0');
				case 'D':
					return '' + D;
				case 'dddd':
					return DayNames[d];
				case 'ddd':
					return DayNames[d].slice(0, shortenedLength);
				case 'hh':
					return ('' + h).padStart(2, '0');
				case 'h':
					return '' + h;
				case 'mm':
					return ('' + m).padStart(2, '0');
				case 'm':
					return '' + m;
				case 'ss':
					return ('' + s).padStart(2, '0');
				case 's':
					return '' + s;
			}
			return match;
		});
	}
	return '';
}

var tests$4 = [['2016-01-02T03:04:05Z', '%YYYY,%YY,%MMMM,%MMM,%MM,%M,%DD,%D,%dddd,%ddd', '2016,16,January,Jan,01,1,02,2,Saturday,Sat'], ['2016-01-02T03:04:05Z', '%hh,%h,%mm,%m,%ss,%s', '03,3,04,4,05,5']];

describe('formatDate', function () {
	var _loop = function _loop(src, expected, _template) {
		it('formatDate(' + src + ', ' + _template + ') returns ' + expected, function () {
			assert.equal(format(src, _template, true), expected);
		});
	};

	var _iteratorNormalCompletion28 = true;
	var _didIteratorError28 = false;
	var _iteratorError28 = undefined;

	try {

		for (var _iterator28 = tests$4[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
			var _ref63 = _step28.value;

			var _ref64 = _slicedToArray(_ref63, 3);

			var src = _ref64[0];
			var _template = _ref64[1];
			var expected = _ref64[2];

			_loop(src, expected, _template);
		}
	} catch (err) {
		_didIteratorError28 = true;
		_iteratorError28 = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion28 && _iterator28.return) {
				_iterator28.return();
			}
		} finally {
			if (_didIteratorError28) {
				throw _iteratorError28;
			}
		}
	}
});

/* eslint-disable no-constant-condition */
function tests$5(Headers) {
	var testName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Headers';


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
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value, value]);
		});

		it('should have set()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.set(name, value1);
			headers.set(name, value2);
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value2]);
		});

		it('should have get()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.deepEqual(headers.get(name).split(/\s*,\s*/), [value1, value2]);
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
			var results = {};
			var iterator = headers.entries();
			while (1) {
				var _iterator$next7 = iterator.next(),
				    _iterator$next7$value = _iterator$next7.value;

				_iterator$next7$value = _iterator$next7$value === undefined ? [] : _iterator$next7$value;

				var _iterator$next7$value2 = _slicedToArray(_iterator$next7$value, 2),
				    key = _iterator$next7$value2[0],
				    value = _iterator$next7$value2[1],
				    done = _iterator$next7.done;

				if (done) {
					break;
				}
				var result = results[key] || [];
				result.push.apply(result, _toConsumableArray(value.split(/\s*,\s*/)));
				results[key] = result;
			}
			assert.deepEqual(results, _defineProperty({}, name, [value1, value2]));
		});

		it('should have values()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			var results = [];
			var iterator = headers.values();
			while (1) {
				var _iterator$next8 = iterator.next(),
				    value = _iterator$next8.value,
				    done = _iterator$next8.done;

				if (done) {
					break;
				}
				results.push.apply(results, _toConsumableArray(value.split(/\s*,\s*/)));
			}
			assert.deepEqual(results, [value1, value2]);
		});
	});
}

tests$5(Headers$1, 'Headers/j0');

tests$5(x$42);

function generator$4() {
	var _this21 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this21[index],
				done: length <= index++
			};
		}
	};
}

/* eslint-disable no-constant-condition */
function test$28(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HTMLCollection/@iterator';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion29 = true;
			var _didIteratorError29 = false;
			var _iteratorError29 = undefined;

			try {
				for (var _iterator29 = expected[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
					var element = _step29.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError29 = true;
				_iteratorError29 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion29 && _iterator29.return) {
						_iterator29.return();
					}
				} finally {
					if (_didIteratorError29) {
						throw _iteratorError29;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next9 = iterator.next(),
				    value = _iterator$next9.value,
				    done = _iterator$next9.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, expected);
		});
	});
}

test$28(generator$4, 'HTMLCollection/@iterator/j0');

var x$44 = HTMLCollection;

test$28(x$44.prototype[x.iterator]);

var x$45 = window;

function innerHeight() {
	return x$45.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});

function innerWidth() {
	return x$45.innerWidth;
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
		assert.equal(isArrayBufferView(new x$18(1)), true);
	});

	it('should return true if the argument is Int16Array', function () {
		assert.equal(isArrayBufferView(new x$19(1)), true);
	});

	it('should return true if the argument is Int32Array', function () {
		assert.equal(isArrayBufferView(new x$20(1)), true);
	});

	it('should return true if the argument is Uint8ClampedArray', function () {
		assert.equal(isArrayBufferView(new x$15(1)), true);
	});

	it('should return true if the argument is Uint8Array', function () {
		assert.equal(isArrayBufferView(new x$1(1)), true);
	});

	it('should return true if the argument is Uint16Array', function () {
		assert.equal(isArrayBufferView(new x$16(1)), true);
	});

	it('should return true if the argument is Uint32Array', function () {
		assert.equal(isArrayBufferView(new x$17(1)), true);
	});

	it('should return true if the argument is Float32Array', function () {
		assert.equal(isArrayBufferView(new x$21(1)), true);
	});

	it('should return true if the argument is Float64Array', function () {
		assert.equal(isArrayBufferView(new x$22(1)), true);
	});

	it('should return false if the argument is Object', function () {
		assert.equal(isArrayBufferView({}), false);
	});

	it('should return false if the argument is Number', function () {
		assert.equal(isArrayBufferView(1), false);
	});
});

function isChildClassOf(A, B) {
	return isInstanceOf(A.prototype, B);
}

describe('isChildClassOf', function () {

	it('should return true if the first class inherits the second', function () {
		var Parent = function Parent() {
			_classCallCheck(this, Parent);
		};

		var Child = function (_Parent) {
			_inherits(Child, _Parent);

			function Child() {
				_classCallCheck(this, Child);

				return _possibleConstructorReturn(this, (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments));
			}

			return Child;
		}(Parent);

		assert.equal(isChildClassOf(Child, Parent), true);
	});

	it('should return false if the first class doesn\'t inherit the second', function () {
		var Parent = function Parent() {
			_classCallCheck(this, Parent);
		};

		var Child = function Child() {
			_classCallCheck(this, Child);
		};

		assert.equal(isChildClassOf(Child, Parent), false);
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

describe('isObject', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isObject(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isObject(null), false);
	});

	it('should return true if the arguments are [NaN]', function () {
		assert.equal(isObject(NaN), false);
	});

	it('should return true if the arguments are [123]', function () {
		assert.equal(isObject(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isObject('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isObject({}), true);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isObject([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isObject(function () {}), true);
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

describe('Iterator', function () {

	it('should return a function which returns an iterator', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var result = iterator.next();
		var results = [];
		while (!result.done) {
			results.push(result.value);
			result = iterator.next();
		}
		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});

	it('should return a function which returns an iterator iterable in for-of syntax', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var results = [];
		var _iteratorNormalCompletion30 = true;
		var _didIteratorError30 = false;
		var _iteratorError30 = undefined;

		try {
			for (var _iterator30 = iterator[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
				var result = _step30.value;

				results.push(result);
			}
		} catch (err) {
			_didIteratorError30 = true;
			_iteratorError30 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion30 && _iterator30.return) {
					_iterator30.return();
				}
			} finally {
				if (_didIteratorError30) {
					throw _iteratorError30;
				}
			}
		}

		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});
});

function forEachDirections(fn, thisArg) {
	[['lrtb', [['direction', 'ltr'], ['unicode-bidi', 'normal']], ['mainB', 'mainF', 'crossB', 'crossF']], ['rltb', [['direction', 'rtl'], ['unicode-bidi', 'bidi-override']], ['mainF', 'mainB', 'crossB', 'crossF']], ['tbrl', [['-ms-writing-mode', 'tb-rl'], ['-webkit-writing-mode', 'vertical-rl'], ['writing-mode', 'vertical-rl'], ['direction', 'ltr'], ['unicode-bidi', 'normal']], ['crossF', 'crossB', 'mainB', 'mainF']], ['tblr', [['-ms-writing-mode', 'tb-lr'], ['-webkit-writing-mode', 'vertical-lr'], ['writing-mode', 'vertical-lr'], ['direction', 'ltr'], ['unicode-bidi', 'normal']], ['crossB', 'crossF', 'mainB', 'mainF']], ['btrl', [['-ms-writing-mode', 'bt-rl'], ['-webkit-writing-mode', 'vertical-rl'], ['writing-mode', 'vertical-rl'], ['direction', 'rtl'], ['unicode-bidi', 'bidi-override']], ['crossF', 'crossB', 'mainF', 'mainB']], ['btlr', [['-ms-writing-mode', 'bt-lr'], ['-webkit-writing-mode', 'vertical-lr'], ['writing-mode', 'vertical-lr'], ['direction', 'rtl'], ['unicode-bidi', 'bidi-override']], ['crossB', 'crossF', 'mainF', 'mainB']]].forEach(function (_ref65) {
		var _ref66 = _slicedToArray(_ref65, 3),
		    textDirectionType = _ref66[0],
		    styleDeclarations = _ref66[1],
		    visualDirections = _ref66[2];

		fn.call(thisArg, textDirectionType, styleDeclarations.map(function (declaration) {
			return declaration.join(':') + ';';
		}).join(''), visualDirections.map(function (visualDirection, index) {
			return [['left', 'right', 'top', 'bottom'][index], visualDirection];
		}));
	});
}

function checkRange(range, startContainer, startOffset) {
	var endContainer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : startContainer;
	var endOffset = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : startOffset;

	var prefix = checkRange.prefix || 'range:';
	assert(range.startContainer === startContainer, prefix + ' startContainer error');
	if (isNumber(startOffset)) {
		assert.equal(range.startOffset, startOffset, prefix + ' startOffset error');
	} else {
		assert(startOffset(range.startOffset), prefix + ' startOffset error');
	}
	assert(range.endContainer === endContainer, prefix + ' endContainer error');
	if (isNumber(endOffset)) {
		assert.equal(range.endOffset, endOffset, prefix + ' endOffset error');
	} else {
		assert(endOffset(range.endOffset), prefix + ' endOffset error');
	}
}

function test_bb(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.bb', function () {

		it('[' + textDirectionType + '] should have left, right, top, bottom, width, height', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0);
			var bb = range.bb;
			if (this.debug) {
				x$25.log(bb);
			}
			assert('left' in bb);
			assert('right' in bb);
			assert('top' in bb);
			assert('bottom' in bb);
			assert('width' in bb);
			assert('height' in bb);
		});

		if (browser.name === 'firefox' && /^[tb]/.test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				it('should skip the tests', function () {
					x$25.error(['Firefox fails to get getBoundingClientRect on vertical writing-mode', 'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'].join('\n'));
				});
			});
			return;
		}

		it('[' + textDirectionType + '] should return a rect from collapsed range', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0);
			var bb1 = range.bb;
			range.set(this.firstTextNode, 1);
			var bb2 = range.bb;
			switch (textDirectionType.slice(0, 2)) {
				case 'lr':
					assert.operator(bb1.left, '<', bb2.left);
					break;
				case 'rl':
					assert.operator(bb2.left, '<', bb1.left);
					break;
				case 'tb':
					assert.operator(bb1.top, '<', bb2.top);
					break;
				case 'bt':
					assert.operator(bb2.top, '<', bb1.top);
					break;
			}
		});
	});
}

function test_collapsed(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.collapsed', function () {

		it('[' + textDirectionType + '] should return true', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0);
			assert.equal(range.collapsed, true);
		});

		it('[' + textDirectionType + '] should return false', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0, this.firstTextNode, 1);
			assert.equal(range.collapsed, false);
		});
	});
}

function test_clone(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.clone', function () {

		it('[' + textDirectionType + '] should create a cloned J0Range', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0);
			assert.doesNotThrow(function () {
				range.clone();
			});
		});

		it('[' + textDirectionType + '] should create a cloned J0Range which has same options', function () {
			var range = new J0Range();
			range.set(this.firstTextNode, 0);
			var cloned = range.clone();
			if (x$25.debugMode) {
				x$25.log('range :', range);
				x$25.log('cloned:', cloned);
			}
			assert(range.range !== cloned.range, 'range.range should be different from cloned.range');
			checkRange(cloned, range.startContainer, range.startOffset, range.endContainer, range.endOffset);
		});
	});
}

function test_forwardEnd(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.forwardEnd', function () {

		if (browser.name === 'firefox' && /^[rtb]/.test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				console.error(['Firefox fails to get getBoundingClientRect on vertical writing-mode', 'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'].join('\n'));
			});
			return;
		}

		it('[' + textDirectionType + '] should move end', function () {
			this.timeout(80000);
			var range = new J0Range(null, this.element);
			range.set(this.firstTextNode, 0);
			var _iteratorNormalCompletion31 = true;
			var _didIteratorError31 = false;
			var _iteratorError31 = undefined;

			try {
				for (var _iterator31 = this.textNodes[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
					var textNode = _step31.value;

					var index = this.textNodes.indexOf(textNode);
					for (var i = 0; i < textNode.length; i++) {
						checkRange.prefix = '[' + index + '-' + i + ']';
						assert.equal(range.forwardEnd(), true, checkRange.prefix + ' failed to move');
						checkRange(range, this.firstTextNode, 0, textNode, i + 1);
					}
					if (range.forwardEnd()) {
						checkRange(range, this.firstTextNode, 0, this.textNodes[index + 1], 0);
					} else {
						assert.equal(index, this.textNodes.length - 1, checkRange.prefix + ' failed to move at end');
					}
				}
			} catch (err) {
				_didIteratorError31 = true;
				_iteratorError31 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion31 && _iterator31.return) {
						_iterator31.return();
					}
				} finally {
					if (_didIteratorError31) {
						throw _iteratorError31;
					}
				}
			}

			assert.equal(range.forwardEnd(), false, 'succeeded to move unexpectedly');
			assert.deepEqual(this.events, [], 'forwardEnd emitted events');
		});
	});
}

function test_backwardStart(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.backwardStart', function () {

		if (browser.name === 'firefox' && /^[rtb]/.test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				console.error(['Firefox fails to get getBoundingClientRect on vertical writing-mode', 'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'].join('\n'));
			});
			return;
		}

		it('[' + textDirectionType + '] should move start in a node', function () {
			var range = new J0Range(null, this.element);
			range.set(this.lastTextNode, this.lastTextNode.length);

			var _iteratorNormalCompletion32 = true;
			var _didIteratorError32 = false;
			var _iteratorError32 = undefined;

			try {
				for (var _iterator32 = this.textNodes.slice().reverse()[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
					var textNode = _step32.value;

					var index = this.textNodes.indexOf(textNode);
					for (var i = 0; i < textNode.length; i++) {
						checkRange.prefix = '[' + index + '-' + (textNode.length - i) + ']';
						assert.equal(range.backwardStart(), true, checkRange.prefix + ' failed to move');
						checkRange(range, textNode, textNode.length - (i + 1), this.lastTextNode, this.lastTextNode.length);
					}
					if (range.backwardStart()) {
						checkRange(range, this.textNodes[index - 1], this.textNodes[index - 1].length, this.lastTextNode, this.lastTextNode.length);
					} else {
						assert.equal(index, 0, checkRange.prefix + ' failed to move at start');
					}
				}
			} catch (err) {
				_didIteratorError32 = true;
				_iteratorError32 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion32 && _iterator32.return) {
						_iterator32.return();
					}
				} finally {
					if (_didIteratorError32) {
						throw _iteratorError32;
					}
				}
			}

			assert.equal(range.backwardStart(), false, 'succeeded to move unexpectedly');
			assert.deepEqual(this.events, [], 'backwardStart emitted events');
		});
	});
}

function test_modify(textDirectionType, visualDirections) {

	describe('[' + textDirectionType + '] J0Range.prototype.modify', function () {

		if (browser.name === 'firefox' && /^[rtb]/.test(textDirectionType) && !this.debug) {
			it('should skip the tests', function () {
				x$25.error(['Firefox fails to get getBoundingClientRect on vertical writing-mode', 'https://bugzilla.mozilla.org/show_bug.cgi?id=1159309'].join('\n'));
			});
			return;
		}

		visualDirections.forEach(function (_ref67) {
			var _ref68 = _slicedToArray(_ref67, 2),
			    visualDirection = _ref68[0],
			    textDirection = _ref68[1];

			switch (textDirection) {
				case 'mainF':
					it('[' + textDirectionType + '] should move forward along to main axis and hit the end', function () {
						var range = new J0Range(null, this.element);
						range.set(this.firstTextNode, 0);
						var _iteratorNormalCompletion33 = true;
						var _didIteratorError33 = false;
						var _iteratorError33 = undefined;

						try {
							for (var _iterator33 = this.textNodes[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
								var textNode = _step33.value;

								var index = this.textNodes.indexOf(textNode);
								for (var i = 0; i < textNode.length; i++) {
									checkRange.prefix = '[' + index + '-' + i + ']';
									range.modify('move', visualDirection);
									checkRange(range, textNode, i + 1);
								}
								range.modify('move', visualDirection);
							}
						} catch (err) {
							_didIteratorError33 = true;
							_iteratorError33 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion33 && _iterator33.return) {
									_iterator33.return();
								}
							} finally {
								if (_didIteratorError33) {
									throw _iteratorError33;
								}
							}
						}

						assert.deepEqual(this.events, ['range:last']);
					});
					it('[' + textDirectionType + '] should extend forward along to main axis and hit the end', function () {
						var range = new J0Range(null, this.element);
						range.set(this.firstTextNode, 0);
						var _iteratorNormalCompletion34 = true;
						var _didIteratorError34 = false;
						var _iteratorError34 = undefined;

						try {
							for (var _iterator34 = this.textNodes[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
								var textNode = _step34.value;

								var index = this.textNodes.indexOf(textNode);
								for (var i = 0; i < textNode.length; i++) {
									checkRange.prefix = '[' + index + '-' + i + ']';
									range.modify('extend', visualDirection);
									checkRange(range, this.firstTextNode, 0, textNode, i + 1);
								}
								range.modify('extend', visualDirection);
							}
						} catch (err) {
							_didIteratorError34 = true;
							_iteratorError34 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion34 && _iterator34.return) {
									_iterator34.return();
								}
							} finally {
								if (_didIteratorError34) {
									throw _iteratorError34;
								}
							}
						}

						assert.deepEqual(this.events, ['range:last']);
					});
					break;
				case 'mainB':
					it('[' + textDirectionType + '] should move backward along to main axis', function () {
						var range = new J0Range(null, this.element);
						range.set(this.lastTextNode, this.lastTextNode.length);
						var _iteratorNormalCompletion35 = true;
						var _didIteratorError35 = false;
						var _iteratorError35 = undefined;

						try {
							for (var _iterator35 = this.textNodes.slice().reverse()[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
								var textNode = _step35.value;

								var index = this.textNodes.indexOf(textNode);
								for (var i = 0; i < textNode.length; i++) {
									checkRange.prefix = '[' + index + '-' + i + ']';
									range.modify('move', visualDirection);
									checkRange(range, textNode, textNode.length - (i + 1));
								}
								range.modify('move', visualDirection);
							}
						} catch (err) {
							_didIteratorError35 = true;
							_iteratorError35 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion35 && _iterator35.return) {
									_iterator35.return();
								}
							} finally {
								if (_didIteratorError35) {
									throw _iteratorError35;
								}
							}
						}

						assert.deepEqual(this.events, ['range:first']);
					});
					it('[' + textDirectionType + '] should extend backward along to main axis', function () {
						var range = new J0Range(null, this.element);
						range.set(this.lastTextNode, this.lastTextNode.length);
						var _iteratorNormalCompletion36 = true;
						var _didIteratorError36 = false;
						var _iteratorError36 = undefined;

						try {
							for (var _iterator36 = this.textNodes.slice().reverse()[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
								var textNode = _step36.value;

								var index = this.textNodes.indexOf(textNode);
								for (var i = 0; i < textNode.length; i++) {
									checkRange.prefix = '[' + index + '-' + i + ']';
									range.modify('extend', visualDirection);
									checkRange(range, textNode, textNode.length - (i + 1), this.lastTextNode, this.lastTextNode.length);
								}
								range.modify('extend', visualDirection);
							}
						} catch (err) {
							_didIteratorError36 = true;
							_iteratorError36 = err;
						} finally {
							try {
								if (!_iteratorNormalCompletion36 && _iterator36.return) {
									_iterator36.return();
								}
							} finally {
								if (_didIteratorError36) {
									throw _iteratorError36;
								}
							}
						}

						assert.deepEqual(this.events, ['range:first']);
					});
					break;
				case 'crossF':
					it('[' + textDirectionType + '] should move forward along to cross axis [start of lines]', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
						var range, _iteratorNormalCompletion37, _didIteratorError37, _iteratorError37, _iterator37, _step37, textNode, index;

						return regeneratorRuntime.wrap(function _callee19$(_context19) {
							while (1) {
								switch (_context19.prev = _context19.next) {
									case 0:
										range = new J0Range(null, this.element);

										range.set(this.firstTextNode, 0);
										// if (this.debug) {
										// 	this.timeout(8000);
										// 	range.apply();
										// 	await wait(800);
										// }
										_iteratorNormalCompletion37 = true;
										_didIteratorError37 = false;
										_iteratorError37 = undefined;
										_context19.prev = 5;
										for (_iterator37 = this.textNodes.slice(1)[Symbol.iterator](); !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
											textNode = _step37.value;
											index = this.textNodes.indexOf(textNode);

											checkRange.prefix = '[' + index + ']';
											range.modify('move', visualDirection);
											// if (this.debug) {
											// 	range.apply();
											// 	await wait(800);
											// }
											checkRange(range, textNode, 0);
										}
										_context19.next = 13;
										break;

									case 9:
										_context19.prev = 9;
										_context19.t0 = _context19['catch'](5);
										_didIteratorError37 = true;
										_iteratorError37 = _context19.t0;

									case 13:
										_context19.prev = 13;
										_context19.prev = 14;

										if (!_iteratorNormalCompletion37 && _iterator37.return) {
											_iterator37.return();
										}

									case 16:
										_context19.prev = 16;

										if (!_didIteratorError37) {
											_context19.next = 19;
											break;
										}

										throw _iteratorError37;

									case 19:
										return _context19.finish(16);

									case 20:
										return _context19.finish(13);

									case 21:
										assert.deepEqual(this.events, []);
										range.modify('move', visualDirection);
										range.modify('move', visualDirection);
										assert.deepEqual(this.events, ['range:lastline', 'range:lastline']);

									case 25:
									case 'end':
										return _context19.stop();
								}
							}
						}, _callee19, this, [[5, 9, 13, 21], [14,, 16, 20]]);
					})));
					it('[' + textDirectionType + '] should move forward along to cross axis [middle of lines]', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
						var range, _iteratorNormalCompletion38, _didIteratorError38, _iteratorError38, _iterator38, _step38, textNode, index;

						return regeneratorRuntime.wrap(function _callee20$(_context20) {
							while (1) {
								switch (_context20.prev = _context20.next) {
									case 0:
										range = new J0Range(null, this.element);

										range.set(this.firstTextNode, 1);
										// if (this.debug) {
										// 	this.timeout(8000);
										// 	range.apply();
										// 	await wait(800);
										// }
										_iteratorNormalCompletion38 = true;
										_didIteratorError38 = false;
										_iteratorError38 = undefined;
										_context20.prev = 5;
										for (_iterator38 = this.textNodes.slice(1)[Symbol.iterator](); !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
											textNode = _step38.value;
											index = this.textNodes.indexOf(textNode);

											checkRange.prefix = '[' + index + ']';
											range.modify('move', visualDirection);
											if (this.debug) {
												x$25.log('-------- ' + checkRange.prefix + ' ' + x$8.stringify(range.startContainer.textContent) + ' ' + range.startOffset);
												// range.apply();
												// await wait(800);
											}
											checkRange(range, textNode, index === 3 ? 1 : function (value) {
												return 1 <= value;
											});
										}
										_context20.next = 13;
										break;

									case 9:
										_context20.prev = 9;
										_context20.t0 = _context20['catch'](5);
										_didIteratorError38 = true;
										_iteratorError38 = _context20.t0;

									case 13:
										_context20.prev = 13;
										_context20.prev = 14;

										if (!_iteratorNormalCompletion38 && _iterator38.return) {
											_iterator38.return();
										}

									case 16:
										_context20.prev = 16;

										if (!_didIteratorError38) {
											_context20.next = 19;
											break;
										}

										throw _iteratorError38;

									case 19:
										return _context20.finish(16);

									case 20:
										return _context20.finish(13);

									case 21:
										assert.deepEqual(this.events, []);
										range.modify('move', visualDirection);
										range.modify('move', visualDirection);
										assert.deepEqual(this.events, ['range:lastline', 'range:lastline']);

									case 25:
									case 'end':
										return _context20.stop();
								}
							}
						}, _callee20, this, [[5, 9, 13, 21], [14,, 16, 20]]);
					})));
					it('[' + textDirectionType + '] should move forward along to cross axis [end of lines]', function () {
						var range = new J0Range(null, this.element);
						range.set(this.textNodes[1], this.textNodes[1].textContent.trim().length);
						range.modify('move', visualDirection);
						checkRange(range, this.textNodes[2], this.textNodes[2].textContent.trim().length);
					});
					break;
				case 'crossB':
					it('[' + textDirectionType + '] should move backward along to cross axis [start of lines]', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
						var range, _iteratorNormalCompletion39, _didIteratorError39, _iteratorError39, _iterator39, _step39, textNode, index;

						return regeneratorRuntime.wrap(function _callee21$(_context21) {
							while (1) {
								switch (_context21.prev = _context21.next) {
									case 0:
										range = new J0Range(null, this.element);

										range.set(this.lastTextNode, 0);
										// if (this.debug) {
										// 	this.element.node.focus();
										// 	this.timeout(8000);
										// 	range.apply();
										// 	await wait(800);
										// }
										_iteratorNormalCompletion39 = true;
										_didIteratorError39 = false;
										_iteratorError39 = undefined;
										_context21.prev = 5;
										for (_iterator39 = this.textNodes.slice(0, -1).reverse()[Symbol.iterator](); !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
											textNode = _step39.value;
											index = this.textNodes.indexOf(textNode);

											checkRange.prefix = '[' + index + ']';
											x$25.log(checkRange.prefix);
											range.modify('move', visualDirection);
											// if (this.debug) {
											// 	range.apply();
											// 	await wait(800);
											// }
											checkRange(range, textNode, 0);
										}
										_context21.next = 13;
										break;

									case 9:
										_context21.prev = 9;
										_context21.t0 = _context21['catch'](5);
										_didIteratorError39 = true;
										_iteratorError39 = _context21.t0;

									case 13:
										_context21.prev = 13;
										_context21.prev = 14;

										if (!_iteratorNormalCompletion39 && _iterator39.return) {
											_iterator39.return();
										}

									case 16:
										_context21.prev = 16;

										if (!_didIteratorError39) {
											_context21.next = 19;
											break;
										}

										throw _iteratorError39;

									case 19:
										return _context21.finish(16);

									case 20:
										return _context21.finish(13);

									case 21:
										x$25.log('event test');
										assert.deepEqual(this.events, []);
										range.modify('move', visualDirection);
										range.modify('move', visualDirection);
										assert.deepEqual(this.events, ['range:firstline', 'range:firstline']);

									case 26:
									case 'end':
										return _context21.stop();
								}
							}
						}, _callee21, this, [[5, 9, 13, 21], [14,, 16, 20]]);
					})));
					it('[' + textDirectionType + '] should move backward along to cross axis [middle of lines]', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
						var range, _iteratorNormalCompletion40, _didIteratorError40, _iteratorError40, _iterator40, _step40, textNode, index;

						return regeneratorRuntime.wrap(function _callee22$(_context22) {
							while (1) {
								switch (_context22.prev = _context22.next) {
									case 0:
										range = new J0Range(null, this.element);

										range.set(this.lastTextNode, 1);
										// if (this.debug) {
										// 	this.timeout(8000);
										// 	range.apply();
										// 	await wait(800);
										// }
										_iteratorNormalCompletion40 = true;
										_didIteratorError40 = false;
										_iteratorError40 = undefined;
										_context22.prev = 5;
										for (_iterator40 = this.textNodes.slice(0, -1).reverse()[Symbol.iterator](); !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
											textNode = _step40.value;
											index = this.textNodes.indexOf(textNode);

											checkRange.prefix = '[' + index + ']';
											range.modify('move', visualDirection);
											if (this.debug) {
												x$25.log('-------- ' + checkRange.prefix + ' ' + x$8.stringify(range.startContainer.textContent) + ' ' + range.startOffset);
												// range.apply();
												// await wait(800);
											}
											checkRange(range, textNode, index === 3 ? 1 : function (value) {
												return 1 <= value;
											});
										}
										_context22.next = 13;
										break;

									case 9:
										_context22.prev = 9;
										_context22.t0 = _context22['catch'](5);
										_didIteratorError40 = true;
										_iteratorError40 = _context22.t0;

									case 13:
										_context22.prev = 13;
										_context22.prev = 14;

										if (!_iteratorNormalCompletion40 && _iterator40.return) {
											_iterator40.return();
										}

									case 16:
										_context22.prev = 16;

										if (!_didIteratorError40) {
											_context22.next = 19;
											break;
										}

										throw _iteratorError40;

									case 19:
										return _context22.finish(16);

									case 20:
										return _context22.finish(13);

									case 21:
										assert.deepEqual(this.events, []);
										range.modify('move', visualDirection);
										range.modify('move', visualDirection);
										assert.deepEqual(this.events, ['range:firstline', 'range:firstline']);

									case 25:
									case 'end':
										return _context22.stop();
								}
							}
						}, _callee22, this, [[5, 9, 13, 21], [14,, 16, 20]]);
					})));
					it('[' + textDirectionType + '] should move backward along to cross axis [end of lines]', function () {
						var range = new J0Range(null, this.element);
						range.set(this.lastTextNode, this.lastTextNode.textContent.trim().length);
						range.modify('move', visualDirection);
						checkRange(range, this.textNodes[4], this.textNodes[4].textContent.trim().length);
					});
					break;
			}
		});
	});
}

function test_diff(textDirectionType) {

	describe('[' + textDirectionType + '] J0Range.prototype.diff', function () {

		[false, true].forEach(function (startContainer) {
			[false, true].forEach(function (startOffset) {
				[false, true].forEach(function (endContainer) {
					[false, true].forEach(function (endOffset) {
						var expected = [];
						if (startContainer) {
							expected.push('startContainer');
						}
						if (startOffset) {
							expected.push('startOffset');
						}
						if (endContainer) {
							expected.push('endContainer');
						}
						if (endOffset) {
							expected.push('endOffset');
						}
						it('should return ' + JSON.stringify(expected), function () {
							var range = new J0Range();
							range.set(this.firstTextNode, 0);
							var actual = range.diff(startContainer ? null : range.startContainer, startOffset ? null : range.startOffset, endContainer ? null : range.endContainer, endOffset ? null : range.endOffset);
							assert.deepEqual(actual, expected);
						});
					});
				});
			});
		});
	});
}

forEachDirections(function (textDirectionType, style, visualDirections) {

	describe('J0Range on ' + textDirectionType, function () {
		var _this23 = this;

		beforeEach(function () {
			delete checkRange.prefix;
			var ctx = this.test.ctx;
			var textNode0 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ1\n').node;
			var textNode1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ2\n').node;
			var textNode2 = new N('iiiiii\n').node;
			var textNode3 = new N('0\n').node;
			var textNode4 = new N('MMMMMM\n').node;
			var textNode5 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ3').node;
			var inlineStyle = 'display:inline;';
			var events = ctx.events = [];
			var element = ctx.element = new N({
				a: [['style', 'pointer-events:none;white-space:pre;' + style], ['contenteditable', 'true']],
				c: [textNode0, textNode1, {
					a: [['style', inlineStyle + 'font-weight:bold;']],
					c: [textNode2]
				}, textNode3, {
					a: [['style', inlineStyle + 'color:red;']],
					c: [textNode4, {
						a: [['style', inlineStyle + 'text-decoration:line-through;']],
						c: [textNode5]
					}]
				}],
				e: [['range:first', function () {
					events.push('range:first');
				}], ['range:last', function () {
					events.push('range:last');
				}], ['range:firstline', function () {
					events.push('range:firstline');
				}], ['range:lastline', function () {
					events.push('range:lastline');
				}]]
			});
			element.setParent(x$4.body);
			ctx.firstTextNode = textNode0;
			ctx.lastTextNode = textNode5;
			ctx.textNodes = [textNode0, textNode1, textNode2, textNode3, textNode4, textNode5];
		});

		afterEach(function () {
			this.element.remove();
		});

		it('[' + textDirectionType + '] should create a J0Range from nothing', function () {
			assert.doesNotThrow(function () {
				return new J0Range();
			});
		});

		it('[' + textDirectionType + '] should create a J0Range from range', function () {
			var range = x$4.createRange();
			range.setStart(this.firstTextNode, 0);
			range.setEnd(this.firstTextNode, 0);
			assert.doesNotThrow(function () {
				return new J0Range(range);
			});
		});

		[test_bb, test_collapsed, test_clone, test_forwardEnd, test_backwardStart, test_modify, test_diff].forEach(function (fn) {
			fn.call(_this23, textDirectionType, visualDirections);
		});
	});
});

function test$30(storage, testName) {

	describe(testName, function () {

		it('should set/get an item', function () {
			var name = '' + Date.now();
			var value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
		});

		it('should remove an item', function () {
			var name = '' + Date.now();
			var value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
			storage.removeItem(name);
			assert.equal(storage.getItem(name));
		});

		it('should clear all', function () {
			var name1 = Date.now() + '1';
			var name2 = Date.now() + '2';
			var value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			assert.equal(storage.getItem(name1), value);
			assert.equal(storage.getItem(name2), value);
			storage.clear();
			assert.equal(storage.getItem(name1));
			assert.equal(storage.getItem(name2));
		});

		it('should have key()', function () {
			var name1 = Date.now() + '1';
			var name2 = Date.now() + '2';
			var value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			var results = [];
			for (var i = 0, length = storage.length; i < length; i++) {
				results.push(storage.key(i));
			}
			assert.equal([name1, name2].every(function (name) {
				return results.includes(name);
			}), true);
		});
	});
}

var J0Storage = function () {
	function J0Storage() {
		_classCallCheck(this, J0Storage);
	}

	_createClass(J0Storage, [{
		key: 'clear',
		value: function clear() {
			var _this24 = this;

			keys(this).forEach(function (key) {
				_this24.removeItem(key);
			});
		}
	}, {
		key: 'getItem',
		value: function getItem(keyName) {
			return this[keyName];
		}
	}, {
		key: 'key',
		value: function key(n) {
			return keys(this)[n];
		}
	}, {
		key: 'removeItem',
		value: function removeItem(keyName) {
			delete this[keyName];
		}
	}, {
		key: 'setItem',
		value: function setItem(keyName, keyValue) {
			this[keyName] = '' + keyValue;
		}
	}, {
		key: 'length',
		get: function get() {
			return keys(this).length;
		}
	}]);

	return J0Storage;
}();

test$30(new J0Storage(), 'J0Storage');

describe('keys', function () {

	it('should return a list of keys', function () {
		var _obj;

		var key1 = Date.now() + '-1';
		var key2 = Date.now() + '-2';
		var key3 = Date.now() + '-3';
		var obj = (_obj = {}, _defineProperty(_obj, key1, null), _defineProperty(_obj, key2, null), _defineProperty(_obj, key3, null), _obj);
		var actual = keys(obj);
		var expected = [key1, key2, key3];
		assert.deepEqual(actual, expected);
	});
});

var KEYS = x('lazyKeys');

var Lazy = function () {
	function Lazy() {
		_classCallCheck(this, Lazy);
	}

	_createClass(Lazy, [{
		key: 'getLazy',
		value: function getLazy(key, getter, force) {
			var keys = this[KEYS];
			if (!keys) {
				keys = new x$37();
				this[KEYS] = keys;
			}
			var internalKey = keys.get(key);
			if (!internalKey) {
				internalKey = x(key);
				keys.set(key, internalKey);
			}
			var value = this[internalKey];
			if (force || isUndefined(value)) {
				value = getter();
				this[internalKey] = value;
			}
			return value;
		}
	}]);

	return Lazy;
}();

describe('Lazy', function () {

	it('should return a result of the getter', function () {
		var lazy = new Lazy();
		var key = '' + Date.now();
		var value = new Date();
		function getter() {
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
	});

	it('should not call the getter twice', function () {
		var lazy = new Lazy();
		var key = '' + Date.now();
		var value = new Date();
		var count = 0;
		function getter() {
			count += 1;
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(count, 1);
	});

	it('should call the getter again', function () {
		var lazy = new Lazy();
		var key = '' + Date.now();
		var value = new Date();
		var count = 0;
		function getter() {
			count += 1;
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(lazy.getLazy(key, getter, true), value);
		assert.equal(count, 2);
	});
});

var x$46 = localStorageIsAvailable;

var localStorage$1 = new J0Storage();

test$30(localStorage$1, 'localStorage#j0');

if (x$46) {
	test$30(localStorage, 'localStorage');
} else {
	x$25.info('Tests for localStorage are skipped.');
}

/* eslint-disable no-constant-condition */
function test$33(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Map.prototype[Symbol.iterator]';


	describe(name, function () {

		it(name, function () {
			var data = [[1, 2], [3, 4]];
			var map = new x$37(data);
			var iterator = generator.call(map);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next10 = iterator.next(),
				    value = _iterator$next10.value,
				    done = _iterator$next10.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, data);
		});
	});
}

function generator$6() {
	return this.entries();
}

test$33(generator$6, 'Map.prototype[Symbol.iterator]#j0');

test$33(x$37.prototype[x.iterator]);

var Map$2 = function () {
	function Map$2(iterable) {
		_classCallCheck(this, Map$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion41 = true;
			var _didIteratorError41 = false;
			var _iteratorError41 = undefined;

			try {
				for (var _iterator41 = iterable[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
					var _ref73 = _step41.value;

					var _ref74 = _slicedToArray(_ref73, 2);

					var key = _ref74[0];
					var value = _ref74[1];

					this.set(key, value);
				}
			} catch (err) {
				_didIteratorError41 = true;
				_iteratorError41 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion41 && _iterator41.return) {
						_iterator41.return();
					}
				} finally {
					if (_didIteratorError41) {
						throw _iteratorError41;
					}
				}
			}
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
			return this.data.findIndex(function (_ref75) {
				var _ref76 = _slicedToArray(_ref75, 1),
				    itemKey = _ref76[0];

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
				this.data.push([key, value]);
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var found = this.data.find(function (_ref77) {
				var _ref78 = _slicedToArray(_ref77, 1),
				    itemKey = _ref78[0];

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
				this.data.splice(index, 1);
				return true;
			}
			return false;
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[x.iterator]();
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this25 = this;

			this.data.slice().forEach(function (_ref79) {
				var _ref80 = _slicedToArray(_ref79, 2),
				    key = _ref80[0],
				    value = _ref80[1];

				fn.call(thisArg, value, key, _this25);
			});
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next11 = iterator.next(),
				    value = _iterator$next11.value,
				    done = _iterator$next11.done;

				return {
					value: value && value[0],
					done: done
				};
			});
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next12 = iterator.next(),
				    value = _iterator$next12.value,
				    done = _iterator$next12.done;

				return {
					value: value && value[1],
					done: done
				};
			});
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Map$2;
}();

/* eslint-disable no-magic-numbers */


function tests$7(Map) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Map';


	describe(name, function () {

		it('should create an instance', function () {
			assert.doesNotThrow(function () {
				var map = new Map();
				return map;
			});
		});

		it('should return keys', function () {
			var map = new Map();
			assert.deepEqual(Array.from(map.keys()), []);
		});

		it('should return values', function () {
			var map = new Map();
			assert.deepEqual(Array.from(map.values()), []);
		});

		it('should initialize with given array', function () {
			var map = new Map([[0, 1]]);
			assert.deepEqual({
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

		it('should initialize with given iterable', function () {
			var iterable = _defineProperty({}, x.iterator, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
				var count;
				return regeneratorRuntime.wrap(function _callee23$(_context23) {
					while (1) {
						switch (_context23.prev = _context23.next) {
							case 0:
								count = 0;

							case 1:
								if (!(count < 1)) {
									_context23.next = 7;
									break;
								}

								_context23.next = 4;
								return [count, count + 1];

							case 4:
								count += 1;
								_context23.next = 1;
								break;

							case 7:
							case 'end':
								return _context23.stop();
						}
					}
				}, _callee23, this);
			}));
			var map = new Map(iterable);
			assert.deepEqual({
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

		it('should support forEach()', function () {
			var map = new Map([[1, 2], [3, 4], [5, 6]]);
			var context = {};
			var results = [];
			map.forEach(function () {
				for (var _len44 = arguments.length, args = Array(_len44), _key44 = 0; _key44 < _len44; _key44++) {
					args[_key44] = arguments[_key44];
				}

				map.delete(args[1]);
				args.push(this);
				results.push(args);
			}, context);
			assert.deepEqual(results, [[2, 1, map, context], [4, 3, map, context], [6, 5, map, context]]);
		});
	});
}

tests$7(Map$2, 'Map#j0');

tests$7(x$37);

function test$35(abs) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.abs';


	describe(name, function () {

		[[-Math.PI, Math.PI], [-0, 0], [0.1, 0.1]].forEach(function (_ref81) {
			var _ref82 = _slicedToArray(_ref81, 2),
			    value = _ref82[0],
			    expected = _ref82[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.equal(abs(value), expected);
			});
		});
	});
}

test$35(Math.abs);

function test$37(acos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acos';


	describe(name, function () {

		[[-1, Math.PI], [-0.5, Math.PI * 2 / 3], [0, Math.PI / 2], [0.5, Math.PI / 3], [1, 0]].forEach(function (_ref83) {
			var _ref84 = _slicedToArray(_ref83, 2),
			    value = _ref84[0],
			    expected = _ref84[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(acos(value), expected);
			});
		});
	});
}

test$37(Math.acos);

function test$39(acosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acosh';


	describe(name, function () {
		var _loop2 = function _loop2(value) {
			var expected = Math.log(value + Math.sqrt(value * value - 1));
			it(name + '(' + value.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
				return regeneratorRuntime.wrap(function _callee24$(_context24) {
					while (1) {
						switch (_context24.prev = _context24.next) {
							case 0:
								assert.approxEqual(acosh(value), expected);

							case 1:
							case 'end':
								return _context24.stop();
						}
					}
				}, _callee24, this);
			})));
		};

		for (var value = 1; value < 9; value += 0.4) {
			_loop2(value);
		}
	});
}

function acosh(x) {
	return x$40.log(x + x$40.sqrt(x * x - 1));
}

test$39(acosh, 'Math.acosh#j0');

test$39(Math.acosh);

function test$41(asin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asin';


	describe(name, function () {

		[[-1, Math.PI / -2], [-0.5, Math.PI / -6], [0, 0], [0.5, Math.PI / 6], [1, Math.PI / 2]].forEach(function (_ref86) {
			var _ref87 = _slicedToArray(_ref86, 2),
			    value = _ref87[0],
			    expected = _ref87[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(asin(value), expected);
			});
		});
	});
}

test$41(Math.asin);

function test$43(asinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asinh';


	describe(name, function () {
		var _loop3 = function _loop3(value) {
			var expected = Math.log(value + Math.sqrt(value * value + 1));
			it(name + '(' + value.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
				return regeneratorRuntime.wrap(function _callee25$(_context25) {
					while (1) {
						switch (_context25.prev = _context25.next) {
							case 0:
								assert.approxEqual(asinh(value), expected);

							case 1:
							case 'end':
								return _context25.stop();
						}
					}
				}, _callee25, this);
			})));
		};

		for (var value = -5; value < 5; value += 1) {
			_loop3(value);
		}
	});
}

function asinh(x) {
	if (x === -Infinity) {
		return x;
	}
	return x$40.log(x + x$40.sqrt(x * x + 1));
}

test$43(asinh, 'Math.asinh#j0');

test$43(Math.asinh);

function test$45(atan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan';


	describe(name, function () {

		[[-Math.sqrt(3), Math.PI / -3], [-1, Math.PI / -4], [-1 / Math.sqrt(3), Math.PI / -6], [0, 0], [1 / Math.sqrt(3), Math.PI / 6], [1, Math.PI / 4], [Math.sqrt(3), Math.PI / 3]].forEach(function (_ref89) {
			var _ref90 = _slicedToArray(_ref89, 2),
			    value = _ref90[0],
			    expected = _ref90[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(atan(value), expected);
			});
		});
	});
}

test$45(Math.atan);

function test$47(atan2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan2';


	describe(name, function () {

		[[-Math.sqrt(3), 1, Math.PI / -3], [-1, 1, Math.PI / -4], [-1 / Math.sqrt(3), 1, Math.PI / -6], [0, 1, 0], [1 / Math.sqrt(3), 1, Math.PI / 6], [1, 1, Math.PI / 4], [Math.sqrt(3), 1, Math.PI / 3], [-Math.sqrt(3), -1, Math.PI * 2 / -3], [-1, -1, Math.PI * -3 / 4], [-1 / Math.sqrt(3), -1, Math.PI * -5 / 6], [0, -1, Math.PI], [1 / Math.sqrt(3), -1, Math.PI * 5 / 6], [1, -1, Math.PI * 3 / 4], [Math.sqrt(3), -1, Math.PI * 2 / 3]].forEach(function (_ref91) {
			var _ref92 = _slicedToArray(_ref91, 3),
			    x = _ref92[0],
			    y = _ref92[1],
			    expected = _ref92[2];

			it(name + '(' + x + ', ' + y + ') \u2192 ' + expected, function () {
				assert.approxEqual(atan2(x, y), expected);
			});
		});
	});
}

test$47(Math.atan2);

function test$49(atanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atanh';


	describe(name, function () {
		var _loop4 = function _loop4(value) {
			var expected = Math.log((1 + value) / (1 - value)) / 2;
			it(name + '(' + value.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
				return regeneratorRuntime.wrap(function _callee26$(_context26) {
					while (1) {
						switch (_context26.prev = _context26.next) {
							case 0:
								assert.approxEqual(atanh(value), expected);

							case 1:
							case 'end':
								return _context26.stop();
						}
					}
				}, _callee26, this);
			})));
		};

		for (var value = -0.99; value < 1; value += 0.1) {
			_loop4(value);
		}
	});
}

function atanh(x) {
	return x$40.log((1 + x) / (1 - x)) / 2;
}

test$49(atanh, 'Math.atanh#j0');

test$49(Math.atanh);

function test$51(cbrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cbrt';


	describe(name, function () {
		var _loop5 = function _loop5(_x71) {
			var expected = Math.sign(_x71) * Math.pow(Math.abs(_x71), 1 / 3);
			it(name + '(' + _x71.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
				return regeneratorRuntime.wrap(function _callee27$(_context27) {
					while (1) {
						switch (_context27.prev = _context27.next) {
							case 0:
								assert.approxEqual(cbrt(_x71), expected);

							case 1:
							case 'end':
								return _context27.stop();
						}
					}
				}, _callee27, this);
			})));
		};

		for (var _x71 = -5; _x71 < 5; _x71 += 0.5) {
			_loop5(_x71);
		}
	});
}

/* eslint no-magic-numbers: ["warn", {ignore: [0, 1, 3]}] */
function cbrt(x) {
	var root = x$40.pow(x$40.abs(x), 1 / 3);
	return x < 0 ? -root : root;
}

test$51(cbrt, 'Math.cbrt#j0');

test$51(Math.cbrt);

function test$53(ceil) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.ceil';


	describe(name, function () {

		[[-1.1, -1], [-0.1, 0], [0, 0], [0.1, 1], [1.1, 2]].forEach(function (_ref95) {
			var _ref96 = _slicedToArray(_ref95, 2),
			    value = _ref96[0],
			    expected = _ref96[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(ceil(value), expected);
			});
		});
	});
}

test$53(Math.ceil);

function test$55(clz32) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.clz32';


	describe(name, function () {

		[[1, 31], [1000, 22], [0, 32], [3.5, 30]].forEach(function (_ref97) {
			var _ref98 = _slicedToArray(_ref97, 2),
			    value = _ref98[0],
			    expected = _ref98[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.equal(clz32(value), expected);
			});
		});
	});
}

/* eslint no-magic-numbers: ["warn", {ignore: [-1, 0, 1, 31, 32]}], no-bitwise: "off" */
function clz32(x) {
	if (x === null || x === 0) {
		return 32;
	}
	return 31 - x$40.floor(x$40.log(x >>> 0) * x$40.LOG2E);
}

test$55(clz32, 'Math.clz32#j0');

test$55(Math.clz32);

function test$57(cos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cos';


	describe(name, function () {

		[[-Math.PI, -1], [-Math.PI / 2, 0], [0, 1], [Math.PI / 2, 0], [Math.PI, -1]].forEach(function (_ref99) {
			var _ref100 = _slicedToArray(_ref99, 2),
			    value = _ref100[0],
			    expected = _ref100[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(cos(value), expected);
			});
		});
	});
}

test$57(Math.cos);

function test$59(cosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cosh';


	describe(name, function () {
		var _loop6 = function _loop6(_x76) {
			var expected = (Math.exp(_x76) + 1 / Math.exp(_x76)) / 2;
			it(name + '(' + _x76.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
				return regeneratorRuntime.wrap(function _callee28$(_context28) {
					while (1) {
						switch (_context28.prev = _context28.next) {
							case 0:
								assert.approxEqual(cosh(_x76), expected);

							case 1:
							case 'end':
								return _context28.stop();
						}
					}
				}, _callee28, this);
			})));
		};

		for (var _x76 = -5; _x76 < 5; _x76 += 1) {
			_loop6(_x76);
		}
	});
}

function cosh(x) {
	var y = x$40.exp(x);
	return (y + 1 / y) / 2;
}

test$59(cosh, 'Math.cosh#j0');

test$59(Math.cosh);

function test$61(E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.E';


	describe(name, function () {

		it('should be approximately equal to 2.718281828459045', function () {
			var expected = 2.718281828459045;
			assert.approxEqual(E, expected);
		});
	});
}

test$61(Math.E);

function test$63(exp) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.exp';


	describe(name, function () {

		[[2, Math.E * Math.E], [-2, 1 / (Math.E * Math.E)], [0, 1]].forEach(function (_ref102) {
			var _ref103 = _slicedToArray(_ref102, 2),
			    value = _ref103[0],
			    expected = _ref103[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(exp(value), expected);
			});
		});
	});
}

test$63(Math.exp);

function test$65(expm1) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.expm1';


	describe(name, function () {

		[[2, Math.E * Math.E - 1], [-2, 1 / (Math.E * Math.E) - 1], [0, 0]].forEach(function (_ref104) {
			var _ref105 = _slicedToArray(_ref104, 2),
			    value = _ref105[0],
			    expected = _ref105[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(expm1(value), expected);
			});
		});
	});
}

function expm1(x) {
	return x$40.exp(x) - 1;
}

test$65(expm1, 'Math.expm1#j0');

test$65(Math.expm1);

function test$67(floor) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.floor';


	describe(name, function () {

		[[-0.1, -1], [0.1, 0], [1.1, 1]].forEach(function (_ref106) {
			var _ref107 = _slicedToArray(_ref106, 2),
			    value = _ref107[0],
			    expected = _ref107[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(floor(value), expected);
			});
		});
	});
}

test$67(Math.floor);

function test$69(fround) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.fround';


	describe(name, function () {

		[[1.337, 1.3370000123977661]].forEach(function (_ref108) {
			var _ref109 = _slicedToArray(_ref108, 2),
			    value = _ref109[0],
			    expected = _ref109[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(fround(value), expected);
			});
		});
	});
}

function fround(x) {
	return new x$21([x])[0];
}

test$69(fround, 'Math.fround#j0');

test$69(Math.fround);

function test$71(hypot) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.hypot';


	describe(name, function () {

		[[[3, 4], 5], [[1, 1, 1, 1], 2]].forEach(function (_ref110) {
			var _ref111 = _slicedToArray(_ref110, 2),
			    args = _ref111[0],
			    expected = _ref111[1];

			it(name + '(' + args.join(', ') + ') \u2192 ' + expected, function () {
				assert.approxEqual(hypot.apply(undefined, _toConsumableArray(args)), expected);
			});
		});
	});
}

function hypot() {
	var sum = 0;

	for (var _len45 = arguments.length, args = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
		args[_key45] = arguments[_key45];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var value = args[i];
		sum += value * value;
	}
	return x$40.sqrt(sum);
}

test$71(hypot, 'Math.hypot#j0');

test$71(Math.hypot);

function test$73(imul) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.imul';


	describe(name, function () {

		[[[2, 4], 8], [[-1, 8], -8], [[-2, -2], 4]].forEach(function (_ref112) {
			var _ref113 = _slicedToArray(_ref112, 2),
			    args = _ref113[0],
			    expected = _ref113[1];

			it(name + '(' + args.join(', ') + ') \u2192 ' + expected, function () {
				assert.approxEqual(imul.apply(undefined, _toConsumableArray(args)), expected);
			});
		});
	});
}

/* eslint-disable no-bitwise, no-magic-numbers */
function imul(a, b) {
	var ah = a >>> 16 & 0xffff;
	var al = a & 0xffff;
	var bh = b >>> 16 & 0xffff;
	var bl = b & 0xffff;
	return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}

test$73(imul, 'Math.imul#j0');

test$73(Math.imul);

function test$75(LN10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN10';


	describe(name, function () {

		it('should be approximately equal to 2.302585092994046', function () {
			var expected = 2.302585092994046;
			assert.approxEqual(LN10, expected);
		});
	});
}

test$75(Math.LN10);

function test$77(LN2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN2';


	describe(name, function () {

		it('should be approximately equal to 0.6931471805599453', function () {
			var expected = 0.6931471805599453;
			assert.approxEqual(LN2, expected);
		});
	});
}

test$77(Math.LN2);

function test$79(log) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log';


	describe(name, function () {

		[[Math.E, 1], [1, 0], [Math.E * Math.E, 2]].forEach(function (_ref114) {
			var _ref115 = _slicedToArray(_ref114, 2),
			    value = _ref115[0],
			    expected = _ref115[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(log(value), expected);
			});
		});
	});
}

test$79(Math.log);

function test$81(log10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log10';


	describe(name, function () {

		[[0.1, -1], [10, 1], [1, 0], [100, 2]].forEach(function (_ref116) {
			var _ref117 = _slicedToArray(_ref116, 2),
			    value = _ref117[0],
			    expected = _ref117[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(log10(value), expected);
			});
		});
	});
}

function log10(x) {
	return x$40.log(x) / x$40.LN10;
}

test$81(log10, 'Math.log10#j0');

test$81(Math.log10);

function test$83(LOG10E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG10E';


	describe(name, function () {

		it('should be approximately equal to 0.4342944819032518', function () {
			var expected = 0.4342944819032518;
			assert.approxEqual(LOG10E, expected);
		});
	});
}

test$83(Math.LOG10E);

function test$85(log1p) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log1p';


	describe(name, function () {

		[[Math.E - 1, 1], [0, 0], [Math.E * Math.E - 1, 2]].forEach(function (_ref118) {
			var _ref119 = _slicedToArray(_ref118, 2),
			    value = _ref119[0],
			    expected = _ref119[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(log1p(value), expected);
			});
		});
	});
}

function log1p(x) {
	return x$40.log(x + 1);
}

test$85(log1p, 'Math.log1p#j0');

test$85(Math.log1p);

function test$87(log2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log2';


	describe(name, function () {

		[[1 / 2, -1], [1, 0], [2, 1], [4, 2], [8, 3]].forEach(function (_ref120) {
			var _ref121 = _slicedToArray(_ref120, 2),
			    value = _ref121[0],
			    expected = _ref121[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(log2(value), expected);
			});
		});
	});
}

function log2(x) {
	return x$40.log(x) / x$40.LN2;
}

test$87(log2, 'Math.log2#j0');

test$87(Math.log2);

function test$89(LOG2E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG2E';


	describe(name, function () {

		it('should be approximately equal to 1.4426950408889633', function () {
			var expected = 1.4426950408889633;
			assert.approxEqual(LOG2E, expected);
		});
	});
}

test$89(Math.LOG2E);

function test$91(max) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.max';


	describe(name, function () {

		[[[3, 4], 4], [[1, 1, 1, 2], 2]].forEach(function (_ref122) {
			var _ref123 = _slicedToArray(_ref122, 2),
			    args = _ref123[0],
			    expected = _ref123[1];

			it(name + '(' + args.join(', ') + ') \u2192 ' + expected, function () {
				assert.approxEqual(max.apply(undefined, _toConsumableArray(args)), expected);
			});
		});
	});
}

test$91(Math.max);

function test$93(min) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.min';


	describe(name, function () {

		[[[3, 4], 3], [[1, 1, 1, 2], 1]].forEach(function (_ref124) {
			var _ref125 = _slicedToArray(_ref124, 2),
			    args = _ref125[0],
			    expected = _ref125[1];

			it(name + '(' + args.join(', ') + ') \u2192 ' + expected, function () {
				assert.approxEqual(min.apply(undefined, _toConsumableArray(args)), expected);
			});
		});
	});
}

test$93(Math.min);

function test$95(PI) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.PI';


	describe(name, function () {

		it('should be approximately equal to 3.141592653589793', function () {
			var expected = 3.141592653589793;
			assert.approxEqual(PI, expected);
		});
	});
}

test$95(Math.PI);

function test$97(pow) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.pow';


	describe(name, function () {

		[[[1, 10], 1], [[2, 10], 1024]].forEach(function (_ref126) {
			var _ref127 = _slicedToArray(_ref126, 2),
			    args = _ref127[0],
			    expected = _ref127[1];

			it(name + '(' + args.join(', ') + ') \u2192 ' + expected, function () {
				assert.approxEqual(pow.apply(undefined, _toConsumableArray(args)), expected);
			});
		});
	});
}

test$97(Math.pow);

function test$99(random) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.random';


	describe(name, function () {

		it('returns a number in [0, 1)', function () {
			for (var i = 0; i < 100; i++) {
				var _x97 = random();
				assert(0 <= _x97 && _x97 < 1);
			}
		});
	});
}

test$99(Math.random);

function test$101(round) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.round';


	describe(name, function () {

		[[-0.6, -1], [-0.2, 0], [0.2, 0], [0.6, 1]].forEach(function (_ref128) {
			var _ref129 = _slicedToArray(_ref128, 2),
			    value = _ref129[0],
			    expected = _ref129[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(round(value), expected);
			});
		});
	});
}

test$101(Math.round);

function test$103(sign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sign';


	describe(name, function () {

		[[-0.6, -1], [-0.2, -1], [0, 0], [0.2, 1], [0.6, 1]].forEach(function (_ref130) {
			var _ref131 = _slicedToArray(_ref130, 2),
			    value = _ref131[0],
			    expected = _ref131[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(sign(value), expected);
			});
		});
	});
}

var x$47 = isNaN;

function sign(x) {
	x = +x;
	if (x === 0 || x$47(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
}

test$103(sign, 'Math.sign#j0');

test$103(Math.sign);

function test$105(sin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sin';


	describe(name, function () {

		[[Math.PI / -2, -1], [Math.PI / -4, Math.sqrt(2) / -2], [0, 0], [Math.PI / 4, Math.sqrt(2) / 2], [Math.PI / 2, 1]].forEach(function (_ref132) {
			var _ref133 = _slicedToArray(_ref132, 2),
			    value = _ref133[0],
			    expected = _ref133[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(sin(value), expected);
			});
		});
	});
}

test$105(Math.sin);

function test$107(sinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sinh';


	describe(name, function () {
		var _loop7 = function _loop7(_x102) {
			var expected = (Math.exp(_x102) - 1 / Math.exp(_x102)) / 2;
			it(name + '(' + _x102.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
				return regeneratorRuntime.wrap(function _callee29$(_context29) {
					while (1) {
						switch (_context29.prev = _context29.next) {
							case 0:
								assert.approxEqual(sinh(_x102), expected);

							case 1:
							case 'end':
								return _context29.stop();
						}
					}
				}, _callee29, this);
			})));
		};

		for (var _x102 = -5; _x102 < 5; _x102 += 1) {
			_loop7(_x102);
		}
	});
}

function sinh(x) {
	var y = x$40.exp(x);
	return (y - 1 / y) / 2;
}

test$107(sinh, 'Math.sinh#j0');

test$107(Math.sinh);

function test$109(sqrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sqrt';


	describe(name, function () {

		[[Math.PI * Math.PI, Math.PI], [9, 3], [0.01, 0.1]].forEach(function (_ref135) {
			var _ref136 = _slicedToArray(_ref135, 2),
			    value = _ref136[0],
			    expected = _ref136[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(sqrt(value), expected);
			});
		});
	});
}

test$109(Math.sqrt);

function test$111(SQRT1_2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT1_2';


	describe(name, function () {

		it('should be approximately equal to 0.7071067811865476', function () {
			var expected = 0.7071067811865476;
			assert.approxEqual(SQRT1_2, expected);
		});
	});
}

test$111(Math.SQRT1_2);

function test$113(SQRT2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT2';


	describe(name, function () {

		it('should be approximately equal to 1.4142135623730951', function () {
			var expected = 1.4142135623730951;
			assert.approxEqual(SQRT2, expected);
		});
	});
}

test$113(Math.SQRT2);

function test$115(tan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tan';


	describe(name, function () {

		[[Math.PI / -3, -Math.sqrt(3)], [Math.PI / -4, -1], [0, 0], [Math.PI / 4, 1], [Math.PI / 3, Math.sqrt(3)]].forEach(function (_ref137) {
			var _ref138 = _slicedToArray(_ref137, 2),
			    value = _ref138[0],
			    expected = _ref138[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(tan(value), expected);
			});
		});
	});
}

test$115(Math.tan);

function test$117(tanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tanh';


	describe(name, function () {
		var _loop8 = function _loop8(_x108) {
			var expected = (Math.exp(2 * _x108) - 1) / (Math.exp(2 * _x108) + 1);
			it(name + '(' + _x108.toFixed(1) + ') \u2192 ' + expected, _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
				return regeneratorRuntime.wrap(function _callee30$(_context30) {
					while (1) {
						switch (_context30.prev = _context30.next) {
							case 0:
								assert.approxEqual(tanh(_x108), expected);

							case 1:
							case 'end':
								return _context30.stop();
						}
					}
				}, _callee30, this);
			})));
		};

		for (var _x108 = -5; _x108 < 5; _x108 += 1) {
			_loop8(_x108);
		}
	});
}

function tanh(x) {
	if (x === Infinity) {
		return 1;
	} else if (x === -Infinity) {
		return -1;
	}
	var y = x$40.exp(2 * x);
	return (y - 1) / (y + 1);
}

test$117(tanh, 'Math.tanh#j0');

test$117(Math.tanh);

function test$119(trunc) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.trunc';


	describe(name, function () {

		[[13.37, 13], [42.84, 42], [0.123, 0], [-0.123, -0], ['-1.123', -1]].forEach(function (_ref140) {
			var _ref141 = _slicedToArray(_ref140, 2),
			    value = _ref141[0],
			    expected = _ref141[1];

			it(name + '(' + value + ') \u2192 ' + expected, function () {
				assert.approxEqual(trunc(value), expected);
			});
		});
	});
}

/* eslint-disable no-bitwise, no-magic-numbers */
function trunc(x) {
	return x - x % 1;
}

test$119(trunc, 'Math.trunc#j0');

test$119(Math.trunc);

describe('N.prototype.append', function () {

	it('should append nodes', function () {
		var element1 = new N(Date.now() + '-1');
		var element2 = new N();
		var element3 = new N(Date.now() + '-2');
		var element = new N({
			c: [element1]
		});
		element.append(element2, element3);
		var expected = [element1, element2, element3];
		element.childNodes.forEach(function (element, index) {
			assert.equal(element.equals(expected[index]), true);
		});
	});

	it('should skip null or false or undefined', function () {
		var element1 = new N(Date.now() + '-1');
		var element2 = new N();
		var element3 = new N(Date.now() + '-2');
		var element = new N({
			c: [element1]
		});
		element.append(0, element2, null, element3);
		var expected = [element1, element2, element3];
		element.childNodes.forEach(function (element, index) {
			assert.equal(element.equals(expected[index]), true);
		});
	});
});

describe('N.prototype.attributes', function () {

	it('should set an attribute', function () {
		var element = new N();
		var key = 'attr-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key), null);
		assert.equal(element.setAttribute(key, value1, value2), element);
		assert.equal(element.getAttribute(key), value1 + ' ' + value2);
	});

	it('should set a "data-" prefixed attribute', function () {
		var element = new N();
		var key = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key), null);
		assert.equal(element.setAttribute(key, value1, value2), element);
		assert.equal(element.getAttribute(key), value1 + ' ' + value2);
	});

	it('should remove attributes', function () {
		var element = new N();
		var key1 = 'attr-' + Date.now();
		var key2 = 'attr-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		assert.equal(element.setAttribute(key1, value1, value2), element);
		assert.equal(element.setAttribute(key2, value2, value1), element);
		assert.equal(element.getAttribute(key1), value1 + ' ' + value2);
		assert.equal(element.getAttribute(key2), value2 + ' ' + value1);
		assert.equal(element.removeAttribute(key1, key2), element);
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
	});

	it('should remove a "data-" prefixed attribute', function () {
		var element = new N();
		var key1 = 'data-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		assert.equal(element.setAttribute(key1, value1, value2), element);
		assert.equal(element.setAttribute(key2, value2, value1), element);
		assert.equal(element.getAttribute(key1), value1 + ' ' + value2);
		assert.equal(element.getAttribute(key2), value2 + ' ' + value1);
		assert.equal(element.removeAttribute(key1, key2), element);
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
	});

	it('should return a map of attributes', function () {
		var key1 = 'attr-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		var element = new N({
			a: [[key1, value2], [key1, value1], [key2, value2]]
		});
		assert.deepEqual(Array.from(element.attributes).sort(function (_ref142, _ref143) {
			var _ref145 = _slicedToArray(_ref142, 1),
			    a = _ref145[0];

			var _ref144 = _slicedToArray(_ref143, 1),
			    b = _ref144[0];

			return a < b ? -1 : 1;
		}), [[key1, value1], [key2, value2]].sort(function (_ref146, _ref147) {
			var _ref149 = _slicedToArray(_ref146, 1),
			    a = _ref149[0];

			var _ref148 = _slicedToArray(_ref147, 1),
			    b = _ref148[0];

			return a < b ? -1 : 1;
		}));
	});
});

describe('N.prototype.bb', function () {

	it('should get a bounding box', function () {
		var element = new N();
		new N(x$4.body).append(element);
		var _element$bb = element.bb,
		    left = _element$bb.left,
		    top = _element$bb.top;

		assert.equal(0 <= left, true);
		assert.equal(0 <= top, true);
		element.remove();
	});
});

describe('N.prototype.belongsTo', function () {

	it('should return true if the node belongs to the given node', function () {
		var element1 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element1.belongsTo(element), true);
	});

	it('should return false if the node does not contain the given node', function () {
		var element1 = new N();
		var element = new N();
		assert.equal(element1.belongsTo(element), false);
	});
});

describe('N.prototype.childNodes', function () {

	it('should return all nodes under the element', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
	});
});

describe('N.prototype.children', function () {

	it('should return all elements under the element', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.deepEqual(element.children, [element2]);
	});
});

describe('N.prototype.addClass', function () {

	it('should add a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = new N({
			a: [['class', class1]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
		element.addClass(class2);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
	});

	it('should add 2 classes', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var class3 = '_' + Date.now() + '-3';
		var element = new N({
			a: [['class', class1]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
		element.addClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2, class3]);
	});
});

describe('N.prototype.removeClass', function () {

	it('should remove a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = new N({
			a: [['class', class1 + ' ' + class2]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
		element.removeClass(class2);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
	});

	it('should remove 2 classes', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var class3 = '_' + Date.now() + '-3';
		var element = new N({
			a: [['class', class1 + ' ' + class2 + ' ' + class3]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2, class3]);
		element.removeClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
	});
});

describe('N.prototype.toggleClass', function () {

	it('should toggle a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = new N({
			a: [['class', class1 + ' ' + class2]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
		element.toggleClass(class2);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
		element.toggleClass(class2);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
	});

	it('should toggle 2 classes', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var class3 = '_' + Date.now() + '-3';
		var element = new N({
			a: [['class', class1 + ' ' + class2]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
		element.toggleClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class3]);
		element.toggleClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
	});
});

describe('N.prototype.hasClass', function () {

	it('should check a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = new N({
			a: [['class', class1]]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class2), false);
	});

	it('should check 2 classes', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var class3 = '_' + Date.now() + '-3';
		var element = new N({
			a: [['class', class1, class2]]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class1, class2), true);
		assert.equal(element.hasClass(class1, class3), false);
	});

	it('should check nodes which has no classList', function () {
		var element = new N(x$4);
		assert.equal(element.hasClass(), true);
		assert.equal(element.hasClass('_' + Date.now()), false);
	});
});

describe('N.prototype.clone', function () {

	it('should clone a text node', function () {
		var text = '' + Date.now();
		var element1 = new N(text);
		assert.equal(element1.text, text);
		var element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node', function () {
		var text = '' + Date.now();
		var element1 = new N({
			c: [text]
		});
		assert.equal(element1.text, text);
		var element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node shallowly', function () {
		var text = '' + Date.now();
		var element1 = new N({
			c: [text]
		});
		assert.equal(element1.text, text);
		var element2 = element1.clone(false);
		assert.equal(element2.text, '');
	});
});

describe('N.prototype.contains', function () {

	it('should return true if the node contains the given node', function () {
		var element1 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.contains(element1), true);
	});

	it('should return false if the node does not contain the given node', function () {
		var element1 = new N();
		var element = new N();
		assert.equal(element.contains(element1), false);
	});
});

describe('N.prototype.empty', function () {

	it('should remove childNodes', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
		assert.equal(element.empty(), element);
		assert.deepEqual(element.childNodes, []);
	});
});

describe('N.prototype.equals', function () {

	it('should return whether the given wraps the same element or not', function () {
		var element1 = new N();
		var element2 = new N(element1);
		var element3 = new N();
		assert.equal(element1.equals(element1), true);
		assert.equal(element1.equals(element2), true);
		assert.equal(element1.equals(element3), false);
		assert.equal(element2.equals(element1), true);
		assert.equal(element2.equals(element2), true);
		assert.equal(element2.equals(element3), false);
		assert.equal(element3.equals(element1), false);
		assert.equal(element3.equals(element2), false);
		assert.equal(element3.equals(element3), true);
	});
});

/* eslint-disable no-empty-function */
describe('N.eventFilter', function () {

	after(function () {
		delete N.eventFilter;
	});

	it('should set a filter', function () {
		var actual = [];
		N.eventFilter = function () {
			for (var _len46 = arguments.length, args = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
				args[_key46] = arguments[_key46];
			}

			actual.push.apply(actual, [this].concat(args));
		};
		var element = new N();
		var key = 'event-' + Date.now();
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key, fn]]);
	});

	it('should set a filter and skip addEventListener', function () {
		var actual = [];
		N.eventFilter = function () {
			for (var _len47 = arguments.length, args = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
				args[_key47] = arguments[_key47];
			}

			actual.push.apply(actual, [this].concat(args));
			return true;
		};
		var element = new N();
		var key = 'event-' + Date.now();
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(Array.from(element.listeners), []);
	});
});

describe('N.prototype.on', function () {

	it('should initialize with event listener', function () {
		var key = 'event-' + Date.now();
		function fn() {}
		var element = new N({
			e: [[key, fn]]
		});
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key, fn]]);
	});

	it('should set an listener', function () {
		var element = new N();
		var key = 'event-' + Date.now();
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key, fn]]);
	});

	it('should set listeners', function () {
		var element = new N();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key1, fn1).on(key2, fn2);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should call a method', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
		var results, data1, data2, E, element;
		return regeneratorRuntime.wrap(function _callee31$(_context31) {
			while (1) {
				switch (_context31.prev = _context31.next) {
					case 0:
						results = [];
						data1 = new Date();
						data2 = Date.now();

						E = function (_N) {
							_inherits(E, _N);

							function E() {
								_classCallCheck(this, E);

								return _possibleConstructorReturn(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
							}

							_createClass(E, [{
								key: 'click',
								value: function click(event) {
									results.push(event.detail);
								}
							}]);

							return E;
						}(N);

						element = new E({
							e: ['click']
						});

						element.emit('click', data1).emit('_click', data1).emit('click', data2);
						_context31.next = 8;
						return wait();

					case 8:
						assert.deepEqual(results, [data1, data2]);

					case 9:
					case 'end':
						return _context31.stop();
				}
			}
		}, _callee31, this);
	})));

	it('should throw an error if the object has no method', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
		var E, element;
		return regeneratorRuntime.wrap(function _callee32$(_context32) {
			while (1) {
				switch (_context32.prev = _context32.next) {
					case 0:
						E = function (_N2) {
							_inherits(E, _N2);

							function E() {
								_classCallCheck(this, E);

								return _possibleConstructorReturn(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
							}

							return E;
						}(N);

						element = new E();

						assert.throws(function () {
							element.on('click');
						});

					case 3:
					case 'end':
						return _context32.stop();
				}
			}
		}, _callee32, this);
	})));
});

describe('N.prototype.off', function () {

	it('should remove an listener', function () {
		var element = new N();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key1, fn1).on(key1, fn2).on(key2, fn2);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key1, fn2], [key2, fn2]]);
		element.off(key1, fn2);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should remove listeners', function () {
		var element = new N();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key1, fn1).on(key1, fn2).on(key2, fn2);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key1, fn2], [key2, fn2]]);
		element.off(key1);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key2, fn2]]);
	});
});

describe('N.prototype.emit', function () {

	it('should call a listener', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
		var element, key, data, event;
		return regeneratorRuntime.wrap(function _callee33$(_context33) {
			while (1) {
				switch (_context33.prev = _context33.next) {
					case 0:
						element = new N();
						key = 'event-' + Date.now();
						data = new Date();
						_context33.next = 5;
						return new x$3(function (resolve) {
							element.on(key, resolve).emit(key, data);
						});

					case 5:
						event = _context33.sent;

						assert.equal(event.detail, data);

					case 7:
					case 'end':
						return _context33.stop();
				}
			}
		}, _callee33, this);
	})));

	it('should call listeners', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee34$(_context34) {
			while (1) {
				switch (_context34.prev = _context34.next) {
					case 0:
						onCall = function onCall(_ref154) {
							var detail = _ref154.detail;

							results.push(detail);
						};

						element = new N();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.on(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context34.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2, data2]);

					case 10:
					case 'end':
						return _context34.stop();
				}
			}
		}, _callee34, this);
	})));
});

describe('N.prototype.once', function () {

	it('should call a listener only once', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee35$(_context35) {
			while (1) {
				switch (_context35.prev = _context35.next) {
					case 0:
						onCall = function onCall(_ref156) {
							var detail = _ref156.detail;

							results.push(detail);
						};

						element = new N();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.once(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context35.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2]);

					case 10:
					case 'end':
						return _context35.stop();
				}
			}
		}, _callee35, this);
	})));

	it('should call a method only once', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee36() {
		var results, data1, data2, E, element;
		return regeneratorRuntime.wrap(function _callee36$(_context36) {
			while (1) {
				switch (_context36.prev = _context36.next) {
					case 0:
						results = [];
						data1 = new Date();
						data2 = Date.now();

						E = function (_N3) {
							_inherits(E, _N3);

							function E() {
								_classCallCheck(this, E);

								return _possibleConstructorReturn(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
							}

							_createClass(E, [{
								key: 'click',
								value: function click(event) {
									results.push(event.detail);
								}
							}]);

							return E;
						}(N);

						element = new E({});

						element.once('click').emit('click', data1).emit('_click', data1).emit('click', data2);
						_context36.next = 8;
						return wait();

					case 8:
						assert.deepEqual(results, [data1]);

					case 9:
					case 'end':
						return _context36.stop();
				}
			}
		}, _callee36, this);
	})));

	it('should throw an error if the object has no method', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee37() {
		var E, element;
		return regeneratorRuntime.wrap(function _callee37$(_context37) {
			while (1) {
				switch (_context37.prev = _context37.next) {
					case 0:
						E = function (_N4) {
							_inherits(E, _N4);

							function E() {
								_classCallCheck(this, E);

								return _possibleConstructorReturn(this, (E.__proto__ || Object.getPrototypeOf(E)).apply(this, arguments));
							}

							return E;
						}(N);

						element = new E();

						assert.throws(function () {
							element.once('click');
						});

					case 3:
					case 'end':
						return _context37.stop();
				}
			}
		}, _callee37, this);
	})));
});

describe('N.prototype.find', function () {

	it('should return the first matched element', function () {
		var className = 'c' + Date.now();
		var element1 = new N({
			a: [['class', className]]
		});
		var element2 = new N({
			a: [['class', className]]
		});
		var element3 = new N({
			a: [['class', className]]
		});
		var element = new N({
			c: [element2, {
				c: [element3]
			}]
		});
		new N({
			c: [element1, element]
		});
		var actual = element.find('.' + className);
		var expected = element2;
		assert.equal(actual.equals(expected), true);
	});
});

describe('N.prototype.findAll', function () {

	it('should return an array of matched elements', function () {
		var className = 'c' + Date.now();
		var element1 = new N({
			a: [['class', className]]
		});
		var element2 = new N({
			a: [['class', className]]
		});
		var element3 = new N({
			a: [['class', className]]
		});
		var element = new N({
			c: [element2, {
				c: [element3]
			}]
		});
		new N({
			c: [element1, element]
		});
		var actual = element.findAll('.' + className);
		var expected = [element2, element3];
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});
});

describe('N.prototype.firstChild', function () {

	it('should return null', function () {
		var element = new N();
		assert.equal(element.firstChild, null);
	});

	it('should return the first child', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
	});

	it('should set the first child', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.setFirstChild(element2);
		assert.equal(element.firstChild.equals(element2), true);
	});
});

describe('N.prototype.focused', function () {

	it('should return true if it is focused', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee38() {
		var body, element;
		return regeneratorRuntime.wrap(function _callee38$(_context38) {
			while (1) {
				switch (_context38.prev = _context38.next) {
					case 0:
						_context38.next = 2;
						return new N.ready();

					case 2:
						body = _context38.sent;
						element = new N({
							t: 'input',
							a: [['type', 'text']]
						});

						body.append(element);
						_context38.next = 7;
						return new x$3(function (resolve, reject) {
							var count = 0;
							function check() {
								element.node.click();
								element.node.focus();
								if (element.equals(x$4.activeElement)) {
									resolve();
								} else if (count++ < 20) {
									x$27(check, 100);
								} else {
									reject(new Error('Failed to focus an element'));
								}
							}
							check();
						});

					case 7:
						assert.equal(element.focused, true);
						element.remove();

					case 9:
					case 'end':
						return _context38.stop();
				}
			}
		}, _callee38, this);
	})));

	it('should return true if it is not focused', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee39() {
		var body, element;
		return regeneratorRuntime.wrap(function _callee39$(_context39) {
			while (1) {
				switch (_context39.prev = _context39.next) {
					case 0:
						_context39.next = 2;
						return N.ready();

					case 2:
						body = _context39.sent;
						element = new N({
							t: 'input'
						});

						body.append(element);
						assert.equal(element.focused, false);
						element.remove();

					case 7:
					case 'end':
						return _context39.stop();
				}
			}
		}, _callee39, this);
	})));
});

describe('N.prototype.forEachAncestor', function () {

	it('should iterate ancestors', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N({ c: [element1, element2] });
		var element4 = new N({ c: [element3] });
		var results = [];
		element1.forEachAncestor(function (element) {
			results.push(element);
		});
		var expected = [element1, element3, element4];
		expected.forEach(function (element, index) {
			assert(element.equals(results[index]), 'Error at ' + index);
		});
	});

	it('should iterate ancestors but skip the first element', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N({ c: [element1, element2] });
		var element4 = new N({ c: [element3] });
		var results = [];
		element1.forEachAncestor(function (element) {
			results.push(element);
		}, 1);
		var expected = [element3, element4];
		expected.forEach(function (element, index) {
			assert(element.equals(results[index]), 'Error at ' + index);
		});
	});

	it('should iterate ancestors but skip the document', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N({ c: [element1, element2] });
		var element4 = new N({ c: [element3] });
		element4.setParent(x$4.body);
		var results = [];
		element1.forEachAncestor(function (element) {
			results.push(element);
		}, 1);
		var expected = [element3, element4, new N(x$4.body)];
		expected.forEach(function (element, index) {
			assert(element.equals(results[index]), 'Error at ' + index);
		});
		element4.remove();
	});
});

describe('N.prototype.html', function () {

	it('should return its innerHTML', function () {
		var text = '' + Date.now();
		var element = new N({
			c: [{
				t: 'span',
				c: [text]
			}]
		});
		var expected = '<span>' + text + '</span>';
		assert.equal(element.html, expected);
	});

	it('should set its innerHTML', function () {
		var text = '' + Date.now();
		var element = new N({
			c: [{}, {}, text]
		});
		element.setHTML('<s>' + text + '</s>');
		var expected = '<s>' + text + '</s>';
		assert.equal(element.html, expected);
	});
});

describe('N.prototype.insertBefore', function () {

	it('should insert a new child', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});
});

describe('N.prototype.lastChild', function () {

	it('should return null', function () {
		var element = new N();
		assert.equal(element.lastChild, null);
	});

	it('should return the first child', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should set the first child', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element.setLastChild(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});
});

describe('N.prototype.next', function () {

	it('should insert a new node before an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		var expected = [element1, element2];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should insert 2 new nodes before an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2, element3);
		var expected = [element1, element2, element3];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element2, element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		var expected = [element1, element2];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace existing nodes', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N();
		var element = new N({
			c: [element3, element2, element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2, element3);
		var expected = [element1, element2, element3];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should return null', function () {
		var element1 = new N();
		var element2 = new N();
		new N({
			c: [element1, element2]
		});
		assert.equal(element2.next, null);
	});
});

describe('N.prototype.nodeType', function () {

	it('should return ELEMENT_NODE', function () {
		var element = new N({});
		assert.equal(element.nodeType, x$35.ELEMENT_NODE);
	});

	it('should return TEXT_NODE', function () {
		var element = new N('' + Date.now());
		assert.equal(element.nodeType, x$35.TEXT_NODE);
	});
});

describe('N.prototype.isElementNode', function () {

	it('should return true', function () {
		var element = new N({});
		assert.equal(element.isElementNode, true);
	});

	it('should return false', function () {
		var element = new N('' + Date.now());
		assert.equal(element.isElementNode, false);
	});
});

describe('N.prototype.isTextNode', function () {

	it('should return false', function () {
		var element = new N({});
		assert.equal(element.isTextNode, false);
	});

	it('should return true', function () {
		var element = new N('' + Date.now());
		assert.equal(element.isTextNode, true);
	});
});

describe('N.prototype.normalize', function () {

	it('should normalize an element', function () {
		var text1 = 'text1' + Date.now();
		var text2 = 'text2' + Date.now();
		var text3 = 'text3' + Date.now();
		var text4 = 'text4' + Date.now();
		var text5 = 'text5' + Date.now();
		var text6 = 'text6' + Date.now();
		var data = {
			c: ['', text1, text2, {
				c: [text3, '', text4]
			}, text5, text6]
		};
		var element = new N(data);
		assert.deepEqual(element.toObject(), data);
		element.normalize();
		var expected = {
			c: ['' + text1 + text2, {
				c: ['' + text3 + text4]
			}, '' + text5 + text6]
		};
		assert.deepEqual(element.toObject(), expected);
	});
});

describe('N.prototype.parent', function () {

	it('should return its parent', function () {
		var element1 = new N();
		var element2 = new N({ c: [element1] });
		assert.equal(element1.parent.equals(element2), true);
	});

	it('should set its parent', function () {
		var element1 = new N();
		var element2 = new N();
		element1.setParent(element2);
		assert.equal(element1.parent.equals(element2), true);
	});
});

describe('N.prototype.prepend', function () {

	it('should prepend nodes', function () {
		var element1 = new N(Date.now() + '-1');
		var element2 = new N();
		var element3 = new N(Date.now() + '-2');
		var element = new N({
			c: [element1]
		});
		element.prepend(element2, element3);
		assert.deepEqual(element.childNodes, [element3, element2, element1]);
	});
});

describe('N.prototype.previous', function () {

	it('should insert a new node before an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		var expected = [element2, element1];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should insert 2 new nodes before an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2, element3);
		var expected = [element2, element3, element1];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace an existing node', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		var expected = [element2, element1];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should replace existing nodes', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N();
		var element = new N({
			c: [element3, element1, element2]
		});
		assert.equal(element.firstChild.equals(element3), true);
		element1.setPrevious(element2, element3);
		var expected = [element2, element3, element1];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});

	it('should return null', function () {
		var element1 = new N();
		var element2 = new N();
		new N({
			c: [element1, element2]
		});
		assert.equal(element1.previous, null);
	});
});

describe('N.prototype.remove', function () {

	it('should remove itself from its parent', function () {
		var element1 = new N('' + Date.now());
		var element2 = new N();
		var element = new N({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
		assert.equal(element1.remove(), element1);
		assert.equal(element1.remove(), element1);
		assert.deepEqual(element.childNodes, [element2]);
	});
});

describe('N.prototype.replaceChild', function () {

	it('should replace a node', function () {
		var element1 = new N();
		var element2 = new N();
		var element = new N({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.replaceChild(element2, element1);
		var expected = [element2];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});
});

describe('N.prototype.replaceWith', function () {

	it('should replace node with some nodes', function () {
		var element1 = new N();
		var element2 = new N();
		var element3 = new N();
		var element4 = new N();
		var element5 = new N();
		var element = new N({
			c: [element1, element2, element3]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element2.replaceWith(element4, element5);
		var expected = [element1, element4, element5, element3];
		element.childNodes.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true);
		});
	});
});

describe('N.prototype.text', function () {

	it('should return its textContent', function () {
		var text = '' + Date.now();
		var element = new N({
			c: [{
				t: 'span',
				c: [text]
			}]
		});
		var expected = text;
		assert.equal(element.text, expected);
	});

	it('should set its textContent', function () {
		var text = '' + Date.now();
		var element = new N({
			c: [{}, {}, text]
		});
		element.setText('<s>' + text + '</s>');
		var expected = '<s>' + text + '</s>';
		assert.equal(element.text, expected);
	});
});

var x$48 = location;

function compileCSS() {
	for (var _len48 = arguments.length, declarations = Array(_len48), _key48 = 0; _key48 < _len48; _key48++) {
		declarations[_key48] = arguments[_key48];
	}

	return declarations.map(function (declaration) {
		return declaration.join(':') + ';';
	}).join('');
}

var commonStyle = ['position:fixed;', 'left:0;', 'right:0;', 'bottom:0;', 'opacity:0.6;', 'font-family:Courier,monospace;', 'white-space:pre;', 'pointer-events:none;'].join('');

function forEachDirections$2(fn) {
	[['lrtb', compileCSS(['direction', 'ltr'], ['unicode-bidi', 'normal']), ['mainB', 'mainF', 'crossB', 'crossF']], ['rltb', compileCSS(['direction', 'rtl'], ['unicode-bidi', 'bidi-override']), ['mainF', 'mainB', 'crossB', 'crossF']], ['tbrl', compileCSS(['-ms-writing-mode', 'tb-rl'], ['-webkit-writing-mode', 'vertical-rl'], ['writing-mode', 'vertical-rl'], ['direction', 'ltr'], ['unicode-bidi', 'normal']), ['crossF', 'crossB', 'mainB', 'mainF']], ['tblr', compileCSS(['-ms-writing-mode', 'tb-lr'], ['-webkit-writing-mode', 'vertical-lr'], ['writing-mode', 'vertical-lr'], ['direction', 'ltr'], ['unicode-bidi', 'normal']), ['crossB', 'crossF', 'mainB', 'mainF']], ['btrl', compileCSS(['-ms-writing-mode', 'bt-rl'], ['-webkit-writing-mode', 'vertical-rl'], ['writing-mode', 'vertical-rl'], ['direction', 'rtl'], ['unicode-bidi', 'bidi-override']), ['crossF', 'crossB', 'mainF', 'mainB']], ['btlr', compileCSS(['-ms-writing-mode', 'bt-lr'], ['-webkit-writing-mode', 'vertical-lr'], ['writing-mode', 'vertical-lr'], ['direction', 'rtl'], ['unicode-bidi', 'bidi-override']), ['crossB', 'crossF', 'mainF', 'mainB']]].forEach(function (_ref161) {
		var _ref162 = _slicedToArray(_ref161, 3),
		    textDirectionType = _ref162[0],
		    style = _ref162[1],
		    visualDirections = _ref162[2];

		fn(textDirectionType, style, visualDirections.map(function (visualDirection, index) {
			return [['left', 'right', 'top', 'bottom'][index], visualDirection];
		}));
	});
}

describe('N.prototype.textDirection', function () {

	forEachDirections$2(function (textDirectionType, style) {
		it(textDirectionType + ' should return ' + textDirectionType + ' as its direction', function () {
			var element = new N({
				a: [['style', '' + commonStyle + style]]
			});
			element.setParent(x$4.body);
			assert.equal(element.textDirection.join(''), textDirectionType);
			element.remove();
		});
	});
});

// describe('N.prototype.modifyRange', function () {
//
// 	const debug = location.search.includes('modifyRange');
//
// 	forEachDirections((textDirectionType, style, visualDirections) => {
//
// 		describe(`N.prototype.modifyRange - ${textDirectionType}`, function () {
//
// 			if(browser.name === 'firefox') {
// 				it('skipped: Firefox', function () {});
// 				return;
// 			}
//
// 			visualDirections
// 			.forEach(([visualDirection, textDirection]) => {
//
// 				describe(`N.prototype.modifyRange - ${textDirectionType} - ${visualDirection}`, function () {
// 					const text1 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// 					const text2 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// 					const text3 = new N('ABCDEFGHI');
// 					const text4 = new N('JK');
// 					const text5 = new N('LMNOPQRSTUVWXYZ');
// 					const text6 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// 					const text7 = new N('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
// 					const inlineStyle = 'display:inline;';
// 					const br = {t: 'br'};
// 					const data = {
// 						a: [
// 							['contenteditable', 'true'],
// 						],
// 						c: [
// 							{
// 								a: [
// 									['style', inlineStyle],
// 								],
// 								c: [
// 									text1,
// 									br,
// 									{
// 										a: [
// 											['style', inlineStyle],
// 										],
// 										c: [
// 											text2,
// 										],
// 									}
// 								],
// 							},
// 							br,
// 							{
// 								a: [
// 									['style', inlineStyle],
// 								],
// 								c: [
// 									text3,
// 								],
// 							},
// 							text4,
// 							{
// 								a: [
// 									['style', inlineStyle],
// 								],
// 								c: [
// 									text5,
// 									br,
// 									{
// 										a: [
// 											['style', inlineStyle],
// 										],
// 										c: [
// 											text6,
// 										],
// 									}
// 								],
// 							},
// 							br,
// 							text7,
// 						],
// 					};
// 					const init = {
// 						startContainer: text4.node,
// 						startOffset: 1,
// 						endContainer: text4.node,
// 						endOffset: 1,
// 					};
// 					const [times, eventName] = {
// 						mainF: [69, 'range:last'],
// 						mainB: [63, 'range:first'],
// 						crossF: [3, 'range:lastline'],
// 						crossB: [3, 'range:firstline'],
// 					}[textDirection];
//
// 					const title1 = `Simple Text - ${textDirectionType} - move to ${visualDirection} twice`;
// 					it(title1, function () {
// 						if (debug) {
// 							console.info(title1);
// 							console.time(title1);
// 						}
// 						const text = new N(
// 							[
// 								'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 								'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 								'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 								'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 								'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 							]
// 							.join('\n')
// 						);
// 						testRange(
// 							{
// 								a: [
// 									['style', `${commonStyle}${style}`],
// 									['contenteditable', 'true'],
// 								],
// 								c: [text]
// 							},
// 							{
// 								startContainer: text.node,
// 								startOffset: 64,
// 								endContainer: text.node,
// 								endOffset: 64,
// 							},
// 							(element, range) => {
// 								element.modifyRange(range, 'move', visualDirection);
// 								if (debug) {
// 									console.log(`done: 1st modification, startOffset: ${range.startOffset}`);
// 								}
// 								element.modifyRange(range, 'move', visualDirection);
// 								if (debug) {
// 									console.log(`done: 2nd modification, startOffset: ${range.startOffset}`);
// 								}
// 								checkRange(
// 									range,
// 									{
// 										mainF: {
// 											startContainer: text.node,
// 											startOffset: 64 + 2,
// 											endContainer: text.node,
// 											endOffset: 64 + 2,
// 										},
// 										mainB: {
// 											startContainer: text.node,
// 											startOffset: 64 - 2,
// 											endContainer: text.node,
// 											endOffset: 64 - 2,
// 										},
// 										crossF: {
// 											startContainer: text.node,
// 											startOffset: 64 + 27 * 2,
// 											endContainer: text.node,
// 											endOffset: 64 + 27 * 2,
// 										},
// 										crossB: {
// 											startContainer: text.node,
// 											startOffset: 64 - 27 * 2,
// 											endContainer: text.node,
// 											endOffset: 64 - 27 * 2,
// 										},
// 									}[textDirection]
// 								);
// 							},
// 						);
// 						if (debug) {
// 							console.timeEnd(title1);
// 						}
// 					});
//
// 					const title2 = `Nested Elements - ${textDirectionType} - move to ${visualDirection} twice`;
// 					it(title2, function () {
// 						if (debug) {
// 							console.log(title2);
// 						}
// 						testRange(
// 							data,
// 							init,
// 							(element, range) => {
// 								element.setAttribute('style', `${commonStyle}${style}`);
// 								element.modifyRange(range, 'move', visualDirection);
// 								element.modifyRange(range, 'move', visualDirection);
// 								checkRange(
// 									range,
// 									{
// 										mainB: {
// 											startContainer: text3.node,
// 											startOffset: 8,
// 											endContainer: text3.node,
// 											endOffset: 8,
// 										},
// 										mainF: {
// 											startContainer: text5.node,
// 											startOffset: 1,
// 											endContainer: text5.node,
// 											endOffset: 1,
// 										},
// 										crossB: {
// 											startContainer: text1.node,
// 											startOffset: 10,
// 											endContainer: text1.node,
// 											endOffset: 10,
// 										},
// 										crossF: {
// 											startContainer: text7.node,
// 											startOffset: 10,
// 											endContainer: text7.node,
// 											endOffset: 10,
// 										},
// 									}[textDirection]
// 								);
// 							},
// 						);
// 					});
//
// 					const title3 = `Nested Elements - ${textDirectionType} - move to ${visualDirection} for ${times} times and emit one "${eventName}" event`;
// 					it(title3, function () {
// 						if (debug) {
// 							console.log(title3);
// 						}
// 						testRange(
// 							data,
// 							init,
// 							(element, range) => {
// 								const called = [];
// 								element
// 								.on('range:last', function () {
// 									called.push('range:last');
// 								})
// 								.on('range:first', function () {
// 									called.push('range:first');
// 								})
// 								.on('range:lastline', function () {
// 									called.push('range:lastline');
// 								})
// 								.on('range:firstline', function () {
// 									called.push('range:firstline');
// 								})
// 								.setAttribute('style', `${commonStyle}${style}`);
// 								for (let i = 0; i < times; i++) {
// 									element.modifyRange(range, 'move', visualDirection);
// 								}
// 								assert.equal(called.join(','), eventName);
// 							},
// 						);
// 					});
//
// 					const crossTestText = new N(
// 						[
// 							'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
// 							'iMlN',
// 							'NlMiZlXi',
// 							'ABCDEFGHIJKLMNOPQ',
// 						]
// 						.join('\n')
// 					);
//
// 					switch (textDirection) {
// 					case 'crossF':
// 						it(`should modify ranges to ${visualDirection} at edge - ${textDirectionType}:${visualDirection}`, function () {
// 							testRange(
// 								{
// 									a: [
// 										['style', `${commonStyle}${style}`],
// 										['contenteditable', 'true'],
// 									],
// 									c: [crossTestText],
// 								},
// 								{
// 									startContainer: crossTestText.node,
// 									startOffset: 0,
// 									endContainer: crossTestText.node,
// 									endOffset: 0,
// 								},
// 								(element, range) => {
// 									const called = [];
// 									element
// 									.on('range:last', function () {
// 										called.push('range:last');
// 									})
// 									.on('range:first', function () {
// 										called.push('range:first');
// 									})
// 									.on('range:lastline', function () {
// 										called.push('range:lastline');
// 									})
// 									.on('range:firstline', function () {
// 										called.push('range:firstline');
// 									})
// 									.setAttribute('style', `${commonStyle}${style}`);
//
// 									element.modifyRange(range, 'move', visualDirection);
// 									checkRange(
// 										range,
// 										{
// 											startContainer: crossTestText.node,
// 											startOffset: 27,
// 											endContainer: crossTestText.node,
// 											endOffset: 27,
// 										},
// 										'1st modification',
// 									);
// 									assert.equal(called.length, 0, `1st modification: expected ${called.length} to equal 0`);
//
// 									element.modifyRange(range, 'move', visualDirection);
// 									checkRange(
// 										range,
// 										{
// 											startContainer: crossTestText.node,
// 											startOffset: 32,
// 											endContainer: crossTestText.node,
// 											endOffset: 32,
// 										},
// 										'2nd modification',
// 									);
// 									assert.equal(called.length, 0, `2nd modification: expected ${called.length} to equal 0`);
//
// 									element.modifyRange(range, 'move', visualDirection);
// 									checkRange(
// 										range,
// 										{
// 											startContainer: crossTestText.node,
// 											startOffset: 41,
// 											endContainer: crossTestText.node,
// 											endOffset: 41,
// 										},
// 										'3rd modification',
// 									);
// 									assert.equal(called.length, 0, `3rd modification: expected ${called.length} to equal 0`);
//
// 									element.modifyRange(range, 'move', visualDirection);
// 									checkRange(
// 										range,
// 										{
// 											startContainer: crossTestText.node,
// 											startOffset: 58,
// 											endContainer: crossTestText.node,
// 											endOffset: 58,
// 										},
// 										'4th modification',
// 									);
// 									assert.equal(called[0], 'range:lastline', `4th modification: expected ${called[0]} to equal 'range:lastline'`);
// 								},
// 							);
// 						});
// 						break;
// 					case 'crossB':
// 						break;
// 					}
//
// 				});
// 			});
// 		});
// 	});
//
// });

describe('N.prototype.toObject', function () {

	it('should convert a text node to an object', function () {
		var text = '' + Date.now();
		var element = new N(text);
		assert.equal(element.toObject(), text);
	});

	it('should convert an element node to an object', function () {
		var t = 'h1';
		var text = '' + Date.now();
		var key1 = 'key1-' + Date.now();
		var key2 = 'data-key2-' + Date.now();
		var value1 = 'value1-' + Date.now();
		var value2 = 'value2-' + Date.now();
		var data = {
			t: t,
			a: [[key1, value1], [key2, value2]],
			c: [text, {
				a: [[key1, value2], [key2, value1]],
				c: [{
					c: [text]
				}]
			}]
		};
		var element = new N(data);
		assert.deepEqual(element.toObject(), data);
	});
});

describe('N.prototype.walk', function () {

	it('should walk over a new N tree', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		var element = new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element.walk(function (node) {
			actual.push(node);
		});
		var expected = [text1, element1, text2, element3, text4, element2, text3, text5, element6, text9, element5, text7, element4, text6, text8, text10];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});

	it('should stop walking if a given function returns a truthy value', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		var element = new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element.walk(function (node) {
			if (node.equals(text9)) {
				return true;
			}
			actual.push(node);
		});
		var expected = [text1, element1, text2, element3, text4, element2, text3, text5, element6];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});
});

describe('N.prototype.walkBackward', function () {

	it('should walk backward', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		text10.walkBackward(function (node) {
			actual.push(node);
		});
		var expected = [element5, text8, element4, text6, text7, text9, element3, text5, element2, text3, text4, element1, text2, text1];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});

	it('should walk backward and stop at limit', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		text10.walkBackward(function (node) {
			actual.push(node);
		}, element3);
		var expected = [element5, text8, element4, text6, text7, text9];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});

	it('should stop walking if a given function returns a truthy value', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element5.walkBackward(function (node) {
			if (node.equals(text9)) {
				return true;
			}
			actual.push(node);
		});
		var expected = [text8, element4, text6, text7];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});
});

describe('N.prototype.walkForward', function () {

	it('should walk forward', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element1.walkForward(function (node) {
			actual.push(node);
		});
		var expected = [text2, element3, text4, element2, text3, text5, element6, text9, element5, text7, element4, text6, text8, text10];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});

	it('should walk forward and stop at limit', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element1.walkForward(function (node) {
			actual.push(node);
		}, element6);
		var expected = [text2, element3, text4, element2, text3, text5];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});

	it('should stop walking if a given function returns a truthy value', function () {
		var text1 = new N('text1--' + Date.now());
		var text2 = new N('text2--' + Date.now());
		var text3 = new N('text3--' + Date.now());
		var text4 = new N('text4--' + Date.now());
		var text5 = new N('text5--' + Date.now());
		var text6 = new N('text6--' + Date.now());
		var text7 = new N('text7--' + Date.now());
		var text8 = new N('text8--' + Date.now());
		var text9 = new N('text9--' + Date.now());
		var text10 = new N('text10--' + Date.now());
		var element1 = new N({
			c: [text2]
		});
		var element2 = new N({
			c: [text3]
		});
		var element3 = new N({
			c: [text4, element2, text5]
		});
		var element4 = new N({
			c: [text6]
		});
		var element5 = new N({
			c: [text7, element4, text8]
		});
		var element6 = new N({
			c: [text9, element5, text10]
		});
		new N({
			c: [text1, element1, element3, element6]
		});
		var actual = [];
		element3.walkForward(function (node) {
			if (node.equals(text9)) {
				return true;
			}
			actual.push(node);
		});
		var expected = [text4, element2, text3, text5, element6];
		assert.equal(actual.length, expected.length);
		actual.forEach(function (node, index) {
			assert.equal(node.equals(expected[index]), true, 'Failed at ' + index);
		});
	});
});

describe('N', function () {

	it('should copy an element', function () {
		var E1 = function (_N5) {
			_inherits(E1, _N5);

			function E1() {
				_classCallCheck(this, E1);

				return _possibleConstructorReturn(this, (E1.__proto__ || Object.getPrototypeOf(E1)).apply(this, arguments));
			}

			return E1;
		}(N);

		var E2 = function (_E) {
			_inherits(E2, _E);

			function E2() {
				_classCallCheck(this, E2);

				return _possibleConstructorReturn(this, (E2.__proto__ || Object.getPrototypeOf(E2)).apply(this, arguments));
			}

			return E2;
		}(E1);

		var e1 = new E2();
		var e2 = new E2(e1);
		assert(e1.equals(e2));
	});
});

/* eslint-disable no-constant-condition */
function test$121(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NamedNodeMap.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion42 = true;
			var _didIteratorError42 = false;
			var _iteratorError42 = undefined;

			try {
				for (var _iterator42 = expected[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
					var element = _step42.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError42 = true;
				_iteratorError42 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion42 && _iterator42.return) {
						_iterator42.return();
					}
				} finally {
					if (_didIteratorError42) {
						throw _iteratorError42;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			while (1) {
				var _iterator$next13 = iterator.next(),
				    value = _iterator$next13.value,
				    done = _iterator$next13.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion43 = true;
			var _didIteratorError43 = false;
			var _iteratorError43 = undefined;

			try {
				for (var _iterator43 = expected[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
					var element = _step43.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError43 = true;
				_iteratorError43 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion43 && _iterator43.return) {
						_iterator43.return();
					}
				} finally {
					if (_didIteratorError43) {
						throw _iteratorError43;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion44 = true;
			var _didIteratorError44 = false;
			var _iteratorError44 = undefined;

			try {
				for (var _iterator44 = iterator[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
					var value = _step44.value;

					results.push(value);
				}
			} catch (err) {
				_didIteratorError44 = true;
				_iteratorError44 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion44 && _iterator44.return) {
						_iterator44.return();
					}
				} finally {
					if (_didIteratorError44) {
						throw _iteratorError44;
					}
				}
			}

			assert.deepEqual(results, expected);
		});
	});
}

function generator$8() {
	var _this32 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this32[index],
			done: length <= index++
		};
	});
}

test$121(generator$8, 'NamedNodeMap.prototype[Symbol.iterator]#j0');

var x$49 = NamedNodeMap;

test$121(x$49.prototype[x.iterator]);

/* eslint-disable no-constant-condition */
function test$123(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NodeList.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion45 = true;
			var _didIteratorError45 = false;
			var _iteratorError45 = undefined;

			try {
				for (var _iterator45 = expected[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
					var element = _step45.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError45 = true;
				_iteratorError45 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion45 && _iterator45.return) {
						_iterator45.return();
					}
				} finally {
					if (_didIteratorError45) {
						throw _iteratorError45;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			while (1) {
				var _iterator$next14 = iterator.next(),
				    value = _iterator$next14.value,
				    done = _iterator$next14.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			var parent = x$4.createElement('div');
			var expected = [x$4.createElement('div'), x$4.createElement('div')];
			var _iteratorNormalCompletion46 = true;
			var _didIteratorError46 = false;
			var _iteratorError46 = undefined;

			try {
				for (var _iterator46 = expected[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
					var element = _step46.value;

					parent.appendChild(element);
				}
			} catch (err) {
				_didIteratorError46 = true;
				_iteratorError46 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion46 && _iterator46.return) {
						_iterator46.return();
					}
				} finally {
					if (_didIteratorError46) {
						throw _iteratorError46;
					}
				}
			}

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion47 = true;
			var _didIteratorError47 = false;
			var _iteratorError47 = undefined;

			try {
				for (var _iterator47 = iterator[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
					var value = _step47.value;

					results.push(value);
				}
			} catch (err) {
				_didIteratorError47 = true;
				_iteratorError47 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion47 && _iterator47.return) {
						_iterator47.return();
					}
				} finally {
					if (_didIteratorError47) {
						throw _iteratorError47;
					}
				}
			}

			assert.deepEqual(results, expected);
		});
	});
}

function generator$10() {
	var _this33 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this33[index],
			done: length <= index++
		};
	});
}

test$123(generator$10, 'NodeList.prototype[Symbol.iterator]#j0');

var x$50 = NodeList;

test$123(x$50.prototype[x.iterator]);

function noop$1(x) {
	return x;
}

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop$1();
		});
	});

	it('should return the first argument', function () {
		var data = new Date();
		assert.equal(noop$1(data), data);
	});
});

function assign$1(target) {
	for (var _len49 = arguments.length, objects = Array(_len49 > 1 ? _len49 - 1 : 0), _key49 = 1; _key49 < _len49; _key49++) {
		objects[_key49 - 1] = arguments[_key49];
	}

	objects.forEach(function (obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				target[key] = obj[key];
			}
		}
	});
	return target;
}

test$18(assign$1, 'Object.assign#j0');

test$18(Object.assign);

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

describe('parseFormData', function () {

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

describe('parseHeaders', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse$2(src);
		assert.deepEqual(Array.from(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});

describe('passThrough', function () {

	it('should return the first argument', function () {
		var value = Date.now();
		assert.equal(passThrough(value), value);
	});
});

if (!x$45.immediateId) {
	x$45.immediateId = 0;
}
x$45.immediateId += 1;
var setImmediateNative = x$45.setImmediate;

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
	return x$27(fn);
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
x$27(function () {
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
	this.promise = new J0Promise(noop$1);
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
			var _this34 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this34.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this34.reject(error);
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
					throw new x$11('A promise cannot be resolved with itself');
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
			var _this35 = this;

			this.deferreds.forEach(function (deferred) {
				_this35.handle(deferred);
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
				self.deferreds.push(deferred);
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
				promises.forEach(function (promise) {
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
				values.forEach(function (value, index) {
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

function test$125(Promise, name) {

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
				x$27(resolve, timeout);
			}), new Promise(function (resolve) {
				x$27(resolve, timeout);
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
				x$27(resolve, timeout);
			}), new Promise(function (resolve) {
				x$27(resolve, timeout);
			}), Promise.reject(expected)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
}

test$125(J0Promise, 'Promise/j0');

test$125(x$3, 'Promise');

describe('readBlob', function () {

	it('should be a function', function () {
		return readBlob;
	});
});

function tests$10(Request, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Request('/');
			});
		});
	});
}

tests$10(Request$1, 'J0Request');

var x$51 = Request;

tests$10(x$51, 'Request');

describe('requestAnimationFrame', function () {

	it('should call the given function with timeStamp', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee40() {
		var timeStamp;
		return regeneratorRuntime.wrap(function _callee40$(_context40) {
			while (1) {
				switch (_context40.prev = _context40.next) {
					case 0:
						_context40.next = 2;
						return new x$3(x$29);

					case 2:
						timeStamp = _context40.sent;

						assert(0 < timeStamp, true);

					case 4:
					case 'end':
						return _context40.stop();
				}
			}
		}, _callee40, this);
	})));
});

function tests$12(Response, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Response();
			});
		});
	});
}

tests$12(Response$1, 'J0Response');

var x$52 = Response;

tests$12(x$52, 'Response');

var Ring = function () {
	function Ring(array) {
		_classCallCheck(this, Ring);

		this.array = array;
	}

	_createClass(Ring, [{
		key: 'get',
		value: function get(index) {
			return Ring.get(this.array, index);
		}
	}, {
		key: 'rotate',
		value: function rotate(index) {
			Ring.rotate(this.array, index);
			return this;
		}
	}], [{
		key: 'getIndex',
		value: function getIndex(array, index) {
			var length = array.length;
			return (index < 0 ? length + index % length : index) % length;
		}
	}, {
		key: 'get',
		value: function get(array, index) {
			return array[Ring.getIndex(array, index)];
		}
	}, {
		key: 'rotate',
		value: function rotate(array, index) {
			var offset = Ring.getIndex(array, index);
			for (var i = 0; i < offset; i++) {
				array.push(array.shift());
			}
			return array;
		}
	}]);

	return Ring;
}();

describe('Ring', function () {

	describe('Ring.prototype.get', function () {

		[[-6, 0], [-5, 1], [-4, 2], [-3, 0], [-2, 1], [-1, 2], [0, 0], [1, 1], [2, 2], [3, 0], [4, 1], [5, 2]].forEach(function (_ref164) {
			var _ref165 = _slicedToArray(_ref164, 2),
			    index = _ref165[0],
			    expected = _ref165[1];

			it('should return element at ' + index, function () {
				var ring = new Ring([0, 1, 2]);
				assert.equal(ring.get(index), expected);
			});
		});
	});

	describe('Ring.prototype.rotate', function () {

		[[-6, [0, 1, 2]], [-5, [1, 2, 0]], [-4, [2, 0, 1]], [-3, [0, 1, 2]], [-2, [1, 2, 0]], [-1, [2, 0, 1]], [0, [0, 1, 2]], [1, [1, 2, 0]], [2, [2, 0, 1]], [3, [0, 1, 2]], [4, [1, 2, 0]], [5, [2, 0, 1]]].forEach(function (_ref166) {
			var _ref167 = _slicedToArray(_ref166, 2),
			    index = _ref167[0],
			    expected = _ref167[1];

			it('should return rotate by ' + index, function () {
				var ring = new Ring([0, 1, 2]);
				assert.deepEqual(ring.rotate(index).array, expected);
			});
		});
	});
});

function scrollX() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$45;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$45;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});

/* eslint-disable no-constant-condition */
function test$126(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Set.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var set = new x$36(data);
			var iterator = generator.call(set);
			var results = [];
			while (1) {
				var _iterator$next15 = iterator.next(),
				    value = _iterator$next15.value,
				    done = _iterator$next15.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, data);
		});
	});
}

function generator$12() {
	return this.values();
}

test$126(generator$12, 'Set.prototype[Symbol.iterator]#j0');

test$126(x$36.prototype[x.iterator]);

var Set$2 = function () {
	function Set$2(iterable) {
		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion48 = true;
			var _didIteratorError48 = false;
			var _iteratorError48 = undefined;

			try {
				for (var _iterator48 = iterable[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
					var value = _step48.value;

					this.add(value);
				}
			} catch (err) {
				_didIteratorError48 = true;
				_iteratorError48 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion48 && _iterator48.return) {
						_iterator48.return();
					}
				} finally {
					if (_didIteratorError48) {
						throw _iteratorError48;
					}
				}
			}
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
				this.data.push(item);
			}
			return this;
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			var index = this.indexOf(item);
			if (0 <= index) {
				this.data.splice(index, 1);
			}
			return 0 <= index;
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this36 = this;

			this.data.slice().forEach(function (value) {
				fn.call(thisArg, value, value, _this36);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data.slice()[iteratorSymbol]();
		}
	}, {
		key: iteratorSymbol,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next16 = iterator.next(),
					    value = _iterator$next16.value,
					    done = _iterator$next16.done;

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

/* eslint-disable no-constant-condition */

function tests$14(Set, name) {

	describe(name, function () {

		it('should support constructor arguments', function () {
			var data = [Date, new Date(), Date.now()];
			var set = new Set(data);
			assert.equal(set.size, data.length);
		});

		it('should have add()', function () {
			var set = new Set();
			set.add(Date);
			set.add(new Date());
			set.add(Date.now());
			assert.equal(set.size, 3);
		});

		it('should return itself', function () {
			var set = new Set();
			assert.equal(set.add(Date), set);
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
				for (var _len50 = arguments.length, args = Array(_len50), _key50 = 0; _key50 < _len50; _key50++) {
					args[_key50] = arguments[_key50];
				}

				args[3] = this;
				set.delete(args[0]);
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
				var _iterator$next17 = iterator.next(),
				    value = _iterator$next17.value,
				    done = _iterator$next17.done;

				set.delete(value);
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
				var _iterator$next18 = iterator.next(),
				    value = _iterator$next18.value,
				    done = _iterator$next18.done;

				set.delete(value);
				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[1, 1], [2, 2], [3, 3]]);
		});
	});
}

tests$14(Set$2, 'J0Set');

tests$14(x$36, 'Set');

describe('setImmediate', function () {

	it('should call the function at end of current processes', function () {
		var order = 3;
		var expected = 36;
		return new x$3(function (resolve) {
			setImmediate(function () {
				order *= order;
			});
			order += order;
			x$27(resolve, 50);
		}).then(function () {
			assert.equal(order, expected);
		});
	});
});

var x$53 = encodeURIComponent;

var State = function () {
	function State(stateInfo) {
		_classCallCheck(this, State);

		if (!isInstanceOf(stateInfo, State)) {
			var path = stateInfo.path;

			var parts = [];
			var pos = 0;
			path.replace(/\{(\w+):(.*?)\}/g, function (_ref168, name, expression, offset, source) {
				var length = _ref168.length;

				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp('^' + expression + '$'), expression]);
				pos = offset + length;
			});
			if (pos < path.length) {
				parts.push(path.slice(pos));
			}
			var matcher = new RegExp('^' + parts.map(function (part) {
				if (isString(part)) {
					return part;
				}
				return '(' + part[2] + ')';
			}).join('') + '/?$');
			assign(stateInfo, {
				parts: parts,
				matcher: matcher
			});
		}
		assign(this, stateInfo);
	}

	_createClass(State, [{
		key: 'compose',
		value: function compose(fn) {
			var parts = this.parts;

			var result = [];
			for (var index = 0, length = parts.length; index < length; index++) {
				var part = parts[index];
				if (isString(part)) {
					result.push(part);
				} else {
					var value = fn.apply(undefined, _toConsumableArray(part));
					if (value) {
						result.push(value);
					} else {
						return '';
					}
				}
			}
			return result.join('');
		}
	}, {
		key: 'href',
		value: function href() {
			var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			return this.compose(function (key, pattern) {
				var value = params[key];
				if (value && pattern.test(value)) {
					return x$53(value);
				}
			});
		}
	}, {
		key: 'parse',
		value: function parse() {
			var _this37 = this;

			var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			var params = null;
			href.replace(this.matcher, function (match) {
				for (var _len51 = arguments.length, args = Array(_len51 > 1 ? _len51 - 1 : 0), _key51 = 1; _key51 < _len51; _key51++) {
					args[_key51 - 1] = arguments[_key51];
				}

				var index = 0;
				params = {};
				return _this37.compose(function (key) {
					var value = args[index++];
					params[key] = value;
					return value;
				});
			});
			return params;
		}
	}, {
		key: 'instantiate',
		value: function instantiate() {
			var src = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

			var params = isString(src) ? this.parse(src) : src;
			var href = this.href(params);
			if (href) {
				var state = new State(this);
				state.params = params;
				state.href = href;
				return state;
			}
		}
	}, {
		key: 'is',
		value: function is(state) {
			return this.href === state.href;
		}
	}, {
		key: 'isIn',
		value: function isIn(state) {
			return this.href.indexOf(state.href) === 0;
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(state) {
			return state.isIn(this);
		}
	}]);

	return State;
}();

var hex$1 = 16;

describe('State', function () {

	it('should return href', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var expected = '/' + param1 + '/' + param2;
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() receives invalid parameters', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = Date.now() + 'a';
		var param2 = '' + Date.now().toString(hex$1);
		var expected = '';
		assert.equal(state.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should return an empty string when href() doesn\'t receive parameters', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var expected = '';
		assert.equal(state.href(), expected);
	});

	it('should clone a state', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var state2 = new State(state);
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var expected = '/' + param1 + '/' + param2;
		assert.equal(state !== state2, true);
		assert.equal(state2.href({
			param1: param1,
			param2: param2
		}), expected);
	});

	it('should parse href patterns', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var params = {
			param1: param1,
			param2: param2
		};
		assert.deepEqual(state.parse(state.href(params)), params);
	});

	it('should return nothing if given href has extra prefix', function () {
		var path = '/{param1:\\d+}/{param2:\\d+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + (Date.now() + 1000);
		var params = {
			param1: param1,
			param2: param2
		};
		assert.equal(state.parse('_' + state.href(params)), null);
	});

	it('should return nothing if given href has extra suffix', function () {
		var path = '/{param1:\\d+}/{param2:\\d+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + (Date.now() + 1000);
		var params = {
			param1: param1,
			param2: param2
		};
		assert.equal(state.parse(state.href(params) + '_'), null);
	});

	it('should instantiate a state', function () {
		var path = '/{param1:\\d+}/{param2:\\w+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var params = {
			param1: param1,
			param2: param2
		};
		var instance = state.instantiate(params);
		assert.equal(instance !== state, true);
		assert.equal(instance.href, state.href(params));
		assert.deepEqual(instance.params, params);
	});

	it('should return the two states are same or not', function () {
		var path = '/{param1:\\d+}';
		var state = new State({ path: path });
		var param1 = '' + Date.now();
		var param2 = '' + param1 + param1;
		var instance1 = state.instantiate({ param1: param1 });
		var instance2 = state.instantiate({ param1: param1 });
		var instance3 = state.instantiate({ param1: param2 });
		assert.equal(instance1 === instance2, false);
		assert.equal(instance1.is(instance2), true);
		assert.equal(instance1.is(instance3), false);
		assert.equal(instance2.is(instance1), true);
		assert.equal(instance2.is(instance3), false);
		assert.equal(instance3.is(instance1), false);
		assert.equal(instance3.is(instance2), false);
	});

	it('should return a state is a descendant of another state or not', function () {
		var path1 = '/{param1:\\d+}';
		var path2 = '/{param1:\\d+}/{param2:\\w+}';
		var state1 = new State({ path: path1 });
		var state2 = new State({ path: path2 });
		var param1 = '' + Date.now();
		var param2 = '' + Date.now().toString(hex$1);
		var instance1 = state1.instantiate({ param1: param1 });
		var instance2 = state2.instantiate({
			param1: param1,
			param2: param2
		});
		assert.equal(instance1.isIn(instance2), false);
		assert.equal(instance1.isAncestorOf(instance2), true);
		assert.equal(instance2.isIn(instance1), true);
		assert.equal(instance2.isAncestorOf(instance1), false);
	});
});

var x$54 = history;

var x$55 = Boolean;

var StateManager = function (_EventEmitter) {
	_inherits(StateManager, _EventEmitter);

	function StateManager(config) {
		_classCallCheck(this, StateManager);

		var _this38 = _possibleConstructorReturn(this, (StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call(this));

		assign(_this38, { prefix: '#' }, config, {
			states: new x$37(),
			listeners: []
		});
		if (!_this38.parser) {
			if (_this38.prefix.charAt(0) === '#') {
				_this38.parser = function (url) {
					return url.hash.slice(this.prefix.length);
				};
			} else {
				_this38.parser = function (url) {
					var pathname = url.pathname,
					    search = url.search,
					    hash = url.hash;

					return ('' + pathname + search + hash).slice(this.prefix.length);
				};
			}
		}
		return _this38;
	}

	_createClass(StateManager, [{
		key: 'parseURL',
		value: function parseURL() {
			var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$48;

			var stateString = this.parser(url);
			var _iteratorNormalCompletion49 = true;
			var _didIteratorError49 = false;
			var _iteratorError49 = undefined;

			try {
				for (var _iterator49 = this.states[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
					var _ref169 = _step49.value;

					var _ref170 = _slicedToArray(_ref169, 2);

					var state = _ref170[1];

					var params = state.parse(stateString);
					if (params) {
						return state.instantiate(params);
					}
				}
			} catch (err) {
				_didIteratorError49 = true;
				_iteratorError49 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion49 && _iterator49.return) {
						_iterator49.return();
					}
				} finally {
					if (_didIteratorError49) {
						throw _iteratorError49;
					}
				}
			}

			return this.fallback;
		}
	}, {
		key: 'define',
		value: function define(stateInfo) {
			var name = stateInfo.name;

			if (isString(name) && name) {
				this.states.set(name, new State(stateInfo));
			} else {
				throw new Error('Invalid name');
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get() {
			var _ref171 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    name = _ref171.name,
			    params = _ref171.params;

			var noFallback = arguments[1];

			var state = this.states.get(name);
			var instantiated = state && state.instantiate(params);
			if (instantiated) {
				instantiated.href = '' + this.prefix + instantiated.href;
			}
			return instantiated || !noFallback && this.fallback;
		}
	}, {
		key: 'href',
		value: function href(stateInfo, noFallback) {
			var state = this.get(stateInfo, noFallback);
			return state ? state.href : '';
		}
	}, {
		key: 'otherwise',
		value: function otherwise(stateInfo) {
			this.fallback = this.get(stateInfo);
			if (!this.fallback) {
				throw new Error('Failed to set fallback: ' + x$8.stringify(stateInfo) + ' is not exist.');
			}
			return this;
		}
	}, {
		key: 'is',
		value: function is(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$55(current && state && current.is(state));
		}
	}, {
		key: 'isIn',
		value: function isIn(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$55(current && state && current.isIn(state));
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$55(current && state && current.isAncestorOf(state));
		}
	}, {
		key: 'setCurrent',
		value: function setCurrent(stateInfo, method) {
			var newState = this.get(stateInfo);
			if (this.is(newState)) {
				return;
			}
			x$54[method](newState.name, newState.params, newState.href);
			var oldState = this.current;
			this.current = newState;
			this.emit('change', newState, oldState);
		}
	}, {
		key: 'go',
		value: function go(stateInfo) {
			this.setCurrent(stateInfo, 'pushState');
		}
	}, {
		key: 'replace',
		value: function replace(stateInfo) {
			this.setCurrent(stateInfo, 'replaceState');
		}
	}, {
		key: 'start',
		value: function start() {
			var _this39 = this;

			var debounceDuration = 30;
			var onStateChange = debounce(function () {
				_this39.replace(_this39.parseURL());
			}, debounceDuration);
			x$39('hashchange', onStateChange);
			x$39('pushstate', onStateChange);
			x$39('popstate', onStateChange);
			onStateChange();
		}
	}]);

	return StateManager;
}(EventEmitter);

var hex = 16;
var initialState = x$48.pathname;

function resetState() {
	x$54.replaceState(null, {}, initialState);
}

describe('StateManager', function () {

	before(resetState);
	after(resetState);
	beforeEach(resetState);
	afterEach(resetState);

	it('should define a state', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		var results = [];
		var _iteratorNormalCompletion50 = true;
		var _didIteratorError50 = false;
		var _iteratorError50 = undefined;

		try {
			for (var _iterator50 = states.states[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
				var _ref172 = _step50.value;

				var _ref173 = _slicedToArray(_ref172, 2);

				var state = _ref173[1];

				results.push(state);
			}
		} catch (err) {
			_didIteratorError50 = true;
			_iteratorError50 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion50 && _iterator50.return) {
					_iterator50.return();
				}
			} finally {
				if (_didIteratorError50) {
					throw _iteratorError50;
				}
			}
		}

		if (results[0].name === name2) {
			results.reverse();
		}
		assert.equal(results[0].name, name1);
		assert.equal(results[1].name, name2);
	});

	it('should get a href', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		});
		var param1 = '' + Date.now();
		var param2 = Date.now().toString(hex);
		var expected = prefix + 'stateB/' + param1 + '/' + param2;
		assert.equal(states.href({
			name: name2,
			params: {
				param1: param1,
				param2: param2
			}
		}), expected);
	});

	it('should define fallback and return it when href() receives invalid parameters', function () {
		var prefix = 'prefix' + Date.now() + '/';
		var states = new StateManager({ prefix: prefix });
		var name0 = Date.now() + '-defaultState';
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		states.define({
			name: name0,
			path: name0
		}).define({
			name: name1,
			path: 'stateA/{param1:\\d+}'
		}).define({
			name: name2,
			path: 'stateB/{param1:\\d+}/{param2:\\w+}'
		}).otherwise({ name: name0 });
		var param1 = '' + Date.now();
		assert.equal(states.href({
			name: name2,
			params: { param1: param1 }
		}), '' + prefix + name0);
		assert.equal(states.href({ name: name2 }), '' + prefix + name0);
	});

	it('should start management', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee41() {
		var states, name0, name1, name2, _ref175, _ref176, toState, fromState;

		return regeneratorRuntime.wrap(function _callee41$(_context41) {
			while (1) {
				switch (_context41.prev = _context41.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context41.next = 7;
						return new x$3(function (resolve) {
							states.on('change', function () {
								for (var _len52 = arguments.length, data = Array(_len52), _key52 = 0; _key52 < _len52; _key52++) {
									data[_key52] = arguments[_key52];
								}

								resolve(data);
							}).start();
						});

					case 7:
						_ref175 = _context41.sent;
						_ref176 = _slicedToArray(_ref175, 2);
						toState = _ref176[0];
						fromState = _ref176[1];

						assert.deepEqual(toState, states.fallback);
						assert.equal(!fromState, true);

					case 13:
					case 'end':
						return _context41.stop();
				}
			}
		}, _callee41, this);
	})));

	it('should return whether the current state is the given state or not', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee42() {
		var states, name0, name1, name2;
		return regeneratorRuntime.wrap(function _callee42$(_context42) {
			while (1) {
				switch (_context42.prev = _context42.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 }).start();
						_context42.next = 7;
						return new x$3(function (resolve) {
							states.once('change', resolve);
						});

					case 7:
						assert.equal(states.is({ name: name0 }), true);
						assert.equal(states.is({ name: name1 }), false);

					case 9:
					case 'end':
						return _context42.stop();
				}
			}
		}, _callee42, this);
	})));

	it('should go to the other state', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee43() {
		var states, name0, name1, name2, param1, params;
		return regeneratorRuntime.wrap(function _callee43$(_context43) {
			while (1) {
				switch (_context43.prev = _context43.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: 'stateA/{param1:\\d+}'
						}).define({
							name: name2,
							path: 'stateB/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context43.next = 7;
						return new x$3(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						param1 = '' + Date.now();
						params = { param1: param1 };
						_context43.next = 11;
						return new x$3(function (resolve) {
							states.once('change', resolve).go({
								name: name1,
								params: params
							});
						});

					case 11:
						assert.equal(states.current.name, name1);

					case 12:
					case 'end':
						return _context43.stop();
				}
			}
		}, _callee43, this);
	})));

	it('should return whether the current state is one of the given states', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee44() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1;
		return regeneratorRuntime.wrap(function _callee44$(_context44) {
			while (1) {
				switch (_context44.prev = _context44.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: '/{param1:\\d+}'
						}).define({
							name: name2,
							path: '/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context44.next = 7;
						return new x$3(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context44.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context44.next = 14;
						return new x$3(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context44.sent;

						assert.equal(toState1.name, name2);
						assert.equal(states.is({
							name: name2,
							params: params
						}), true);
						assert.equal(states.isIn({
							name: name1,
							params: { param1: param1 }
						}), true);

					case 18:
					case 'end':
						return _context44.stop();
				}
			}
		}, _callee44, this);
	})));

	it('should detect history.back()', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee45() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1, toState2;
		return regeneratorRuntime.wrap(function _callee45$(_context45) {
			while (1) {
				switch (_context45.prev = _context45.next) {
					case 0:
						states = new StateManager();
						name0 = Date.now() + '-defaultState';
						name1 = Date.now() + '-1';
						name2 = Date.now() + '-2';

						states.define({
							name: name0,
							path: name0
						}).define({
							name: name1,
							path: '/{param1:\\d+}'
						}).define({
							name: name2,
							path: '/{param1:\\d+}/{param2:\\w+}'
						}).otherwise({ name: name0 });
						_context45.next = 7;
						return new x$3(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context45.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context45.next = 14;
						return new x$3(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context45.sent;

						assert.equal(toState1.name, name2);
						_context45.next = 18;
						return new x$3(function (resolve) {
							states.once('change', resolve);
							x$54.back();
						});

					case 18:
						toState2 = _context45.sent;

						assert.equal(toState2.name, name0);

					case 20:
					case 'end':
						return _context45.stop();
				}
			}
		}, _callee45, this);
	})));
});

/* eslint-disable no-constant-condition */
function test$128(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next19 = iterator.next(),
				    value = _iterator$next19.value,
				    done = _iterator$next19.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, string.split(''));
		});

		it('should return an iterator which is iterable in for-of syntax', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var _iteratorNormalCompletion51 = true;
			var _didIteratorError51 = false;
			var _iteratorError51 = undefined;

			try {
				for (var _iterator51 = iterator[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
					var value = _step51.value;

					results.push(value);
				}
			} catch (err) {
				_didIteratorError51 = true;
				_iteratorError51 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion51 && _iterator51.return) {
						_iterator51.return();
					}
				} finally {
					if (_didIteratorError51) {
						throw _iteratorError51;
					}
				}
			}

			assert.deepEqual(results, string.split(''));
		});
	});
}

function generator$14() {
	var _this40 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this40[index],
			done: length <= index++
		};
	});
}

test$128(generator$14, 'String.prototype[Symbol.iterator]#j0');

test$128(String.prototype[x.iterator]);

/* eslint-disable no-magic-numbers */
function test$130(codePointAt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.codePointAt';


	describe(name, function () {

		[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref181) {
			var _ref182 = _slicedToArray(_ref181, 3),
			    string = _ref182[0],
			    from = _ref182[1],
			    to = _ref182[2];

			it('should be return [' + from.toString(16) + ', ..., ' + to.toString(16) + ']', function () {
				var codePoints = [];
				for (var i = 0, length = string.length; i < length; i++) {
					var codePoint = codePointAt.call(string, i);
					if (codePoint < 0xDC00 || 0xDFFF < codePoint) {
						codePoints.push(codePoint);
					}
				}
				var expectedCodePoints = [];
				for (var _i2 = from; _i2 <= to; _i2++) {
					expectedCodePoints.push(_i2);
				}
				assert.deepEqual(codePoints, expectedCodePoints);
			});
		});
	});
}

/* eslint-disable no-magic-numbers, no-bitwise */
function codePointAt(index) {
	var first = this.charCodeAt(index);
	if (0xD800 <= first && first <= 0xDBFF && index + 1 < this.length) {
		var second = this.charCodeAt(index + 1);
		if (second >= 0xDC00 && second <= 0xDFFF) {
			return (first - 0xD800 << 10) + second - 0xDC00 + 0x10000;
		}
	}
	return first;
}

test$130(codePointAt, 'String.prototype.codePointAt#j0');

test$130(String.prototype.codePointAt);

function test$132(endsWith) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.endsWith';


	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			var fragment = Date.now().toString(16);
			var string1 = fragment + 'abc';
			var string2 = 'abc' + fragment;
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});

		it('should return whether the string starts with the given string or not [multibytes]', function () {
			var fragment = Date.now().toString(16) + '\uD842\uDC34\uD842\uDC38\uD842\uDC38\uD842\uDC34';
			var string1 = fragment + 'abc';
			var string2 = 'abc' + fragment;
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});
	});
}

function endsWith(fragment) {
	return this.slice(-fragment.length) === fragment;
}

test$132(endsWith, 'String.prototype.endsWith#j0');

test$132(String.prototype.endsWith);

/* eslint-disable no-magic-numbers */

function test$134(fromCodePoint) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.fromCodePoint';


	describe(name, function () {

		[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref183) {
			var _ref184 = _slicedToArray(_ref183, 3),
			    expected = _ref184[0],
			    from = _ref184[1],
			    to = _ref184[2];

			it('should be return a string made from [' + from.toString(16) + '-' + to.toString(16) + ']', function () {
				var codePoints = [];
				for (var i = from; i <= to; i++) {
					codePoints.push(i);
				}
				assert.equal(fromCodePoint.apply(undefined, codePoints), expected);
			});
		});
	});
}

var x$56 = isFinite;

var x$57 = RangeError;

/* eslint-disable no-magic-numbers, no-bitwise */

function fromCodePoint() {
	var chars = [];
	var fromCharCode = String.fromCharCode;

	for (var _len53 = arguments.length, args = Array(_len53), _key53 = 0; _key53 < _len53; _key53++) {
		args[_key53] = arguments[_key53];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var codePoint = args[i];
		if (!x$56(codePoint) || codePoint < 0 || codePoint > 0x10FFFF) {
			throw new x$57('Invalid code point: ' + codePoint);
		}
		if (codePoint <= 0xFFFF) {
			chars.push(fromCharCode(codePoint));
		} else {
			codePoint -= 0x10000;
			var highSurrogate = (codePoint >> 10) + 0xD800;
			var lowSurrogate = codePoint % 0x400 + 0xDC00;
			chars.push(fromCharCode(highSurrogate, lowSurrogate));
		}
	}
	return chars.join('');
}

test$134(fromCodePoint, 'String.fromCodePoint#j0');

test$134(String.fromCodePoint);

function test$136(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.includes';


	describe(name, function () {

		it('should return whether the string includes the given string or not', function () {
			var fragment = Date.now().toString(16);
			var string1 = 'abc' + fragment + 'def';
			var string2 = 'abcdef';
			assert.equal(includes.call(string1, fragment), true);
			assert.equal(includes.call(string2, fragment), false);
		});

		it('should return whether the string includes the given string or not [multibytes]', function () {
			var fragment = '\uD842\uDC34\uD842\uDC38\uD842\uDC38\uD842\uDC34' + Date.now().toString(16);
			var string1 = 'abc' + fragment + 'def';
			var string2 = 'abcdef';
			assert.equal(includes.call(string1, fragment), true);
			assert.equal(includes.call(string2, fragment), false);
		});
	});
}

function includes$2(fragment) {
	return 0 <= this.indexOf(fragment);
}

test$136(includes$2, 'String.prototype.includes#j0');

test$136(String.prototype.includes);

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var unorm = createCommonjsModule(function (module) {
	(function (root) {
		"use strict";

		/***** unorm.js *****/

		/*
   * UnicodeNormalizer 1.0.0
   * Copyright (c) 2008 Matsuza
   * Dual licensed under the MIT (MIT-LICENSE.txt) and GPL (GPL-LICENSE.txt) licenses.
   * $Date: 2008-06-05 16:44:17 +0200 (Thu, 05 Jun 2008) $
   * $Rev: 13309 $
   */

		var DEFAULT_FEATURE = [null, 0, {}];
		var CACHE_THRESHOLD = 10;
		var SBase = 0xAC00,
		    LBase = 0x1100,
		    VBase = 0x1161,
		    TBase = 0x11A7,
		    LCount = 19,
		    VCount = 21,
		    TCount = 28;
		var NCount = VCount * TCount; // 588
		var SCount = LCount * NCount; // 11172

		var UChar = function UChar(cp, feature) {
			this.codepoint = cp;
			this.feature = feature;
		};

		// Strategies
		var cache = {};
		var cacheCounter = [];
		for (var i = 0; i <= 0xFF; ++i) {
			cacheCounter[i] = 0;
		}

		function fromCache(next, cp, needFeature) {
			var ret = cache[cp];
			if (!ret) {
				ret = next(cp, needFeature);
				if (!!ret.feature && ++cacheCounter[cp >> 8 & 0xFF] > CACHE_THRESHOLD) {
					cache[cp] = ret;
				}
			}
			return ret;
		}

		function fromData(next, cp, needFeature) {
			var hash = cp & 0xFF00;
			var dunit = UChar.udata[hash] || {};
			var f = dunit[cp];
			return f ? new UChar(cp, f) : new UChar(cp, DEFAULT_FEATURE);
		}
		function fromCpOnly(next, cp, needFeature) {
			return !!needFeature ? next(cp, needFeature) : new UChar(cp, null);
		}
		function fromRuleBasedJamo(next, cp, needFeature) {
			var j;
			if (cp < LBase || LBase + LCount <= cp && cp < SBase || SBase + SCount < cp) {
				return next(cp, needFeature);
			}
			if (LBase <= cp && cp < LBase + LCount) {
				var c = {};
				var base = (cp - LBase) * VCount;
				for (j = 0; j < VCount; ++j) {
					c[VBase + j] = SBase + TCount * (j + base);
				}
				return new UChar(cp, [,, c]);
			}

			var SIndex = cp - SBase;
			var TIndex = SIndex % TCount;
			var feature = [];
			if (TIndex !== 0) {
				feature[0] = [SBase + SIndex - TIndex, TBase + TIndex];
			} else {
				feature[0] = [LBase + Math.floor(SIndex / NCount), VBase + Math.floor(SIndex % NCount / TCount)];
				feature[2] = {};
				for (j = 1; j < TCount; ++j) {
					feature[2][TBase + j] = cp + j;
				}
			}
			return new UChar(cp, feature);
		}
		function fromCpFilter(next, cp, needFeature) {
			return cp < 60 || 13311 < cp && cp < 42607 ? new UChar(cp, DEFAULT_FEATURE) : next(cp, needFeature);
		}

		var strategies = [fromCpFilter, fromCache, fromCpOnly, fromRuleBasedJamo, fromData];

		UChar.fromCharCode = strategies.reduceRight(function (next, strategy) {
			return function (cp, needFeature) {
				return strategy(next, cp, needFeature);
			};
		}, null);

		UChar.isHighSurrogate = function (cp) {
			return cp >= 0xD800 && cp <= 0xDBFF;
		};
		UChar.isLowSurrogate = function (cp) {
			return cp >= 0xDC00 && cp <= 0xDFFF;
		};

		UChar.prototype.prepFeature = function () {
			if (!this.feature) {
				this.feature = UChar.fromCharCode(this.codepoint, true).feature;
			}
		};

		UChar.prototype.toString = function () {
			if (this.codepoint < 0x10000) {
				return String.fromCharCode(this.codepoint);
			} else {
				var x = this.codepoint - 0x10000;
				return String.fromCharCode(Math.floor(x / 0x400) + 0xD800, x % 0x400 + 0xDC00);
			}
		};

		UChar.prototype.getDecomp = function () {
			this.prepFeature();
			return this.feature[0] || null;
		};

		UChar.prototype.isCompatibility = function () {
			this.prepFeature();
			return !!this.feature[1] && this.feature[1] & 1 << 8;
		};
		UChar.prototype.isExclude = function () {
			this.prepFeature();
			return !!this.feature[1] && this.feature[1] & 1 << 9;
		};
		UChar.prototype.getCanonicalClass = function () {
			this.prepFeature();
			return !!this.feature[1] ? this.feature[1] & 0xff : 0;
		};
		UChar.prototype.getComposite = function (following) {
			this.prepFeature();
			if (!this.feature[2]) {
				return null;
			}
			var cp = this.feature[2][following.codepoint];
			return cp ? UChar.fromCharCode(cp) : null;
		};

		var UCharIterator = function UCharIterator(str) {
			this.str = str;
			this.cursor = 0;
		};
		UCharIterator.prototype.next = function () {
			if (!!this.str && this.cursor < this.str.length) {
				var cp = this.str.charCodeAt(this.cursor++);
				var d;
				if (UChar.isHighSurrogate(cp) && this.cursor < this.str.length && UChar.isLowSurrogate(d = this.str.charCodeAt(this.cursor))) {
					cp = (cp - 0xD800) * 0x400 + (d - 0xDC00) + 0x10000;
					++this.cursor;
				}
				return UChar.fromCharCode(cp);
			} else {
				this.str = null;
				return null;
			}
		};

		var RecursDecompIterator = function RecursDecompIterator(it, cano) {
			this.it = it;
			this.canonical = cano;
			this.resBuf = [];
		};

		RecursDecompIterator.prototype.next = function () {
			function recursiveDecomp(cano, uchar) {
				var decomp = uchar.getDecomp();
				if (!!decomp && !(cano && uchar.isCompatibility())) {
					var ret = [];
					for (var i = 0; i < decomp.length; ++i) {
						var a = recursiveDecomp(cano, UChar.fromCharCode(decomp[i]));
						ret = ret.concat(a);
					}
					return ret;
				} else {
					return [uchar];
				}
			}
			if (this.resBuf.length === 0) {
				var uchar = this.it.next();
				if (!uchar) {
					return null;
				}
				this.resBuf = recursiveDecomp(this.canonical, uchar);
			}
			return this.resBuf.shift();
		};

		var DecompIterator = function DecompIterator(it) {
			this.it = it;
			this.resBuf = [];
		};

		DecompIterator.prototype.next = function () {
			var cc;
			if (this.resBuf.length === 0) {
				do {
					var uchar = this.it.next();
					if (!uchar) {
						break;
					}
					cc = uchar.getCanonicalClass();
					var inspt = this.resBuf.length;
					if (cc !== 0) {
						for (; inspt > 0; --inspt) {
							var uchar2 = this.resBuf[inspt - 1];
							var cc2 = uchar2.getCanonicalClass();
							if (cc2 <= cc) {
								break;
							}
						}
					}
					this.resBuf.splice(inspt, 0, uchar);
				} while (cc !== 0);
			}
			return this.resBuf.shift();
		};

		var CompIterator = function CompIterator(it) {
			this.it = it;
			this.procBuf = [];
			this.resBuf = [];
			this.lastClass = null;
		};

		CompIterator.prototype.next = function () {
			while (this.resBuf.length === 0) {
				var uchar = this.it.next();
				if (!uchar) {
					this.resBuf = this.procBuf;
					this.procBuf = [];
					break;
				}
				if (this.procBuf.length === 0) {
					this.lastClass = uchar.getCanonicalClass();
					this.procBuf.push(uchar);
				} else {
					var starter = this.procBuf[0];
					var composite = starter.getComposite(uchar);
					var cc = uchar.getCanonicalClass();
					if (!!composite && (this.lastClass < cc || this.lastClass === 0)) {
						this.procBuf[0] = composite;
					} else {
						if (cc === 0) {
							this.resBuf = this.procBuf;
							this.procBuf = [];
						}
						this.lastClass = cc;
						this.procBuf.push(uchar);
					}
				}
			}
			return this.resBuf.shift();
		};

		var createIterator = function createIterator(mode, str) {
			switch (mode) {
				case "NFD":
					return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true));
				case "NFKD":
					return new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false));
				case "NFC":
					return new CompIterator(new DecompIterator(new RecursDecompIterator(new UCharIterator(str), true)));
				case "NFKC":
					return new CompIterator(new DecompIterator(new RecursDecompIterator(new UCharIterator(str), false)));
			}
			throw mode + " is invalid";
		};
		var normalize = function normalize(mode, str) {
			var it = createIterator(mode, str);
			var ret = "";
			var uchar;
			while (!!(uchar = it.next())) {
				ret += uchar.toString();
			}
			return ret;
		};

		/* API functions */
		function nfd(str) {
			return normalize("NFD", str);
		}

		function nfkd(str) {
			return normalize("NFKD", str);
		}

		function nfc(str) {
			return normalize("NFC", str);
		}

		function nfkc(str) {
			return normalize("NFKC", str);
		}

		/* Unicode data */
		UChar.udata = {
			0: { 60: [,, { 824: 8814 }], 61: [,, { 824: 8800 }], 62: [,, { 824: 8815 }], 65: [,, { 768: 192, 769: 193, 770: 194, 771: 195, 772: 256, 774: 258, 775: 550, 776: 196, 777: 7842, 778: 197, 780: 461, 783: 512, 785: 514, 803: 7840, 805: 7680, 808: 260 }], 66: [,, { 775: 7682, 803: 7684, 817: 7686 }], 67: [,, { 769: 262, 770: 264, 775: 266, 780: 268, 807: 199 }], 68: [,, { 775: 7690, 780: 270, 803: 7692, 807: 7696, 813: 7698, 817: 7694 }], 69: [,, { 768: 200, 769: 201, 770: 202, 771: 7868, 772: 274, 774: 276, 775: 278, 776: 203, 777: 7866, 780: 282, 783: 516, 785: 518, 803: 7864, 807: 552, 808: 280, 813: 7704, 816: 7706 }], 70: [,, { 775: 7710 }], 71: [,, { 769: 500, 770: 284, 772: 7712, 774: 286, 775: 288, 780: 486, 807: 290 }], 72: [,, { 770: 292, 775: 7714, 776: 7718, 780: 542, 803: 7716, 807: 7720, 814: 7722 }], 73: [,, { 768: 204, 769: 205, 770: 206, 771: 296, 772: 298, 774: 300, 775: 304, 776: 207, 777: 7880, 780: 463, 783: 520, 785: 522, 803: 7882, 808: 302, 816: 7724 }], 74: [,, { 770: 308 }], 75: [,, { 769: 7728, 780: 488, 803: 7730, 807: 310, 817: 7732 }], 76: [,, { 769: 313, 780: 317, 803: 7734, 807: 315, 813: 7740, 817: 7738 }], 77: [,, { 769: 7742, 775: 7744, 803: 7746 }], 78: [,, { 768: 504, 769: 323, 771: 209, 775: 7748, 780: 327, 803: 7750, 807: 325, 813: 7754, 817: 7752 }], 79: [,, { 768: 210, 769: 211, 770: 212, 771: 213, 772: 332, 774: 334, 775: 558, 776: 214, 777: 7886, 779: 336, 780: 465, 783: 524, 785: 526, 795: 416, 803: 7884, 808: 490 }], 80: [,, { 769: 7764, 775: 7766 }], 82: [,, { 769: 340, 775: 7768, 780: 344, 783: 528, 785: 530, 803: 7770, 807: 342, 817: 7774 }], 83: [,, { 769: 346, 770: 348, 775: 7776, 780: 352, 803: 7778, 806: 536, 807: 350 }], 84: [,, { 775: 7786, 780: 356, 803: 7788, 806: 538, 807: 354, 813: 7792, 817: 7790 }], 85: [,, { 768: 217, 769: 218, 770: 219, 771: 360, 772: 362, 774: 364, 776: 220, 777: 7910, 778: 366, 779: 368, 780: 467, 783: 532, 785: 534, 795: 431, 803: 7908, 804: 7794, 808: 370, 813: 7798, 816: 7796 }], 86: [,, { 771: 7804, 803: 7806 }], 87: [,, { 768: 7808, 769: 7810, 770: 372, 775: 7814, 776: 7812, 803: 7816 }], 88: [,, { 775: 7818, 776: 7820 }], 89: [,, { 768: 7922, 769: 221, 770: 374, 771: 7928, 772: 562, 775: 7822, 776: 376, 777: 7926, 803: 7924 }], 90: [,, { 769: 377, 770: 7824, 775: 379, 780: 381, 803: 7826, 817: 7828 }], 97: [,, { 768: 224, 769: 225, 770: 226, 771: 227, 772: 257, 774: 259, 775: 551, 776: 228, 777: 7843, 778: 229, 780: 462, 783: 513, 785: 515, 803: 7841, 805: 7681, 808: 261 }], 98: [,, { 775: 7683, 803: 7685, 817: 7687 }], 99: [,, { 769: 263, 770: 265, 775: 267, 780: 269, 807: 231 }], 100: [,, { 775: 7691, 780: 271, 803: 7693, 807: 7697, 813: 7699, 817: 7695 }], 101: [,, { 768: 232, 769: 233, 770: 234, 771: 7869, 772: 275, 774: 277, 775: 279, 776: 235, 777: 7867, 780: 283, 783: 517, 785: 519, 803: 7865, 807: 553, 808: 281, 813: 7705, 816: 7707 }], 102: [,, { 775: 7711 }], 103: [,, { 769: 501, 770: 285, 772: 7713, 774: 287, 775: 289, 780: 487, 807: 291 }], 104: [,, { 770: 293, 775: 7715, 776: 7719, 780: 543, 803: 7717, 807: 7721, 814: 7723, 817: 7830 }], 105: [,, { 768: 236, 769: 237, 770: 238, 771: 297, 772: 299, 774: 301, 776: 239, 777: 7881, 780: 464, 783: 521, 785: 523, 803: 7883, 808: 303, 816: 7725 }], 106: [,, { 770: 309, 780: 496 }], 107: [,, { 769: 7729, 780: 489, 803: 7731, 807: 311, 817: 7733 }], 108: [,, { 769: 314, 780: 318, 803: 7735, 807: 316, 813: 7741, 817: 7739 }], 109: [,, { 769: 7743, 775: 7745, 803: 7747 }], 110: [,, { 768: 505, 769: 324, 771: 241, 775: 7749, 780: 328, 803: 7751, 807: 326, 813: 7755, 817: 7753 }], 111: [,, { 768: 242, 769: 243, 770: 244, 771: 245, 772: 333, 774: 335, 775: 559, 776: 246, 777: 7887, 779: 337, 780: 466, 783: 525, 785: 527, 795: 417, 803: 7885, 808: 491 }], 112: [,, { 769: 7765, 775: 7767 }], 114: [,, { 769: 341, 775: 7769, 780: 345, 783: 529, 785: 531, 803: 7771, 807: 343, 817: 7775 }], 115: [,, { 769: 347, 770: 349, 775: 7777, 780: 353, 803: 7779, 806: 537, 807: 351 }], 116: [,, { 775: 7787, 776: 7831, 780: 357, 803: 7789, 806: 539, 807: 355, 813: 7793, 817: 7791 }], 117: [,, { 768: 249, 769: 250, 770: 251, 771: 361, 772: 363, 774: 365, 776: 252, 777: 7911, 778: 367, 779: 369, 780: 468, 783: 533, 785: 535, 795: 432, 803: 7909, 804: 7795, 808: 371, 813: 7799, 816: 7797 }], 118: [,, { 771: 7805, 803: 7807 }], 119: [,, { 768: 7809, 769: 7811, 770: 373, 775: 7815, 776: 7813, 778: 7832, 803: 7817 }], 120: [,, { 775: 7819, 776: 7821 }], 121: [,, { 768: 7923, 769: 253, 770: 375, 771: 7929, 772: 563, 775: 7823, 776: 255, 777: 7927, 778: 7833, 803: 7925 }], 122: [,, { 769: 378, 770: 7825, 775: 380, 780: 382, 803: 7827, 817: 7829 }], 160: [[32], 256], 168: [[32, 776], 256, { 768: 8173, 769: 901, 834: 8129 }], 170: [[97], 256], 175: [[32, 772], 256], 178: [[50], 256], 179: [[51], 256], 180: [[32, 769], 256], 181: [[956], 256], 184: [[32, 807], 256], 185: [[49], 256], 186: [[111], 256], 188: [[49, 8260, 52], 256], 189: [[49, 8260, 50], 256], 190: [[51, 8260, 52], 256], 192: [[65, 768]], 193: [[65, 769]], 194: [[65, 770],, { 768: 7846, 769: 7844, 771: 7850, 777: 7848 }], 195: [[65, 771]], 196: [[65, 776],, { 772: 478 }], 197: [[65, 778],, { 769: 506 }], 198: [,, { 769: 508, 772: 482 }], 199: [[67, 807],, { 769: 7688 }], 200: [[69, 768]], 201: [[69, 769]], 202: [[69, 770],, { 768: 7872, 769: 7870, 771: 7876, 777: 7874 }], 203: [[69, 776]], 204: [[73, 768]], 205: [[73, 769]], 206: [[73, 770]], 207: [[73, 776],, { 769: 7726 }], 209: [[78, 771]], 210: [[79, 768]], 211: [[79, 769]], 212: [[79, 770],, { 768: 7890, 769: 7888, 771: 7894, 777: 7892 }], 213: [[79, 771],, { 769: 7756, 772: 556, 776: 7758 }], 214: [[79, 776],, { 772: 554 }], 216: [,, { 769: 510 }], 217: [[85, 768]], 218: [[85, 769]], 219: [[85, 770]], 220: [[85, 776],, { 768: 475, 769: 471, 772: 469, 780: 473 }], 221: [[89, 769]], 224: [[97, 768]], 225: [[97, 769]], 226: [[97, 770],, { 768: 7847, 769: 7845, 771: 7851, 777: 7849 }], 227: [[97, 771]], 228: [[97, 776],, { 772: 479 }], 229: [[97, 778],, { 769: 507 }], 230: [,, { 769: 509, 772: 483 }], 231: [[99, 807],, { 769: 7689 }], 232: [[101, 768]], 233: [[101, 769]], 234: [[101, 770],, { 768: 7873, 769: 7871, 771: 7877, 777: 7875 }], 235: [[101, 776]], 236: [[105, 768]], 237: [[105, 769]], 238: [[105, 770]], 239: [[105, 776],, { 769: 7727 }], 241: [[110, 771]], 242: [[111, 768]], 243: [[111, 769]], 244: [[111, 770],, { 768: 7891, 769: 7889, 771: 7895, 777: 7893 }], 245: [[111, 771],, { 769: 7757, 772: 557, 776: 7759 }], 246: [[111, 776],, { 772: 555 }], 248: [,, { 769: 511 }], 249: [[117, 768]], 250: [[117, 769]], 251: [[117, 770]], 252: [[117, 776],, { 768: 476, 769: 472, 772: 470, 780: 474 }], 253: [[121, 769]], 255: [[121, 776]] },
			256: { 256: [[65, 772]], 257: [[97, 772]], 258: [[65, 774],, { 768: 7856, 769: 7854, 771: 7860, 777: 7858 }], 259: [[97, 774],, { 768: 7857, 769: 7855, 771: 7861, 777: 7859 }], 260: [[65, 808]], 261: [[97, 808]], 262: [[67, 769]], 263: [[99, 769]], 264: [[67, 770]], 265: [[99, 770]], 266: [[67, 775]], 267: [[99, 775]], 268: [[67, 780]], 269: [[99, 780]], 270: [[68, 780]], 271: [[100, 780]], 274: [[69, 772],, { 768: 7700, 769: 7702 }], 275: [[101, 772],, { 768: 7701, 769: 7703 }], 276: [[69, 774]], 277: [[101, 774]], 278: [[69, 775]], 279: [[101, 775]], 280: [[69, 808]], 281: [[101, 808]], 282: [[69, 780]], 283: [[101, 780]], 284: [[71, 770]], 285: [[103, 770]], 286: [[71, 774]], 287: [[103, 774]], 288: [[71, 775]], 289: [[103, 775]], 290: [[71, 807]], 291: [[103, 807]], 292: [[72, 770]], 293: [[104, 770]], 296: [[73, 771]], 297: [[105, 771]], 298: [[73, 772]], 299: [[105, 772]], 300: [[73, 774]], 301: [[105, 774]], 302: [[73, 808]], 303: [[105, 808]], 304: [[73, 775]], 306: [[73, 74], 256], 307: [[105, 106], 256], 308: [[74, 770]], 309: [[106, 770]], 310: [[75, 807]], 311: [[107, 807]], 313: [[76, 769]], 314: [[108, 769]], 315: [[76, 807]], 316: [[108, 807]], 317: [[76, 780]], 318: [[108, 780]], 319: [[76, 183], 256], 320: [[108, 183], 256], 323: [[78, 769]], 324: [[110, 769]], 325: [[78, 807]], 326: [[110, 807]], 327: [[78, 780]], 328: [[110, 780]], 329: [[700, 110], 256], 332: [[79, 772],, { 768: 7760, 769: 7762 }], 333: [[111, 772],, { 768: 7761, 769: 7763 }], 334: [[79, 774]], 335: [[111, 774]], 336: [[79, 779]], 337: [[111, 779]], 340: [[82, 769]], 341: [[114, 769]], 342: [[82, 807]], 343: [[114, 807]], 344: [[82, 780]], 345: [[114, 780]], 346: [[83, 769],, { 775: 7780 }], 347: [[115, 769],, { 775: 7781 }], 348: [[83, 770]], 349: [[115, 770]], 350: [[83, 807]], 351: [[115, 807]], 352: [[83, 780],, { 775: 7782 }], 353: [[115, 780],, { 775: 7783 }], 354: [[84, 807]], 355: [[116, 807]], 356: [[84, 780]], 357: [[116, 780]], 360: [[85, 771],, { 769: 7800 }], 361: [[117, 771],, { 769: 7801 }], 362: [[85, 772],, { 776: 7802 }], 363: [[117, 772],, { 776: 7803 }], 364: [[85, 774]], 365: [[117, 774]], 366: [[85, 778]], 367: [[117, 778]], 368: [[85, 779]], 369: [[117, 779]], 370: [[85, 808]], 371: [[117, 808]], 372: [[87, 770]], 373: [[119, 770]], 374: [[89, 770]], 375: [[121, 770]], 376: [[89, 776]], 377: [[90, 769]], 378: [[122, 769]], 379: [[90, 775]], 380: [[122, 775]], 381: [[90, 780]], 382: [[122, 780]], 383: [[115], 256, { 775: 7835 }], 416: [[79, 795],, { 768: 7900, 769: 7898, 771: 7904, 777: 7902, 803: 7906 }], 417: [[111, 795],, { 768: 7901, 769: 7899, 771: 7905, 777: 7903, 803: 7907 }], 431: [[85, 795],, { 768: 7914, 769: 7912, 771: 7918, 777: 7916, 803: 7920 }], 432: [[117, 795],, { 768: 7915, 769: 7913, 771: 7919, 777: 7917, 803: 7921 }], 439: [,, { 780: 494 }], 452: [[68, 381], 256], 453: [[68, 382], 256], 454: [[100, 382], 256], 455: [[76, 74], 256], 456: [[76, 106], 256], 457: [[108, 106], 256], 458: [[78, 74], 256], 459: [[78, 106], 256], 460: [[110, 106], 256], 461: [[65, 780]], 462: [[97, 780]], 463: [[73, 780]], 464: [[105, 780]], 465: [[79, 780]], 466: [[111, 780]], 467: [[85, 780]], 468: [[117, 780]], 469: [[220, 772]], 470: [[252, 772]], 471: [[220, 769]], 472: [[252, 769]], 473: [[220, 780]], 474: [[252, 780]], 475: [[220, 768]], 476: [[252, 768]], 478: [[196, 772]], 479: [[228, 772]], 480: [[550, 772]], 481: [[551, 772]], 482: [[198, 772]], 483: [[230, 772]], 486: [[71, 780]], 487: [[103, 780]], 488: [[75, 780]], 489: [[107, 780]], 490: [[79, 808],, { 772: 492 }], 491: [[111, 808],, { 772: 493 }], 492: [[490, 772]], 493: [[491, 772]], 494: [[439, 780]], 495: [[658, 780]], 496: [[106, 780]], 497: [[68, 90], 256], 498: [[68, 122], 256], 499: [[100, 122], 256], 500: [[71, 769]], 501: [[103, 769]], 504: [[78, 768]], 505: [[110, 768]], 506: [[197, 769]], 507: [[229, 769]], 508: [[198, 769]], 509: [[230, 769]], 510: [[216, 769]], 511: [[248, 769]], 66045: [, 220] },
			512: { 512: [[65, 783]], 513: [[97, 783]], 514: [[65, 785]], 515: [[97, 785]], 516: [[69, 783]], 517: [[101, 783]], 518: [[69, 785]], 519: [[101, 785]], 520: [[73, 783]], 521: [[105, 783]], 522: [[73, 785]], 523: [[105, 785]], 524: [[79, 783]], 525: [[111, 783]], 526: [[79, 785]], 527: [[111, 785]], 528: [[82, 783]], 529: [[114, 783]], 530: [[82, 785]], 531: [[114, 785]], 532: [[85, 783]], 533: [[117, 783]], 534: [[85, 785]], 535: [[117, 785]], 536: [[83, 806]], 537: [[115, 806]], 538: [[84, 806]], 539: [[116, 806]], 542: [[72, 780]], 543: [[104, 780]], 550: [[65, 775],, { 772: 480 }], 551: [[97, 775],, { 772: 481 }], 552: [[69, 807],, { 774: 7708 }], 553: [[101, 807],, { 774: 7709 }], 554: [[214, 772]], 555: [[246, 772]], 556: [[213, 772]], 557: [[245, 772]], 558: [[79, 775],, { 772: 560 }], 559: [[111, 775],, { 772: 561 }], 560: [[558, 772]], 561: [[559, 772]], 562: [[89, 772]], 563: [[121, 772]], 658: [,, { 780: 495 }], 688: [[104], 256], 689: [[614], 256], 690: [[106], 256], 691: [[114], 256], 692: [[633], 256], 693: [[635], 256], 694: [[641], 256], 695: [[119], 256], 696: [[121], 256], 728: [[32, 774], 256], 729: [[32, 775], 256], 730: [[32, 778], 256], 731: [[32, 808], 256], 732: [[32, 771], 256], 733: [[32, 779], 256], 736: [[611], 256], 737: [[108], 256], 738: [[115], 256], 739: [[120], 256], 740: [[661], 256], 66272: [, 220] },
			768: { 768: [, 230], 769: [, 230], 770: [, 230], 771: [, 230], 772: [, 230], 773: [, 230], 774: [, 230], 775: [, 230], 776: [, 230, { 769: 836 }], 777: [, 230], 778: [, 230], 779: [, 230], 780: [, 230], 781: [, 230], 782: [, 230], 783: [, 230], 784: [, 230], 785: [, 230], 786: [, 230], 787: [, 230], 788: [, 230], 789: [, 232], 790: [, 220], 791: [, 220], 792: [, 220], 793: [, 220], 794: [, 232], 795: [, 216], 796: [, 220], 797: [, 220], 798: [, 220], 799: [, 220], 800: [, 220], 801: [, 202], 802: [, 202], 803: [, 220], 804: [, 220], 805: [, 220], 806: [, 220], 807: [, 202], 808: [, 202], 809: [, 220], 810: [, 220], 811: [, 220], 812: [, 220], 813: [, 220], 814: [, 220], 815: [, 220], 816: [, 220], 817: [, 220], 818: [, 220], 819: [, 220], 820: [, 1], 821: [, 1], 822: [, 1], 823: [, 1], 824: [, 1], 825: [, 220], 826: [, 220], 827: [, 220], 828: [, 220], 829: [, 230], 830: [, 230], 831: [, 230], 832: [[768], 230], 833: [[769], 230], 834: [, 230], 835: [[787], 230], 836: [[776, 769], 230], 837: [, 240], 838: [, 230], 839: [, 220], 840: [, 220], 841: [, 220], 842: [, 230], 843: [, 230], 844: [, 230], 845: [, 220], 846: [, 220], 848: [, 230], 849: [, 230], 850: [, 230], 851: [, 220], 852: [, 220], 853: [, 220], 854: [, 220], 855: [, 230], 856: [, 232], 857: [, 220], 858: [, 220], 859: [, 230], 860: [, 233], 861: [, 234], 862: [, 234], 863: [, 233], 864: [, 234], 865: [, 234], 866: [, 233], 867: [, 230], 868: [, 230], 869: [, 230], 870: [, 230], 871: [, 230], 872: [, 230], 873: [, 230], 874: [, 230], 875: [, 230], 876: [, 230], 877: [, 230], 878: [, 230], 879: [, 230], 884: [[697]], 890: [[32, 837], 256], 894: [[59]], 900: [[32, 769], 256], 901: [[168, 769]], 902: [[913, 769]], 903: [[183]], 904: [[917, 769]], 905: [[919, 769]], 906: [[921, 769]], 908: [[927, 769]], 910: [[933, 769]], 911: [[937, 769]], 912: [[970, 769]], 913: [,, { 768: 8122, 769: 902, 772: 8121, 774: 8120, 787: 7944, 788: 7945, 837: 8124 }], 917: [,, { 768: 8136, 769: 904, 787: 7960, 788: 7961 }], 919: [,, { 768: 8138, 769: 905, 787: 7976, 788: 7977, 837: 8140 }], 921: [,, { 768: 8154, 769: 906, 772: 8153, 774: 8152, 776: 938, 787: 7992, 788: 7993 }], 927: [,, { 768: 8184, 769: 908, 787: 8008, 788: 8009 }], 929: [,, { 788: 8172 }], 933: [,, { 768: 8170, 769: 910, 772: 8169, 774: 8168, 776: 939, 788: 8025 }], 937: [,, { 768: 8186, 769: 911, 787: 8040, 788: 8041, 837: 8188 }], 938: [[921, 776]], 939: [[933, 776]], 940: [[945, 769],, { 837: 8116 }], 941: [[949, 769]], 942: [[951, 769],, { 837: 8132 }], 943: [[953, 769]], 944: [[971, 769]], 945: [,, { 768: 8048, 769: 940, 772: 8113, 774: 8112, 787: 7936, 788: 7937, 834: 8118, 837: 8115 }], 949: [,, { 768: 8050, 769: 941, 787: 7952, 788: 7953 }], 951: [,, { 768: 8052, 769: 942, 787: 7968, 788: 7969, 834: 8134, 837: 8131 }], 953: [,, { 768: 8054, 769: 943, 772: 8145, 774: 8144, 776: 970, 787: 7984, 788: 7985, 834: 8150 }], 959: [,, { 768: 8056, 769: 972, 787: 8000, 788: 8001 }], 961: [,, { 787: 8164, 788: 8165 }], 965: [,, { 768: 8058, 769: 973, 772: 8161, 774: 8160, 776: 971, 787: 8016, 788: 8017, 834: 8166 }], 969: [,, { 768: 8060, 769: 974, 787: 8032, 788: 8033, 834: 8182, 837: 8179 }], 970: [[953, 776],, { 768: 8146, 769: 912, 834: 8151 }], 971: [[965, 776],, { 768: 8162, 769: 944, 834: 8167 }], 972: [[959, 769]], 973: [[965, 769]], 974: [[969, 769],, { 837: 8180 }], 976: [[946], 256], 977: [[952], 256], 978: [[933], 256, { 769: 979, 776: 980 }], 979: [[978, 769]], 980: [[978, 776]], 981: [[966], 256], 982: [[960], 256], 1008: [[954], 256], 1009: [[961], 256], 1010: [[962], 256], 1012: [[920], 256], 1013: [[949], 256], 1017: [[931], 256], 66422: [, 230], 66423: [, 230], 66424: [, 230], 66425: [, 230], 66426: [, 230] },
			1024: { 1024: [[1045, 768]], 1025: [[1045, 776]], 1027: [[1043, 769]], 1030: [,, { 776: 1031 }], 1031: [[1030, 776]], 1036: [[1050, 769]], 1037: [[1048, 768]], 1038: [[1059, 774]], 1040: [,, { 774: 1232, 776: 1234 }], 1043: [,, { 769: 1027 }], 1045: [,, { 768: 1024, 774: 1238, 776: 1025 }], 1046: [,, { 774: 1217, 776: 1244 }], 1047: [,, { 776: 1246 }], 1048: [,, { 768: 1037, 772: 1250, 774: 1049, 776: 1252 }], 1049: [[1048, 774]], 1050: [,, { 769: 1036 }], 1054: [,, { 776: 1254 }], 1059: [,, { 772: 1262, 774: 1038, 776: 1264, 779: 1266 }], 1063: [,, { 776: 1268 }], 1067: [,, { 776: 1272 }], 1069: [,, { 776: 1260 }], 1072: [,, { 774: 1233, 776: 1235 }], 1075: [,, { 769: 1107 }], 1077: [,, { 768: 1104, 774: 1239, 776: 1105 }], 1078: [,, { 774: 1218, 776: 1245 }], 1079: [,, { 776: 1247 }], 1080: [,, { 768: 1117, 772: 1251, 774: 1081, 776: 1253 }], 1081: [[1080, 774]], 1082: [,, { 769: 1116 }], 1086: [,, { 776: 1255 }], 1091: [,, { 772: 1263, 774: 1118, 776: 1265, 779: 1267 }], 1095: [,, { 776: 1269 }], 1099: [,, { 776: 1273 }], 1101: [,, { 776: 1261 }], 1104: [[1077, 768]], 1105: [[1077, 776]], 1107: [[1075, 769]], 1110: [,, { 776: 1111 }], 1111: [[1110, 776]], 1116: [[1082, 769]], 1117: [[1080, 768]], 1118: [[1091, 774]], 1140: [,, { 783: 1142 }], 1141: [,, { 783: 1143 }], 1142: [[1140, 783]], 1143: [[1141, 783]], 1155: [, 230], 1156: [, 230], 1157: [, 230], 1158: [, 230], 1159: [, 230], 1217: [[1046, 774]], 1218: [[1078, 774]], 1232: [[1040, 774]], 1233: [[1072, 774]], 1234: [[1040, 776]], 1235: [[1072, 776]], 1238: [[1045, 774]], 1239: [[1077, 774]], 1240: [,, { 776: 1242 }], 1241: [,, { 776: 1243 }], 1242: [[1240, 776]], 1243: [[1241, 776]], 1244: [[1046, 776]], 1245: [[1078, 776]], 1246: [[1047, 776]], 1247: [[1079, 776]], 1250: [[1048, 772]], 1251: [[1080, 772]], 1252: [[1048, 776]], 1253: [[1080, 776]], 1254: [[1054, 776]], 1255: [[1086, 776]], 1256: [,, { 776: 1258 }], 1257: [,, { 776: 1259 }], 1258: [[1256, 776]], 1259: [[1257, 776]], 1260: [[1069, 776]], 1261: [[1101, 776]], 1262: [[1059, 772]], 1263: [[1091, 772]], 1264: [[1059, 776]], 1265: [[1091, 776]], 1266: [[1059, 779]], 1267: [[1091, 779]], 1268: [[1063, 776]], 1269: [[1095, 776]], 1272: [[1067, 776]], 1273: [[1099, 776]] },
			1280: { 1415: [[1381, 1410], 256], 1425: [, 220], 1426: [, 230], 1427: [, 230], 1428: [, 230], 1429: [, 230], 1430: [, 220], 1431: [, 230], 1432: [, 230], 1433: [, 230], 1434: [, 222], 1435: [, 220], 1436: [, 230], 1437: [, 230], 1438: [, 230], 1439: [, 230], 1440: [, 230], 1441: [, 230], 1442: [, 220], 1443: [, 220], 1444: [, 220], 1445: [, 220], 1446: [, 220], 1447: [, 220], 1448: [, 230], 1449: [, 230], 1450: [, 220], 1451: [, 230], 1452: [, 230], 1453: [, 222], 1454: [, 228], 1455: [, 230], 1456: [, 10], 1457: [, 11], 1458: [, 12], 1459: [, 13], 1460: [, 14], 1461: [, 15], 1462: [, 16], 1463: [, 17], 1464: [, 18], 1465: [, 19], 1466: [, 19], 1467: [, 20], 1468: [, 21], 1469: [, 22], 1471: [, 23], 1473: [, 24], 1474: [, 25], 1476: [, 230], 1477: [, 220], 1479: [, 18] },
			1536: { 1552: [, 230], 1553: [, 230], 1554: [, 230], 1555: [, 230], 1556: [, 230], 1557: [, 230], 1558: [, 230], 1559: [, 230], 1560: [, 30], 1561: [, 31], 1562: [, 32], 1570: [[1575, 1619]], 1571: [[1575, 1620]], 1572: [[1608, 1620]], 1573: [[1575, 1621]], 1574: [[1610, 1620]], 1575: [,, { 1619: 1570, 1620: 1571, 1621: 1573 }], 1608: [,, { 1620: 1572 }], 1610: [,, { 1620: 1574 }], 1611: [, 27], 1612: [, 28], 1613: [, 29], 1614: [, 30], 1615: [, 31], 1616: [, 32], 1617: [, 33], 1618: [, 34], 1619: [, 230], 1620: [, 230], 1621: [, 220], 1622: [, 220], 1623: [, 230], 1624: [, 230], 1625: [, 230], 1626: [, 230], 1627: [, 230], 1628: [, 220], 1629: [, 230], 1630: [, 230], 1631: [, 220], 1648: [, 35], 1653: [[1575, 1652], 256], 1654: [[1608, 1652], 256], 1655: [[1735, 1652], 256], 1656: [[1610, 1652], 256], 1728: [[1749, 1620]], 1729: [,, { 1620: 1730 }], 1730: [[1729, 1620]], 1746: [,, { 1620: 1747 }], 1747: [[1746, 1620]], 1749: [,, { 1620: 1728 }], 1750: [, 230], 1751: [, 230], 1752: [, 230], 1753: [, 230], 1754: [, 230], 1755: [, 230], 1756: [, 230], 1759: [, 230], 1760: [, 230], 1761: [, 230], 1762: [, 230], 1763: [, 220], 1764: [, 230], 1767: [, 230], 1768: [, 230], 1770: [, 220], 1771: [, 230], 1772: [, 230], 1773: [, 220] },
			1792: { 1809: [, 36], 1840: [, 230], 1841: [, 220], 1842: [, 230], 1843: [, 230], 1844: [, 220], 1845: [, 230], 1846: [, 230], 1847: [, 220], 1848: [, 220], 1849: [, 220], 1850: [, 230], 1851: [, 220], 1852: [, 220], 1853: [, 230], 1854: [, 220], 1855: [, 230], 1856: [, 230], 1857: [, 230], 1858: [, 220], 1859: [, 230], 1860: [, 220], 1861: [, 230], 1862: [, 220], 1863: [, 230], 1864: [, 220], 1865: [, 230], 1866: [, 230], 2027: [, 230], 2028: [, 230], 2029: [, 230], 2030: [, 230], 2031: [, 230], 2032: [, 230], 2033: [, 230], 2034: [, 220], 2035: [, 230] },
			2048: { 2070: [, 230], 2071: [, 230], 2072: [, 230], 2073: [, 230], 2075: [, 230], 2076: [, 230], 2077: [, 230], 2078: [, 230], 2079: [, 230], 2080: [, 230], 2081: [, 230], 2082: [, 230], 2083: [, 230], 2085: [, 230], 2086: [, 230], 2087: [, 230], 2089: [, 230], 2090: [, 230], 2091: [, 230], 2092: [, 230], 2093: [, 230], 2137: [, 220], 2138: [, 220], 2139: [, 220], 2276: [, 230], 2277: [, 230], 2278: [, 220], 2279: [, 230], 2280: [, 230], 2281: [, 220], 2282: [, 230], 2283: [, 230], 2284: [, 230], 2285: [, 220], 2286: [, 220], 2287: [, 220], 2288: [, 27], 2289: [, 28], 2290: [, 29], 2291: [, 230], 2292: [, 230], 2293: [, 230], 2294: [, 220], 2295: [, 230], 2296: [, 230], 2297: [, 220], 2298: [, 220], 2299: [, 230], 2300: [, 230], 2301: [, 230], 2302: [, 230], 2303: [, 230] },
			2304: { 2344: [,, { 2364: 2345 }], 2345: [[2344, 2364]], 2352: [,, { 2364: 2353 }], 2353: [[2352, 2364]], 2355: [,, { 2364: 2356 }], 2356: [[2355, 2364]], 2364: [, 7], 2381: [, 9], 2385: [, 230], 2386: [, 220], 2387: [, 230], 2388: [, 230], 2392: [[2325, 2364], 512], 2393: [[2326, 2364], 512], 2394: [[2327, 2364], 512], 2395: [[2332, 2364], 512], 2396: [[2337, 2364], 512], 2397: [[2338, 2364], 512], 2398: [[2347, 2364], 512], 2399: [[2351, 2364], 512], 2492: [, 7], 2503: [,, { 2494: 2507, 2519: 2508 }], 2507: [[2503, 2494]], 2508: [[2503, 2519]], 2509: [, 9], 2524: [[2465, 2492], 512], 2525: [[2466, 2492], 512], 2527: [[2479, 2492], 512] },
			2560: { 2611: [[2610, 2620], 512], 2614: [[2616, 2620], 512], 2620: [, 7], 2637: [, 9], 2649: [[2582, 2620], 512], 2650: [[2583, 2620], 512], 2651: [[2588, 2620], 512], 2654: [[2603, 2620], 512], 2748: [, 7], 2765: [, 9], 68109: [, 220], 68111: [, 230], 68152: [, 230], 68153: [, 1], 68154: [, 220], 68159: [, 9], 68325: [, 230], 68326: [, 220] },
			2816: { 2876: [, 7], 2887: [,, { 2878: 2891, 2902: 2888, 2903: 2892 }], 2888: [[2887, 2902]], 2891: [[2887, 2878]], 2892: [[2887, 2903]], 2893: [, 9], 2908: [[2849, 2876], 512], 2909: [[2850, 2876], 512], 2962: [,, { 3031: 2964 }], 2964: [[2962, 3031]], 3014: [,, { 3006: 3018, 3031: 3020 }], 3015: [,, { 3006: 3019 }], 3018: [[3014, 3006]], 3019: [[3015, 3006]], 3020: [[3014, 3031]], 3021: [, 9] },
			3072: { 3142: [,, { 3158: 3144 }], 3144: [[3142, 3158]], 3149: [, 9], 3157: [, 84], 3158: [, 91], 3260: [, 7], 3263: [,, { 3285: 3264 }], 3264: [[3263, 3285]], 3270: [,, { 3266: 3274, 3285: 3271, 3286: 3272 }], 3271: [[3270, 3285]], 3272: [[3270, 3286]], 3274: [[3270, 3266],, { 3285: 3275 }], 3275: [[3274, 3285]], 3277: [, 9] },
			3328: { 3398: [,, { 3390: 3402, 3415: 3404 }], 3399: [,, { 3390: 3403 }], 3402: [[3398, 3390]], 3403: [[3399, 3390]], 3404: [[3398, 3415]], 3405: [, 9], 3530: [, 9], 3545: [,, { 3530: 3546, 3535: 3548, 3551: 3550 }], 3546: [[3545, 3530]], 3548: [[3545, 3535],, { 3530: 3549 }], 3549: [[3548, 3530]], 3550: [[3545, 3551]] },
			3584: { 3635: [[3661, 3634], 256], 3640: [, 103], 3641: [, 103], 3642: [, 9], 3656: [, 107], 3657: [, 107], 3658: [, 107], 3659: [, 107], 3763: [[3789, 3762], 256], 3768: [, 118], 3769: [, 118], 3784: [, 122], 3785: [, 122], 3786: [, 122], 3787: [, 122], 3804: [[3755, 3737], 256], 3805: [[3755, 3745], 256] },
			3840: { 3852: [[3851], 256], 3864: [, 220], 3865: [, 220], 3893: [, 220], 3895: [, 220], 3897: [, 216], 3907: [[3906, 4023], 512], 3917: [[3916, 4023], 512], 3922: [[3921, 4023], 512], 3927: [[3926, 4023], 512], 3932: [[3931, 4023], 512], 3945: [[3904, 4021], 512], 3953: [, 129], 3954: [, 130], 3955: [[3953, 3954], 512], 3956: [, 132], 3957: [[3953, 3956], 512], 3958: [[4018, 3968], 512], 3959: [[4018, 3969], 256], 3960: [[4019, 3968], 512], 3961: [[4019, 3969], 256], 3962: [, 130], 3963: [, 130], 3964: [, 130], 3965: [, 130], 3968: [, 130], 3969: [[3953, 3968], 512], 3970: [, 230], 3971: [, 230], 3972: [, 9], 3974: [, 230], 3975: [, 230], 3987: [[3986, 4023], 512], 3997: [[3996, 4023], 512], 4002: [[4001, 4023], 512], 4007: [[4006, 4023], 512], 4012: [[4011, 4023], 512], 4025: [[3984, 4021], 512], 4038: [, 220] },
			4096: { 4133: [,, { 4142: 4134 }], 4134: [[4133, 4142]], 4151: [, 7], 4153: [, 9], 4154: [, 9], 4237: [, 220], 4348: [[4316], 256], 69702: [, 9], 69759: [, 9], 69785: [,, { 69818: 69786 }], 69786: [[69785, 69818]], 69787: [,, { 69818: 69788 }], 69788: [[69787, 69818]], 69797: [,, { 69818: 69803 }], 69803: [[69797, 69818]], 69817: [, 9], 69818: [, 7] },
			4352: { 69888: [, 230], 69889: [, 230], 69890: [, 230], 69934: [[69937, 69927]], 69935: [[69938, 69927]], 69937: [,, { 69927: 69934 }], 69938: [,, { 69927: 69935 }], 69939: [, 9], 69940: [, 9], 70003: [, 7], 70080: [, 9] },
			4608: { 70197: [, 9], 70198: [, 7], 70377: [, 7], 70378: [, 9] },
			4864: { 4957: [, 230], 4958: [, 230], 4959: [, 230], 70460: [, 7], 70471: [,, { 70462: 70475, 70487: 70476 }], 70475: [[70471, 70462]], 70476: [[70471, 70487]], 70477: [, 9], 70502: [, 230], 70503: [, 230], 70504: [, 230], 70505: [, 230], 70506: [, 230], 70507: [, 230], 70508: [, 230], 70512: [, 230], 70513: [, 230], 70514: [, 230], 70515: [, 230], 70516: [, 230] },
			5120: { 70841: [,, { 70832: 70844, 70842: 70843, 70845: 70846 }], 70843: [[70841, 70842]], 70844: [[70841, 70832]], 70846: [[70841, 70845]], 70850: [, 9], 70851: [, 7] },
			5376: { 71096: [,, { 71087: 71098 }], 71097: [,, { 71087: 71099 }], 71098: [[71096, 71087]], 71099: [[71097, 71087]], 71103: [, 9], 71104: [, 7] },
			5632: { 71231: [, 9], 71350: [, 9], 71351: [, 7] },
			5888: { 5908: [, 9], 5940: [, 9], 6098: [, 9], 6109: [, 230] },
			6144: { 6313: [, 228] },
			6400: { 6457: [, 222], 6458: [, 230], 6459: [, 220] },
			6656: { 6679: [, 230], 6680: [, 220], 6752: [, 9], 6773: [, 230], 6774: [, 230], 6775: [, 230], 6776: [, 230], 6777: [, 230], 6778: [, 230], 6779: [, 230], 6780: [, 230], 6783: [, 220], 6832: [, 230], 6833: [, 230], 6834: [, 230], 6835: [, 230], 6836: [, 230], 6837: [, 220], 6838: [, 220], 6839: [, 220], 6840: [, 220], 6841: [, 220], 6842: [, 220], 6843: [, 230], 6844: [, 230], 6845: [, 220] },
			6912: { 6917: [,, { 6965: 6918 }], 6918: [[6917, 6965]], 6919: [,, { 6965: 6920 }], 6920: [[6919, 6965]], 6921: [,, { 6965: 6922 }], 6922: [[6921, 6965]], 6923: [,, { 6965: 6924 }], 6924: [[6923, 6965]], 6925: [,, { 6965: 6926 }], 6926: [[6925, 6965]], 6929: [,, { 6965: 6930 }], 6930: [[6929, 6965]], 6964: [, 7], 6970: [,, { 6965: 6971 }], 6971: [[6970, 6965]], 6972: [,, { 6965: 6973 }], 6973: [[6972, 6965]], 6974: [,, { 6965: 6976 }], 6975: [,, { 6965: 6977 }], 6976: [[6974, 6965]], 6977: [[6975, 6965]], 6978: [,, { 6965: 6979 }], 6979: [[6978, 6965]], 6980: [, 9], 7019: [, 230], 7020: [, 220], 7021: [, 230], 7022: [, 230], 7023: [, 230], 7024: [, 230], 7025: [, 230], 7026: [, 230], 7027: [, 230], 7082: [, 9], 7083: [, 9], 7142: [, 7], 7154: [, 9], 7155: [, 9] },
			7168: { 7223: [, 7], 7376: [, 230], 7377: [, 230], 7378: [, 230], 7380: [, 1], 7381: [, 220], 7382: [, 220], 7383: [, 220], 7384: [, 220], 7385: [, 220], 7386: [, 230], 7387: [, 230], 7388: [, 220], 7389: [, 220], 7390: [, 220], 7391: [, 220], 7392: [, 230], 7394: [, 1], 7395: [, 1], 7396: [, 1], 7397: [, 1], 7398: [, 1], 7399: [, 1], 7400: [, 1], 7405: [, 220], 7412: [, 230], 7416: [, 230], 7417: [, 230] },
			7424: { 7468: [[65], 256], 7469: [[198], 256], 7470: [[66], 256], 7472: [[68], 256], 7473: [[69], 256], 7474: [[398], 256], 7475: [[71], 256], 7476: [[72], 256], 7477: [[73], 256], 7478: [[74], 256], 7479: [[75], 256], 7480: [[76], 256], 7481: [[77], 256], 7482: [[78], 256], 7484: [[79], 256], 7485: [[546], 256], 7486: [[80], 256], 7487: [[82], 256], 7488: [[84], 256], 7489: [[85], 256], 7490: [[87], 256], 7491: [[97], 256], 7492: [[592], 256], 7493: [[593], 256], 7494: [[7426], 256], 7495: [[98], 256], 7496: [[100], 256], 7497: [[101], 256], 7498: [[601], 256], 7499: [[603], 256], 7500: [[604], 256], 7501: [[103], 256], 7503: [[107], 256], 7504: [[109], 256], 7505: [[331], 256], 7506: [[111], 256], 7507: [[596], 256], 7508: [[7446], 256], 7509: [[7447], 256], 7510: [[112], 256], 7511: [[116], 256], 7512: [[117], 256], 7513: [[7453], 256], 7514: [[623], 256], 7515: [[118], 256], 7516: [[7461], 256], 7517: [[946], 256], 7518: [[947], 256], 7519: [[948], 256], 7520: [[966], 256], 7521: [[967], 256], 7522: [[105], 256], 7523: [[114], 256], 7524: [[117], 256], 7525: [[118], 256], 7526: [[946], 256], 7527: [[947], 256], 7528: [[961], 256], 7529: [[966], 256], 7530: [[967], 256], 7544: [[1085], 256], 7579: [[594], 256], 7580: [[99], 256], 7581: [[597], 256], 7582: [[240], 256], 7583: [[604], 256], 7584: [[102], 256], 7585: [[607], 256], 7586: [[609], 256], 7587: [[613], 256], 7588: [[616], 256], 7589: [[617], 256], 7590: [[618], 256], 7591: [[7547], 256], 7592: [[669], 256], 7593: [[621], 256], 7594: [[7557], 256], 7595: [[671], 256], 7596: [[625], 256], 7597: [[624], 256], 7598: [[626], 256], 7599: [[627], 256], 7600: [[628], 256], 7601: [[629], 256], 7602: [[632], 256], 7603: [[642], 256], 7604: [[643], 256], 7605: [[427], 256], 7606: [[649], 256], 7607: [[650], 256], 7608: [[7452], 256], 7609: [[651], 256], 7610: [[652], 256], 7611: [[122], 256], 7612: [[656], 256], 7613: [[657], 256], 7614: [[658], 256], 7615: [[952], 256], 7616: [, 230], 7617: [, 230], 7618: [, 220], 7619: [, 230], 7620: [, 230], 7621: [, 230], 7622: [, 230], 7623: [, 230], 7624: [, 230], 7625: [, 230], 7626: [, 220], 7627: [, 230], 7628: [, 230], 7629: [, 234], 7630: [, 214], 7631: [, 220], 7632: [, 202], 7633: [, 230], 7634: [, 230], 7635: [, 230], 7636: [, 230], 7637: [, 230], 7638: [, 230], 7639: [, 230], 7640: [, 230], 7641: [, 230], 7642: [, 230], 7643: [, 230], 7644: [, 230], 7645: [, 230], 7646: [, 230], 7647: [, 230], 7648: [, 230], 7649: [, 230], 7650: [, 230], 7651: [, 230], 7652: [, 230], 7653: [, 230], 7654: [, 230], 7655: [, 230], 7656: [, 230], 7657: [, 230], 7658: [, 230], 7659: [, 230], 7660: [, 230], 7661: [, 230], 7662: [, 230], 7663: [, 230], 7664: [, 230], 7665: [, 230], 7666: [, 230], 7667: [, 230], 7668: [, 230], 7669: [, 230], 7676: [, 233], 7677: [, 220], 7678: [, 230], 7679: [, 220] },
			7680: { 7680: [[65, 805]], 7681: [[97, 805]], 7682: [[66, 775]], 7683: [[98, 775]], 7684: [[66, 803]], 7685: [[98, 803]], 7686: [[66, 817]], 7687: [[98, 817]], 7688: [[199, 769]], 7689: [[231, 769]], 7690: [[68, 775]], 7691: [[100, 775]], 7692: [[68, 803]], 7693: [[100, 803]], 7694: [[68, 817]], 7695: [[100, 817]], 7696: [[68, 807]], 7697: [[100, 807]], 7698: [[68, 813]], 7699: [[100, 813]], 7700: [[274, 768]], 7701: [[275, 768]], 7702: [[274, 769]], 7703: [[275, 769]], 7704: [[69, 813]], 7705: [[101, 813]], 7706: [[69, 816]], 7707: [[101, 816]], 7708: [[552, 774]], 7709: [[553, 774]], 7710: [[70, 775]], 7711: [[102, 775]], 7712: [[71, 772]], 7713: [[103, 772]], 7714: [[72, 775]], 7715: [[104, 775]], 7716: [[72, 803]], 7717: [[104, 803]], 7718: [[72, 776]], 7719: [[104, 776]], 7720: [[72, 807]], 7721: [[104, 807]], 7722: [[72, 814]], 7723: [[104, 814]], 7724: [[73, 816]], 7725: [[105, 816]], 7726: [[207, 769]], 7727: [[239, 769]], 7728: [[75, 769]], 7729: [[107, 769]], 7730: [[75, 803]], 7731: [[107, 803]], 7732: [[75, 817]], 7733: [[107, 817]], 7734: [[76, 803],, { 772: 7736 }], 7735: [[108, 803],, { 772: 7737 }], 7736: [[7734, 772]], 7737: [[7735, 772]], 7738: [[76, 817]], 7739: [[108, 817]], 7740: [[76, 813]], 7741: [[108, 813]], 7742: [[77, 769]], 7743: [[109, 769]], 7744: [[77, 775]], 7745: [[109, 775]], 7746: [[77, 803]], 7747: [[109, 803]], 7748: [[78, 775]], 7749: [[110, 775]], 7750: [[78, 803]], 7751: [[110, 803]], 7752: [[78, 817]], 7753: [[110, 817]], 7754: [[78, 813]], 7755: [[110, 813]], 7756: [[213, 769]], 7757: [[245, 769]], 7758: [[213, 776]], 7759: [[245, 776]], 7760: [[332, 768]], 7761: [[333, 768]], 7762: [[332, 769]], 7763: [[333, 769]], 7764: [[80, 769]], 7765: [[112, 769]], 7766: [[80, 775]], 7767: [[112, 775]], 7768: [[82, 775]], 7769: [[114, 775]], 7770: [[82, 803],, { 772: 7772 }], 7771: [[114, 803],, { 772: 7773 }], 7772: [[7770, 772]], 7773: [[7771, 772]], 7774: [[82, 817]], 7775: [[114, 817]], 7776: [[83, 775]], 7777: [[115, 775]], 7778: [[83, 803],, { 775: 7784 }], 7779: [[115, 803],, { 775: 7785 }], 7780: [[346, 775]], 7781: [[347, 775]], 7782: [[352, 775]], 7783: [[353, 775]], 7784: [[7778, 775]], 7785: [[7779, 775]], 7786: [[84, 775]], 7787: [[116, 775]], 7788: [[84, 803]], 7789: [[116, 803]], 7790: [[84, 817]], 7791: [[116, 817]], 7792: [[84, 813]], 7793: [[116, 813]], 7794: [[85, 804]], 7795: [[117, 804]], 7796: [[85, 816]], 7797: [[117, 816]], 7798: [[85, 813]], 7799: [[117, 813]], 7800: [[360, 769]], 7801: [[361, 769]], 7802: [[362, 776]], 7803: [[363, 776]], 7804: [[86, 771]], 7805: [[118, 771]], 7806: [[86, 803]], 7807: [[118, 803]], 7808: [[87, 768]], 7809: [[119, 768]], 7810: [[87, 769]], 7811: [[119, 769]], 7812: [[87, 776]], 7813: [[119, 776]], 7814: [[87, 775]], 7815: [[119, 775]], 7816: [[87, 803]], 7817: [[119, 803]], 7818: [[88, 775]], 7819: [[120, 775]], 7820: [[88, 776]], 7821: [[120, 776]], 7822: [[89, 775]], 7823: [[121, 775]], 7824: [[90, 770]], 7825: [[122, 770]], 7826: [[90, 803]], 7827: [[122, 803]], 7828: [[90, 817]], 7829: [[122, 817]], 7830: [[104, 817]], 7831: [[116, 776]], 7832: [[119, 778]], 7833: [[121, 778]], 7834: [[97, 702], 256], 7835: [[383, 775]], 7840: [[65, 803],, { 770: 7852, 774: 7862 }], 7841: [[97, 803],, { 770: 7853, 774: 7863 }], 7842: [[65, 777]], 7843: [[97, 777]], 7844: [[194, 769]], 7845: [[226, 769]], 7846: [[194, 768]], 7847: [[226, 768]], 7848: [[194, 777]], 7849: [[226, 777]], 7850: [[194, 771]], 7851: [[226, 771]], 7852: [[7840, 770]], 7853: [[7841, 770]], 7854: [[258, 769]], 7855: [[259, 769]], 7856: [[258, 768]], 7857: [[259, 768]], 7858: [[258, 777]], 7859: [[259, 777]], 7860: [[258, 771]], 7861: [[259, 771]], 7862: [[7840, 774]], 7863: [[7841, 774]], 7864: [[69, 803],, { 770: 7878 }], 7865: [[101, 803],, { 770: 7879 }], 7866: [[69, 777]], 7867: [[101, 777]], 7868: [[69, 771]], 7869: [[101, 771]], 7870: [[202, 769]], 7871: [[234, 769]], 7872: [[202, 768]], 7873: [[234, 768]], 7874: [[202, 777]], 7875: [[234, 777]], 7876: [[202, 771]], 7877: [[234, 771]], 7878: [[7864, 770]], 7879: [[7865, 770]], 7880: [[73, 777]], 7881: [[105, 777]], 7882: [[73, 803]], 7883: [[105, 803]], 7884: [[79, 803],, { 770: 7896 }], 7885: [[111, 803],, { 770: 7897 }], 7886: [[79, 777]], 7887: [[111, 777]], 7888: [[212, 769]], 7889: [[244, 769]], 7890: [[212, 768]], 7891: [[244, 768]], 7892: [[212, 777]], 7893: [[244, 777]], 7894: [[212, 771]], 7895: [[244, 771]], 7896: [[7884, 770]], 7897: [[7885, 770]], 7898: [[416, 769]], 7899: [[417, 769]], 7900: [[416, 768]], 7901: [[417, 768]], 7902: [[416, 777]], 7903: [[417, 777]], 7904: [[416, 771]], 7905: [[417, 771]], 7906: [[416, 803]], 7907: [[417, 803]], 7908: [[85, 803]], 7909: [[117, 803]], 7910: [[85, 777]], 7911: [[117, 777]], 7912: [[431, 769]], 7913: [[432, 769]], 7914: [[431, 768]], 7915: [[432, 768]], 7916: [[431, 777]], 7917: [[432, 777]], 7918: [[431, 771]], 7919: [[432, 771]], 7920: [[431, 803]], 7921: [[432, 803]], 7922: [[89, 768]], 7923: [[121, 768]], 7924: [[89, 803]], 7925: [[121, 803]], 7926: [[89, 777]], 7927: [[121, 777]], 7928: [[89, 771]], 7929: [[121, 771]] },
			7936: { 7936: [[945, 787],, { 768: 7938, 769: 7940, 834: 7942, 837: 8064 }], 7937: [[945, 788],, { 768: 7939, 769: 7941, 834: 7943, 837: 8065 }], 7938: [[7936, 768],, { 837: 8066 }], 7939: [[7937, 768],, { 837: 8067 }], 7940: [[7936, 769],, { 837: 8068 }], 7941: [[7937, 769],, { 837: 8069 }], 7942: [[7936, 834],, { 837: 8070 }], 7943: [[7937, 834],, { 837: 8071 }], 7944: [[913, 787],, { 768: 7946, 769: 7948, 834: 7950, 837: 8072 }], 7945: [[913, 788],, { 768: 7947, 769: 7949, 834: 7951, 837: 8073 }], 7946: [[7944, 768],, { 837: 8074 }], 7947: [[7945, 768],, { 837: 8075 }], 7948: [[7944, 769],, { 837: 8076 }], 7949: [[7945, 769],, { 837: 8077 }], 7950: [[7944, 834],, { 837: 8078 }], 7951: [[7945, 834],, { 837: 8079 }], 7952: [[949, 787],, { 768: 7954, 769: 7956 }], 7953: [[949, 788],, { 768: 7955, 769: 7957 }], 7954: [[7952, 768]], 7955: [[7953, 768]], 7956: [[7952, 769]], 7957: [[7953, 769]], 7960: [[917, 787],, { 768: 7962, 769: 7964 }], 7961: [[917, 788],, { 768: 7963, 769: 7965 }], 7962: [[7960, 768]], 7963: [[7961, 768]], 7964: [[7960, 769]], 7965: [[7961, 769]], 7968: [[951, 787],, { 768: 7970, 769: 7972, 834: 7974, 837: 8080 }], 7969: [[951, 788],, { 768: 7971, 769: 7973, 834: 7975, 837: 8081 }], 7970: [[7968, 768],, { 837: 8082 }], 7971: [[7969, 768],, { 837: 8083 }], 7972: [[7968, 769],, { 837: 8084 }], 7973: [[7969, 769],, { 837: 8085 }], 7974: [[7968, 834],, { 837: 8086 }], 7975: [[7969, 834],, { 837: 8087 }], 7976: [[919, 787],, { 768: 7978, 769: 7980, 834: 7982, 837: 8088 }], 7977: [[919, 788],, { 768: 7979, 769: 7981, 834: 7983, 837: 8089 }], 7978: [[7976, 768],, { 837: 8090 }], 7979: [[7977, 768],, { 837: 8091 }], 7980: [[7976, 769],, { 837: 8092 }], 7981: [[7977, 769],, { 837: 8093 }], 7982: [[7976, 834],, { 837: 8094 }], 7983: [[7977, 834],, { 837: 8095 }], 7984: [[953, 787],, { 768: 7986, 769: 7988, 834: 7990 }], 7985: [[953, 788],, { 768: 7987, 769: 7989, 834: 7991 }], 7986: [[7984, 768]], 7987: [[7985, 768]], 7988: [[7984, 769]], 7989: [[7985, 769]], 7990: [[7984, 834]], 7991: [[7985, 834]], 7992: [[921, 787],, { 768: 7994, 769: 7996, 834: 7998 }], 7993: [[921, 788],, { 768: 7995, 769: 7997, 834: 7999 }], 7994: [[7992, 768]], 7995: [[7993, 768]], 7996: [[7992, 769]], 7997: [[7993, 769]], 7998: [[7992, 834]], 7999: [[7993, 834]], 8000: [[959, 787],, { 768: 8002, 769: 8004 }], 8001: [[959, 788],, { 768: 8003, 769: 8005 }], 8002: [[8000, 768]], 8003: [[8001, 768]], 8004: [[8000, 769]], 8005: [[8001, 769]], 8008: [[927, 787],, { 768: 8010, 769: 8012 }], 8009: [[927, 788],, { 768: 8011, 769: 8013 }], 8010: [[8008, 768]], 8011: [[8009, 768]], 8012: [[8008, 769]], 8013: [[8009, 769]], 8016: [[965, 787],, { 768: 8018, 769: 8020, 834: 8022 }], 8017: [[965, 788],, { 768: 8019, 769: 8021, 834: 8023 }], 8018: [[8016, 768]], 8019: [[8017, 768]], 8020: [[8016, 769]], 8021: [[8017, 769]], 8022: [[8016, 834]], 8023: [[8017, 834]], 8025: [[933, 788],, { 768: 8027, 769: 8029, 834: 8031 }], 8027: [[8025, 768]], 8029: [[8025, 769]], 8031: [[8025, 834]], 8032: [[969, 787],, { 768: 8034, 769: 8036, 834: 8038, 837: 8096 }], 8033: [[969, 788],, { 768: 8035, 769: 8037, 834: 8039, 837: 8097 }], 8034: [[8032, 768],, { 837: 8098 }], 8035: [[8033, 768],, { 837: 8099 }], 8036: [[8032, 769],, { 837: 8100 }], 8037: [[8033, 769],, { 837: 8101 }], 8038: [[8032, 834],, { 837: 8102 }], 8039: [[8033, 834],, { 837: 8103 }], 8040: [[937, 787],, { 768: 8042, 769: 8044, 834: 8046, 837: 8104 }], 8041: [[937, 788],, { 768: 8043, 769: 8045, 834: 8047, 837: 8105 }], 8042: [[8040, 768],, { 837: 8106 }], 8043: [[8041, 768],, { 837: 8107 }], 8044: [[8040, 769],, { 837: 8108 }], 8045: [[8041, 769],, { 837: 8109 }], 8046: [[8040, 834],, { 837: 8110 }], 8047: [[8041, 834],, { 837: 8111 }], 8048: [[945, 768],, { 837: 8114 }], 8049: [[940]], 8050: [[949, 768]], 8051: [[941]], 8052: [[951, 768],, { 837: 8130 }], 8053: [[942]], 8054: [[953, 768]], 8055: [[943]], 8056: [[959, 768]], 8057: [[972]], 8058: [[965, 768]], 8059: [[973]], 8060: [[969, 768],, { 837: 8178 }], 8061: [[974]], 8064: [[7936, 837]], 8065: [[7937, 837]], 8066: [[7938, 837]], 8067: [[7939, 837]], 8068: [[7940, 837]], 8069: [[7941, 837]], 8070: [[7942, 837]], 8071: [[7943, 837]], 8072: [[7944, 837]], 8073: [[7945, 837]], 8074: [[7946, 837]], 8075: [[7947, 837]], 8076: [[7948, 837]], 8077: [[7949, 837]], 8078: [[7950, 837]], 8079: [[7951, 837]], 8080: [[7968, 837]], 8081: [[7969, 837]], 8082: [[7970, 837]], 8083: [[7971, 837]], 8084: [[7972, 837]], 8085: [[7973, 837]], 8086: [[7974, 837]], 8087: [[7975, 837]], 8088: [[7976, 837]], 8089: [[7977, 837]], 8090: [[7978, 837]], 8091: [[7979, 837]], 8092: [[7980, 837]], 8093: [[7981, 837]], 8094: [[7982, 837]], 8095: [[7983, 837]], 8096: [[8032, 837]], 8097: [[8033, 837]], 8098: [[8034, 837]], 8099: [[8035, 837]], 8100: [[8036, 837]], 8101: [[8037, 837]], 8102: [[8038, 837]], 8103: [[8039, 837]], 8104: [[8040, 837]], 8105: [[8041, 837]], 8106: [[8042, 837]], 8107: [[8043, 837]], 8108: [[8044, 837]], 8109: [[8045, 837]], 8110: [[8046, 837]], 8111: [[8047, 837]], 8112: [[945, 774]], 8113: [[945, 772]], 8114: [[8048, 837]], 8115: [[945, 837]], 8116: [[940, 837]], 8118: [[945, 834],, { 837: 8119 }], 8119: [[8118, 837]], 8120: [[913, 774]], 8121: [[913, 772]], 8122: [[913, 768]], 8123: [[902]], 8124: [[913, 837]], 8125: [[32, 787], 256], 8126: [[953]], 8127: [[32, 787], 256, { 768: 8141, 769: 8142, 834: 8143 }], 8128: [[32, 834], 256], 8129: [[168, 834]], 8130: [[8052, 837]], 8131: [[951, 837]], 8132: [[942, 837]], 8134: [[951, 834],, { 837: 8135 }], 8135: [[8134, 837]], 8136: [[917, 768]], 8137: [[904]], 8138: [[919, 768]], 8139: [[905]], 8140: [[919, 837]], 8141: [[8127, 768]], 8142: [[8127, 769]], 8143: [[8127, 834]], 8144: [[953, 774]], 8145: [[953, 772]], 8146: [[970, 768]], 8147: [[912]], 8150: [[953, 834]], 8151: [[970, 834]], 8152: [[921, 774]], 8153: [[921, 772]], 8154: [[921, 768]], 8155: [[906]], 8157: [[8190, 768]], 8158: [[8190, 769]], 8159: [[8190, 834]], 8160: [[965, 774]], 8161: [[965, 772]], 8162: [[971, 768]], 8163: [[944]], 8164: [[961, 787]], 8165: [[961, 788]], 8166: [[965, 834]], 8167: [[971, 834]], 8168: [[933, 774]], 8169: [[933, 772]], 8170: [[933, 768]], 8171: [[910]], 8172: [[929, 788]], 8173: [[168, 768]], 8174: [[901]], 8175: [[96]], 8178: [[8060, 837]], 8179: [[969, 837]], 8180: [[974, 837]], 8182: [[969, 834],, { 837: 8183 }], 8183: [[8182, 837]], 8184: [[927, 768]], 8185: [[908]], 8186: [[937, 768]], 8187: [[911]], 8188: [[937, 837]], 8189: [[180]], 8190: [[32, 788], 256, { 768: 8157, 769: 8158, 834: 8159 }] },
			8192: { 8192: [[8194]], 8193: [[8195]], 8194: [[32], 256], 8195: [[32], 256], 8196: [[32], 256], 8197: [[32], 256], 8198: [[32], 256], 8199: [[32], 256], 8200: [[32], 256], 8201: [[32], 256], 8202: [[32], 256], 8209: [[8208], 256], 8215: [[32, 819], 256], 8228: [[46], 256], 8229: [[46, 46], 256], 8230: [[46, 46, 46], 256], 8239: [[32], 256], 8243: [[8242, 8242], 256], 8244: [[8242, 8242, 8242], 256], 8246: [[8245, 8245], 256], 8247: [[8245, 8245, 8245], 256], 8252: [[33, 33], 256], 8254: [[32, 773], 256], 8263: [[63, 63], 256], 8264: [[63, 33], 256], 8265: [[33, 63], 256], 8279: [[8242, 8242, 8242, 8242], 256], 8287: [[32], 256], 8304: [[48], 256], 8305: [[105], 256], 8308: [[52], 256], 8309: [[53], 256], 8310: [[54], 256], 8311: [[55], 256], 8312: [[56], 256], 8313: [[57], 256], 8314: [[43], 256], 8315: [[8722], 256], 8316: [[61], 256], 8317: [[40], 256], 8318: [[41], 256], 8319: [[110], 256], 8320: [[48], 256], 8321: [[49], 256], 8322: [[50], 256], 8323: [[51], 256], 8324: [[52], 256], 8325: [[53], 256], 8326: [[54], 256], 8327: [[55], 256], 8328: [[56], 256], 8329: [[57], 256], 8330: [[43], 256], 8331: [[8722], 256], 8332: [[61], 256], 8333: [[40], 256], 8334: [[41], 256], 8336: [[97], 256], 8337: [[101], 256], 8338: [[111], 256], 8339: [[120], 256], 8340: [[601], 256], 8341: [[104], 256], 8342: [[107], 256], 8343: [[108], 256], 8344: [[109], 256], 8345: [[110], 256], 8346: [[112], 256], 8347: [[115], 256], 8348: [[116], 256], 8360: [[82, 115], 256], 8400: [, 230], 8401: [, 230], 8402: [, 1], 8403: [, 1], 8404: [, 230], 8405: [, 230], 8406: [, 230], 8407: [, 230], 8408: [, 1], 8409: [, 1], 8410: [, 1], 8411: [, 230], 8412: [, 230], 8417: [, 230], 8421: [, 1], 8422: [, 1], 8423: [, 230], 8424: [, 220], 8425: [, 230], 8426: [, 1], 8427: [, 1], 8428: [, 220], 8429: [, 220], 8430: [, 220], 8431: [, 220], 8432: [, 230] },
			8448: { 8448: [[97, 47, 99], 256], 8449: [[97, 47, 115], 256], 8450: [[67], 256], 8451: [[176, 67], 256], 8453: [[99, 47, 111], 256], 8454: [[99, 47, 117], 256], 8455: [[400], 256], 8457: [[176, 70], 256], 8458: [[103], 256], 8459: [[72], 256], 8460: [[72], 256], 8461: [[72], 256], 8462: [[104], 256], 8463: [[295], 256], 8464: [[73], 256], 8465: [[73], 256], 8466: [[76], 256], 8467: [[108], 256], 8469: [[78], 256], 8470: [[78, 111], 256], 8473: [[80], 256], 8474: [[81], 256], 8475: [[82], 256], 8476: [[82], 256], 8477: [[82], 256], 8480: [[83, 77], 256], 8481: [[84, 69, 76], 256], 8482: [[84, 77], 256], 8484: [[90], 256], 8486: [[937]], 8488: [[90], 256], 8490: [[75]], 8491: [[197]], 8492: [[66], 256], 8493: [[67], 256], 8495: [[101], 256], 8496: [[69], 256], 8497: [[70], 256], 8499: [[77], 256], 8500: [[111], 256], 8501: [[1488], 256], 8502: [[1489], 256], 8503: [[1490], 256], 8504: [[1491], 256], 8505: [[105], 256], 8507: [[70, 65, 88], 256], 8508: [[960], 256], 8509: [[947], 256], 8510: [[915], 256], 8511: [[928], 256], 8512: [[8721], 256], 8517: [[68], 256], 8518: [[100], 256], 8519: [[101], 256], 8520: [[105], 256], 8521: [[106], 256], 8528: [[49, 8260, 55], 256], 8529: [[49, 8260, 57], 256], 8530: [[49, 8260, 49, 48], 256], 8531: [[49, 8260, 51], 256], 8532: [[50, 8260, 51], 256], 8533: [[49, 8260, 53], 256], 8534: [[50, 8260, 53], 256], 8535: [[51, 8260, 53], 256], 8536: [[52, 8260, 53], 256], 8537: [[49, 8260, 54], 256], 8538: [[53, 8260, 54], 256], 8539: [[49, 8260, 56], 256], 8540: [[51, 8260, 56], 256], 8541: [[53, 8260, 56], 256], 8542: [[55, 8260, 56], 256], 8543: [[49, 8260], 256], 8544: [[73], 256], 8545: [[73, 73], 256], 8546: [[73, 73, 73], 256], 8547: [[73, 86], 256], 8548: [[86], 256], 8549: [[86, 73], 256], 8550: [[86, 73, 73], 256], 8551: [[86, 73, 73, 73], 256], 8552: [[73, 88], 256], 8553: [[88], 256], 8554: [[88, 73], 256], 8555: [[88, 73, 73], 256], 8556: [[76], 256], 8557: [[67], 256], 8558: [[68], 256], 8559: [[77], 256], 8560: [[105], 256], 8561: [[105, 105], 256], 8562: [[105, 105, 105], 256], 8563: [[105, 118], 256], 8564: [[118], 256], 8565: [[118, 105], 256], 8566: [[118, 105, 105], 256], 8567: [[118, 105, 105, 105], 256], 8568: [[105, 120], 256], 8569: [[120], 256], 8570: [[120, 105], 256], 8571: [[120, 105, 105], 256], 8572: [[108], 256], 8573: [[99], 256], 8574: [[100], 256], 8575: [[109], 256], 8585: [[48, 8260, 51], 256], 8592: [,, { 824: 8602 }], 8594: [,, { 824: 8603 }], 8596: [,, { 824: 8622 }], 8602: [[8592, 824]], 8603: [[8594, 824]], 8622: [[8596, 824]], 8653: [[8656, 824]], 8654: [[8660, 824]], 8655: [[8658, 824]], 8656: [,, { 824: 8653 }], 8658: [,, { 824: 8655 }], 8660: [,, { 824: 8654 }] },
			8704: { 8707: [,, { 824: 8708 }], 8708: [[8707, 824]], 8712: [,, { 824: 8713 }], 8713: [[8712, 824]], 8715: [,, { 824: 8716 }], 8716: [[8715, 824]], 8739: [,, { 824: 8740 }], 8740: [[8739, 824]], 8741: [,, { 824: 8742 }], 8742: [[8741, 824]], 8748: [[8747, 8747], 256], 8749: [[8747, 8747, 8747], 256], 8751: [[8750, 8750], 256], 8752: [[8750, 8750, 8750], 256], 8764: [,, { 824: 8769 }], 8769: [[8764, 824]], 8771: [,, { 824: 8772 }], 8772: [[8771, 824]], 8773: [,, { 824: 8775 }], 8775: [[8773, 824]], 8776: [,, { 824: 8777 }], 8777: [[8776, 824]], 8781: [,, { 824: 8813 }], 8800: [[61, 824]], 8801: [,, { 824: 8802 }], 8802: [[8801, 824]], 8804: [,, { 824: 8816 }], 8805: [,, { 824: 8817 }], 8813: [[8781, 824]], 8814: [[60, 824]], 8815: [[62, 824]], 8816: [[8804, 824]], 8817: [[8805, 824]], 8818: [,, { 824: 8820 }], 8819: [,, { 824: 8821 }], 8820: [[8818, 824]], 8821: [[8819, 824]], 8822: [,, { 824: 8824 }], 8823: [,, { 824: 8825 }], 8824: [[8822, 824]], 8825: [[8823, 824]], 8826: [,, { 824: 8832 }], 8827: [,, { 824: 8833 }], 8828: [,, { 824: 8928 }], 8829: [,, { 824: 8929 }], 8832: [[8826, 824]], 8833: [[8827, 824]], 8834: [,, { 824: 8836 }], 8835: [,, { 824: 8837 }], 8836: [[8834, 824]], 8837: [[8835, 824]], 8838: [,, { 824: 8840 }], 8839: [,, { 824: 8841 }], 8840: [[8838, 824]], 8841: [[8839, 824]], 8849: [,, { 824: 8930 }], 8850: [,, { 824: 8931 }], 8866: [,, { 824: 8876 }], 8872: [,, { 824: 8877 }], 8873: [,, { 824: 8878 }], 8875: [,, { 824: 8879 }], 8876: [[8866, 824]], 8877: [[8872, 824]], 8878: [[8873, 824]], 8879: [[8875, 824]], 8882: [,, { 824: 8938 }], 8883: [,, { 824: 8939 }], 8884: [,, { 824: 8940 }], 8885: [,, { 824: 8941 }], 8928: [[8828, 824]], 8929: [[8829, 824]], 8930: [[8849, 824]], 8931: [[8850, 824]], 8938: [[8882, 824]], 8939: [[8883, 824]], 8940: [[8884, 824]], 8941: [[8885, 824]] },
			8960: { 9001: [[12296]], 9002: [[12297]] },
			9216: { 9312: [[49], 256], 9313: [[50], 256], 9314: [[51], 256], 9315: [[52], 256], 9316: [[53], 256], 9317: [[54], 256], 9318: [[55], 256], 9319: [[56], 256], 9320: [[57], 256], 9321: [[49, 48], 256], 9322: [[49, 49], 256], 9323: [[49, 50], 256], 9324: [[49, 51], 256], 9325: [[49, 52], 256], 9326: [[49, 53], 256], 9327: [[49, 54], 256], 9328: [[49, 55], 256], 9329: [[49, 56], 256], 9330: [[49, 57], 256], 9331: [[50, 48], 256], 9332: [[40, 49, 41], 256], 9333: [[40, 50, 41], 256], 9334: [[40, 51, 41], 256], 9335: [[40, 52, 41], 256], 9336: [[40, 53, 41], 256], 9337: [[40, 54, 41], 256], 9338: [[40, 55, 41], 256], 9339: [[40, 56, 41], 256], 9340: [[40, 57, 41], 256], 9341: [[40, 49, 48, 41], 256], 9342: [[40, 49, 49, 41], 256], 9343: [[40, 49, 50, 41], 256], 9344: [[40, 49, 51, 41], 256], 9345: [[40, 49, 52, 41], 256], 9346: [[40, 49, 53, 41], 256], 9347: [[40, 49, 54, 41], 256], 9348: [[40, 49, 55, 41], 256], 9349: [[40, 49, 56, 41], 256], 9350: [[40, 49, 57, 41], 256], 9351: [[40, 50, 48, 41], 256], 9352: [[49, 46], 256], 9353: [[50, 46], 256], 9354: [[51, 46], 256], 9355: [[52, 46], 256], 9356: [[53, 46], 256], 9357: [[54, 46], 256], 9358: [[55, 46], 256], 9359: [[56, 46], 256], 9360: [[57, 46], 256], 9361: [[49, 48, 46], 256], 9362: [[49, 49, 46], 256], 9363: [[49, 50, 46], 256], 9364: [[49, 51, 46], 256], 9365: [[49, 52, 46], 256], 9366: [[49, 53, 46], 256], 9367: [[49, 54, 46], 256], 9368: [[49, 55, 46], 256], 9369: [[49, 56, 46], 256], 9370: [[49, 57, 46], 256], 9371: [[50, 48, 46], 256], 9372: [[40, 97, 41], 256], 9373: [[40, 98, 41], 256], 9374: [[40, 99, 41], 256], 9375: [[40, 100, 41], 256], 9376: [[40, 101, 41], 256], 9377: [[40, 102, 41], 256], 9378: [[40, 103, 41], 256], 9379: [[40, 104, 41], 256], 9380: [[40, 105, 41], 256], 9381: [[40, 106, 41], 256], 9382: [[40, 107, 41], 256], 9383: [[40, 108, 41], 256], 9384: [[40, 109, 41], 256], 9385: [[40, 110, 41], 256], 9386: [[40, 111, 41], 256], 9387: [[40, 112, 41], 256], 9388: [[40, 113, 41], 256], 9389: [[40, 114, 41], 256], 9390: [[40, 115, 41], 256], 9391: [[40, 116, 41], 256], 9392: [[40, 117, 41], 256], 9393: [[40, 118, 41], 256], 9394: [[40, 119, 41], 256], 9395: [[40, 120, 41], 256], 9396: [[40, 121, 41], 256], 9397: [[40, 122, 41], 256], 9398: [[65], 256], 9399: [[66], 256], 9400: [[67], 256], 9401: [[68], 256], 9402: [[69], 256], 9403: [[70], 256], 9404: [[71], 256], 9405: [[72], 256], 9406: [[73], 256], 9407: [[74], 256], 9408: [[75], 256], 9409: [[76], 256], 9410: [[77], 256], 9411: [[78], 256], 9412: [[79], 256], 9413: [[80], 256], 9414: [[81], 256], 9415: [[82], 256], 9416: [[83], 256], 9417: [[84], 256], 9418: [[85], 256], 9419: [[86], 256], 9420: [[87], 256], 9421: [[88], 256], 9422: [[89], 256], 9423: [[90], 256], 9424: [[97], 256], 9425: [[98], 256], 9426: [[99], 256], 9427: [[100], 256], 9428: [[101], 256], 9429: [[102], 256], 9430: [[103], 256], 9431: [[104], 256], 9432: [[105], 256], 9433: [[106], 256], 9434: [[107], 256], 9435: [[108], 256], 9436: [[109], 256], 9437: [[110], 256], 9438: [[111], 256], 9439: [[112], 256], 9440: [[113], 256], 9441: [[114], 256], 9442: [[115], 256], 9443: [[116], 256], 9444: [[117], 256], 9445: [[118], 256], 9446: [[119], 256], 9447: [[120], 256], 9448: [[121], 256], 9449: [[122], 256], 9450: [[48], 256] },
			10752: { 10764: [[8747, 8747, 8747, 8747], 256], 10868: [[58, 58, 61], 256], 10869: [[61, 61], 256], 10870: [[61, 61, 61], 256], 10972: [[10973, 824], 512] },
			11264: { 11388: [[106], 256], 11389: [[86], 256], 11503: [, 230], 11504: [, 230], 11505: [, 230] },
			11520: { 11631: [[11617], 256], 11647: [, 9], 11744: [, 230], 11745: [, 230], 11746: [, 230], 11747: [, 230], 11748: [, 230], 11749: [, 230], 11750: [, 230], 11751: [, 230], 11752: [, 230], 11753: [, 230], 11754: [, 230], 11755: [, 230], 11756: [, 230], 11757: [, 230], 11758: [, 230], 11759: [, 230], 11760: [, 230], 11761: [, 230], 11762: [, 230], 11763: [, 230], 11764: [, 230], 11765: [, 230], 11766: [, 230], 11767: [, 230], 11768: [, 230], 11769: [, 230], 11770: [, 230], 11771: [, 230], 11772: [, 230], 11773: [, 230], 11774: [, 230], 11775: [, 230] },
			11776: { 11935: [[27597], 256], 12019: [[40863], 256] },
			12032: { 12032: [[19968], 256], 12033: [[20008], 256], 12034: [[20022], 256], 12035: [[20031], 256], 12036: [[20057], 256], 12037: [[20101], 256], 12038: [[20108], 256], 12039: [[20128], 256], 12040: [[20154], 256], 12041: [[20799], 256], 12042: [[20837], 256], 12043: [[20843], 256], 12044: [[20866], 256], 12045: [[20886], 256], 12046: [[20907], 256], 12047: [[20960], 256], 12048: [[20981], 256], 12049: [[20992], 256], 12050: [[21147], 256], 12051: [[21241], 256], 12052: [[21269], 256], 12053: [[21274], 256], 12054: [[21304], 256], 12055: [[21313], 256], 12056: [[21340], 256], 12057: [[21353], 256], 12058: [[21378], 256], 12059: [[21430], 256], 12060: [[21448], 256], 12061: [[21475], 256], 12062: [[22231], 256], 12063: [[22303], 256], 12064: [[22763], 256], 12065: [[22786], 256], 12066: [[22794], 256], 12067: [[22805], 256], 12068: [[22823], 256], 12069: [[22899], 256], 12070: [[23376], 256], 12071: [[23424], 256], 12072: [[23544], 256], 12073: [[23567], 256], 12074: [[23586], 256], 12075: [[23608], 256], 12076: [[23662], 256], 12077: [[23665], 256], 12078: [[24027], 256], 12079: [[24037], 256], 12080: [[24049], 256], 12081: [[24062], 256], 12082: [[24178], 256], 12083: [[24186], 256], 12084: [[24191], 256], 12085: [[24308], 256], 12086: [[24318], 256], 12087: [[24331], 256], 12088: [[24339], 256], 12089: [[24400], 256], 12090: [[24417], 256], 12091: [[24435], 256], 12092: [[24515], 256], 12093: [[25096], 256], 12094: [[25142], 256], 12095: [[25163], 256], 12096: [[25903], 256], 12097: [[25908], 256], 12098: [[25991], 256], 12099: [[26007], 256], 12100: [[26020], 256], 12101: [[26041], 256], 12102: [[26080], 256], 12103: [[26085], 256], 12104: [[26352], 256], 12105: [[26376], 256], 12106: [[26408], 256], 12107: [[27424], 256], 12108: [[27490], 256], 12109: [[27513], 256], 12110: [[27571], 256], 12111: [[27595], 256], 12112: [[27604], 256], 12113: [[27611], 256], 12114: [[27663], 256], 12115: [[27668], 256], 12116: [[27700], 256], 12117: [[28779], 256], 12118: [[29226], 256], 12119: [[29238], 256], 12120: [[29243], 256], 12121: [[29247], 256], 12122: [[29255], 256], 12123: [[29273], 256], 12124: [[29275], 256], 12125: [[29356], 256], 12126: [[29572], 256], 12127: [[29577], 256], 12128: [[29916], 256], 12129: [[29926], 256], 12130: [[29976], 256], 12131: [[29983], 256], 12132: [[29992], 256], 12133: [[30000], 256], 12134: [[30091], 256], 12135: [[30098], 256], 12136: [[30326], 256], 12137: [[30333], 256], 12138: [[30382], 256], 12139: [[30399], 256], 12140: [[30446], 256], 12141: [[30683], 256], 12142: [[30690], 256], 12143: [[30707], 256], 12144: [[31034], 256], 12145: [[31160], 256], 12146: [[31166], 256], 12147: [[31348], 256], 12148: [[31435], 256], 12149: [[31481], 256], 12150: [[31859], 256], 12151: [[31992], 256], 12152: [[32566], 256], 12153: [[32593], 256], 12154: [[32650], 256], 12155: [[32701], 256], 12156: [[32769], 256], 12157: [[32780], 256], 12158: [[32786], 256], 12159: [[32819], 256], 12160: [[32895], 256], 12161: [[32905], 256], 12162: [[33251], 256], 12163: [[33258], 256], 12164: [[33267], 256], 12165: [[33276], 256], 12166: [[33292], 256], 12167: [[33307], 256], 12168: [[33311], 256], 12169: [[33390], 256], 12170: [[33394], 256], 12171: [[33400], 256], 12172: [[34381], 256], 12173: [[34411], 256], 12174: [[34880], 256], 12175: [[34892], 256], 12176: [[34915], 256], 12177: [[35198], 256], 12178: [[35211], 256], 12179: [[35282], 256], 12180: [[35328], 256], 12181: [[35895], 256], 12182: [[35910], 256], 12183: [[35925], 256], 12184: [[35960], 256], 12185: [[35997], 256], 12186: [[36196], 256], 12187: [[36208], 256], 12188: [[36275], 256], 12189: [[36523], 256], 12190: [[36554], 256], 12191: [[36763], 256], 12192: [[36784], 256], 12193: [[36789], 256], 12194: [[37009], 256], 12195: [[37193], 256], 12196: [[37318], 256], 12197: [[37324], 256], 12198: [[37329], 256], 12199: [[38263], 256], 12200: [[38272], 256], 12201: [[38428], 256], 12202: [[38582], 256], 12203: [[38585], 256], 12204: [[38632], 256], 12205: [[38737], 256], 12206: [[38750], 256], 12207: [[38754], 256], 12208: [[38761], 256], 12209: [[38859], 256], 12210: [[38893], 256], 12211: [[38899], 256], 12212: [[38913], 256], 12213: [[39080], 256], 12214: [[39131], 256], 12215: [[39135], 256], 12216: [[39318], 256], 12217: [[39321], 256], 12218: [[39340], 256], 12219: [[39592], 256], 12220: [[39640], 256], 12221: [[39647], 256], 12222: [[39717], 256], 12223: [[39727], 256], 12224: [[39730], 256], 12225: [[39740], 256], 12226: [[39770], 256], 12227: [[40165], 256], 12228: [[40565], 256], 12229: [[40575], 256], 12230: [[40613], 256], 12231: [[40635], 256], 12232: [[40643], 256], 12233: [[40653], 256], 12234: [[40657], 256], 12235: [[40697], 256], 12236: [[40701], 256], 12237: [[40718], 256], 12238: [[40723], 256], 12239: [[40736], 256], 12240: [[40763], 256], 12241: [[40778], 256], 12242: [[40786], 256], 12243: [[40845], 256], 12244: [[40860], 256], 12245: [[40864], 256] },
			12288: { 12288: [[32], 256], 12330: [, 218], 12331: [, 228], 12332: [, 232], 12333: [, 222], 12334: [, 224], 12335: [, 224], 12342: [[12306], 256], 12344: [[21313], 256], 12345: [[21316], 256], 12346: [[21317], 256], 12358: [,, { 12441: 12436 }], 12363: [,, { 12441: 12364 }], 12364: [[12363, 12441]], 12365: [,, { 12441: 12366 }], 12366: [[12365, 12441]], 12367: [,, { 12441: 12368 }], 12368: [[12367, 12441]], 12369: [,, { 12441: 12370 }], 12370: [[12369, 12441]], 12371: [,, { 12441: 12372 }], 12372: [[12371, 12441]], 12373: [,, { 12441: 12374 }], 12374: [[12373, 12441]], 12375: [,, { 12441: 12376 }], 12376: [[12375, 12441]], 12377: [,, { 12441: 12378 }], 12378: [[12377, 12441]], 12379: [,, { 12441: 12380 }], 12380: [[12379, 12441]], 12381: [,, { 12441: 12382 }], 12382: [[12381, 12441]], 12383: [,, { 12441: 12384 }], 12384: [[12383, 12441]], 12385: [,, { 12441: 12386 }], 12386: [[12385, 12441]], 12388: [,, { 12441: 12389 }], 12389: [[12388, 12441]], 12390: [,, { 12441: 12391 }], 12391: [[12390, 12441]], 12392: [,, { 12441: 12393 }], 12393: [[12392, 12441]], 12399: [,, { 12441: 12400, 12442: 12401 }], 12400: [[12399, 12441]], 12401: [[12399, 12442]], 12402: [,, { 12441: 12403, 12442: 12404 }], 12403: [[12402, 12441]], 12404: [[12402, 12442]], 12405: [,, { 12441: 12406, 12442: 12407 }], 12406: [[12405, 12441]], 12407: [[12405, 12442]], 12408: [,, { 12441: 12409, 12442: 12410 }], 12409: [[12408, 12441]], 12410: [[12408, 12442]], 12411: [,, { 12441: 12412, 12442: 12413 }], 12412: [[12411, 12441]], 12413: [[12411, 12442]], 12436: [[12358, 12441]], 12441: [, 8], 12442: [, 8], 12443: [[32, 12441], 256], 12444: [[32, 12442], 256], 12445: [,, { 12441: 12446 }], 12446: [[12445, 12441]], 12447: [[12424, 12426], 256], 12454: [,, { 12441: 12532 }], 12459: [,, { 12441: 12460 }], 12460: [[12459, 12441]], 12461: [,, { 12441: 12462 }], 12462: [[12461, 12441]], 12463: [,, { 12441: 12464 }], 12464: [[12463, 12441]], 12465: [,, { 12441: 12466 }], 12466: [[12465, 12441]], 12467: [,, { 12441: 12468 }], 12468: [[12467, 12441]], 12469: [,, { 12441: 12470 }], 12470: [[12469, 12441]], 12471: [,, { 12441: 12472 }], 12472: [[12471, 12441]], 12473: [,, { 12441: 12474 }], 12474: [[12473, 12441]], 12475: [,, { 12441: 12476 }], 12476: [[12475, 12441]], 12477: [,, { 12441: 12478 }], 12478: [[12477, 12441]], 12479: [,, { 12441: 12480 }], 12480: [[12479, 12441]], 12481: [,, { 12441: 12482 }], 12482: [[12481, 12441]], 12484: [,, { 12441: 12485 }], 12485: [[12484, 12441]], 12486: [,, { 12441: 12487 }], 12487: [[12486, 12441]], 12488: [,, { 12441: 12489 }], 12489: [[12488, 12441]], 12495: [,, { 12441: 12496, 12442: 12497 }], 12496: [[12495, 12441]], 12497: [[12495, 12442]], 12498: [,, { 12441: 12499, 12442: 12500 }], 12499: [[12498, 12441]], 12500: [[12498, 12442]], 12501: [,, { 12441: 12502, 12442: 12503 }], 12502: [[12501, 12441]], 12503: [[12501, 12442]], 12504: [,, { 12441: 12505, 12442: 12506 }], 12505: [[12504, 12441]], 12506: [[12504, 12442]], 12507: [,, { 12441: 12508, 12442: 12509 }], 12508: [[12507, 12441]], 12509: [[12507, 12442]], 12527: [,, { 12441: 12535 }], 12528: [,, { 12441: 12536 }], 12529: [,, { 12441: 12537 }], 12530: [,, { 12441: 12538 }], 12532: [[12454, 12441]], 12535: [[12527, 12441]], 12536: [[12528, 12441]], 12537: [[12529, 12441]], 12538: [[12530, 12441]], 12541: [,, { 12441: 12542 }], 12542: [[12541, 12441]], 12543: [[12467, 12488], 256] },
			12544: { 12593: [[4352], 256], 12594: [[4353], 256], 12595: [[4522], 256], 12596: [[4354], 256], 12597: [[4524], 256], 12598: [[4525], 256], 12599: [[4355], 256], 12600: [[4356], 256], 12601: [[4357], 256], 12602: [[4528], 256], 12603: [[4529], 256], 12604: [[4530], 256], 12605: [[4531], 256], 12606: [[4532], 256], 12607: [[4533], 256], 12608: [[4378], 256], 12609: [[4358], 256], 12610: [[4359], 256], 12611: [[4360], 256], 12612: [[4385], 256], 12613: [[4361], 256], 12614: [[4362], 256], 12615: [[4363], 256], 12616: [[4364], 256], 12617: [[4365], 256], 12618: [[4366], 256], 12619: [[4367], 256], 12620: [[4368], 256], 12621: [[4369], 256], 12622: [[4370], 256], 12623: [[4449], 256], 12624: [[4450], 256], 12625: [[4451], 256], 12626: [[4452], 256], 12627: [[4453], 256], 12628: [[4454], 256], 12629: [[4455], 256], 12630: [[4456], 256], 12631: [[4457], 256], 12632: [[4458], 256], 12633: [[4459], 256], 12634: [[4460], 256], 12635: [[4461], 256], 12636: [[4462], 256], 12637: [[4463], 256], 12638: [[4464], 256], 12639: [[4465], 256], 12640: [[4466], 256], 12641: [[4467], 256], 12642: [[4468], 256], 12643: [[4469], 256], 12644: [[4448], 256], 12645: [[4372], 256], 12646: [[4373], 256], 12647: [[4551], 256], 12648: [[4552], 256], 12649: [[4556], 256], 12650: [[4558], 256], 12651: [[4563], 256], 12652: [[4567], 256], 12653: [[4569], 256], 12654: [[4380], 256], 12655: [[4573], 256], 12656: [[4575], 256], 12657: [[4381], 256], 12658: [[4382], 256], 12659: [[4384], 256], 12660: [[4386], 256], 12661: [[4387], 256], 12662: [[4391], 256], 12663: [[4393], 256], 12664: [[4395], 256], 12665: [[4396], 256], 12666: [[4397], 256], 12667: [[4398], 256], 12668: [[4399], 256], 12669: [[4402], 256], 12670: [[4406], 256], 12671: [[4416], 256], 12672: [[4423], 256], 12673: [[4428], 256], 12674: [[4593], 256], 12675: [[4594], 256], 12676: [[4439], 256], 12677: [[4440], 256], 12678: [[4441], 256], 12679: [[4484], 256], 12680: [[4485], 256], 12681: [[4488], 256], 12682: [[4497], 256], 12683: [[4498], 256], 12684: [[4500], 256], 12685: [[4510], 256], 12686: [[4513], 256], 12690: [[19968], 256], 12691: [[20108], 256], 12692: [[19977], 256], 12693: [[22235], 256], 12694: [[19978], 256], 12695: [[20013], 256], 12696: [[19979], 256], 12697: [[30002], 256], 12698: [[20057], 256], 12699: [[19993], 256], 12700: [[19969], 256], 12701: [[22825], 256], 12702: [[22320], 256], 12703: [[20154], 256] },
			12800: { 12800: [[40, 4352, 41], 256], 12801: [[40, 4354, 41], 256], 12802: [[40, 4355, 41], 256], 12803: [[40, 4357, 41], 256], 12804: [[40, 4358, 41], 256], 12805: [[40, 4359, 41], 256], 12806: [[40, 4361, 41], 256], 12807: [[40, 4363, 41], 256], 12808: [[40, 4364, 41], 256], 12809: [[40, 4366, 41], 256], 12810: [[40, 4367, 41], 256], 12811: [[40, 4368, 41], 256], 12812: [[40, 4369, 41], 256], 12813: [[40, 4370, 41], 256], 12814: [[40, 4352, 4449, 41], 256], 12815: [[40, 4354, 4449, 41], 256], 12816: [[40, 4355, 4449, 41], 256], 12817: [[40, 4357, 4449, 41], 256], 12818: [[40, 4358, 4449, 41], 256], 12819: [[40, 4359, 4449, 41], 256], 12820: [[40, 4361, 4449, 41], 256], 12821: [[40, 4363, 4449, 41], 256], 12822: [[40, 4364, 4449, 41], 256], 12823: [[40, 4366, 4449, 41], 256], 12824: [[40, 4367, 4449, 41], 256], 12825: [[40, 4368, 4449, 41], 256], 12826: [[40, 4369, 4449, 41], 256], 12827: [[40, 4370, 4449, 41], 256], 12828: [[40, 4364, 4462, 41], 256], 12829: [[40, 4363, 4457, 4364, 4453, 4523, 41], 256], 12830: [[40, 4363, 4457, 4370, 4462, 41], 256], 12832: [[40, 19968, 41], 256], 12833: [[40, 20108, 41], 256], 12834: [[40, 19977, 41], 256], 12835: [[40, 22235, 41], 256], 12836: [[40, 20116, 41], 256], 12837: [[40, 20845, 41], 256], 12838: [[40, 19971, 41], 256], 12839: [[40, 20843, 41], 256], 12840: [[40, 20061, 41], 256], 12841: [[40, 21313, 41], 256], 12842: [[40, 26376, 41], 256], 12843: [[40, 28779, 41], 256], 12844: [[40, 27700, 41], 256], 12845: [[40, 26408, 41], 256], 12846: [[40, 37329, 41], 256], 12847: [[40, 22303, 41], 256], 12848: [[40, 26085, 41], 256], 12849: [[40, 26666, 41], 256], 12850: [[40, 26377, 41], 256], 12851: [[40, 31038, 41], 256], 12852: [[40, 21517, 41], 256], 12853: [[40, 29305, 41], 256], 12854: [[40, 36001, 41], 256], 12855: [[40, 31069, 41], 256], 12856: [[40, 21172, 41], 256], 12857: [[40, 20195, 41], 256], 12858: [[40, 21628, 41], 256], 12859: [[40, 23398, 41], 256], 12860: [[40, 30435, 41], 256], 12861: [[40, 20225, 41], 256], 12862: [[40, 36039, 41], 256], 12863: [[40, 21332, 41], 256], 12864: [[40, 31085, 41], 256], 12865: [[40, 20241, 41], 256], 12866: [[40, 33258, 41], 256], 12867: [[40, 33267, 41], 256], 12868: [[21839], 256], 12869: [[24188], 256], 12870: [[25991], 256], 12871: [[31631], 256], 12880: [[80, 84, 69], 256], 12881: [[50, 49], 256], 12882: [[50, 50], 256], 12883: [[50, 51], 256], 12884: [[50, 52], 256], 12885: [[50, 53], 256], 12886: [[50, 54], 256], 12887: [[50, 55], 256], 12888: [[50, 56], 256], 12889: [[50, 57], 256], 12890: [[51, 48], 256], 12891: [[51, 49], 256], 12892: [[51, 50], 256], 12893: [[51, 51], 256], 12894: [[51, 52], 256], 12895: [[51, 53], 256], 12896: [[4352], 256], 12897: [[4354], 256], 12898: [[4355], 256], 12899: [[4357], 256], 12900: [[4358], 256], 12901: [[4359], 256], 12902: [[4361], 256], 12903: [[4363], 256], 12904: [[4364], 256], 12905: [[4366], 256], 12906: [[4367], 256], 12907: [[4368], 256], 12908: [[4369], 256], 12909: [[4370], 256], 12910: [[4352, 4449], 256], 12911: [[4354, 4449], 256], 12912: [[4355, 4449], 256], 12913: [[4357, 4449], 256], 12914: [[4358, 4449], 256], 12915: [[4359, 4449], 256], 12916: [[4361, 4449], 256], 12917: [[4363, 4449], 256], 12918: [[4364, 4449], 256], 12919: [[4366, 4449], 256], 12920: [[4367, 4449], 256], 12921: [[4368, 4449], 256], 12922: [[4369, 4449], 256], 12923: [[4370, 4449], 256], 12924: [[4366, 4449, 4535, 4352, 4457], 256], 12925: [[4364, 4462, 4363, 4468], 256], 12926: [[4363, 4462], 256], 12928: [[19968], 256], 12929: [[20108], 256], 12930: [[19977], 256], 12931: [[22235], 256], 12932: [[20116], 256], 12933: [[20845], 256], 12934: [[19971], 256], 12935: [[20843], 256], 12936: [[20061], 256], 12937: [[21313], 256], 12938: [[26376], 256], 12939: [[28779], 256], 12940: [[27700], 256], 12941: [[26408], 256], 12942: [[37329], 256], 12943: [[22303], 256], 12944: [[26085], 256], 12945: [[26666], 256], 12946: [[26377], 256], 12947: [[31038], 256], 12948: [[21517], 256], 12949: [[29305], 256], 12950: [[36001], 256], 12951: [[31069], 256], 12952: [[21172], 256], 12953: [[31192], 256], 12954: [[30007], 256], 12955: [[22899], 256], 12956: [[36969], 256], 12957: [[20778], 256], 12958: [[21360], 256], 12959: [[27880], 256], 12960: [[38917], 256], 12961: [[20241], 256], 12962: [[20889], 256], 12963: [[27491], 256], 12964: [[19978], 256], 12965: [[20013], 256], 12966: [[19979], 256], 12967: [[24038], 256], 12968: [[21491], 256], 12969: [[21307], 256], 12970: [[23447], 256], 12971: [[23398], 256], 12972: [[30435], 256], 12973: [[20225], 256], 12974: [[36039], 256], 12975: [[21332], 256], 12976: [[22812], 256], 12977: [[51, 54], 256], 12978: [[51, 55], 256], 12979: [[51, 56], 256], 12980: [[51, 57], 256], 12981: [[52, 48], 256], 12982: [[52, 49], 256], 12983: [[52, 50], 256], 12984: [[52, 51], 256], 12985: [[52, 52], 256], 12986: [[52, 53], 256], 12987: [[52, 54], 256], 12988: [[52, 55], 256], 12989: [[52, 56], 256], 12990: [[52, 57], 256], 12991: [[53, 48], 256], 12992: [[49, 26376], 256], 12993: [[50, 26376], 256], 12994: [[51, 26376], 256], 12995: [[52, 26376], 256], 12996: [[53, 26376], 256], 12997: [[54, 26376], 256], 12998: [[55, 26376], 256], 12999: [[56, 26376], 256], 13000: [[57, 26376], 256], 13001: [[49, 48, 26376], 256], 13002: [[49, 49, 26376], 256], 13003: [[49, 50, 26376], 256], 13004: [[72, 103], 256], 13005: [[101, 114, 103], 256], 13006: [[101, 86], 256], 13007: [[76, 84, 68], 256], 13008: [[12450], 256], 13009: [[12452], 256], 13010: [[12454], 256], 13011: [[12456], 256], 13012: [[12458], 256], 13013: [[12459], 256], 13014: [[12461], 256], 13015: [[12463], 256], 13016: [[12465], 256], 13017: [[12467], 256], 13018: [[12469], 256], 13019: [[12471], 256], 13020: [[12473], 256], 13021: [[12475], 256], 13022: [[12477], 256], 13023: [[12479], 256], 13024: [[12481], 256], 13025: [[12484], 256], 13026: [[12486], 256], 13027: [[12488], 256], 13028: [[12490], 256], 13029: [[12491], 256], 13030: [[12492], 256], 13031: [[12493], 256], 13032: [[12494], 256], 13033: [[12495], 256], 13034: [[12498], 256], 13035: [[12501], 256], 13036: [[12504], 256], 13037: [[12507], 256], 13038: [[12510], 256], 13039: [[12511], 256], 13040: [[12512], 256], 13041: [[12513], 256], 13042: [[12514], 256], 13043: [[12516], 256], 13044: [[12518], 256], 13045: [[12520], 256], 13046: [[12521], 256], 13047: [[12522], 256], 13048: [[12523], 256], 13049: [[12524], 256], 13050: [[12525], 256], 13051: [[12527], 256], 13052: [[12528], 256], 13053: [[12529], 256], 13054: [[12530], 256] },
			13056: { 13056: [[12450, 12497, 12540, 12488], 256], 13057: [[12450, 12523, 12501, 12449], 256], 13058: [[12450, 12531, 12506, 12450], 256], 13059: [[12450, 12540, 12523], 256], 13060: [[12452, 12491, 12531, 12464], 256], 13061: [[12452, 12531, 12481], 256], 13062: [[12454, 12457, 12531], 256], 13063: [[12456, 12473, 12463, 12540, 12489], 256], 13064: [[12456, 12540, 12459, 12540], 256], 13065: [[12458, 12531, 12473], 256], 13066: [[12458, 12540, 12512], 256], 13067: [[12459, 12452, 12522], 256], 13068: [[12459, 12521, 12483, 12488], 256], 13069: [[12459, 12525, 12522, 12540], 256], 13070: [[12460, 12525, 12531], 256], 13071: [[12460, 12531, 12510], 256], 13072: [[12462, 12460], 256], 13073: [[12462, 12491, 12540], 256], 13074: [[12461, 12517, 12522, 12540], 256], 13075: [[12462, 12523, 12480, 12540], 256], 13076: [[12461, 12525], 256], 13077: [[12461, 12525, 12464, 12521, 12512], 256], 13078: [[12461, 12525, 12513, 12540, 12488, 12523], 256], 13079: [[12461, 12525, 12527, 12483, 12488], 256], 13080: [[12464, 12521, 12512], 256], 13081: [[12464, 12521, 12512, 12488, 12531], 256], 13082: [[12463, 12523, 12476, 12452, 12525], 256], 13083: [[12463, 12525, 12540, 12493], 256], 13084: [[12465, 12540, 12473], 256], 13085: [[12467, 12523, 12490], 256], 13086: [[12467, 12540, 12509], 256], 13087: [[12469, 12452, 12463, 12523], 256], 13088: [[12469, 12531, 12481, 12540, 12512], 256], 13089: [[12471, 12522, 12531, 12464], 256], 13090: [[12475, 12531, 12481], 256], 13091: [[12475, 12531, 12488], 256], 13092: [[12480, 12540, 12473], 256], 13093: [[12487, 12471], 256], 13094: [[12489, 12523], 256], 13095: [[12488, 12531], 256], 13096: [[12490, 12494], 256], 13097: [[12494, 12483, 12488], 256], 13098: [[12495, 12452, 12484], 256], 13099: [[12497, 12540, 12475, 12531, 12488], 256], 13100: [[12497, 12540, 12484], 256], 13101: [[12496, 12540, 12524, 12523], 256], 13102: [[12500, 12450, 12473, 12488, 12523], 256], 13103: [[12500, 12463, 12523], 256], 13104: [[12500, 12467], 256], 13105: [[12499, 12523], 256], 13106: [[12501, 12449, 12521, 12483, 12489], 256], 13107: [[12501, 12451, 12540, 12488], 256], 13108: [[12502, 12483, 12471, 12455, 12523], 256], 13109: [[12501, 12521, 12531], 256], 13110: [[12504, 12463, 12479, 12540, 12523], 256], 13111: [[12506, 12477], 256], 13112: [[12506, 12491, 12498], 256], 13113: [[12504, 12523, 12484], 256], 13114: [[12506, 12531, 12473], 256], 13115: [[12506, 12540, 12472], 256], 13116: [[12505, 12540, 12479], 256], 13117: [[12509, 12452, 12531, 12488], 256], 13118: [[12508, 12523, 12488], 256], 13119: [[12507, 12531], 256], 13120: [[12509, 12531, 12489], 256], 13121: [[12507, 12540, 12523], 256], 13122: [[12507, 12540, 12531], 256], 13123: [[12510, 12452, 12463, 12525], 256], 13124: [[12510, 12452, 12523], 256], 13125: [[12510, 12483, 12495], 256], 13126: [[12510, 12523, 12463], 256], 13127: [[12510, 12531, 12471, 12519, 12531], 256], 13128: [[12511, 12463, 12525, 12531], 256], 13129: [[12511, 12522], 256], 13130: [[12511, 12522, 12496, 12540, 12523], 256], 13131: [[12513, 12460], 256], 13132: [[12513, 12460, 12488, 12531], 256], 13133: [[12513, 12540, 12488, 12523], 256], 13134: [[12516, 12540, 12489], 256], 13135: [[12516, 12540, 12523], 256], 13136: [[12518, 12450, 12531], 256], 13137: [[12522, 12483, 12488, 12523], 256], 13138: [[12522, 12521], 256], 13139: [[12523, 12500, 12540], 256], 13140: [[12523, 12540, 12502, 12523], 256], 13141: [[12524, 12512], 256], 13142: [[12524, 12531, 12488, 12466, 12531], 256], 13143: [[12527, 12483, 12488], 256], 13144: [[48, 28857], 256], 13145: [[49, 28857], 256], 13146: [[50, 28857], 256], 13147: [[51, 28857], 256], 13148: [[52, 28857], 256], 13149: [[53, 28857], 256], 13150: [[54, 28857], 256], 13151: [[55, 28857], 256], 13152: [[56, 28857], 256], 13153: [[57, 28857], 256], 13154: [[49, 48, 28857], 256], 13155: [[49, 49, 28857], 256], 13156: [[49, 50, 28857], 256], 13157: [[49, 51, 28857], 256], 13158: [[49, 52, 28857], 256], 13159: [[49, 53, 28857], 256], 13160: [[49, 54, 28857], 256], 13161: [[49, 55, 28857], 256], 13162: [[49, 56, 28857], 256], 13163: [[49, 57, 28857], 256], 13164: [[50, 48, 28857], 256], 13165: [[50, 49, 28857], 256], 13166: [[50, 50, 28857], 256], 13167: [[50, 51, 28857], 256], 13168: [[50, 52, 28857], 256], 13169: [[104, 80, 97], 256], 13170: [[100, 97], 256], 13171: [[65, 85], 256], 13172: [[98, 97, 114], 256], 13173: [[111, 86], 256], 13174: [[112, 99], 256], 13175: [[100, 109], 256], 13176: [[100, 109, 178], 256], 13177: [[100, 109, 179], 256], 13178: [[73, 85], 256], 13179: [[24179, 25104], 256], 13180: [[26157, 21644], 256], 13181: [[22823, 27491], 256], 13182: [[26126, 27835], 256], 13183: [[26666, 24335, 20250, 31038], 256], 13184: [[112, 65], 256], 13185: [[110, 65], 256], 13186: [[956, 65], 256], 13187: [[109, 65], 256], 13188: [[107, 65], 256], 13189: [[75, 66], 256], 13190: [[77, 66], 256], 13191: [[71, 66], 256], 13192: [[99, 97, 108], 256], 13193: [[107, 99, 97, 108], 256], 13194: [[112, 70], 256], 13195: [[110, 70], 256], 13196: [[956, 70], 256], 13197: [[956, 103], 256], 13198: [[109, 103], 256], 13199: [[107, 103], 256], 13200: [[72, 122], 256], 13201: [[107, 72, 122], 256], 13202: [[77, 72, 122], 256], 13203: [[71, 72, 122], 256], 13204: [[84, 72, 122], 256], 13205: [[956, 8467], 256], 13206: [[109, 8467], 256], 13207: [[100, 8467], 256], 13208: [[107, 8467], 256], 13209: [[102, 109], 256], 13210: [[110, 109], 256], 13211: [[956, 109], 256], 13212: [[109, 109], 256], 13213: [[99, 109], 256], 13214: [[107, 109], 256], 13215: [[109, 109, 178], 256], 13216: [[99, 109, 178], 256], 13217: [[109, 178], 256], 13218: [[107, 109, 178], 256], 13219: [[109, 109, 179], 256], 13220: [[99, 109, 179], 256], 13221: [[109, 179], 256], 13222: [[107, 109, 179], 256], 13223: [[109, 8725, 115], 256], 13224: [[109, 8725, 115, 178], 256], 13225: [[80, 97], 256], 13226: [[107, 80, 97], 256], 13227: [[77, 80, 97], 256], 13228: [[71, 80, 97], 256], 13229: [[114, 97, 100], 256], 13230: [[114, 97, 100, 8725, 115], 256], 13231: [[114, 97, 100, 8725, 115, 178], 256], 13232: [[112, 115], 256], 13233: [[110, 115], 256], 13234: [[956, 115], 256], 13235: [[109, 115], 256], 13236: [[112, 86], 256], 13237: [[110, 86], 256], 13238: [[956, 86], 256], 13239: [[109, 86], 256], 13240: [[107, 86], 256], 13241: [[77, 86], 256], 13242: [[112, 87], 256], 13243: [[110, 87], 256], 13244: [[956, 87], 256], 13245: [[109, 87], 256], 13246: [[107, 87], 256], 13247: [[77, 87], 256], 13248: [[107, 937], 256], 13249: [[77, 937], 256], 13250: [[97, 46, 109, 46], 256], 13251: [[66, 113], 256], 13252: [[99, 99], 256], 13253: [[99, 100], 256], 13254: [[67, 8725, 107, 103], 256], 13255: [[67, 111, 46], 256], 13256: [[100, 66], 256], 13257: [[71, 121], 256], 13258: [[104, 97], 256], 13259: [[72, 80], 256], 13260: [[105, 110], 256], 13261: [[75, 75], 256], 13262: [[75, 77], 256], 13263: [[107, 116], 256], 13264: [[108, 109], 256], 13265: [[108, 110], 256], 13266: [[108, 111, 103], 256], 13267: [[108, 120], 256], 13268: [[109, 98], 256], 13269: [[109, 105, 108], 256], 13270: [[109, 111, 108], 256], 13271: [[80, 72], 256], 13272: [[112, 46, 109, 46], 256], 13273: [[80, 80, 77], 256], 13274: [[80, 82], 256], 13275: [[115, 114], 256], 13276: [[83, 118], 256], 13277: [[87, 98], 256], 13278: [[86, 8725, 109], 256], 13279: [[65, 8725, 109], 256], 13280: [[49, 26085], 256], 13281: [[50, 26085], 256], 13282: [[51, 26085], 256], 13283: [[52, 26085], 256], 13284: [[53, 26085], 256], 13285: [[54, 26085], 256], 13286: [[55, 26085], 256], 13287: [[56, 26085], 256], 13288: [[57, 26085], 256], 13289: [[49, 48, 26085], 256], 13290: [[49, 49, 26085], 256], 13291: [[49, 50, 26085], 256], 13292: [[49, 51, 26085], 256], 13293: [[49, 52, 26085], 256], 13294: [[49, 53, 26085], 256], 13295: [[49, 54, 26085], 256], 13296: [[49, 55, 26085], 256], 13297: [[49, 56, 26085], 256], 13298: [[49, 57, 26085], 256], 13299: [[50, 48, 26085], 256], 13300: [[50, 49, 26085], 256], 13301: [[50, 50, 26085], 256], 13302: [[50, 51, 26085], 256], 13303: [[50, 52, 26085], 256], 13304: [[50, 53, 26085], 256], 13305: [[50, 54, 26085], 256], 13306: [[50, 55, 26085], 256], 13307: [[50, 56, 26085], 256], 13308: [[50, 57, 26085], 256], 13309: [[51, 48, 26085], 256], 13310: [[51, 49, 26085], 256], 13311: [[103, 97, 108], 256] },
			27136: { 92912: [, 1], 92913: [, 1], 92914: [, 1], 92915: [, 1], 92916: [, 1] },
			27392: { 92976: [, 230], 92977: [, 230], 92978: [, 230], 92979: [, 230], 92980: [, 230], 92981: [, 230], 92982: [, 230] },
			42496: { 42607: [, 230], 42612: [, 230], 42613: [, 230], 42614: [, 230], 42615: [, 230], 42616: [, 230], 42617: [, 230], 42618: [, 230], 42619: [, 230], 42620: [, 230], 42621: [, 230], 42652: [[1098], 256], 42653: [[1100], 256], 42655: [, 230], 42736: [, 230], 42737: [, 230] },
			42752: { 42864: [[42863], 256], 43000: [[294], 256], 43001: [[339], 256] },
			43008: { 43014: [, 9], 43204: [, 9], 43232: [, 230], 43233: [, 230], 43234: [, 230], 43235: [, 230], 43236: [, 230], 43237: [, 230], 43238: [, 230], 43239: [, 230], 43240: [, 230], 43241: [, 230], 43242: [, 230], 43243: [, 230], 43244: [, 230], 43245: [, 230], 43246: [, 230], 43247: [, 230], 43248: [, 230], 43249: [, 230] },
			43264: { 43307: [, 220], 43308: [, 220], 43309: [, 220], 43347: [, 9], 43443: [, 7], 43456: [, 9] },
			43520: { 43696: [, 230], 43698: [, 230], 43699: [, 230], 43700: [, 220], 43703: [, 230], 43704: [, 230], 43710: [, 230], 43711: [, 230], 43713: [, 230], 43766: [, 9] },
			43776: { 43868: [[42791], 256], 43869: [[43831], 256], 43870: [[619], 256], 43871: [[43858], 256], 44013: [, 9] },
			48128: { 113822: [, 1] },
			53504: { 119134: [[119127, 119141], 512], 119135: [[119128, 119141], 512], 119136: [[119135, 119150], 512], 119137: [[119135, 119151], 512], 119138: [[119135, 119152], 512], 119139: [[119135, 119153], 512], 119140: [[119135, 119154], 512], 119141: [, 216], 119142: [, 216], 119143: [, 1], 119144: [, 1], 119145: [, 1], 119149: [, 226], 119150: [, 216], 119151: [, 216], 119152: [, 216], 119153: [, 216], 119154: [, 216], 119163: [, 220], 119164: [, 220], 119165: [, 220], 119166: [, 220], 119167: [, 220], 119168: [, 220], 119169: [, 220], 119170: [, 220], 119173: [, 230], 119174: [, 230], 119175: [, 230], 119176: [, 230], 119177: [, 230], 119178: [, 220], 119179: [, 220], 119210: [, 230], 119211: [, 230], 119212: [, 230], 119213: [, 230], 119227: [[119225, 119141], 512], 119228: [[119226, 119141], 512], 119229: [[119227, 119150], 512], 119230: [[119228, 119150], 512], 119231: [[119227, 119151], 512], 119232: [[119228, 119151], 512] },
			53760: { 119362: [, 230], 119363: [, 230], 119364: [, 230] },
			54272: { 119808: [[65], 256], 119809: [[66], 256], 119810: [[67], 256], 119811: [[68], 256], 119812: [[69], 256], 119813: [[70], 256], 119814: [[71], 256], 119815: [[72], 256], 119816: [[73], 256], 119817: [[74], 256], 119818: [[75], 256], 119819: [[76], 256], 119820: [[77], 256], 119821: [[78], 256], 119822: [[79], 256], 119823: [[80], 256], 119824: [[81], 256], 119825: [[82], 256], 119826: [[83], 256], 119827: [[84], 256], 119828: [[85], 256], 119829: [[86], 256], 119830: [[87], 256], 119831: [[88], 256], 119832: [[89], 256], 119833: [[90], 256], 119834: [[97], 256], 119835: [[98], 256], 119836: [[99], 256], 119837: [[100], 256], 119838: [[101], 256], 119839: [[102], 256], 119840: [[103], 256], 119841: [[104], 256], 119842: [[105], 256], 119843: [[106], 256], 119844: [[107], 256], 119845: [[108], 256], 119846: [[109], 256], 119847: [[110], 256], 119848: [[111], 256], 119849: [[112], 256], 119850: [[113], 256], 119851: [[114], 256], 119852: [[115], 256], 119853: [[116], 256], 119854: [[117], 256], 119855: [[118], 256], 119856: [[119], 256], 119857: [[120], 256], 119858: [[121], 256], 119859: [[122], 256], 119860: [[65], 256], 119861: [[66], 256], 119862: [[67], 256], 119863: [[68], 256], 119864: [[69], 256], 119865: [[70], 256], 119866: [[71], 256], 119867: [[72], 256], 119868: [[73], 256], 119869: [[74], 256], 119870: [[75], 256], 119871: [[76], 256], 119872: [[77], 256], 119873: [[78], 256], 119874: [[79], 256], 119875: [[80], 256], 119876: [[81], 256], 119877: [[82], 256], 119878: [[83], 256], 119879: [[84], 256], 119880: [[85], 256], 119881: [[86], 256], 119882: [[87], 256], 119883: [[88], 256], 119884: [[89], 256], 119885: [[90], 256], 119886: [[97], 256], 119887: [[98], 256], 119888: [[99], 256], 119889: [[100], 256], 119890: [[101], 256], 119891: [[102], 256], 119892: [[103], 256], 119894: [[105], 256], 119895: [[106], 256], 119896: [[107], 256], 119897: [[108], 256], 119898: [[109], 256], 119899: [[110], 256], 119900: [[111], 256], 119901: [[112], 256], 119902: [[113], 256], 119903: [[114], 256], 119904: [[115], 256], 119905: [[116], 256], 119906: [[117], 256], 119907: [[118], 256], 119908: [[119], 256], 119909: [[120], 256], 119910: [[121], 256], 119911: [[122], 256], 119912: [[65], 256], 119913: [[66], 256], 119914: [[67], 256], 119915: [[68], 256], 119916: [[69], 256], 119917: [[70], 256], 119918: [[71], 256], 119919: [[72], 256], 119920: [[73], 256], 119921: [[74], 256], 119922: [[75], 256], 119923: [[76], 256], 119924: [[77], 256], 119925: [[78], 256], 119926: [[79], 256], 119927: [[80], 256], 119928: [[81], 256], 119929: [[82], 256], 119930: [[83], 256], 119931: [[84], 256], 119932: [[85], 256], 119933: [[86], 256], 119934: [[87], 256], 119935: [[88], 256], 119936: [[89], 256], 119937: [[90], 256], 119938: [[97], 256], 119939: [[98], 256], 119940: [[99], 256], 119941: [[100], 256], 119942: [[101], 256], 119943: [[102], 256], 119944: [[103], 256], 119945: [[104], 256], 119946: [[105], 256], 119947: [[106], 256], 119948: [[107], 256], 119949: [[108], 256], 119950: [[109], 256], 119951: [[110], 256], 119952: [[111], 256], 119953: [[112], 256], 119954: [[113], 256], 119955: [[114], 256], 119956: [[115], 256], 119957: [[116], 256], 119958: [[117], 256], 119959: [[118], 256], 119960: [[119], 256], 119961: [[120], 256], 119962: [[121], 256], 119963: [[122], 256], 119964: [[65], 256], 119966: [[67], 256], 119967: [[68], 256], 119970: [[71], 256], 119973: [[74], 256], 119974: [[75], 256], 119977: [[78], 256], 119978: [[79], 256], 119979: [[80], 256], 119980: [[81], 256], 119982: [[83], 256], 119983: [[84], 256], 119984: [[85], 256], 119985: [[86], 256], 119986: [[87], 256], 119987: [[88], 256], 119988: [[89], 256], 119989: [[90], 256], 119990: [[97], 256], 119991: [[98], 256], 119992: [[99], 256], 119993: [[100], 256], 119995: [[102], 256], 119997: [[104], 256], 119998: [[105], 256], 119999: [[106], 256], 120000: [[107], 256], 120001: [[108], 256], 120002: [[109], 256], 120003: [[110], 256], 120005: [[112], 256], 120006: [[113], 256], 120007: [[114], 256], 120008: [[115], 256], 120009: [[116], 256], 120010: [[117], 256], 120011: [[118], 256], 120012: [[119], 256], 120013: [[120], 256], 120014: [[121], 256], 120015: [[122], 256], 120016: [[65], 256], 120017: [[66], 256], 120018: [[67], 256], 120019: [[68], 256], 120020: [[69], 256], 120021: [[70], 256], 120022: [[71], 256], 120023: [[72], 256], 120024: [[73], 256], 120025: [[74], 256], 120026: [[75], 256], 120027: [[76], 256], 120028: [[77], 256], 120029: [[78], 256], 120030: [[79], 256], 120031: [[80], 256], 120032: [[81], 256], 120033: [[82], 256], 120034: [[83], 256], 120035: [[84], 256], 120036: [[85], 256], 120037: [[86], 256], 120038: [[87], 256], 120039: [[88], 256], 120040: [[89], 256], 120041: [[90], 256], 120042: [[97], 256], 120043: [[98], 256], 120044: [[99], 256], 120045: [[100], 256], 120046: [[101], 256], 120047: [[102], 256], 120048: [[103], 256], 120049: [[104], 256], 120050: [[105], 256], 120051: [[106], 256], 120052: [[107], 256], 120053: [[108], 256], 120054: [[109], 256], 120055: [[110], 256], 120056: [[111], 256], 120057: [[112], 256], 120058: [[113], 256], 120059: [[114], 256], 120060: [[115], 256], 120061: [[116], 256], 120062: [[117], 256], 120063: [[118], 256] },
			54528: { 120064: [[119], 256], 120065: [[120], 256], 120066: [[121], 256], 120067: [[122], 256], 120068: [[65], 256], 120069: [[66], 256], 120071: [[68], 256], 120072: [[69], 256], 120073: [[70], 256], 120074: [[71], 256], 120077: [[74], 256], 120078: [[75], 256], 120079: [[76], 256], 120080: [[77], 256], 120081: [[78], 256], 120082: [[79], 256], 120083: [[80], 256], 120084: [[81], 256], 120086: [[83], 256], 120087: [[84], 256], 120088: [[85], 256], 120089: [[86], 256], 120090: [[87], 256], 120091: [[88], 256], 120092: [[89], 256], 120094: [[97], 256], 120095: [[98], 256], 120096: [[99], 256], 120097: [[100], 256], 120098: [[101], 256], 120099: [[102], 256], 120100: [[103], 256], 120101: [[104], 256], 120102: [[105], 256], 120103: [[106], 256], 120104: [[107], 256], 120105: [[108], 256], 120106: [[109], 256], 120107: [[110], 256], 120108: [[111], 256], 120109: [[112], 256], 120110: [[113], 256], 120111: [[114], 256], 120112: [[115], 256], 120113: [[116], 256], 120114: [[117], 256], 120115: [[118], 256], 120116: [[119], 256], 120117: [[120], 256], 120118: [[121], 256], 120119: [[122], 256], 120120: [[65], 256], 120121: [[66], 256], 120123: [[68], 256], 120124: [[69], 256], 120125: [[70], 256], 120126: [[71], 256], 120128: [[73], 256], 120129: [[74], 256], 120130: [[75], 256], 120131: [[76], 256], 120132: [[77], 256], 120134: [[79], 256], 120138: [[83], 256], 120139: [[84], 256], 120140: [[85], 256], 120141: [[86], 256], 120142: [[87], 256], 120143: [[88], 256], 120144: [[89], 256], 120146: [[97], 256], 120147: [[98], 256], 120148: [[99], 256], 120149: [[100], 256], 120150: [[101], 256], 120151: [[102], 256], 120152: [[103], 256], 120153: [[104], 256], 120154: [[105], 256], 120155: [[106], 256], 120156: [[107], 256], 120157: [[108], 256], 120158: [[109], 256], 120159: [[110], 256], 120160: [[111], 256], 120161: [[112], 256], 120162: [[113], 256], 120163: [[114], 256], 120164: [[115], 256], 120165: [[116], 256], 120166: [[117], 256], 120167: [[118], 256], 120168: [[119], 256], 120169: [[120], 256], 120170: [[121], 256], 120171: [[122], 256], 120172: [[65], 256], 120173: [[66], 256], 120174: [[67], 256], 120175: [[68], 256], 120176: [[69], 256], 120177: [[70], 256], 120178: [[71], 256], 120179: [[72], 256], 120180: [[73], 256], 120181: [[74], 256], 120182: [[75], 256], 120183: [[76], 256], 120184: [[77], 256], 120185: [[78], 256], 120186: [[79], 256], 120187: [[80], 256], 120188: [[81], 256], 120189: [[82], 256], 120190: [[83], 256], 120191: [[84], 256], 120192: [[85], 256], 120193: [[86], 256], 120194: [[87], 256], 120195: [[88], 256], 120196: [[89], 256], 120197: [[90], 256], 120198: [[97], 256], 120199: [[98], 256], 120200: [[99], 256], 120201: [[100], 256], 120202: [[101], 256], 120203: [[102], 256], 120204: [[103], 256], 120205: [[104], 256], 120206: [[105], 256], 120207: [[106], 256], 120208: [[107], 256], 120209: [[108], 256], 120210: [[109], 256], 120211: [[110], 256], 120212: [[111], 256], 120213: [[112], 256], 120214: [[113], 256], 120215: [[114], 256], 120216: [[115], 256], 120217: [[116], 256], 120218: [[117], 256], 120219: [[118], 256], 120220: [[119], 256], 120221: [[120], 256], 120222: [[121], 256], 120223: [[122], 256], 120224: [[65], 256], 120225: [[66], 256], 120226: [[67], 256], 120227: [[68], 256], 120228: [[69], 256], 120229: [[70], 256], 120230: [[71], 256], 120231: [[72], 256], 120232: [[73], 256], 120233: [[74], 256], 120234: [[75], 256], 120235: [[76], 256], 120236: [[77], 256], 120237: [[78], 256], 120238: [[79], 256], 120239: [[80], 256], 120240: [[81], 256], 120241: [[82], 256], 120242: [[83], 256], 120243: [[84], 256], 120244: [[85], 256], 120245: [[86], 256], 120246: [[87], 256], 120247: [[88], 256], 120248: [[89], 256], 120249: [[90], 256], 120250: [[97], 256], 120251: [[98], 256], 120252: [[99], 256], 120253: [[100], 256], 120254: [[101], 256], 120255: [[102], 256], 120256: [[103], 256], 120257: [[104], 256], 120258: [[105], 256], 120259: [[106], 256], 120260: [[107], 256], 120261: [[108], 256], 120262: [[109], 256], 120263: [[110], 256], 120264: [[111], 256], 120265: [[112], 256], 120266: [[113], 256], 120267: [[114], 256], 120268: [[115], 256], 120269: [[116], 256], 120270: [[117], 256], 120271: [[118], 256], 120272: [[119], 256], 120273: [[120], 256], 120274: [[121], 256], 120275: [[122], 256], 120276: [[65], 256], 120277: [[66], 256], 120278: [[67], 256], 120279: [[68], 256], 120280: [[69], 256], 120281: [[70], 256], 120282: [[71], 256], 120283: [[72], 256], 120284: [[73], 256], 120285: [[74], 256], 120286: [[75], 256], 120287: [[76], 256], 120288: [[77], 256], 120289: [[78], 256], 120290: [[79], 256], 120291: [[80], 256], 120292: [[81], 256], 120293: [[82], 256], 120294: [[83], 256], 120295: [[84], 256], 120296: [[85], 256], 120297: [[86], 256], 120298: [[87], 256], 120299: [[88], 256], 120300: [[89], 256], 120301: [[90], 256], 120302: [[97], 256], 120303: [[98], 256], 120304: [[99], 256], 120305: [[100], 256], 120306: [[101], 256], 120307: [[102], 256], 120308: [[103], 256], 120309: [[104], 256], 120310: [[105], 256], 120311: [[106], 256], 120312: [[107], 256], 120313: [[108], 256], 120314: [[109], 256], 120315: [[110], 256], 120316: [[111], 256], 120317: [[112], 256], 120318: [[113], 256], 120319: [[114], 256] },
			54784: { 120320: [[115], 256], 120321: [[116], 256], 120322: [[117], 256], 120323: [[118], 256], 120324: [[119], 256], 120325: [[120], 256], 120326: [[121], 256], 120327: [[122], 256], 120328: [[65], 256], 120329: [[66], 256], 120330: [[67], 256], 120331: [[68], 256], 120332: [[69], 256], 120333: [[70], 256], 120334: [[71], 256], 120335: [[72], 256], 120336: [[73], 256], 120337: [[74], 256], 120338: [[75], 256], 120339: [[76], 256], 120340: [[77], 256], 120341: [[78], 256], 120342: [[79], 256], 120343: [[80], 256], 120344: [[81], 256], 120345: [[82], 256], 120346: [[83], 256], 120347: [[84], 256], 120348: [[85], 256], 120349: [[86], 256], 120350: [[87], 256], 120351: [[88], 256], 120352: [[89], 256], 120353: [[90], 256], 120354: [[97], 256], 120355: [[98], 256], 120356: [[99], 256], 120357: [[100], 256], 120358: [[101], 256], 120359: [[102], 256], 120360: [[103], 256], 120361: [[104], 256], 120362: [[105], 256], 120363: [[106], 256], 120364: [[107], 256], 120365: [[108], 256], 120366: [[109], 256], 120367: [[110], 256], 120368: [[111], 256], 120369: [[112], 256], 120370: [[113], 256], 120371: [[114], 256], 120372: [[115], 256], 120373: [[116], 256], 120374: [[117], 256], 120375: [[118], 256], 120376: [[119], 256], 120377: [[120], 256], 120378: [[121], 256], 120379: [[122], 256], 120380: [[65], 256], 120381: [[66], 256], 120382: [[67], 256], 120383: [[68], 256], 120384: [[69], 256], 120385: [[70], 256], 120386: [[71], 256], 120387: [[72], 256], 120388: [[73], 256], 120389: [[74], 256], 120390: [[75], 256], 120391: [[76], 256], 120392: [[77], 256], 120393: [[78], 256], 120394: [[79], 256], 120395: [[80], 256], 120396: [[81], 256], 120397: [[82], 256], 120398: [[83], 256], 120399: [[84], 256], 120400: [[85], 256], 120401: [[86], 256], 120402: [[87], 256], 120403: [[88], 256], 120404: [[89], 256], 120405: [[90], 256], 120406: [[97], 256], 120407: [[98], 256], 120408: [[99], 256], 120409: [[100], 256], 120410: [[101], 256], 120411: [[102], 256], 120412: [[103], 256], 120413: [[104], 256], 120414: [[105], 256], 120415: [[106], 256], 120416: [[107], 256], 120417: [[108], 256], 120418: [[109], 256], 120419: [[110], 256], 120420: [[111], 256], 120421: [[112], 256], 120422: [[113], 256], 120423: [[114], 256], 120424: [[115], 256], 120425: [[116], 256], 120426: [[117], 256], 120427: [[118], 256], 120428: [[119], 256], 120429: [[120], 256], 120430: [[121], 256], 120431: [[122], 256], 120432: [[65], 256], 120433: [[66], 256], 120434: [[67], 256], 120435: [[68], 256], 120436: [[69], 256], 120437: [[70], 256], 120438: [[71], 256], 120439: [[72], 256], 120440: [[73], 256], 120441: [[74], 256], 120442: [[75], 256], 120443: [[76], 256], 120444: [[77], 256], 120445: [[78], 256], 120446: [[79], 256], 120447: [[80], 256], 120448: [[81], 256], 120449: [[82], 256], 120450: [[83], 256], 120451: [[84], 256], 120452: [[85], 256], 120453: [[86], 256], 120454: [[87], 256], 120455: [[88], 256], 120456: [[89], 256], 120457: [[90], 256], 120458: [[97], 256], 120459: [[98], 256], 120460: [[99], 256], 120461: [[100], 256], 120462: [[101], 256], 120463: [[102], 256], 120464: [[103], 256], 120465: [[104], 256], 120466: [[105], 256], 120467: [[106], 256], 120468: [[107], 256], 120469: [[108], 256], 120470: [[109], 256], 120471: [[110], 256], 120472: [[111], 256], 120473: [[112], 256], 120474: [[113], 256], 120475: [[114], 256], 120476: [[115], 256], 120477: [[116], 256], 120478: [[117], 256], 120479: [[118], 256], 120480: [[119], 256], 120481: [[120], 256], 120482: [[121], 256], 120483: [[122], 256], 120484: [[305], 256], 120485: [[567], 256], 120488: [[913], 256], 120489: [[914], 256], 120490: [[915], 256], 120491: [[916], 256], 120492: [[917], 256], 120493: [[918], 256], 120494: [[919], 256], 120495: [[920], 256], 120496: [[921], 256], 120497: [[922], 256], 120498: [[923], 256], 120499: [[924], 256], 120500: [[925], 256], 120501: [[926], 256], 120502: [[927], 256], 120503: [[928], 256], 120504: [[929], 256], 120505: [[1012], 256], 120506: [[931], 256], 120507: [[932], 256], 120508: [[933], 256], 120509: [[934], 256], 120510: [[935], 256], 120511: [[936], 256], 120512: [[937], 256], 120513: [[8711], 256], 120514: [[945], 256], 120515: [[946], 256], 120516: [[947], 256], 120517: [[948], 256], 120518: [[949], 256], 120519: [[950], 256], 120520: [[951], 256], 120521: [[952], 256], 120522: [[953], 256], 120523: [[954], 256], 120524: [[955], 256], 120525: [[956], 256], 120526: [[957], 256], 120527: [[958], 256], 120528: [[959], 256], 120529: [[960], 256], 120530: [[961], 256], 120531: [[962], 256], 120532: [[963], 256], 120533: [[964], 256], 120534: [[965], 256], 120535: [[966], 256], 120536: [[967], 256], 120537: [[968], 256], 120538: [[969], 256], 120539: [[8706], 256], 120540: [[1013], 256], 120541: [[977], 256], 120542: [[1008], 256], 120543: [[981], 256], 120544: [[1009], 256], 120545: [[982], 256], 120546: [[913], 256], 120547: [[914], 256], 120548: [[915], 256], 120549: [[916], 256], 120550: [[917], 256], 120551: [[918], 256], 120552: [[919], 256], 120553: [[920], 256], 120554: [[921], 256], 120555: [[922], 256], 120556: [[923], 256], 120557: [[924], 256], 120558: [[925], 256], 120559: [[926], 256], 120560: [[927], 256], 120561: [[928], 256], 120562: [[929], 256], 120563: [[1012], 256], 120564: [[931], 256], 120565: [[932], 256], 120566: [[933], 256], 120567: [[934], 256], 120568: [[935], 256], 120569: [[936], 256], 120570: [[937], 256], 120571: [[8711], 256], 120572: [[945], 256], 120573: [[946], 256], 120574: [[947], 256], 120575: [[948], 256] },
			55040: { 120576: [[949], 256], 120577: [[950], 256], 120578: [[951], 256], 120579: [[952], 256], 120580: [[953], 256], 120581: [[954], 256], 120582: [[955], 256], 120583: [[956], 256], 120584: [[957], 256], 120585: [[958], 256], 120586: [[959], 256], 120587: [[960], 256], 120588: [[961], 256], 120589: [[962], 256], 120590: [[963], 256], 120591: [[964], 256], 120592: [[965], 256], 120593: [[966], 256], 120594: [[967], 256], 120595: [[968], 256], 120596: [[969], 256], 120597: [[8706], 256], 120598: [[1013], 256], 120599: [[977], 256], 120600: [[1008], 256], 120601: [[981], 256], 120602: [[1009], 256], 120603: [[982], 256], 120604: [[913], 256], 120605: [[914], 256], 120606: [[915], 256], 120607: [[916], 256], 120608: [[917], 256], 120609: [[918], 256], 120610: [[919], 256], 120611: [[920], 256], 120612: [[921], 256], 120613: [[922], 256], 120614: [[923], 256], 120615: [[924], 256], 120616: [[925], 256], 120617: [[926], 256], 120618: [[927], 256], 120619: [[928], 256], 120620: [[929], 256], 120621: [[1012], 256], 120622: [[931], 256], 120623: [[932], 256], 120624: [[933], 256], 120625: [[934], 256], 120626: [[935], 256], 120627: [[936], 256], 120628: [[937], 256], 120629: [[8711], 256], 120630: [[945], 256], 120631: [[946], 256], 120632: [[947], 256], 120633: [[948], 256], 120634: [[949], 256], 120635: [[950], 256], 120636: [[951], 256], 120637: [[952], 256], 120638: [[953], 256], 120639: [[954], 256], 120640: [[955], 256], 120641: [[956], 256], 120642: [[957], 256], 120643: [[958], 256], 120644: [[959], 256], 120645: [[960], 256], 120646: [[961], 256], 120647: [[962], 256], 120648: [[963], 256], 120649: [[964], 256], 120650: [[965], 256], 120651: [[966], 256], 120652: [[967], 256], 120653: [[968], 256], 120654: [[969], 256], 120655: [[8706], 256], 120656: [[1013], 256], 120657: [[977], 256], 120658: [[1008], 256], 120659: [[981], 256], 120660: [[1009], 256], 120661: [[982], 256], 120662: [[913], 256], 120663: [[914], 256], 120664: [[915], 256], 120665: [[916], 256], 120666: [[917], 256], 120667: [[918], 256], 120668: [[919], 256], 120669: [[920], 256], 120670: [[921], 256], 120671: [[922], 256], 120672: [[923], 256], 120673: [[924], 256], 120674: [[925], 256], 120675: [[926], 256], 120676: [[927], 256], 120677: [[928], 256], 120678: [[929], 256], 120679: [[1012], 256], 120680: [[931], 256], 120681: [[932], 256], 120682: [[933], 256], 120683: [[934], 256], 120684: [[935], 256], 120685: [[936], 256], 120686: [[937], 256], 120687: [[8711], 256], 120688: [[945], 256], 120689: [[946], 256], 120690: [[947], 256], 120691: [[948], 256], 120692: [[949], 256], 120693: [[950], 256], 120694: [[951], 256], 120695: [[952], 256], 120696: [[953], 256], 120697: [[954], 256], 120698: [[955], 256], 120699: [[956], 256], 120700: [[957], 256], 120701: [[958], 256], 120702: [[959], 256], 120703: [[960], 256], 120704: [[961], 256], 120705: [[962], 256], 120706: [[963], 256], 120707: [[964], 256], 120708: [[965], 256], 120709: [[966], 256], 120710: [[967], 256], 120711: [[968], 256], 120712: [[969], 256], 120713: [[8706], 256], 120714: [[1013], 256], 120715: [[977], 256], 120716: [[1008], 256], 120717: [[981], 256], 120718: [[1009], 256], 120719: [[982], 256], 120720: [[913], 256], 120721: [[914], 256], 120722: [[915], 256], 120723: [[916], 256], 120724: [[917], 256], 120725: [[918], 256], 120726: [[919], 256], 120727: [[920], 256], 120728: [[921], 256], 120729: [[922], 256], 120730: [[923], 256], 120731: [[924], 256], 120732: [[925], 256], 120733: [[926], 256], 120734: [[927], 256], 120735: [[928], 256], 120736: [[929], 256], 120737: [[1012], 256], 120738: [[931], 256], 120739: [[932], 256], 120740: [[933], 256], 120741: [[934], 256], 120742: [[935], 256], 120743: [[936], 256], 120744: [[937], 256], 120745: [[8711], 256], 120746: [[945], 256], 120747: [[946], 256], 120748: [[947], 256], 120749: [[948], 256], 120750: [[949], 256], 120751: [[950], 256], 120752: [[951], 256], 120753: [[952], 256], 120754: [[953], 256], 120755: [[954], 256], 120756: [[955], 256], 120757: [[956], 256], 120758: [[957], 256], 120759: [[958], 256], 120760: [[959], 256], 120761: [[960], 256], 120762: [[961], 256], 120763: [[962], 256], 120764: [[963], 256], 120765: [[964], 256], 120766: [[965], 256], 120767: [[966], 256], 120768: [[967], 256], 120769: [[968], 256], 120770: [[969], 256], 120771: [[8706], 256], 120772: [[1013], 256], 120773: [[977], 256], 120774: [[1008], 256], 120775: [[981], 256], 120776: [[1009], 256], 120777: [[982], 256], 120778: [[988], 256], 120779: [[989], 256], 120782: [[48], 256], 120783: [[49], 256], 120784: [[50], 256], 120785: [[51], 256], 120786: [[52], 256], 120787: [[53], 256], 120788: [[54], 256], 120789: [[55], 256], 120790: [[56], 256], 120791: [[57], 256], 120792: [[48], 256], 120793: [[49], 256], 120794: [[50], 256], 120795: [[51], 256], 120796: [[52], 256], 120797: [[53], 256], 120798: [[54], 256], 120799: [[55], 256], 120800: [[56], 256], 120801: [[57], 256], 120802: [[48], 256], 120803: [[49], 256], 120804: [[50], 256], 120805: [[51], 256], 120806: [[52], 256], 120807: [[53], 256], 120808: [[54], 256], 120809: [[55], 256], 120810: [[56], 256], 120811: [[57], 256], 120812: [[48], 256], 120813: [[49], 256], 120814: [[50], 256], 120815: [[51], 256], 120816: [[52], 256], 120817: [[53], 256], 120818: [[54], 256], 120819: [[55], 256], 120820: [[56], 256], 120821: [[57], 256], 120822: [[48], 256], 120823: [[49], 256], 120824: [[50], 256], 120825: [[51], 256], 120826: [[52], 256], 120827: [[53], 256], 120828: [[54], 256], 120829: [[55], 256], 120830: [[56], 256], 120831: [[57], 256] },
			59392: { 125136: [, 220], 125137: [, 220], 125138: [, 220], 125139: [, 220], 125140: [, 220], 125141: [, 220], 125142: [, 220] },
			60928: { 126464: [[1575], 256], 126465: [[1576], 256], 126466: [[1580], 256], 126467: [[1583], 256], 126469: [[1608], 256], 126470: [[1586], 256], 126471: [[1581], 256], 126472: [[1591], 256], 126473: [[1610], 256], 126474: [[1603], 256], 126475: [[1604], 256], 126476: [[1605], 256], 126477: [[1606], 256], 126478: [[1587], 256], 126479: [[1593], 256], 126480: [[1601], 256], 126481: [[1589], 256], 126482: [[1602], 256], 126483: [[1585], 256], 126484: [[1588], 256], 126485: [[1578], 256], 126486: [[1579], 256], 126487: [[1582], 256], 126488: [[1584], 256], 126489: [[1590], 256], 126490: [[1592], 256], 126491: [[1594], 256], 126492: [[1646], 256], 126493: [[1722], 256], 126494: [[1697], 256], 126495: [[1647], 256], 126497: [[1576], 256], 126498: [[1580], 256], 126500: [[1607], 256], 126503: [[1581], 256], 126505: [[1610], 256], 126506: [[1603], 256], 126507: [[1604], 256], 126508: [[1605], 256], 126509: [[1606], 256], 126510: [[1587], 256], 126511: [[1593], 256], 126512: [[1601], 256], 126513: [[1589], 256], 126514: [[1602], 256], 126516: [[1588], 256], 126517: [[1578], 256], 126518: [[1579], 256], 126519: [[1582], 256], 126521: [[1590], 256], 126523: [[1594], 256], 126530: [[1580], 256], 126535: [[1581], 256], 126537: [[1610], 256], 126539: [[1604], 256], 126541: [[1606], 256], 126542: [[1587], 256], 126543: [[1593], 256], 126545: [[1589], 256], 126546: [[1602], 256], 126548: [[1588], 256], 126551: [[1582], 256], 126553: [[1590], 256], 126555: [[1594], 256], 126557: [[1722], 256], 126559: [[1647], 256], 126561: [[1576], 256], 126562: [[1580], 256], 126564: [[1607], 256], 126567: [[1581], 256], 126568: [[1591], 256], 126569: [[1610], 256], 126570: [[1603], 256], 126572: [[1605], 256], 126573: [[1606], 256], 126574: [[1587], 256], 126575: [[1593], 256], 126576: [[1601], 256], 126577: [[1589], 256], 126578: [[1602], 256], 126580: [[1588], 256], 126581: [[1578], 256], 126582: [[1579], 256], 126583: [[1582], 256], 126585: [[1590], 256], 126586: [[1592], 256], 126587: [[1594], 256], 126588: [[1646], 256], 126590: [[1697], 256], 126592: [[1575], 256], 126593: [[1576], 256], 126594: [[1580], 256], 126595: [[1583], 256], 126596: [[1607], 256], 126597: [[1608], 256], 126598: [[1586], 256], 126599: [[1581], 256], 126600: [[1591], 256], 126601: [[1610], 256], 126603: [[1604], 256], 126604: [[1605], 256], 126605: [[1606], 256], 126606: [[1587], 256], 126607: [[1593], 256], 126608: [[1601], 256], 126609: [[1589], 256], 126610: [[1602], 256], 126611: [[1585], 256], 126612: [[1588], 256], 126613: [[1578], 256], 126614: [[1579], 256], 126615: [[1582], 256], 126616: [[1584], 256], 126617: [[1590], 256], 126618: [[1592], 256], 126619: [[1594], 256], 126625: [[1576], 256], 126626: [[1580], 256], 126627: [[1583], 256], 126629: [[1608], 256], 126630: [[1586], 256], 126631: [[1581], 256], 126632: [[1591], 256], 126633: [[1610], 256], 126635: [[1604], 256], 126636: [[1605], 256], 126637: [[1606], 256], 126638: [[1587], 256], 126639: [[1593], 256], 126640: [[1601], 256], 126641: [[1589], 256], 126642: [[1602], 256], 126643: [[1585], 256], 126644: [[1588], 256], 126645: [[1578], 256], 126646: [[1579], 256], 126647: [[1582], 256], 126648: [[1584], 256], 126649: [[1590], 256], 126650: [[1592], 256], 126651: [[1594], 256] },
			61696: { 127232: [[48, 46], 256], 127233: [[48, 44], 256], 127234: [[49, 44], 256], 127235: [[50, 44], 256], 127236: [[51, 44], 256], 127237: [[52, 44], 256], 127238: [[53, 44], 256], 127239: [[54, 44], 256], 127240: [[55, 44], 256], 127241: [[56, 44], 256], 127242: [[57, 44], 256], 127248: [[40, 65, 41], 256], 127249: [[40, 66, 41], 256], 127250: [[40, 67, 41], 256], 127251: [[40, 68, 41], 256], 127252: [[40, 69, 41], 256], 127253: [[40, 70, 41], 256], 127254: [[40, 71, 41], 256], 127255: [[40, 72, 41], 256], 127256: [[40, 73, 41], 256], 127257: [[40, 74, 41], 256], 127258: [[40, 75, 41], 256], 127259: [[40, 76, 41], 256], 127260: [[40, 77, 41], 256], 127261: [[40, 78, 41], 256], 127262: [[40, 79, 41], 256], 127263: [[40, 80, 41], 256], 127264: [[40, 81, 41], 256], 127265: [[40, 82, 41], 256], 127266: [[40, 83, 41], 256], 127267: [[40, 84, 41], 256], 127268: [[40, 85, 41], 256], 127269: [[40, 86, 41], 256], 127270: [[40, 87, 41], 256], 127271: [[40, 88, 41], 256], 127272: [[40, 89, 41], 256], 127273: [[40, 90, 41], 256], 127274: [[12308, 83, 12309], 256], 127275: [[67], 256], 127276: [[82], 256], 127277: [[67, 68], 256], 127278: [[87, 90], 256], 127280: [[65], 256], 127281: [[66], 256], 127282: [[67], 256], 127283: [[68], 256], 127284: [[69], 256], 127285: [[70], 256], 127286: [[71], 256], 127287: [[72], 256], 127288: [[73], 256], 127289: [[74], 256], 127290: [[75], 256], 127291: [[76], 256], 127292: [[77], 256], 127293: [[78], 256], 127294: [[79], 256], 127295: [[80], 256], 127296: [[81], 256], 127297: [[82], 256], 127298: [[83], 256], 127299: [[84], 256], 127300: [[85], 256], 127301: [[86], 256], 127302: [[87], 256], 127303: [[88], 256], 127304: [[89], 256], 127305: [[90], 256], 127306: [[72, 86], 256], 127307: [[77, 86], 256], 127308: [[83, 68], 256], 127309: [[83, 83], 256], 127310: [[80, 80, 86], 256], 127311: [[87, 67], 256], 127338: [[77, 67], 256], 127339: [[77, 68], 256], 127376: [[68, 74], 256] },
			61952: { 127488: [[12411, 12363], 256], 127489: [[12467, 12467], 256], 127490: [[12469], 256], 127504: [[25163], 256], 127505: [[23383], 256], 127506: [[21452], 256], 127507: [[12487], 256], 127508: [[20108], 256], 127509: [[22810], 256], 127510: [[35299], 256], 127511: [[22825], 256], 127512: [[20132], 256], 127513: [[26144], 256], 127514: [[28961], 256], 127515: [[26009], 256], 127516: [[21069], 256], 127517: [[24460], 256], 127518: [[20877], 256], 127519: [[26032], 256], 127520: [[21021], 256], 127521: [[32066], 256], 127522: [[29983], 256], 127523: [[36009], 256], 127524: [[22768], 256], 127525: [[21561], 256], 127526: [[28436], 256], 127527: [[25237], 256], 127528: [[25429], 256], 127529: [[19968], 256], 127530: [[19977], 256], 127531: [[36938], 256], 127532: [[24038], 256], 127533: [[20013], 256], 127534: [[21491], 256], 127535: [[25351], 256], 127536: [[36208], 256], 127537: [[25171], 256], 127538: [[31105], 256], 127539: [[31354], 256], 127540: [[21512], 256], 127541: [[28288], 256], 127542: [[26377], 256], 127543: [[26376], 256], 127544: [[30003], 256], 127545: [[21106], 256], 127546: [[21942], 256], 127552: [[12308, 26412, 12309], 256], 127553: [[12308, 19977, 12309], 256], 127554: [[12308, 20108, 12309], 256], 127555: [[12308, 23433, 12309], 256], 127556: [[12308, 28857, 12309], 256], 127557: [[12308, 25171, 12309], 256], 127558: [[12308, 30423, 12309], 256], 127559: [[12308, 21213, 12309], 256], 127560: [[12308, 25943, 12309], 256], 127568: [[24471], 256], 127569: [[21487], 256] },
			63488: { 194560: [[20029]], 194561: [[20024]], 194562: [[20033]], 194563: [[131362]], 194564: [[20320]], 194565: [[20398]], 194566: [[20411]], 194567: [[20482]], 194568: [[20602]], 194569: [[20633]], 194570: [[20711]], 194571: [[20687]], 194572: [[13470]], 194573: [[132666]], 194574: [[20813]], 194575: [[20820]], 194576: [[20836]], 194577: [[20855]], 194578: [[132380]], 194579: [[13497]], 194580: [[20839]], 194581: [[20877]], 194582: [[132427]], 194583: [[20887]], 194584: [[20900]], 194585: [[20172]], 194586: [[20908]], 194587: [[20917]], 194588: [[168415]], 194589: [[20981]], 194590: [[20995]], 194591: [[13535]], 194592: [[21051]], 194593: [[21062]], 194594: [[21106]], 194595: [[21111]], 194596: [[13589]], 194597: [[21191]], 194598: [[21193]], 194599: [[21220]], 194600: [[21242]], 194601: [[21253]], 194602: [[21254]], 194603: [[21271]], 194604: [[21321]], 194605: [[21329]], 194606: [[21338]], 194607: [[21363]], 194608: [[21373]], 194609: [[21375]], 194610: [[21375]], 194611: [[21375]], 194612: [[133676]], 194613: [[28784]], 194614: [[21450]], 194615: [[21471]], 194616: [[133987]], 194617: [[21483]], 194618: [[21489]], 194619: [[21510]], 194620: [[21662]], 194621: [[21560]], 194622: [[21576]], 194623: [[21608]], 194624: [[21666]], 194625: [[21750]], 194626: [[21776]], 194627: [[21843]], 194628: [[21859]], 194629: [[21892]], 194630: [[21892]], 194631: [[21913]], 194632: [[21931]], 194633: [[21939]], 194634: [[21954]], 194635: [[22294]], 194636: [[22022]], 194637: [[22295]], 194638: [[22097]], 194639: [[22132]], 194640: [[20999]], 194641: [[22766]], 194642: [[22478]], 194643: [[22516]], 194644: [[22541]], 194645: [[22411]], 194646: [[22578]], 194647: [[22577]], 194648: [[22700]], 194649: [[136420]], 194650: [[22770]], 194651: [[22775]], 194652: [[22790]], 194653: [[22810]], 194654: [[22818]], 194655: [[22882]], 194656: [[136872]], 194657: [[136938]], 194658: [[23020]], 194659: [[23067]], 194660: [[23079]], 194661: [[23000]], 194662: [[23142]], 194663: [[14062]], 194664: [[14076]], 194665: [[23304]], 194666: [[23358]], 194667: [[23358]], 194668: [[137672]], 194669: [[23491]], 194670: [[23512]], 194671: [[23527]], 194672: [[23539]], 194673: [[138008]], 194674: [[23551]], 194675: [[23558]], 194676: [[24403]], 194677: [[23586]], 194678: [[14209]], 194679: [[23648]], 194680: [[23662]], 194681: [[23744]], 194682: [[23693]], 194683: [[138724]], 194684: [[23875]], 194685: [[138726]], 194686: [[23918]], 194687: [[23915]], 194688: [[23932]], 194689: [[24033]], 194690: [[24034]], 194691: [[14383]], 194692: [[24061]], 194693: [[24104]], 194694: [[24125]], 194695: [[24169]], 194696: [[14434]], 194697: [[139651]], 194698: [[14460]], 194699: [[24240]], 194700: [[24243]], 194701: [[24246]], 194702: [[24266]], 194703: [[172946]], 194704: [[24318]], 194705: [[140081]], 194706: [[140081]], 194707: [[33281]], 194708: [[24354]], 194709: [[24354]], 194710: [[14535]], 194711: [[144056]], 194712: [[156122]], 194713: [[24418]], 194714: [[24427]], 194715: [[14563]], 194716: [[24474]], 194717: [[24525]], 194718: [[24535]], 194719: [[24569]], 194720: [[24705]], 194721: [[14650]], 194722: [[14620]], 194723: [[24724]], 194724: [[141012]], 194725: [[24775]], 194726: [[24904]], 194727: [[24908]], 194728: [[24910]], 194729: [[24908]], 194730: [[24954]], 194731: [[24974]], 194732: [[25010]], 194733: [[24996]], 194734: [[25007]], 194735: [[25054]], 194736: [[25074]], 194737: [[25078]], 194738: [[25104]], 194739: [[25115]], 194740: [[25181]], 194741: [[25265]], 194742: [[25300]], 194743: [[25424]], 194744: [[142092]], 194745: [[25405]], 194746: [[25340]], 194747: [[25448]], 194748: [[25475]], 194749: [[25572]], 194750: [[142321]], 194751: [[25634]], 194752: [[25541]], 194753: [[25513]], 194754: [[14894]], 194755: [[25705]], 194756: [[25726]], 194757: [[25757]], 194758: [[25719]], 194759: [[14956]], 194760: [[25935]], 194761: [[25964]], 194762: [[143370]], 194763: [[26083]], 194764: [[26360]], 194765: [[26185]], 194766: [[15129]], 194767: [[26257]], 194768: [[15112]], 194769: [[15076]], 194770: [[20882]], 194771: [[20885]], 194772: [[26368]], 194773: [[26268]], 194774: [[32941]], 194775: [[17369]], 194776: [[26391]], 194777: [[26395]], 194778: [[26401]], 194779: [[26462]], 194780: [[26451]], 194781: [[144323]], 194782: [[15177]], 194783: [[26618]], 194784: [[26501]], 194785: [[26706]], 194786: [[26757]], 194787: [[144493]], 194788: [[26766]], 194789: [[26655]], 194790: [[26900]], 194791: [[15261]], 194792: [[26946]], 194793: [[27043]], 194794: [[27114]], 194795: [[27304]], 194796: [[145059]], 194797: [[27355]], 194798: [[15384]], 194799: [[27425]], 194800: [[145575]], 194801: [[27476]], 194802: [[15438]], 194803: [[27506]], 194804: [[27551]], 194805: [[27578]], 194806: [[27579]], 194807: [[146061]], 194808: [[138507]], 194809: [[146170]], 194810: [[27726]], 194811: [[146620]], 194812: [[27839]], 194813: [[27853]], 194814: [[27751]], 194815: [[27926]] },
			63744: { 63744: [[35912]], 63745: [[26356]], 63746: [[36554]], 63747: [[36040]], 63748: [[28369]], 63749: [[20018]], 63750: [[21477]], 63751: [[40860]], 63752: [[40860]], 63753: [[22865]], 63754: [[37329]], 63755: [[21895]], 63756: [[22856]], 63757: [[25078]], 63758: [[30313]], 63759: [[32645]], 63760: [[34367]], 63761: [[34746]], 63762: [[35064]], 63763: [[37007]], 63764: [[27138]], 63765: [[27931]], 63766: [[28889]], 63767: [[29662]], 63768: [[33853]], 63769: [[37226]], 63770: [[39409]], 63771: [[20098]], 63772: [[21365]], 63773: [[27396]], 63774: [[29211]], 63775: [[34349]], 63776: [[40478]], 63777: [[23888]], 63778: [[28651]], 63779: [[34253]], 63780: [[35172]], 63781: [[25289]], 63782: [[33240]], 63783: [[34847]], 63784: [[24266]], 63785: [[26391]], 63786: [[28010]], 63787: [[29436]], 63788: [[37070]], 63789: [[20358]], 63790: [[20919]], 63791: [[21214]], 63792: [[25796]], 63793: [[27347]], 63794: [[29200]], 63795: [[30439]], 63796: [[32769]], 63797: [[34310]], 63798: [[34396]], 63799: [[36335]], 63800: [[38706]], 63801: [[39791]], 63802: [[40442]], 63803: [[30860]], 63804: [[31103]], 63805: [[32160]], 63806: [[33737]], 63807: [[37636]], 63808: [[40575]], 63809: [[35542]], 63810: [[22751]], 63811: [[24324]], 63812: [[31840]], 63813: [[32894]], 63814: [[29282]], 63815: [[30922]], 63816: [[36034]], 63817: [[38647]], 63818: [[22744]], 63819: [[23650]], 63820: [[27155]], 63821: [[28122]], 63822: [[28431]], 63823: [[32047]], 63824: [[32311]], 63825: [[38475]], 63826: [[21202]], 63827: [[32907]], 63828: [[20956]], 63829: [[20940]], 63830: [[31260]], 63831: [[32190]], 63832: [[33777]], 63833: [[38517]], 63834: [[35712]], 63835: [[25295]], 63836: [[27138]], 63837: [[35582]], 63838: [[20025]], 63839: [[23527]], 63840: [[24594]], 63841: [[29575]], 63842: [[30064]], 63843: [[21271]], 63844: [[30971]], 63845: [[20415]], 63846: [[24489]], 63847: [[19981]], 63848: [[27852]], 63849: [[25976]], 63850: [[32034]], 63851: [[21443]], 63852: [[22622]], 63853: [[30465]], 63854: [[33865]], 63855: [[35498]], 63856: [[27578]], 63857: [[36784]], 63858: [[27784]], 63859: [[25342]], 63860: [[33509]], 63861: [[25504]], 63862: [[30053]], 63863: [[20142]], 63864: [[20841]], 63865: [[20937]], 63866: [[26753]], 63867: [[31975]], 63868: [[33391]], 63869: [[35538]], 63870: [[37327]], 63871: [[21237]], 63872: [[21570]], 63873: [[22899]], 63874: [[24300]], 63875: [[26053]], 63876: [[28670]], 63877: [[31018]], 63878: [[38317]], 63879: [[39530]], 63880: [[40599]], 63881: [[40654]], 63882: [[21147]], 63883: [[26310]], 63884: [[27511]], 63885: [[36706]], 63886: [[24180]], 63887: [[24976]], 63888: [[25088]], 63889: [[25754]], 63890: [[28451]], 63891: [[29001]], 63892: [[29833]], 63893: [[31178]], 63894: [[32244]], 63895: [[32879]], 63896: [[36646]], 63897: [[34030]], 63898: [[36899]], 63899: [[37706]], 63900: [[21015]], 63901: [[21155]], 63902: [[21693]], 63903: [[28872]], 63904: [[35010]], 63905: [[35498]], 63906: [[24265]], 63907: [[24565]], 63908: [[25467]], 63909: [[27566]], 63910: [[31806]], 63911: [[29557]], 63912: [[20196]], 63913: [[22265]], 63914: [[23527]], 63915: [[23994]], 63916: [[24604]], 63917: [[29618]], 63918: [[29801]], 63919: [[32666]], 63920: [[32838]], 63921: [[37428]], 63922: [[38646]], 63923: [[38728]], 63924: [[38936]], 63925: [[20363]], 63926: [[31150]], 63927: [[37300]], 63928: [[38584]], 63929: [[24801]], 63930: [[20102]], 63931: [[20698]], 63932: [[23534]], 63933: [[23615]], 63934: [[26009]], 63935: [[27138]], 63936: [[29134]], 63937: [[30274]], 63938: [[34044]], 63939: [[36988]], 63940: [[40845]], 63941: [[26248]], 63942: [[38446]], 63943: [[21129]], 63944: [[26491]], 63945: [[26611]], 63946: [[27969]], 63947: [[28316]], 63948: [[29705]], 63949: [[30041]], 63950: [[30827]], 63951: [[32016]], 63952: [[39006]], 63953: [[20845]], 63954: [[25134]], 63955: [[38520]], 63956: [[20523]], 63957: [[23833]], 63958: [[28138]], 63959: [[36650]], 63960: [[24459]], 63961: [[24900]], 63962: [[26647]], 63963: [[29575]], 63964: [[38534]], 63965: [[21033]], 63966: [[21519]], 63967: [[23653]], 63968: [[26131]], 63969: [[26446]], 63970: [[26792]], 63971: [[27877]], 63972: [[29702]], 63973: [[30178]], 63974: [[32633]], 63975: [[35023]], 63976: [[35041]], 63977: [[37324]], 63978: [[38626]], 63979: [[21311]], 63980: [[28346]], 63981: [[21533]], 63982: [[29136]], 63983: [[29848]], 63984: [[34298]], 63985: [[38563]], 63986: [[40023]], 63987: [[40607]], 63988: [[26519]], 63989: [[28107]], 63990: [[33256]], 63991: [[31435]], 63992: [[31520]], 63993: [[31890]], 63994: [[29376]], 63995: [[28825]], 63996: [[35672]], 63997: [[20160]], 63998: [[33590]], 63999: [[21050]], 194816: [[27966]], 194817: [[28023]], 194818: [[27969]], 194819: [[28009]], 194820: [[28024]], 194821: [[28037]], 194822: [[146718]], 194823: [[27956]], 194824: [[28207]], 194825: [[28270]], 194826: [[15667]], 194827: [[28363]], 194828: [[28359]], 194829: [[147153]], 194830: [[28153]], 194831: [[28526]], 194832: [[147294]], 194833: [[147342]], 194834: [[28614]], 194835: [[28729]], 194836: [[28702]], 194837: [[28699]], 194838: [[15766]], 194839: [[28746]], 194840: [[28797]], 194841: [[28791]], 194842: [[28845]], 194843: [[132389]], 194844: [[28997]], 194845: [[148067]], 194846: [[29084]], 194847: [[148395]], 194848: [[29224]], 194849: [[29237]], 194850: [[29264]], 194851: [[149000]], 194852: [[29312]], 194853: [[29333]], 194854: [[149301]], 194855: [[149524]], 194856: [[29562]], 194857: [[29579]], 194858: [[16044]], 194859: [[29605]], 194860: [[16056]], 194861: [[16056]], 194862: [[29767]], 194863: [[29788]], 194864: [[29809]], 194865: [[29829]], 194866: [[29898]], 194867: [[16155]], 194868: [[29988]], 194869: [[150582]], 194870: [[30014]], 194871: [[150674]], 194872: [[30064]], 194873: [[139679]], 194874: [[30224]], 194875: [[151457]], 194876: [[151480]], 194877: [[151620]], 194878: [[16380]], 194879: [[16392]], 194880: [[30452]], 194881: [[151795]], 194882: [[151794]], 194883: [[151833]], 194884: [[151859]], 194885: [[30494]], 194886: [[30495]], 194887: [[30495]], 194888: [[30538]], 194889: [[16441]], 194890: [[30603]], 194891: [[16454]], 194892: [[16534]], 194893: [[152605]], 194894: [[30798]], 194895: [[30860]], 194896: [[30924]], 194897: [[16611]], 194898: [[153126]], 194899: [[31062]], 194900: [[153242]], 194901: [[153285]], 194902: [[31119]], 194903: [[31211]], 194904: [[16687]], 194905: [[31296]], 194906: [[31306]], 194907: [[31311]], 194908: [[153980]], 194909: [[154279]], 194910: [[154279]], 194911: [[31470]], 194912: [[16898]], 194913: [[154539]], 194914: [[31686]], 194915: [[31689]], 194916: [[16935]], 194917: [[154752]], 194918: [[31954]], 194919: [[17056]], 194920: [[31976]], 194921: [[31971]], 194922: [[32000]], 194923: [[155526]], 194924: [[32099]], 194925: [[17153]], 194926: [[32199]], 194927: [[32258]], 194928: [[32325]], 194929: [[17204]], 194930: [[156200]], 194931: [[156231]], 194932: [[17241]], 194933: [[156377]], 194934: [[32634]], 194935: [[156478]], 194936: [[32661]], 194937: [[32762]], 194938: [[32773]], 194939: [[156890]], 194940: [[156963]], 194941: [[32864]], 194942: [[157096]], 194943: [[32880]], 194944: [[144223]], 194945: [[17365]], 194946: [[32946]], 194947: [[33027]], 194948: [[17419]], 194949: [[33086]], 194950: [[23221]], 194951: [[157607]], 194952: [[157621]], 194953: [[144275]], 194954: [[144284]], 194955: [[33281]], 194956: [[33284]], 194957: [[36766]], 194958: [[17515]], 194959: [[33425]], 194960: [[33419]], 194961: [[33437]], 194962: [[21171]], 194963: [[33457]], 194964: [[33459]], 194965: [[33469]], 194966: [[33510]], 194967: [[158524]], 194968: [[33509]], 194969: [[33565]], 194970: [[33635]], 194971: [[33709]], 194972: [[33571]], 194973: [[33725]], 194974: [[33767]], 194975: [[33879]], 194976: [[33619]], 194977: [[33738]], 194978: [[33740]], 194979: [[33756]], 194980: [[158774]], 194981: [[159083]], 194982: [[158933]], 194983: [[17707]], 194984: [[34033]], 194985: [[34035]], 194986: [[34070]], 194987: [[160714]], 194988: [[34148]], 194989: [[159532]], 194990: [[17757]], 194991: [[17761]], 194992: [[159665]], 194993: [[159954]], 194994: [[17771]], 194995: [[34384]], 194996: [[34396]], 194997: [[34407]], 194998: [[34409]], 194999: [[34473]], 195000: [[34440]], 195001: [[34574]], 195002: [[34530]], 195003: [[34681]], 195004: [[34600]], 195005: [[34667]], 195006: [[34694]], 195007: [[17879]], 195008: [[34785]], 195009: [[34817]], 195010: [[17913]], 195011: [[34912]], 195012: [[34915]], 195013: [[161383]], 195014: [[35031]], 195015: [[35038]], 195016: [[17973]], 195017: [[35066]], 195018: [[13499]], 195019: [[161966]], 195020: [[162150]], 195021: [[18110]], 195022: [[18119]], 195023: [[35488]], 195024: [[35565]], 195025: [[35722]], 195026: [[35925]], 195027: [[162984]], 195028: [[36011]], 195029: [[36033]], 195030: [[36123]], 195031: [[36215]], 195032: [[163631]], 195033: [[133124]], 195034: [[36299]], 195035: [[36284]], 195036: [[36336]], 195037: [[133342]], 195038: [[36564]], 195039: [[36664]], 195040: [[165330]], 195041: [[165357]], 195042: [[37012]], 195043: [[37105]], 195044: [[37137]], 195045: [[165678]], 195046: [[37147]], 195047: [[37432]], 195048: [[37591]], 195049: [[37592]], 195050: [[37500]], 195051: [[37881]], 195052: [[37909]], 195053: [[166906]], 195054: [[38283]], 195055: [[18837]], 195056: [[38327]], 195057: [[167287]], 195058: [[18918]], 195059: [[38595]], 195060: [[23986]], 195061: [[38691]], 195062: [[168261]], 195063: [[168474]], 195064: [[19054]], 195065: [[19062]], 195066: [[38880]], 195067: [[168970]], 195068: [[19122]], 195069: [[169110]], 195070: [[38923]], 195071: [[38923]] },
			64000: { 64000: [[20999]], 64001: [[24230]], 64002: [[25299]], 64003: [[31958]], 64004: [[23429]], 64005: [[27934]], 64006: [[26292]], 64007: [[36667]], 64008: [[34892]], 64009: [[38477]], 64010: [[35211]], 64011: [[24275]], 64012: [[20800]], 64013: [[21952]], 64016: [[22618]], 64018: [[26228]], 64021: [[20958]], 64022: [[29482]], 64023: [[30410]], 64024: [[31036]], 64025: [[31070]], 64026: [[31077]], 64027: [[31119]], 64028: [[38742]], 64029: [[31934]], 64030: [[32701]], 64032: [[34322]], 64034: [[35576]], 64037: [[36920]], 64038: [[37117]], 64042: [[39151]], 64043: [[39164]], 64044: [[39208]], 64045: [[40372]], 64046: [[37086]], 64047: [[38583]], 64048: [[20398]], 64049: [[20711]], 64050: [[20813]], 64051: [[21193]], 64052: [[21220]], 64053: [[21329]], 64054: [[21917]], 64055: [[22022]], 64056: [[22120]], 64057: [[22592]], 64058: [[22696]], 64059: [[23652]], 64060: [[23662]], 64061: [[24724]], 64062: [[24936]], 64063: [[24974]], 64064: [[25074]], 64065: [[25935]], 64066: [[26082]], 64067: [[26257]], 64068: [[26757]], 64069: [[28023]], 64070: [[28186]], 64071: [[28450]], 64072: [[29038]], 64073: [[29227]], 64074: [[29730]], 64075: [[30865]], 64076: [[31038]], 64077: [[31049]], 64078: [[31048]], 64079: [[31056]], 64080: [[31062]], 64081: [[31069]], 64082: [[31117]], 64083: [[31118]], 64084: [[31296]], 64085: [[31361]], 64086: [[31680]], 64087: [[32244]], 64088: [[32265]], 64089: [[32321]], 64090: [[32626]], 64091: [[32773]], 64092: [[33261]], 64093: [[33401]], 64094: [[33401]], 64095: [[33879]], 64096: [[35088]], 64097: [[35222]], 64098: [[35585]], 64099: [[35641]], 64100: [[36051]], 64101: [[36104]], 64102: [[36790]], 64103: [[36920]], 64104: [[38627]], 64105: [[38911]], 64106: [[38971]], 64107: [[24693]], 64108: [[148206]], 64109: [[33304]], 64112: [[20006]], 64113: [[20917]], 64114: [[20840]], 64115: [[20352]], 64116: [[20805]], 64117: [[20864]], 64118: [[21191]], 64119: [[21242]], 64120: [[21917]], 64121: [[21845]], 64122: [[21913]], 64123: [[21986]], 64124: [[22618]], 64125: [[22707]], 64126: [[22852]], 64127: [[22868]], 64128: [[23138]], 64129: [[23336]], 64130: [[24274]], 64131: [[24281]], 64132: [[24425]], 64133: [[24493]], 64134: [[24792]], 64135: [[24910]], 64136: [[24840]], 64137: [[24974]], 64138: [[24928]], 64139: [[25074]], 64140: [[25140]], 64141: [[25540]], 64142: [[25628]], 64143: [[25682]], 64144: [[25942]], 64145: [[26228]], 64146: [[26391]], 64147: [[26395]], 64148: [[26454]], 64149: [[27513]], 64150: [[27578]], 64151: [[27969]], 64152: [[28379]], 64153: [[28363]], 64154: [[28450]], 64155: [[28702]], 64156: [[29038]], 64157: [[30631]], 64158: [[29237]], 64159: [[29359]], 64160: [[29482]], 64161: [[29809]], 64162: [[29958]], 64163: [[30011]], 64164: [[30237]], 64165: [[30239]], 64166: [[30410]], 64167: [[30427]], 64168: [[30452]], 64169: [[30538]], 64170: [[30528]], 64171: [[30924]], 64172: [[31409]], 64173: [[31680]], 64174: [[31867]], 64175: [[32091]], 64176: [[32244]], 64177: [[32574]], 64178: [[32773]], 64179: [[33618]], 64180: [[33775]], 64181: [[34681]], 64182: [[35137]], 64183: [[35206]], 64184: [[35222]], 64185: [[35519]], 64186: [[35576]], 64187: [[35531]], 64188: [[35585]], 64189: [[35582]], 64190: [[35565]], 64191: [[35641]], 64192: [[35722]], 64193: [[36104]], 64194: [[36664]], 64195: [[36978]], 64196: [[37273]], 64197: [[37494]], 64198: [[38524]], 64199: [[38627]], 64200: [[38742]], 64201: [[38875]], 64202: [[38911]], 64203: [[38923]], 64204: [[38971]], 64205: [[39698]], 64206: [[40860]], 64207: [[141386]], 64208: [[141380]], 64209: [[144341]], 64210: [[15261]], 64211: [[16408]], 64212: [[16441]], 64213: [[152137]], 64214: [[154832]], 64215: [[163539]], 64216: [[40771]], 64217: [[40846]], 195072: [[38953]], 195073: [[169398]], 195074: [[39138]], 195075: [[19251]], 195076: [[39209]], 195077: [[39335]], 195078: [[39362]], 195079: [[39422]], 195080: [[19406]], 195081: [[170800]], 195082: [[39698]], 195083: [[40000]], 195084: [[40189]], 195085: [[19662]], 195086: [[19693]], 195087: [[40295]], 195088: [[172238]], 195089: [[19704]], 195090: [[172293]], 195091: [[172558]], 195092: [[172689]], 195093: [[40635]], 195094: [[19798]], 195095: [[40697]], 195096: [[40702]], 195097: [[40709]], 195098: [[40719]], 195099: [[40726]], 195100: [[40763]], 195101: [[173568]] },
			64256: { 64256: [[102, 102], 256], 64257: [[102, 105], 256], 64258: [[102, 108], 256], 64259: [[102, 102, 105], 256], 64260: [[102, 102, 108], 256], 64261: [[383, 116], 256], 64262: [[115, 116], 256], 64275: [[1396, 1398], 256], 64276: [[1396, 1381], 256], 64277: [[1396, 1387], 256], 64278: [[1406, 1398], 256], 64279: [[1396, 1389], 256], 64285: [[1497, 1460], 512], 64286: [, 26], 64287: [[1522, 1463], 512], 64288: [[1506], 256], 64289: [[1488], 256], 64290: [[1491], 256], 64291: [[1492], 256], 64292: [[1499], 256], 64293: [[1500], 256], 64294: [[1501], 256], 64295: [[1512], 256], 64296: [[1514], 256], 64297: [[43], 256], 64298: [[1513, 1473], 512], 64299: [[1513, 1474], 512], 64300: [[64329, 1473], 512], 64301: [[64329, 1474], 512], 64302: [[1488, 1463], 512], 64303: [[1488, 1464], 512], 64304: [[1488, 1468], 512], 64305: [[1489, 1468], 512], 64306: [[1490, 1468], 512], 64307: [[1491, 1468], 512], 64308: [[1492, 1468], 512], 64309: [[1493, 1468], 512], 64310: [[1494, 1468], 512], 64312: [[1496, 1468], 512], 64313: [[1497, 1468], 512], 64314: [[1498, 1468], 512], 64315: [[1499, 1468], 512], 64316: [[1500, 1468], 512], 64318: [[1502, 1468], 512], 64320: [[1504, 1468], 512], 64321: [[1505, 1468], 512], 64323: [[1507, 1468], 512], 64324: [[1508, 1468], 512], 64326: [[1510, 1468], 512], 64327: [[1511, 1468], 512], 64328: [[1512, 1468], 512], 64329: [[1513, 1468], 512], 64330: [[1514, 1468], 512], 64331: [[1493, 1465], 512], 64332: [[1489, 1471], 512], 64333: [[1499, 1471], 512], 64334: [[1508, 1471], 512], 64335: [[1488, 1500], 256], 64336: [[1649], 256], 64337: [[1649], 256], 64338: [[1659], 256], 64339: [[1659], 256], 64340: [[1659], 256], 64341: [[1659], 256], 64342: [[1662], 256], 64343: [[1662], 256], 64344: [[1662], 256], 64345: [[1662], 256], 64346: [[1664], 256], 64347: [[1664], 256], 64348: [[1664], 256], 64349: [[1664], 256], 64350: [[1658], 256], 64351: [[1658], 256], 64352: [[1658], 256], 64353: [[1658], 256], 64354: [[1663], 256], 64355: [[1663], 256], 64356: [[1663], 256], 64357: [[1663], 256], 64358: [[1657], 256], 64359: [[1657], 256], 64360: [[1657], 256], 64361: [[1657], 256], 64362: [[1700], 256], 64363: [[1700], 256], 64364: [[1700], 256], 64365: [[1700], 256], 64366: [[1702], 256], 64367: [[1702], 256], 64368: [[1702], 256], 64369: [[1702], 256], 64370: [[1668], 256], 64371: [[1668], 256], 64372: [[1668], 256], 64373: [[1668], 256], 64374: [[1667], 256], 64375: [[1667], 256], 64376: [[1667], 256], 64377: [[1667], 256], 64378: [[1670], 256], 64379: [[1670], 256], 64380: [[1670], 256], 64381: [[1670], 256], 64382: [[1671], 256], 64383: [[1671], 256], 64384: [[1671], 256], 64385: [[1671], 256], 64386: [[1677], 256], 64387: [[1677], 256], 64388: [[1676], 256], 64389: [[1676], 256], 64390: [[1678], 256], 64391: [[1678], 256], 64392: [[1672], 256], 64393: [[1672], 256], 64394: [[1688], 256], 64395: [[1688], 256], 64396: [[1681], 256], 64397: [[1681], 256], 64398: [[1705], 256], 64399: [[1705], 256], 64400: [[1705], 256], 64401: [[1705], 256], 64402: [[1711], 256], 64403: [[1711], 256], 64404: [[1711], 256], 64405: [[1711], 256], 64406: [[1715], 256], 64407: [[1715], 256], 64408: [[1715], 256], 64409: [[1715], 256], 64410: [[1713], 256], 64411: [[1713], 256], 64412: [[1713], 256], 64413: [[1713], 256], 64414: [[1722], 256], 64415: [[1722], 256], 64416: [[1723], 256], 64417: [[1723], 256], 64418: [[1723], 256], 64419: [[1723], 256], 64420: [[1728], 256], 64421: [[1728], 256], 64422: [[1729], 256], 64423: [[1729], 256], 64424: [[1729], 256], 64425: [[1729], 256], 64426: [[1726], 256], 64427: [[1726], 256], 64428: [[1726], 256], 64429: [[1726], 256], 64430: [[1746], 256], 64431: [[1746], 256], 64432: [[1747], 256], 64433: [[1747], 256], 64467: [[1709], 256], 64468: [[1709], 256], 64469: [[1709], 256], 64470: [[1709], 256], 64471: [[1735], 256], 64472: [[1735], 256], 64473: [[1734], 256], 64474: [[1734], 256], 64475: [[1736], 256], 64476: [[1736], 256], 64477: [[1655], 256], 64478: [[1739], 256], 64479: [[1739], 256], 64480: [[1733], 256], 64481: [[1733], 256], 64482: [[1737], 256], 64483: [[1737], 256], 64484: [[1744], 256], 64485: [[1744], 256], 64486: [[1744], 256], 64487: [[1744], 256], 64488: [[1609], 256], 64489: [[1609], 256], 64490: [[1574, 1575], 256], 64491: [[1574, 1575], 256], 64492: [[1574, 1749], 256], 64493: [[1574, 1749], 256], 64494: [[1574, 1608], 256], 64495: [[1574, 1608], 256], 64496: [[1574, 1735], 256], 64497: [[1574, 1735], 256], 64498: [[1574, 1734], 256], 64499: [[1574, 1734], 256], 64500: [[1574, 1736], 256], 64501: [[1574, 1736], 256], 64502: [[1574, 1744], 256], 64503: [[1574, 1744], 256], 64504: [[1574, 1744], 256], 64505: [[1574, 1609], 256], 64506: [[1574, 1609], 256], 64507: [[1574, 1609], 256], 64508: [[1740], 256], 64509: [[1740], 256], 64510: [[1740], 256], 64511: [[1740], 256] },
			64512: { 64512: [[1574, 1580], 256], 64513: [[1574, 1581], 256], 64514: [[1574, 1605], 256], 64515: [[1574, 1609], 256], 64516: [[1574, 1610], 256], 64517: [[1576, 1580], 256], 64518: [[1576, 1581], 256], 64519: [[1576, 1582], 256], 64520: [[1576, 1605], 256], 64521: [[1576, 1609], 256], 64522: [[1576, 1610], 256], 64523: [[1578, 1580], 256], 64524: [[1578, 1581], 256], 64525: [[1578, 1582], 256], 64526: [[1578, 1605], 256], 64527: [[1578, 1609], 256], 64528: [[1578, 1610], 256], 64529: [[1579, 1580], 256], 64530: [[1579, 1605], 256], 64531: [[1579, 1609], 256], 64532: [[1579, 1610], 256], 64533: [[1580, 1581], 256], 64534: [[1580, 1605], 256], 64535: [[1581, 1580], 256], 64536: [[1581, 1605], 256], 64537: [[1582, 1580], 256], 64538: [[1582, 1581], 256], 64539: [[1582, 1605], 256], 64540: [[1587, 1580], 256], 64541: [[1587, 1581], 256], 64542: [[1587, 1582], 256], 64543: [[1587, 1605], 256], 64544: [[1589, 1581], 256], 64545: [[1589, 1605], 256], 64546: [[1590, 1580], 256], 64547: [[1590, 1581], 256], 64548: [[1590, 1582], 256], 64549: [[1590, 1605], 256], 64550: [[1591, 1581], 256], 64551: [[1591, 1605], 256], 64552: [[1592, 1605], 256], 64553: [[1593, 1580], 256], 64554: [[1593, 1605], 256], 64555: [[1594, 1580], 256], 64556: [[1594, 1605], 256], 64557: [[1601, 1580], 256], 64558: [[1601, 1581], 256], 64559: [[1601, 1582], 256], 64560: [[1601, 1605], 256], 64561: [[1601, 1609], 256], 64562: [[1601, 1610], 256], 64563: [[1602, 1581], 256], 64564: [[1602, 1605], 256], 64565: [[1602, 1609], 256], 64566: [[1602, 1610], 256], 64567: [[1603, 1575], 256], 64568: [[1603, 1580], 256], 64569: [[1603, 1581], 256], 64570: [[1603, 1582], 256], 64571: [[1603, 1604], 256], 64572: [[1603, 1605], 256], 64573: [[1603, 1609], 256], 64574: [[1603, 1610], 256], 64575: [[1604, 1580], 256], 64576: [[1604, 1581], 256], 64577: [[1604, 1582], 256], 64578: [[1604, 1605], 256], 64579: [[1604, 1609], 256], 64580: [[1604, 1610], 256], 64581: [[1605, 1580], 256], 64582: [[1605, 1581], 256], 64583: [[1605, 1582], 256], 64584: [[1605, 1605], 256], 64585: [[1605, 1609], 256], 64586: [[1605, 1610], 256], 64587: [[1606, 1580], 256], 64588: [[1606, 1581], 256], 64589: [[1606, 1582], 256], 64590: [[1606, 1605], 256], 64591: [[1606, 1609], 256], 64592: [[1606, 1610], 256], 64593: [[1607, 1580], 256], 64594: [[1607, 1605], 256], 64595: [[1607, 1609], 256], 64596: [[1607, 1610], 256], 64597: [[1610, 1580], 256], 64598: [[1610, 1581], 256], 64599: [[1610, 1582], 256], 64600: [[1610, 1605], 256], 64601: [[1610, 1609], 256], 64602: [[1610, 1610], 256], 64603: [[1584, 1648], 256], 64604: [[1585, 1648], 256], 64605: [[1609, 1648], 256], 64606: [[32, 1612, 1617], 256], 64607: [[32, 1613, 1617], 256], 64608: [[32, 1614, 1617], 256], 64609: [[32, 1615, 1617], 256], 64610: [[32, 1616, 1617], 256], 64611: [[32, 1617, 1648], 256], 64612: [[1574, 1585], 256], 64613: [[1574, 1586], 256], 64614: [[1574, 1605], 256], 64615: [[1574, 1606], 256], 64616: [[1574, 1609], 256], 64617: [[1574, 1610], 256], 64618: [[1576, 1585], 256], 64619: [[1576, 1586], 256], 64620: [[1576, 1605], 256], 64621: [[1576, 1606], 256], 64622: [[1576, 1609], 256], 64623: [[1576, 1610], 256], 64624: [[1578, 1585], 256], 64625: [[1578, 1586], 256], 64626: [[1578, 1605], 256], 64627: [[1578, 1606], 256], 64628: [[1578, 1609], 256], 64629: [[1578, 1610], 256], 64630: [[1579, 1585], 256], 64631: [[1579, 1586], 256], 64632: [[1579, 1605], 256], 64633: [[1579, 1606], 256], 64634: [[1579, 1609], 256], 64635: [[1579, 1610], 256], 64636: [[1601, 1609], 256], 64637: [[1601, 1610], 256], 64638: [[1602, 1609], 256], 64639: [[1602, 1610], 256], 64640: [[1603, 1575], 256], 64641: [[1603, 1604], 256], 64642: [[1603, 1605], 256], 64643: [[1603, 1609], 256], 64644: [[1603, 1610], 256], 64645: [[1604, 1605], 256], 64646: [[1604, 1609], 256], 64647: [[1604, 1610], 256], 64648: [[1605, 1575], 256], 64649: [[1605, 1605], 256], 64650: [[1606, 1585], 256], 64651: [[1606, 1586], 256], 64652: [[1606, 1605], 256], 64653: [[1606, 1606], 256], 64654: [[1606, 1609], 256], 64655: [[1606, 1610], 256], 64656: [[1609, 1648], 256], 64657: [[1610, 1585], 256], 64658: [[1610, 1586], 256], 64659: [[1610, 1605], 256], 64660: [[1610, 1606], 256], 64661: [[1610, 1609], 256], 64662: [[1610, 1610], 256], 64663: [[1574, 1580], 256], 64664: [[1574, 1581], 256], 64665: [[1574, 1582], 256], 64666: [[1574, 1605], 256], 64667: [[1574, 1607], 256], 64668: [[1576, 1580], 256], 64669: [[1576, 1581], 256], 64670: [[1576, 1582], 256], 64671: [[1576, 1605], 256], 64672: [[1576, 1607], 256], 64673: [[1578, 1580], 256], 64674: [[1578, 1581], 256], 64675: [[1578, 1582], 256], 64676: [[1578, 1605], 256], 64677: [[1578, 1607], 256], 64678: [[1579, 1605], 256], 64679: [[1580, 1581], 256], 64680: [[1580, 1605], 256], 64681: [[1581, 1580], 256], 64682: [[1581, 1605], 256], 64683: [[1582, 1580], 256], 64684: [[1582, 1605], 256], 64685: [[1587, 1580], 256], 64686: [[1587, 1581], 256], 64687: [[1587, 1582], 256], 64688: [[1587, 1605], 256], 64689: [[1589, 1581], 256], 64690: [[1589, 1582], 256], 64691: [[1589, 1605], 256], 64692: [[1590, 1580], 256], 64693: [[1590, 1581], 256], 64694: [[1590, 1582], 256], 64695: [[1590, 1605], 256], 64696: [[1591, 1581], 256], 64697: [[1592, 1605], 256], 64698: [[1593, 1580], 256], 64699: [[1593, 1605], 256], 64700: [[1594, 1580], 256], 64701: [[1594, 1605], 256], 64702: [[1601, 1580], 256], 64703: [[1601, 1581], 256], 64704: [[1601, 1582], 256], 64705: [[1601, 1605], 256], 64706: [[1602, 1581], 256], 64707: [[1602, 1605], 256], 64708: [[1603, 1580], 256], 64709: [[1603, 1581], 256], 64710: [[1603, 1582], 256], 64711: [[1603, 1604], 256], 64712: [[1603, 1605], 256], 64713: [[1604, 1580], 256], 64714: [[1604, 1581], 256], 64715: [[1604, 1582], 256], 64716: [[1604, 1605], 256], 64717: [[1604, 1607], 256], 64718: [[1605, 1580], 256], 64719: [[1605, 1581], 256], 64720: [[1605, 1582], 256], 64721: [[1605, 1605], 256], 64722: [[1606, 1580], 256], 64723: [[1606, 1581], 256], 64724: [[1606, 1582], 256], 64725: [[1606, 1605], 256], 64726: [[1606, 1607], 256], 64727: [[1607, 1580], 256], 64728: [[1607, 1605], 256], 64729: [[1607, 1648], 256], 64730: [[1610, 1580], 256], 64731: [[1610, 1581], 256], 64732: [[1610, 1582], 256], 64733: [[1610, 1605], 256], 64734: [[1610, 1607], 256], 64735: [[1574, 1605], 256], 64736: [[1574, 1607], 256], 64737: [[1576, 1605], 256], 64738: [[1576, 1607], 256], 64739: [[1578, 1605], 256], 64740: [[1578, 1607], 256], 64741: [[1579, 1605], 256], 64742: [[1579, 1607], 256], 64743: [[1587, 1605], 256], 64744: [[1587, 1607], 256], 64745: [[1588, 1605], 256], 64746: [[1588, 1607], 256], 64747: [[1603, 1604], 256], 64748: [[1603, 1605], 256], 64749: [[1604, 1605], 256], 64750: [[1606, 1605], 256], 64751: [[1606, 1607], 256], 64752: [[1610, 1605], 256], 64753: [[1610, 1607], 256], 64754: [[1600, 1614, 1617], 256], 64755: [[1600, 1615, 1617], 256], 64756: [[1600, 1616, 1617], 256], 64757: [[1591, 1609], 256], 64758: [[1591, 1610], 256], 64759: [[1593, 1609], 256], 64760: [[1593, 1610], 256], 64761: [[1594, 1609], 256], 64762: [[1594, 1610], 256], 64763: [[1587, 1609], 256], 64764: [[1587, 1610], 256], 64765: [[1588, 1609], 256], 64766: [[1588, 1610], 256], 64767: [[1581, 1609], 256] },
			64768: { 64768: [[1581, 1610], 256], 64769: [[1580, 1609], 256], 64770: [[1580, 1610], 256], 64771: [[1582, 1609], 256], 64772: [[1582, 1610], 256], 64773: [[1589, 1609], 256], 64774: [[1589, 1610], 256], 64775: [[1590, 1609], 256], 64776: [[1590, 1610], 256], 64777: [[1588, 1580], 256], 64778: [[1588, 1581], 256], 64779: [[1588, 1582], 256], 64780: [[1588, 1605], 256], 64781: [[1588, 1585], 256], 64782: [[1587, 1585], 256], 64783: [[1589, 1585], 256], 64784: [[1590, 1585], 256], 64785: [[1591, 1609], 256], 64786: [[1591, 1610], 256], 64787: [[1593, 1609], 256], 64788: [[1593, 1610], 256], 64789: [[1594, 1609], 256], 64790: [[1594, 1610], 256], 64791: [[1587, 1609], 256], 64792: [[1587, 1610], 256], 64793: [[1588, 1609], 256], 64794: [[1588, 1610], 256], 64795: [[1581, 1609], 256], 64796: [[1581, 1610], 256], 64797: [[1580, 1609], 256], 64798: [[1580, 1610], 256], 64799: [[1582, 1609], 256], 64800: [[1582, 1610], 256], 64801: [[1589, 1609], 256], 64802: [[1589, 1610], 256], 64803: [[1590, 1609], 256], 64804: [[1590, 1610], 256], 64805: [[1588, 1580], 256], 64806: [[1588, 1581], 256], 64807: [[1588, 1582], 256], 64808: [[1588, 1605], 256], 64809: [[1588, 1585], 256], 64810: [[1587, 1585], 256], 64811: [[1589, 1585], 256], 64812: [[1590, 1585], 256], 64813: [[1588, 1580], 256], 64814: [[1588, 1581], 256], 64815: [[1588, 1582], 256], 64816: [[1588, 1605], 256], 64817: [[1587, 1607], 256], 64818: [[1588, 1607], 256], 64819: [[1591, 1605], 256], 64820: [[1587, 1580], 256], 64821: [[1587, 1581], 256], 64822: [[1587, 1582], 256], 64823: [[1588, 1580], 256], 64824: [[1588, 1581], 256], 64825: [[1588, 1582], 256], 64826: [[1591, 1605], 256], 64827: [[1592, 1605], 256], 64828: [[1575, 1611], 256], 64829: [[1575, 1611], 256], 64848: [[1578, 1580, 1605], 256], 64849: [[1578, 1581, 1580], 256], 64850: [[1578, 1581, 1580], 256], 64851: [[1578, 1581, 1605], 256], 64852: [[1578, 1582, 1605], 256], 64853: [[1578, 1605, 1580], 256], 64854: [[1578, 1605, 1581], 256], 64855: [[1578, 1605, 1582], 256], 64856: [[1580, 1605, 1581], 256], 64857: [[1580, 1605, 1581], 256], 64858: [[1581, 1605, 1610], 256], 64859: [[1581, 1605, 1609], 256], 64860: [[1587, 1581, 1580], 256], 64861: [[1587, 1580, 1581], 256], 64862: [[1587, 1580, 1609], 256], 64863: [[1587, 1605, 1581], 256], 64864: [[1587, 1605, 1581], 256], 64865: [[1587, 1605, 1580], 256], 64866: [[1587, 1605, 1605], 256], 64867: [[1587, 1605, 1605], 256], 64868: [[1589, 1581, 1581], 256], 64869: [[1589, 1581, 1581], 256], 64870: [[1589, 1605, 1605], 256], 64871: [[1588, 1581, 1605], 256], 64872: [[1588, 1581, 1605], 256], 64873: [[1588, 1580, 1610], 256], 64874: [[1588, 1605, 1582], 256], 64875: [[1588, 1605, 1582], 256], 64876: [[1588, 1605, 1605], 256], 64877: [[1588, 1605, 1605], 256], 64878: [[1590, 1581, 1609], 256], 64879: [[1590, 1582, 1605], 256], 64880: [[1590, 1582, 1605], 256], 64881: [[1591, 1605, 1581], 256], 64882: [[1591, 1605, 1581], 256], 64883: [[1591, 1605, 1605], 256], 64884: [[1591, 1605, 1610], 256], 64885: [[1593, 1580, 1605], 256], 64886: [[1593, 1605, 1605], 256], 64887: [[1593, 1605, 1605], 256], 64888: [[1593, 1605, 1609], 256], 64889: [[1594, 1605, 1605], 256], 64890: [[1594, 1605, 1610], 256], 64891: [[1594, 1605, 1609], 256], 64892: [[1601, 1582, 1605], 256], 64893: [[1601, 1582, 1605], 256], 64894: [[1602, 1605, 1581], 256], 64895: [[1602, 1605, 1605], 256], 64896: [[1604, 1581, 1605], 256], 64897: [[1604, 1581, 1610], 256], 64898: [[1604, 1581, 1609], 256], 64899: [[1604, 1580, 1580], 256], 64900: [[1604, 1580, 1580], 256], 64901: [[1604, 1582, 1605], 256], 64902: [[1604, 1582, 1605], 256], 64903: [[1604, 1605, 1581], 256], 64904: [[1604, 1605, 1581], 256], 64905: [[1605, 1581, 1580], 256], 64906: [[1605, 1581, 1605], 256], 64907: [[1605, 1581, 1610], 256], 64908: [[1605, 1580, 1581], 256], 64909: [[1605, 1580, 1605], 256], 64910: [[1605, 1582, 1580], 256], 64911: [[1605, 1582, 1605], 256], 64914: [[1605, 1580, 1582], 256], 64915: [[1607, 1605, 1580], 256], 64916: [[1607, 1605, 1605], 256], 64917: [[1606, 1581, 1605], 256], 64918: [[1606, 1581, 1609], 256], 64919: [[1606, 1580, 1605], 256], 64920: [[1606, 1580, 1605], 256], 64921: [[1606, 1580, 1609], 256], 64922: [[1606, 1605, 1610], 256], 64923: [[1606, 1605, 1609], 256], 64924: [[1610, 1605, 1605], 256], 64925: [[1610, 1605, 1605], 256], 64926: [[1576, 1582, 1610], 256], 64927: [[1578, 1580, 1610], 256], 64928: [[1578, 1580, 1609], 256], 64929: [[1578, 1582, 1610], 256], 64930: [[1578, 1582, 1609], 256], 64931: [[1578, 1605, 1610], 256], 64932: [[1578, 1605, 1609], 256], 64933: [[1580, 1605, 1610], 256], 64934: [[1580, 1581, 1609], 256], 64935: [[1580, 1605, 1609], 256], 64936: [[1587, 1582, 1609], 256], 64937: [[1589, 1581, 1610], 256], 64938: [[1588, 1581, 1610], 256], 64939: [[1590, 1581, 1610], 256], 64940: [[1604, 1580, 1610], 256], 64941: [[1604, 1605, 1610], 256], 64942: [[1610, 1581, 1610], 256], 64943: [[1610, 1580, 1610], 256], 64944: [[1610, 1605, 1610], 256], 64945: [[1605, 1605, 1610], 256], 64946: [[1602, 1605, 1610], 256], 64947: [[1606, 1581, 1610], 256], 64948: [[1602, 1605, 1581], 256], 64949: [[1604, 1581, 1605], 256], 64950: [[1593, 1605, 1610], 256], 64951: [[1603, 1605, 1610], 256], 64952: [[1606, 1580, 1581], 256], 64953: [[1605, 1582, 1610], 256], 64954: [[1604, 1580, 1605], 256], 64955: [[1603, 1605, 1605], 256], 64956: [[1604, 1580, 1605], 256], 64957: [[1606, 1580, 1581], 256], 64958: [[1580, 1581, 1610], 256], 64959: [[1581, 1580, 1610], 256], 64960: [[1605, 1580, 1610], 256], 64961: [[1601, 1605, 1610], 256], 64962: [[1576, 1581, 1610], 256], 64963: [[1603, 1605, 1605], 256], 64964: [[1593, 1580, 1605], 256], 64965: [[1589, 1605, 1605], 256], 64966: [[1587, 1582, 1610], 256], 64967: [[1606, 1580, 1610], 256], 65008: [[1589, 1604, 1746], 256], 65009: [[1602, 1604, 1746], 256], 65010: [[1575, 1604, 1604, 1607], 256], 65011: [[1575, 1603, 1576, 1585], 256], 65012: [[1605, 1581, 1605, 1583], 256], 65013: [[1589, 1604, 1593, 1605], 256], 65014: [[1585, 1587, 1608, 1604], 256], 65015: [[1593, 1604, 1610, 1607], 256], 65016: [[1608, 1587, 1604, 1605], 256], 65017: [[1589, 1604, 1609], 256], 65018: [[1589, 1604, 1609, 32, 1575, 1604, 1604, 1607, 32, 1593, 1604, 1610, 1607, 32, 1608, 1587, 1604, 1605], 256], 65019: [[1580, 1604, 32, 1580, 1604, 1575, 1604, 1607], 256], 65020: [[1585, 1740, 1575, 1604], 256] },
			65024: { 65040: [[44], 256], 65041: [[12289], 256], 65042: [[12290], 256], 65043: [[58], 256], 65044: [[59], 256], 65045: [[33], 256], 65046: [[63], 256], 65047: [[12310], 256], 65048: [[12311], 256], 65049: [[8230], 256], 65056: [, 230], 65057: [, 230], 65058: [, 230], 65059: [, 230], 65060: [, 230], 65061: [, 230], 65062: [, 230], 65063: [, 220], 65064: [, 220], 65065: [, 220], 65066: [, 220], 65067: [, 220], 65068: [, 220], 65069: [, 220], 65072: [[8229], 256], 65073: [[8212], 256], 65074: [[8211], 256], 65075: [[95], 256], 65076: [[95], 256], 65077: [[40], 256], 65078: [[41], 256], 65079: [[123], 256], 65080: [[125], 256], 65081: [[12308], 256], 65082: [[12309], 256], 65083: [[12304], 256], 65084: [[12305], 256], 65085: [[12298], 256], 65086: [[12299], 256], 65087: [[12296], 256], 65088: [[12297], 256], 65089: [[12300], 256], 65090: [[12301], 256], 65091: [[12302], 256], 65092: [[12303], 256], 65095: [[91], 256], 65096: [[93], 256], 65097: [[8254], 256], 65098: [[8254], 256], 65099: [[8254], 256], 65100: [[8254], 256], 65101: [[95], 256], 65102: [[95], 256], 65103: [[95], 256], 65104: [[44], 256], 65105: [[12289], 256], 65106: [[46], 256], 65108: [[59], 256], 65109: [[58], 256], 65110: [[63], 256], 65111: [[33], 256], 65112: [[8212], 256], 65113: [[40], 256], 65114: [[41], 256], 65115: [[123], 256], 65116: [[125], 256], 65117: [[12308], 256], 65118: [[12309], 256], 65119: [[35], 256], 65120: [[38], 256], 65121: [[42], 256], 65122: [[43], 256], 65123: [[45], 256], 65124: [[60], 256], 65125: [[62], 256], 65126: [[61], 256], 65128: [[92], 256], 65129: [[36], 256], 65130: [[37], 256], 65131: [[64], 256], 65136: [[32, 1611], 256], 65137: [[1600, 1611], 256], 65138: [[32, 1612], 256], 65140: [[32, 1613], 256], 65142: [[32, 1614], 256], 65143: [[1600, 1614], 256], 65144: [[32, 1615], 256], 65145: [[1600, 1615], 256], 65146: [[32, 1616], 256], 65147: [[1600, 1616], 256], 65148: [[32, 1617], 256], 65149: [[1600, 1617], 256], 65150: [[32, 1618], 256], 65151: [[1600, 1618], 256], 65152: [[1569], 256], 65153: [[1570], 256], 65154: [[1570], 256], 65155: [[1571], 256], 65156: [[1571], 256], 65157: [[1572], 256], 65158: [[1572], 256], 65159: [[1573], 256], 65160: [[1573], 256], 65161: [[1574], 256], 65162: [[1574], 256], 65163: [[1574], 256], 65164: [[1574], 256], 65165: [[1575], 256], 65166: [[1575], 256], 65167: [[1576], 256], 65168: [[1576], 256], 65169: [[1576], 256], 65170: [[1576], 256], 65171: [[1577], 256], 65172: [[1577], 256], 65173: [[1578], 256], 65174: [[1578], 256], 65175: [[1578], 256], 65176: [[1578], 256], 65177: [[1579], 256], 65178: [[1579], 256], 65179: [[1579], 256], 65180: [[1579], 256], 65181: [[1580], 256], 65182: [[1580], 256], 65183: [[1580], 256], 65184: [[1580], 256], 65185: [[1581], 256], 65186: [[1581], 256], 65187: [[1581], 256], 65188: [[1581], 256], 65189: [[1582], 256], 65190: [[1582], 256], 65191: [[1582], 256], 65192: [[1582], 256], 65193: [[1583], 256], 65194: [[1583], 256], 65195: [[1584], 256], 65196: [[1584], 256], 65197: [[1585], 256], 65198: [[1585], 256], 65199: [[1586], 256], 65200: [[1586], 256], 65201: [[1587], 256], 65202: [[1587], 256], 65203: [[1587], 256], 65204: [[1587], 256], 65205: [[1588], 256], 65206: [[1588], 256], 65207: [[1588], 256], 65208: [[1588], 256], 65209: [[1589], 256], 65210: [[1589], 256], 65211: [[1589], 256], 65212: [[1589], 256], 65213: [[1590], 256], 65214: [[1590], 256], 65215: [[1590], 256], 65216: [[1590], 256], 65217: [[1591], 256], 65218: [[1591], 256], 65219: [[1591], 256], 65220: [[1591], 256], 65221: [[1592], 256], 65222: [[1592], 256], 65223: [[1592], 256], 65224: [[1592], 256], 65225: [[1593], 256], 65226: [[1593], 256], 65227: [[1593], 256], 65228: [[1593], 256], 65229: [[1594], 256], 65230: [[1594], 256], 65231: [[1594], 256], 65232: [[1594], 256], 65233: [[1601], 256], 65234: [[1601], 256], 65235: [[1601], 256], 65236: [[1601], 256], 65237: [[1602], 256], 65238: [[1602], 256], 65239: [[1602], 256], 65240: [[1602], 256], 65241: [[1603], 256], 65242: [[1603], 256], 65243: [[1603], 256], 65244: [[1603], 256], 65245: [[1604], 256], 65246: [[1604], 256], 65247: [[1604], 256], 65248: [[1604], 256], 65249: [[1605], 256], 65250: [[1605], 256], 65251: [[1605], 256], 65252: [[1605], 256], 65253: [[1606], 256], 65254: [[1606], 256], 65255: [[1606], 256], 65256: [[1606], 256], 65257: [[1607], 256], 65258: [[1607], 256], 65259: [[1607], 256], 65260: [[1607], 256], 65261: [[1608], 256], 65262: [[1608], 256], 65263: [[1609], 256], 65264: [[1609], 256], 65265: [[1610], 256], 65266: [[1610], 256], 65267: [[1610], 256], 65268: [[1610], 256], 65269: [[1604, 1570], 256], 65270: [[1604, 1570], 256], 65271: [[1604, 1571], 256], 65272: [[1604, 1571], 256], 65273: [[1604, 1573], 256], 65274: [[1604, 1573], 256], 65275: [[1604, 1575], 256], 65276: [[1604, 1575], 256] },
			65280: { 65281: [[33], 256], 65282: [[34], 256], 65283: [[35], 256], 65284: [[36], 256], 65285: [[37], 256], 65286: [[38], 256], 65287: [[39], 256], 65288: [[40], 256], 65289: [[41], 256], 65290: [[42], 256], 65291: [[43], 256], 65292: [[44], 256], 65293: [[45], 256], 65294: [[46], 256], 65295: [[47], 256], 65296: [[48], 256], 65297: [[49], 256], 65298: [[50], 256], 65299: [[51], 256], 65300: [[52], 256], 65301: [[53], 256], 65302: [[54], 256], 65303: [[55], 256], 65304: [[56], 256], 65305: [[57], 256], 65306: [[58], 256], 65307: [[59], 256], 65308: [[60], 256], 65309: [[61], 256], 65310: [[62], 256], 65311: [[63], 256], 65312: [[64], 256], 65313: [[65], 256], 65314: [[66], 256], 65315: [[67], 256], 65316: [[68], 256], 65317: [[69], 256], 65318: [[70], 256], 65319: [[71], 256], 65320: [[72], 256], 65321: [[73], 256], 65322: [[74], 256], 65323: [[75], 256], 65324: [[76], 256], 65325: [[77], 256], 65326: [[78], 256], 65327: [[79], 256], 65328: [[80], 256], 65329: [[81], 256], 65330: [[82], 256], 65331: [[83], 256], 65332: [[84], 256], 65333: [[85], 256], 65334: [[86], 256], 65335: [[87], 256], 65336: [[88], 256], 65337: [[89], 256], 65338: [[90], 256], 65339: [[91], 256], 65340: [[92], 256], 65341: [[93], 256], 65342: [[94], 256], 65343: [[95], 256], 65344: [[96], 256], 65345: [[97], 256], 65346: [[98], 256], 65347: [[99], 256], 65348: [[100], 256], 65349: [[101], 256], 65350: [[102], 256], 65351: [[103], 256], 65352: [[104], 256], 65353: [[105], 256], 65354: [[106], 256], 65355: [[107], 256], 65356: [[108], 256], 65357: [[109], 256], 65358: [[110], 256], 65359: [[111], 256], 65360: [[112], 256], 65361: [[113], 256], 65362: [[114], 256], 65363: [[115], 256], 65364: [[116], 256], 65365: [[117], 256], 65366: [[118], 256], 65367: [[119], 256], 65368: [[120], 256], 65369: [[121], 256], 65370: [[122], 256], 65371: [[123], 256], 65372: [[124], 256], 65373: [[125], 256], 65374: [[126], 256], 65375: [[10629], 256], 65376: [[10630], 256], 65377: [[12290], 256], 65378: [[12300], 256], 65379: [[12301], 256], 65380: [[12289], 256], 65381: [[12539], 256], 65382: [[12530], 256], 65383: [[12449], 256], 65384: [[12451], 256], 65385: [[12453], 256], 65386: [[12455], 256], 65387: [[12457], 256], 65388: [[12515], 256], 65389: [[12517], 256], 65390: [[12519], 256], 65391: [[12483], 256], 65392: [[12540], 256], 65393: [[12450], 256], 65394: [[12452], 256], 65395: [[12454], 256], 65396: [[12456], 256], 65397: [[12458], 256], 65398: [[12459], 256], 65399: [[12461], 256], 65400: [[12463], 256], 65401: [[12465], 256], 65402: [[12467], 256], 65403: [[12469], 256], 65404: [[12471], 256], 65405: [[12473], 256], 65406: [[12475], 256], 65407: [[12477], 256], 65408: [[12479], 256], 65409: [[12481], 256], 65410: [[12484], 256], 65411: [[12486], 256], 65412: [[12488], 256], 65413: [[12490], 256], 65414: [[12491], 256], 65415: [[12492], 256], 65416: [[12493], 256], 65417: [[12494], 256], 65418: [[12495], 256], 65419: [[12498], 256], 65420: [[12501], 256], 65421: [[12504], 256], 65422: [[12507], 256], 65423: [[12510], 256], 65424: [[12511], 256], 65425: [[12512], 256], 65426: [[12513], 256], 65427: [[12514], 256], 65428: [[12516], 256], 65429: [[12518], 256], 65430: [[12520], 256], 65431: [[12521], 256], 65432: [[12522], 256], 65433: [[12523], 256], 65434: [[12524], 256], 65435: [[12525], 256], 65436: [[12527], 256], 65437: [[12531], 256], 65438: [[12441], 256], 65439: [[12442], 256], 65440: [[12644], 256], 65441: [[12593], 256], 65442: [[12594], 256], 65443: [[12595], 256], 65444: [[12596], 256], 65445: [[12597], 256], 65446: [[12598], 256], 65447: [[12599], 256], 65448: [[12600], 256], 65449: [[12601], 256], 65450: [[12602], 256], 65451: [[12603], 256], 65452: [[12604], 256], 65453: [[12605], 256], 65454: [[12606], 256], 65455: [[12607], 256], 65456: [[12608], 256], 65457: [[12609], 256], 65458: [[12610], 256], 65459: [[12611], 256], 65460: [[12612], 256], 65461: [[12613], 256], 65462: [[12614], 256], 65463: [[12615], 256], 65464: [[12616], 256], 65465: [[12617], 256], 65466: [[12618], 256], 65467: [[12619], 256], 65468: [[12620], 256], 65469: [[12621], 256], 65470: [[12622], 256], 65474: [[12623], 256], 65475: [[12624], 256], 65476: [[12625], 256], 65477: [[12626], 256], 65478: [[12627], 256], 65479: [[12628], 256], 65482: [[12629], 256], 65483: [[12630], 256], 65484: [[12631], 256], 65485: [[12632], 256], 65486: [[12633], 256], 65487: [[12634], 256], 65490: [[12635], 256], 65491: [[12636], 256], 65492: [[12637], 256], 65493: [[12638], 256], 65494: [[12639], 256], 65495: [[12640], 256], 65498: [[12641], 256], 65499: [[12642], 256], 65500: [[12643], 256], 65504: [[162], 256], 65505: [[163], 256], 65506: [[172], 256], 65507: [[175], 256], 65508: [[166], 256], 65509: [[165], 256], 65510: [[8361], 256], 65512: [[9474], 256], 65513: [[8592], 256], 65514: [[8593], 256], 65515: [[8594], 256], 65516: [[8595], 256], 65517: [[9632], 256], 65518: [[9675], 256] }

		};

		/***** Module to export */
		var unorm = {
			nfc: nfc,
			nfd: nfd,
			nfkc: nfkc,
			nfkd: nfkd
		};

		/*globals module:true,define:true*/

		// CommonJS
		{
			module.exports = unorm;

			// AMD
		}

		/***** Export as shim for String::normalize method *****/
		/*
     http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts#november_8_2013_draft_rev_21
      21.1.3.12 String.prototype.normalize(form="NFC")
     When the normalize method is called with one argument form, the following steps are taken:
      1. Let O be CheckObjectCoercible(this value).
     2. Let S be ToString(O).
     3. ReturnIfAbrupt(S).
     4. If form is not provided or undefined let form be "NFC".
     5. Let f be ToString(form).
     6. ReturnIfAbrupt(f).
     7. If f is not one of "NFC", "NFD", "NFKC", or "NFKD", then throw a RangeError Exception.
     8. Let ns be the String value is the result of normalizing S into the normalization form named by f as specified in Unicode Standard Annex #15, UnicodeNormalizatoin Forms.
     9. Return ns.
      The length property of the normalize method is 0.
      *NOTE* The normalize function is intentionally generic; it does not require that its this value be a String object. Therefore it can be transferred to other kinds of objects for use as a method.
  */
		unorm.shimApplied = false;

		if (!String.prototype.normalize) {
			String.prototype.normalize = function (form) {
				var str = "" + this;
				form = form === undefined ? "NFC" : form;

				if (form === "NFC") {
					return unorm.nfc(str);
				} else if (form === "NFD") {
					return unorm.nfd(str);
				} else if (form === "NFKC") {
					return unorm.nfkc(str);
				} else if (form === "NFKD") {
					return unorm.nfkd(str);
				} else {
					throw new RangeError("Invalid normalization form: " + form);
				}
			};

			unorm.shimApplied = true;
		}
	})(commonjsGlobal);
});

function normalize(form) {
	return unorm[form.toLowerCase()](this);
}

var forms = ['NFC', 'NFD', 'NFKC', 'NFKD'];

function test$138(normalize) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.normalize';


	describe(name, function () {

		var tests = void 0;

		before(_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee46() {
			var root, response;
			return regeneratorRuntime.wrap(function _callee46$(_context46) {
				while (1) {
					switch (_context46.prev = _context46.next) {
						case 0:
							this.timeout(10000);
							root = x$4.getElementById('root').textContent;
							_context46.next = 4;
							return x$6(root + '/String/normalize/tests.json');

						case 4:
							response = _context46.sent;
							_context46.next = 7;
							return response.json();

						case 7:
							tests = _context46.sent;

						case 8:
						case 'end':
							return _context46.stop();
					}
				}
			}, _callee46, this);
		})));

		it('should normalize texts', function () {
			var failed = [];
			var _tests = tests,
			    length = _tests.length;

			this.timeout(10000);

			var _loop9 = function _loop9() {
				var _tests$pop = tests.pop(),
				    _tests$pop2 = _toArray(_tests$pop),
				    source = _tests$pop2[0],
				    expected = _tests$pop2.slice(1);

				forms.forEach(function (form, index) {
					if (normalize.call(source, form) !== expected[index]) {
						failed.push('#' + tests.length + ':' + form + ':' + source);
					}
				});
			};

			while (0 < tests.length) {
				_loop9();
			}
			if (0 < failed.length) {
				x$25.error(new Error(failed.length + ' of ' + length + ' failed'));
				x$25.log(failed);
				// throw new Error(`${failed.length} of ${length} failed`);
			}
		});
	});
}

test$138(normalize, 'String.prototype.normalize#j0');

test$138(String.prototype.normalize);

function test$140(padEnd) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.padEnd';


	describe(name, function () {

		it('should add some 0 at end of a string', function () {
			var src = '1';
			var actual = padEnd.call(src, 3, '0');
			var expected = '100';
			assert.equal(actual, expected);
		});

		it('should add some spaces at end of a string', function () {
			var src = '1';
			var actual = padEnd.call(src, 3);
			var expected = '1  ';
			assert.equal(actual, expected);
		});

		it('should add some foos at end of a string', function () {
			var src = 'abc';
			var actual = padEnd.call(src, 10, 'foo');
			var expected = 'abcfoofoof';
			assert.equal(actual, expected);
		});
	});
}

function padEnd(targetLength) {
	var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

	var result = this;
	var count = (targetLength - result.length) / padString.length;
	if (0 < count) {
		while (0 < count--) {
			result += padString;
		}
		return result.slice(0, targetLength);
	}
	return result;
}

test$140(padEnd, 'String.prototype.padEnd#j0');

test$140(String.prototype.padEnd);

function test$142(padStart) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.padStart';


	describe(name, function () {

		it('should add some 0 at start of a string', function () {
			var src = '1';
			var actual = padStart.call(src, 3, '0');
			var expected = '001';
			assert.equal(actual, expected);
		});

		it('should add some spaces at start of a string', function () {
			var src = '1';
			var actual = padStart.call(src, 3);
			var expected = '  1';
			assert.equal(actual, expected);
		});

		it('should add some foos at start of a string', function () {
			var src = 'abc';
			var actual = padStart.call(src, 10, 'foo');
			var expected = 'foofoofabc';
			assert.equal(actual, expected);
		});
	});
}

function padStart(targetLength) {
	var padString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';

	var result = this;
	var d = targetLength - result.length;
	var count = d / padString.length;
	if (0 < count) {
		var pad = '';
		while (0 < count--) {
			pad += padString;
		}
		return pad.slice(0, d) + result;
	}
	return result;
}

test$142(padStart, 'String.prototype.padStart#j0');

test$142(String.prototype.padStart);

function test$144(repeat) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.repeat';


	describe(name, function () {

		it('should repeat the string for specified times', function () {
			var src = '3';
			var count = 10;
			var expected = '3333333333';
			assert.equal(repeat.call(src, count), expected);
		});
	});
}

function repeat(c) {
	var count = x$24(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

test$144(repeat, 'String.prototype.repeat#j0');

test$144(String.prototype.repeat);

function test$146(startsWith) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.startsWith';


	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			var fragment = Date.now().toString(16);
			var string1 = fragment + 'abc';
			var string2 = 'abc' + fragment;
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});

		it('should return whether the string starts with the given string or not [multibytes]', function () {
			var fragment = '\uD842\uDC34\uD842\uDC38\uD842\uDC38\uD842\uDC34' + Date.now().toString(16);
			var string1 = fragment + 'abc';
			var string2 = 'abc' + fragment;
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});
	});
}

function startsWith(fragment) {
	return this.slice(0, fragment.length) === fragment;
}

test$146(startsWith, 'String.prototype.startsWith#j0');

test$146(String.prototype.startsWith);

/* eslint-disable no-constant-condition */
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
			var _iterator$next20 = iterator.next(),
			    value = _iterator$next20.value,
			    done = _iterator$next20.done;

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
			var _iterator$next21 = iterator.next(),
			    value = _iterator$next21.value,
			    done = _iterator$next21.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [value1, value2]);
	});
});

/* eslint-disable no-magic-numbers, no-bitwise */
function stringToCodePoints(string) {
	var codePoints = [];
	for (var i = 0, length = string.length; i < length; i++) {
		var codePoint = string.codePointAt(i);
		if (codePoint < 0xDC00 || 0xDFFF < codePoint) {
			codePoints.push(codePoint);
		}
	}
	return codePoints;
}

/* eslint-disable no-magic-numbers */
describe('stringToCodePoints', function () {

	[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref186) {
		var _ref187 = _slicedToArray(_ref186, 3),
		    string = _ref187[0],
		    from = _ref187[1],
		    to = _ref187[2];

		it('should be return [' + from.toString(16) + ', ..., ' + to.toString(16) + ']', function () {
			var codePoints = stringToCodePoints(string);
			var expectedCodePoints = [];
			for (var i = from; i <= to; i++) {
				expectedCodePoints.push(i);
			}
			assert.deepEqual(codePoints, expectedCodePoints);
		});
	});
});

var hex$2 = 16;

var SymbolRegistry = function () {
	function SymbolRegistry() {
		_classCallCheck(this, SymbolRegistry);

		this.seed = x$26.now();
		this.registry = [];
	}

	_createClass(SymbolRegistry, [{
		key: 'get',
		value: function get() {
			var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
			var salt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$26.now();

			var symbol = 'Symbol(' + key + ')' + (this.seed + this.registry.length).toString(hex$2);
			this.registry.push([symbol, '' + key + salt]);
			return symbol;
		}
	}, {
		key: 'for',
		value: function _for(key) {
			if (isString(key)) {
				var length = this.registry.length;

				for (var i = 0; i < length; i += 1) {
					var item = this.registry[i];
					if (key === item[1]) {
						return item[0];
					}
				}
				return this.get(key, '');
			}
			throw new x$11('Symbol.for was called with non-string: ' + key);
		}
	}, {
		key: 'keyFor',
		value: function keyFor(sym) {
			var length = this.registry.length;

			for (var i = 0; i < length; i += 1) {
				var item = this.registry[i];
				if (sym === item[0]) {
					return item[1];
				}
			}
		}
	}, {
		key: 'Symbol',
		get: function get() {
			var _this41 = this;

			var fn = function fn(key) {
				return _this41.get(key);
			};
			function define(key, value) {
				x$7.defineProperty(fn, key, { value: value });
			}
			function defineReserved(key) {
				define(key, fn(key));
			}
			// Don't use [].forEach().
			// It may be undefined here.
			defineReserved('iterator');
			defineReserved('match');
			defineReserved('replace');
			defineReserved('search');
			defineReserved('split');
			defineReserved('hasInstance');
			defineReserved('isConcatSpreadable');
			defineReserved('unscopables');
			defineReserved('species');
			defineReserved('toPrimitive');
			defineReserved('toStringTag');
			define('for', function (key) {
				return _this41.for(key);
			});
			define('keyFor', function (key) {
				return _this41.keyFor(key);
			});
			return fn;
		}
	}]);

	return SymbolRegistry;
}();

var J0Symbol = new SymbolRegistry().Symbol;

function test$148(_Symbol) {
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

test$148(J0Symbol, 'J0Symbol');

test$148(x);

/* eslint-disable no-magic-numbers */
function isIn(x, min, max) {
	return x % 1 === 0 && min <= x && x <= max;
}

var pluralFunctions = [function () {
	// # 0
	return 0;
}, function (value) {
	// # 1
	return value === 1 ? 0 : 1;
}, function (value) {
	// # 2
	if (value === 0 || value === 1) {
		return 0;
	}
	return 1;
}, function (value) {
	// # 3
	if (value === 0) {
		return 0;
	} else if (value % 10 === 1 && value !== 11) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 4
	if (value === 1) {
		return 0;
	} else if (value === 2) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 5
	if (value === 1) {
		return 0;
	} else if (value === 0 || isIn(value % 100, 1, 19)) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 6
	if (value % 10 === 1 && value % 100 !== 11) {
		return 0;
	} else if (value % 10 === 0 || isIn(value % 100, 10, 20)) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 7
	if (value % 10 === 1 && value % 100 !== 11) {
		return 0;
	} else if (isIn(value % 10, 2, 4) && !isIn(value % 100, 12, 14)) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 8
	if (value === 1) {
		return 0;
	} else if (isIn(value, 2, 4)) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 9
	if (value === 1) {
		return 0;
	} else if (isIn(value % 10, 2, 4) && !isIn(value % 100, 12, 14)) {
		return 1;
	}
	return 2;
}, function (value) {
	// # 10
	if (value % 100 === 1) {
		return 0;
	} else if (value % 100 === 2) {
		return 1;
	} else if (isIn(value % 100, 3, 4)) {
		return 2;
	}
	return 3;
}, function (value) {
	// # 11
	if (value === 1) {
		return 0;
	} else if (value === 2) {
		return 1;
	} else if (isIn(value, 3, 6)) {
		return 2;
	} else if (isIn(value, 7, 10)) {
		return 3;
	}
	return 4;
}, function (value) {
	// # 12
	if (value === 1) {
		return 0;
	} else if (value === 2) {
		return 1;
	} else if (value === 0 || isIn(value, 3, 10)) {
		return 2;
	}
	return 3;
}, function (value) {
	// # 13
	if (value === 1) {
		return 0;
	} else if (value === 0 || isIn(value % 100, 1, 10)) {
		return 1;
	} else if (isIn(value % 100, 11, 19)) {
		return 2;
	}
	return 3;
}, function (value) {
	// # 14
	if (value % 10 === 1) {
		return 0;
	} else if (value % 10 === 2) {
		return 1;
	}
	return 2;
}];

var pluralFunction = void 0;

function template(templateString) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return keys(params).reduce(function (result, paramKey) {
		var value = params[paramKey];
		var matcher1 = new RegExp('\\$\\{' + paramKey + '\\}', 'g');
		var matcher2 = new RegExp('\\$\\{' + paramKey + '\\s*:\\s*(.*?)\\}', 'g');
		return result.replace(matcher2, function (match, body) {
			return body.trim().split(/\s*,\s*/)[pluralFunction(value)];
		}).replace(matcher1, value);
	}, templateString);
}

function setPluralForm() {
	var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

	pluralFunction = pluralFunctions[index];
}

template.setPluralForm = setPluralForm;
setPluralForm();

describe('template', function () {

	it('should return a string', function () {
		var source = '' + Date.now();
		assert.equal(template(source), source);
	});

	it('should insert a parameter', function () {
		var name = '' + Math.random();
		var source = 'Hello ${name}';
		var expected = 'Hello ' + name;
		assert.equal(template(source, { name: name }), expected);
	});

	it('should insert a parameter in plural form (1)', function () {
		template.setPluralForm(1);
		var source = '${count} ${count: apple, apples}';
		assert.equal(template(source, { count: 0 }), '0 apples');
		assert.equal(template(source, { count: 1 }), '1 apple');
		assert.equal(template(source, { count: 2 }), '2 apples');
	});

	it('should insert a parameter in plural form (2)', function () {
		template.setPluralForm(1);
		var source = '${count} ${count:apple,apples}';
		assert.equal(template(source, { count: 0 }), '0 apples');
		assert.equal(template(source, { count: 1 }), '1 apple');
		assert.equal(template(source, { count: 2 }), '2 apples');
	});
});

/* eslint no-magic-numbers: "off" */
function thermalRGB(value) {
	var ratio = value * 2;
	var b = clamp(1 - ratio, 0, 1);
	var r = clamp(ratio - 1, 0, 1);
	var g = clamp(0.8 - b - r, 0, 1);
	return [r, g, b];
}
function css(value) {
	return 'rgb(' + thermalRGB(value).map(function (v) {
		return x$40.floor(clamp(256 * v, 0, 255));
	}).join(',') + ')';
}
thermalRGB.css = css;

describe('thermalRGB', function () {

	[[0.00, [0, 0, 1]], [0.50, [0, 0.8, 0]], [1.00, [1, 0, 0]]].forEach(function (_ref188) {
		var _ref189 = _slicedToArray(_ref188, 2),
		    value = _ref189[0],
		    expected = _ref189[1];

		it('thermalRGB(' + value + ') \u2192 [' + expected.join(', ') + ']', function () {
			assert.deepEqual(thermalRGB(value), expected);
		});
	});

	it('should return an array of numbers', function () {
		assert.deepEqual(thermalRGB(0), [0, 0, 1]);
		assert.deepEqual(thermalRGB(1), [1, 0, 0]);
	});

	describe('thermalRGB.css', function () {

		[[0.00, 'rgb(0,0,255)'], [0.25, 'rgb(0,76,128)'], [0.50, 'rgb(0,204,0)'], [0.75, 'rgb(128,76,0)'], [1.00, 'rgb(255,0,0)']].forEach(function (_ref190) {
			var _ref191 = _slicedToArray(_ref190, 2),
			    value = _ref191[0],
			    expected = _ref191[1];

			it('thermalRGB.css(' + value + ') \u2192 ' + expected, function () {
				assert.equal(thermalRGB.css(value), expected);
			});
		});
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

		for (var _len54 = arguments.length, args = Array(_len54), _key54 = 0; _key54 < _len54; _key54++) {
			args[_key54] = arguments[_key54];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = x$27(function () {
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
		return new x$3(function (resolve) {
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

function test$150(URL) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'URL';


	describe(name, function () {

		[
		// [
		// 	['http://example\t.\norg', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['host', 'example.org'],
		// 		['hostname', 'example.org'],
		// 		['pathname', '/']
		// 	]
		// ],
		[['http://user:pass@foo:21/bar;par?b#c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'foo'], ['port', '21'], ['host', 'foo:21'], ['pathname', '/bar;par'], ['search', '?b'], ['hash', '#c']]], [['http:foo.com', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/foo.com'], ['search', ''], ['hash', '']]], [['\t   :foo.com   \n', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com'], ['search', ''], ['hash', '']]], [[' foo.com  ', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/foo.com'], ['search', ''], ['hash', '']]],
		// [
		// 	['a:\t foo.com', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'a:'],
		// 		['hostname', ''],
		// 		['port', ''],
		// 		['host', ''],
		// 		[decoder('pathname'), ' foo.com'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://f:21/ b ? d # e ', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', '21'],
		// 		['host', 'f:21'],
		// 		['pathname', '/%20b%20'],
		// 		['search', '?%20d%20'],
		// 		['hash', '# e']
		// 	]
		// ],
		// [
		// 	['http://f:/c', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', ''],
		// 		['host', 'f'],
		// 		['pathname', '/c'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://f:0/c', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', '0'],
		// 		['host', 'f:0'],
		// 		['pathname', '/c'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://f:00000000000000/c', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', '0'],
		// 		['host', 'f:0'],
		// 		['pathname', '/c'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://f:00000000000000000000080/c', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', ''],
		// 		['host', 'f'],
		// 		['pathname', '/c'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://f:b/c', 'http://example.org/foo/bar']
		// ],
		// [
		// 	['http://f: /c', 'http://example.org/foo/bar']
		// ],
		// [
		// 	['http://f:\n/c', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'f'],
		// 		['port', ''],
		// 		['host', 'f'],
		// 		['pathname', '/c'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		[['http://f:fifty-two/c', 'http://example.org/foo/bar']], [['http://f:9999/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', '9999'], ['host', 'f:9999'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f: 21 / b ? d # e ', 'http://example.org/foo/bar']], [['', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']]], [['  \t', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']]], [[':foo.com/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com/'], ['search', ''], ['hash', '']]], [[':foo.com\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com/'], ['search', ''], ['hash', '']]], [[':', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:'], ['search', ''], ['hash', '']]], [[':a', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:a'], ['search', ''], ['hash', '']]], [[':/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:/'], ['search', ''], ['hash', '']]], [[':\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:/'], ['search', ''], ['hash', '']]], [[':#', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:'], ['search', ''], ['hash', '']
		// ['hash', '#']
		]], [['#', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']
		// ['hash', '#']
		]], [['#/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#/']]], [['#\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#\\']]], [['#;?', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#;?']]], [['?', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'],
		// ['search', '?'],
		['search', ''], ['hash', '']]], [['/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/'], ['search', ''], ['hash', '']]], [[':23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:23'], ['search', ''], ['hash', '']]], [['/:23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/:23'], ['search', ''], ['hash', '']]], [['::', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/::'], ['search', ''], ['hash', '']]], [['::23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/::23'], ['search', ''], ['hash', '']]],
		// [
		// 	['foo://', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'foo:'],
		// 		['hostname', ''],
		// 		['port', ''],
		// 		['host', ''],
		// 		['pathname', '//'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		[['http://a:b@c:29/d', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['username', 'a'], ['password', 'b'], ['hostname', 'c'], ['port', '29'], ['host', 'c:29'], ['pathname', '/d'], ['search', ''], ['hash', '']]]
		// [
		// 	['http::@c:29', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['hostname', 'example.org'],
		// 		['port', ''],
		// 		['host', 'example.org'],
		// 		['pathname', '/foo/:@c:29'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://&a:foo(b]c@d:2/', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['username', '&a'],
		// 		[decoder('password'), 'foo(b]c'],
		// 		['hostname', 'd'],
		// 		['port', '2'],
		// 		['host', 'd:2'],
		// 		['pathname', '/'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://::@c@d:2', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['username', ''],
		// 		[decoder('password'), ':@c'],
		// 		['hostname', 'd'],
		// 		['port', '2'],
		// 		['host', 'd:2'],
		// 		['pathname', '/'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ],
		// [
		// 	['http://foo.com:b@d:2/', 'http://example.org/foo/bar'],
		// 	[
		// 		['protocol', 'http:'],
		// 		['username', 'foo.com'],
		// 		['password', 'b'],
		// 		['hostname', 'd'],
		// 		['port', '2'],
		// 		['host', 'd:2'],
		// 		['pathname', '/'],
		// 		['search', ''],
		// 		['hash', '']
		// 	]
		// ]
		].forEach(function (_ref192, index) {
			var _ref193 = _slicedToArray(_ref192, 2),
			    input = _ref193[0],
			    tests = _ref193[1];

			if (tests) {
				it('#' + index + ' should construct a new URL ' + input, function () {
					var url = new URL(input[0], input[1]);
					tests.forEach(function (_ref194) {
						var _ref195 = _slicedToArray(_ref194, 2),
						    key = _ref195[0],
						    expected = _ref195[1];

						var actual = typeof key === 'function' ? key(url) : url[key];
						assert.equal(actual, expected, input + ':' + key);
					});
				});
			} else {
				it('#' + index + ' should fail to construct a new URL ' + input[0], function () {
					var caught = void 0;
					try {
						new (Function.prototype.bind.apply(URL, [null].concat(_toConsumableArray(input))))();
					} catch (error) {
						caught = error;
					}
					if (!caught) {
						x$25.info('#' + index + ' An error is expected but not occurred');
					}
				});
			}
		});

		it('should have createObjectURL', function () {
			assert.equal(_typeof(URL.createObjectURL), 'function');
		});

		it('should have revokeObjectURL', function () {
			assert.equal(_typeof(URL.revokeObjectURL), 'function');
		});
	});
}

var x$58 = URL;

/* eslint-disable no-undefined, complexity, max-statements, max-lines */
/* eslint-disable no-magic-numbers, no-continue, no-labels, no-lonely-if */
// https://github.com/webcomponents/URL
var EOF = undefined;
var ALPHA = /[a-zA-Z]/;
var ALPHANUMERIC = /[a-zA-Z0-9+\-.]/;

var relative = {
	ftp: 21,
	file: 0,
	gopher: 70,
	http: 80,
	https: 443,
	ws: 80,
	wss: 443
};

var relativePathDotMapping = {
	'%2e': '.',
	'.%2e': '..',
	'%2e.': '..',
	'%2e%2e': '..'
};

function isRelativeScheme(scheme) {
	return !isUndefined(relative[scheme]);
}

function invalid() {
	clear.call(this);
	this._isInvalid = true;
}

function IDNAToASCII(h) {
	if (h === '') {
		invalid.call(this);
	}
	return h.toLowerCase();
}

function percentEscape(c) {
	var unicode = c.charCodeAt(0);
	if (unicode > 0x20 && unicode < 0x7F &&
	// " # < > ? `
	![0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60].includes(unicode)) {
		return c;
	}
	return x$53(c);
}

function percentEscapeQuery(c) {
	// XXX This actually needs to encode c using encoding and then convert the bytes one-by-one.
	var unicode = c.charCodeAt(0);
	if (unicode > 0x20 && unicode < 0x7F &&
	// " # < > ` (do not escape '?')
	![0x22, 0x23, 0x3C, 0x3E, 0x60].includes(unicode)) {
		return c;
	}
	return x$53(c);
}

function parse$3(input, stateOverride, base) {
	var state = stateOverride || 'scheme start';
	var cursor = 0;
	var buffer = '';
	var seenAt = false;
	var seenBracket = false;
	var errors = [];
	function err(message) {
		errors.push(message);
	}

	loop: while ((input[cursor - 1] !== EOF || cursor === 0) && !this._isInvalid) {
		var c = input[cursor];
		switch (state) {
			case 'scheme start':
				if (c && ALPHA.test(c)) {
					// ASCII-safe
					buffer += c.toLowerCase();
					state = 'scheme';
				} else if (stateOverride) {
					err('Invalid scheme.');
					break loop;
				} else {
					buffer = '';
					state = 'no scheme';
					continue;
				}
				break;
			case 'scheme':
				if (c && ALPHANUMERIC.test(c)) {
					// ASCII-safe
					buffer += c.toLowerCase();
				} else if (c === ':') {
					this._scheme = buffer;
					buffer = '';
					if (stateOverride) {
						break loop;
					}
					if (isRelativeScheme(this._scheme)) {
						this._isRelative = true;
					}
					if (this._scheme === 'file') {
						state = 'relative';
					} else if (this._isRelative && base && base._scheme === this._scheme) {
						state = 'relative or authority';
					} else if (this._isRelative) {
						state = 'authority first slash';
					} else {
						state = 'scheme data';
					}
				} else if (!stateOverride) {
					buffer = '';
					cursor = 0;
					state = 'no scheme';
					continue;
				} else if (c === EOF) {
					break loop;
				} else {
					err('Code point not allowed in scheme: ' + c);
					break loop;
				}
				break;
			case 'scheme data':
				if (c === '?') {
					this._query = '?';
					state = 'query';
				} else if (c === '#') {
					this._fragment = '#';
					state = 'fragment';
				} else {
					// XXX error handling
					if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
						this._schemeData += percentEscape(c);
					}
				}
				break;
			case 'no scheme':
				if (!base || !isRelativeScheme(base._scheme)) {
					err('Missing scheme.');
					invalid.call(this);
				} else {
					state = 'relative';
					continue;
				}
				break;
			case 'relative or authority':
				if (c === '/' && input[cursor + 1] === '/') {
					state = 'authority ignore slashes';
				} else {
					err('Expected /, got: ' + c);
					state = 'relative';
					continue;
				}
				break;
			case 'relative':
				this._isRelative = true;
				if (this._scheme !== 'file') {
					this._scheme = base._scheme;
				}
				if (c === EOF) {
					this._host = base._host;
					this._port = base._port;
					this._path = base._path.slice();
					this._query = base._query;
					this._username = base._username;
					this._password = base._password;
					break loop;
				} else if (c === '/' || c === '\\') {
					if (c === '\\') {
						err('\\ is an invalid code point.');
					}
					state = 'relative slash';
				} else if (c === '?') {
					this._host = base._host;
					this._port = base._port;
					this._path = base._path.slice();
					this._query = '?';
					this._username = base._username;
					this._password = base._password;
					state = 'query';
				} else if (c === '#') {
					this._host = base._host;
					this._port = base._port;
					this._path = base._path.slice();
					this._query = base._query;
					this._fragment = '#';
					this._username = base._username;
					this._password = base._password;
					state = 'fragment';
				} else {
					var nextC = input[cursor + 1];
					var nextNextC = input[cursor + 2];
					if (this._scheme !== 'file' || !ALPHA.test(c) || nextC !== ':' && nextC !== '|' || nextNextC !== EOF && nextNextC !== '/' && nextNextC !== '\\' && nextNextC !== '?' && nextNextC !== '#') {
						this._host = base._host;
						this._port = base._port;
						this._username = base._username;
						this._password = base._password;
						this._path = base._path.slice();
						this._path.pop();
					}
					state = 'relative path';
					continue;
				}
				break;
			case 'relative slash':
				if (c === '/' || c === '\\') {
					if (c === '\\') {
						err('\\ is an invalid code point.');
					}
					if (this._scheme === 'file') {
						state = 'file host';
					} else {
						state = 'authority ignore slashes';
					}
				} else {
					if (this._scheme !== 'file') {
						this._host = base._host;
						this._port = base._port;
						this._username = base._username;
						this._password = base._password;
					}
					state = 'relative path';
					continue;
				}
				break;

			case 'authority first slash':
				if (c === '/') {
					state = 'authority second slash';
				} else {
					err('Expected \'/\', got: ' + c);
					state = 'authority ignore slashes';
					continue;
				}
				break;

			case 'authority second slash':
				state = 'authority ignore slashes';
				if (c !== '/') {
					err('Expected \'/\', got: ' + c);
					continue;
				}
				break;
			case 'authority ignore slashes':
				if (c !== '/' && c !== '\\') {
					state = 'authority';
					continue;
				} else {
					err('Expected authority, got: ' + c);
				}
				break;
			case 'authority':
				if (c === '@') {
					if (seenAt) {
						err('@ already seen.');
						buffer += '%40';
					}
					seenAt = true;
					for (var i = 0, _buffer = buffer, length = _buffer.length; i < length; i++) {
						var cp = buffer[i];
						if (cp === '\t' || cp === '\n' || cp === '\r') {
							err('Invalid whitespace in authority.');
							continue;
						}
						// XXX check URL code points
						if (cp === ':' && this._password === null) {
							this._password = '';
							continue;
						}
						var tempC = percentEscape(cp);
						if (this._password === null) {
							this._username += tempC;
						} else {
							this._password += tempC;
						}
					}
					buffer = '';
				} else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
					cursor -= buffer.length;
					buffer = '';
					state = 'host';
					continue;
				} else {
					buffer += c;
				}
				break;
			case 'file host':
				if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
					if (buffer.length === 2 && ALPHA.test(buffer[0]) && (buffer[1] === ':' || buffer[1] === '|')) {
						state = 'relative path';
					} else if (buffer.length === 0) {
						state = 'relative path start';
					} else {
						this._host = IDNAToASCII.call(this, buffer);
						buffer = '';
						state = 'relative path start';
					}
					continue;
				} else if (c === '\t' || c === '\n' || c === '\r') {
					err('Invalid whitespace in file host.');
				} else {
					buffer += c;
				}
				break;
			case 'host':
			case 'hostname':
				if (c === ':' && !seenBracket) {
					// XXX host parsing
					this._host = IDNAToASCII.call(this, buffer);
					buffer = '';
					state = 'port';
					if (stateOverride === 'hostname') {
						break loop;
					}
				} else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#') {
					this._host = IDNAToASCII.call(this, buffer);
					buffer = '';
					state = 'relative path start';
					if (stateOverride) {
						break loop;
					}
					continue;
				} else if ('\t' !== c && '\n' !== c && '\r' !== c) {
					if (c === '[') {
						seenBracket = true;
					} else if (c === ']') {
						seenBracket = false;
					}
					buffer += c;
				} else {
					err('Invalid code point in host/hostname: ' + c);
				}
				break;
			case 'port':
				if (/[0-9]/.test(c)) {
					buffer += c;
				} else if (c === EOF || c === '/' || c === '\\' || c === '?' || c === '#' || stateOverride) {
					if (buffer !== '') {
						var temp = parseInt(buffer, 10);
						if (temp !== relative[this._scheme]) {
							this._port = '' + temp;
						}
						buffer = '';
					}
					if (stateOverride) {
						break loop;
					}
					state = 'relative path start';
					continue;
				} else if (c === '\t' || c === '\n' || c === '\r') {
					err('Invalid code point in port: ' + c);
				} else {
					invalid.call(this);
				}
				break;
			case 'relative path start':
				if (c === '\\') {
					err('\'\\\' not allowed in path.');
				}
				state = 'relative path';
				if (c !== '/' && c !== '\\') {
					continue;
				}
				break;
			case 'relative path':
				if (c === EOF || c === '/' || c === '\\' || !stateOverride && (c === '?' || c === '#')) {
					if (c === '\\') {
						err('\\ not allowed in relative path.');
					}
					var tmp = relativePathDotMapping[buffer.toLowerCase()];
					if (tmp) {
						buffer = tmp;
					}
					if (buffer === '..') {
						this._path.pop();
						if (c !== '/' && c !== '\\') {
							this._path.push('');
						}
					} else if (buffer === '.' && c !== '/' && c !== '\\') {
						this._path.push('');
					} else if (buffer !== '.') {
						if (this._scheme === 'file' && this._path.length === 0 && buffer.length === 2 && ALPHA.test(buffer[0]) && buffer[1] === '|') {
							buffer = buffer[0] + ':';
						}
						this._path.push(buffer);
					}
					buffer = '';
					if (c === '?') {
						this._query = '?';
						state = 'query';
					} else if (c === '#') {
						this._fragment = '#';
						state = 'fragment';
					}
				} else if (c !== '\t' && c !== '\n' && c !== '\r') {
					buffer += percentEscape(c);
				}
				break;
			case 'query':
				if (!stateOverride && c === '#') {
					this._fragment = '#';
					state = 'fragment';
				} else if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
					this._query += percentEscapeQuery(c);
				}
				break;
			case 'fragment':
				if (c !== EOF && c !== '\t' && c !== '\n' && c !== '\r') {
					this._fragment += c;
				}
				break;
			default:
		}
		cursor++;
	}
}

function clear() {
	this._scheme = '';
	this._schemeData = '';
	this._username = '';
	this._password = null;
	this._host = '';
	this._port = '';
	this._path = [];
	this._query = '';
	this._fragment = '';
	this._isInvalid = false;
	this._isRelative = false;
}

var URL$1 = function () {
	function URL$1(url, base) {
		_classCallCheck(this, URL$1);

		if (!isUndefined(base) && !(base instanceof URL$1)) {
			base = new URL$1(String(base));
		}
		url = String(url);
		this._url = url;
		clear.call(this);
		var input = url.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, '');
		// encoding = encoding || 'utf-8'
		parse$3.call(this, input, null, base);
	}

	_createClass(URL$1, [{
		key: 'toString',
		value: function toString() {
			return this.href;
		}
	}, {
		key: 'href',
		get: function get() {
			if (this._isInvalid) {
				return this._url;
			}
			var authority = '';
			if (this._username !== '' || this._password !== null) {
				authority = '' + this._username + (this._password === null ? '' : ':' + this._password) + '@';
			}
			var host = this._isRelative ? '//' + authority + this.host : '';
			return '' + this.protocol + host + this.pathname + this._query + this._fragment;
		},
		set: function set(href) {
			clear.call(this);
			parse$3.call(this, href);
		}
	}, {
		key: 'protocol',
		get: function get() {
			return this._scheme + ':';
		},
		set: function set(protocol) {
			if (this._isInvalid) {
				return;
			}
			parse$3.call(this, protocol + ':', 'scheme start');
		}
	}, {
		key: 'host',
		get: function get() {
			if (this._isInvalid) {
				return '';
			}
			return this._port ? this._host + ':' + this._port : this._host;
		},
		set: function set(host) {
			if (this._isInvalid || !this._isRelative) {
				return;
			}
			parse$3.call(this, host, 'host');
		}
	}, {
		key: 'hostname',
		get: function get() {
			return this._host;
		},
		set: function set(hostname) {
			if (this._isInvalid || !this._isRelative) {
				return;
			}
			parse$3.call(this, hostname, 'hostname');
		}
	}, {
		key: 'username',
		get: function get() {
			return this._username;
		}
	}, {
		key: 'password',
		get: function get() {
			return this._password;
		}
	}, {
		key: 'port',
		get: function get() {
			return this._port;
		},
		set: function set(port) {
			if (this._isInvalid || !this._isRelative) {
				return;
			}
			parse$3.call(this, port, 'port');
		}
	}, {
		key: 'pathname',
		get: function get() {
			if (this._isInvalid) {
				return '';
			}
			return this._isRelative ? '/' + this._path.join('/') : this._schemeData;
		},
		set: function set(pathname) {
			if (this._isInvalid || !this._isRelative) {
				return;
			}
			this._path = [];
			parse$3.call(this, pathname, 'relative path start');
		}
	}, {
		key: 'search',
		get: function get() {
			return this._isInvalid || !this._query || this._query === '?' ? '' : this._query;
		},
		set: function set(search) {
			if (this._isInvalid || !this._isRelative) {
				return;
			}
			this._query = '?';
			if (search[0] === '?') {
				search = search.slice(1);
			}
			parse$3.call(this, search, 'query');
		}
	}, {
		key: 'hash',
		get: function get() {
			return this._isInvalid || !this._fragment || this._fragment === '#' ? '' : this._fragment;
		},
		set: function set(hash) {
			if (this._isInvalid) {
				return;
			}
			this._fragment = '#';
			if (hash[0] === '#') {
				hash = hash.slice(1);
			}
			parse$3.call(this, hash, 'fragment');
		}
	}, {
		key: 'origin',
		get: function get() {
			if (this._isInvalid || !this._scheme) {
				return '';
			}
			// javascript: Gecko returns String(""), WebKit/Blink String("null")
			// Gecko throws error for "data://"
			// data: Gecko returns "", Blink returns "data://", WebKit returns "null"
			// Gecko returns String("") for file: mailto:
			// WebKit/Blink returns String("SCHEME://") for file: mailto:
			switch (this._scheme) {
				case 'data':
				case 'file':
				case 'javascript':
				case 'mailto':
					return 'null';
				default:
			}
			if (!this.host) {
				return '';
			}
			return this._scheme + '://' + this.host + '}';
		}
	}]);

	return URL$1;
}();

x$7.defineProperties(URL$1, {
	createObjectURL: { value: x$58.createObjectURL },
	revokeObjectURL: { value: x$58.revokeObjectURL }
});

test$150(URL$1, 'URL#j0');

test$150(x$58);

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_StringList2) {
	_inherits(URLSearchParams$2, _StringList2);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? init.replace(/^\?/, '').split(separator).map(function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref196) {
				var _ref197 = _slicedToArray(_ref196, 2),
				    name = _ref197[0],
				    _ref197$ = _ref197[1],
				    value = _ref197$ === undefined ? '' : _ref197$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

/* eslint-disable no-constant-condition */


function tests$16(URLSearchParams) {
	var testName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'URLSearchParams';


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
				var _iterator$next22 = iterator.next(),
				    value = _iterator$next22.value,
				    done = _iterator$next22.done;

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
				var _iterator$next23 = iterator.next(),
				    value = _iterator$next23.value,
				    done = _iterator$next23.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1, value2]);
		});
	});
}

tests$16(URLSearchParams$2, 'URLSearchParams#j0');

tests$16(x$14);

var Vector = function () {
	function Vector(array) {
		_classCallCheck(this, Vector);

		this.array = array.slice();
	}

	_createClass(Vector, [{
		key: 'get',
		value: function get(index) {
			return this.array[index];
		}
	}, {
		key: 'set',
		value: function set(index, value) {
			this.array[index] = value;
			return this;
		}
	}, {
		key: 'setNorm',
		value: function setNorm(norm) {
			this.norm = norm;
			return this;
		}
	}, {
		key: 'add',
		value: function add() {
			for (var _len55 = arguments.length, vectors = Array(_len55), _key55 = 0; _key55 < _len55; _key55++) {
				vectors[_key55] = arguments[_key55];
			}

			return new Vector(this.array.map(function (component, index) {
				return vectors.reduce(function (sum, vector) {
					return sum + vector.get(index);
				}, component);
			}));
		}
	}, {
		key: 'subtract',
		value: function subtract() {
			for (var _len56 = arguments.length, vectors = Array(_len56), _key56 = 0; _key56 < _len56; _key56++) {
				vectors[_key56] = arguments[_key56];
			}

			return new Vector(this.array.map(function (component, index) {
				return vectors.reduce(function (sum, vector) {
					return sum - vector.get(index);
				}, component);
			}));
		}
	}, {
		key: 'scale',
		value: function scale(scalar) {
			return new Vector(this.array.map(function (component) {
				return component * scalar;
			}));
		}
	}, {
		key: 'toString',
		value: function toString() {
			var digits = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
			var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

			return this.array.map(function (x) {
				return x.toFixed(digits);
			}).join(separator);
		}
	}, {
		key: 'dim',
		get: function get() {
			return this.array.length;
		}
	}, {
		key: 'norm',
		get: function get() {
			return x$40.hypot.apply(null, this.array);
		},
		set: function set(norm) {
			this.array = this.scale(norm / this.norm).array;
		}
	}]);

	return Vector;
}();

var delta = 0.000000001;

describe('Vector', function () {

	it('should have a copy of an array', function () {
		var components = [1, 2, 3];
		var v = new Vector(components);
		assert.deepEqual(v.array, components);
		assert(v.array !== components);
	});

	describe('Vector.prototype.get', function () {
		var components = [1, 2, 3];
		[[0, 1], [1, 2], [2, 3]].forEach(function (_ref198) {
			var _ref199 = _slicedToArray(_ref198, 2),
			    index = _ref199[0],
			    expected = _ref199[1];

			it('should return ' + expected, function () {
				var v = new Vector(components);
				assert.equal(v.get(index), expected);
			});
		});
	});

	describe('Vector.prototype.set', function () {
		var components = [0, 1, 2];
		[[0, 7], [1, 8], [2, 9]].forEach(function (_ref200) {
			var _ref201 = _slicedToArray(_ref200, 2),
			    index = _ref201[0],
			    expected = _ref201[1];

			it('should return ' + expected, function () {
				var v = new Vector(components);
				v.set(index, expected);
				assert.equal(v.get(index), expected);
			});
		});
	});

	describe('Vector.prototype.dim', function () {
		[[[0], 1], [[0, 0], 2], [[0, 0, 0], 3]].forEach(function (_ref202) {
			var _ref203 = _slicedToArray(_ref202, 2),
			    components = _ref203[0],
			    expected = _ref203[1];

			it('should return ' + expected, function () {
				var v = new Vector(components);
				assert.equal(v.dim, expected);
			});
		});
	});

	describe('Vector.prototype.add', function () {
		var components1 = [0, 1, 2];
		[[[0, 0, 0], [0, 1, 2]], [[3, 4, 5], [3, 5, 7]]].forEach(function (_ref204) {
			var _ref205 = _slicedToArray(_ref204, 2),
			    components2 = _ref205[0],
			    expected = _ref205[1];

			it('should return [' + expected.join(', ') + ']', function () {
				var v1 = new Vector(components1);
				var v2 = new Vector(components2);
				assert.deepEqual(v1.add(v2).array, expected);
			});
		});
	});

	describe('Vector.prototype.subtract', function () {
		var components1 = [0, 1, 2];
		[[[0, 0, 0], [0, 1, 2]], [[3, 4, 5], [-3, -3, -3]]].forEach(function (_ref206) {
			var _ref207 = _slicedToArray(_ref206, 2),
			    components2 = _ref207[0],
			    expected = _ref207[1];

			it('should return [' + expected.join(', ') + ']', function () {
				var v1 = new Vector(components1);
				var v2 = new Vector(components2);
				assert.deepEqual(v1.subtract(v2).array, expected);
			});
		});
	});

	describe('Vector.prototype.scale', function () {
		var components = [0, 1, 2];
		[[0, [0, 0, 0]], [1, [0, 1, 2]], [3, [0, 3, 6]]].forEach(function (_ref208) {
			var _ref209 = _slicedToArray(_ref208, 2),
			    scalar = _ref209[0],
			    expected = _ref209[1];

			it('should return [' + expected.join(', ') + ']', function () {
				var v = new Vector(components);
				assert.deepEqual(v.scale(scalar).array, expected);
			});
		});
	});

	describe('Vector.prototype.norm (getter)', function () {
		[[[1], 1], [[3, 4], 5], [[5, 12], 13], [[1, 2, 8, 10], 13], [[1, 2, 2, 4, 12], 13]].forEach(function (_ref210) {
			var _ref211 = _slicedToArray(_ref210, 2),
			    components = _ref211[0],
			    expected = _ref211[1];

			it('should return ' + expected, function () {
				var v = new Vector(components);
				assert.approximately(v.norm, expected, delta);
			});
		});
	});

	describe('Vector.prototype.norm (setter)', function () {
		[[[1], 1], [[3, 4], 5], [[5, 12], 13], [[1, 2, 8, 10], 13], [[1, 2, 2, 4, 12], 13]].forEach(function (_ref212) {
			var _ref213 = _slicedToArray(_ref212, 2),
			    components = _ref213[0],
			    norm = _ref213[1];

			it('should return [' + components.join(', ') + ']', function () {
				var v = new Vector(components).scale(100);
				v.norm = norm;
				assert.approximately(v.norm, norm, delta);
				components.forEach(function (component, index) {
					assert.approximately(v.get(index), component, delta);
				});
			});
		});
	});

	describe('Vector.prototype.toString', function () {
		[[[1], 2, '', '1.00'], [[3, 4], 1, '-', '3.0-4.0'], [[5, 12], 0, ', ', '5, 12']].forEach(function (_ref214) {
			var _ref215 = _slicedToArray(_ref214, 4),
			    components = _ref215[0],
			    digits = _ref215[1],
			    separator = _ref215[2],
			    expected = _ref215[3];

			it('should return ' + expected, function () {
				var v = new Vector(components);
				assert.equal(v.toString(digits, separator), expected);
			});
		});
	});
});

describe('wait', function () {
	it('should return a promise and it should resolved with given data', _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee47() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee47$(_context47) {
			while (1) {
				switch (_context47.prev = _context47.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.8;
						_context47.next = 6;
						return wait(duration, data);

					case 6:
						actual = _context47.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context47.stop();
				}
			}
		}, _callee47, this);
	})));
});

var x$59 = canvasTestClass;

mocha.run().once('end', function () {
	var result = 0 < this.stats.failures ? 'failed' : 'passed';
	x$4.title += '[' + result + ']';
	x$4.body.classList.add('done');
	var tests = x$4.querySelectorAll('.test');
	var testList = [];

	var _loop10 = function _loop10(i) {
		var testElement = tests[i];
		testElement.querySelector('h2').textContent.replace(/^\s*\[\s*id\s*:\s*(.*?)\s*\]/, function (match, name) {
			testElement.setAttribute('data-graph', name);
			testList.push(testElement);
		});
	};

	for (var i = tests.length; i--;) {
		_loop10(i);
	}
	var canvasList = x$4.querySelectorAll('.' + x$59);
	var list = [];
	for (var i = canvasList.length; i--;) {
		list[i] = canvasList[i];
	}
	for (var _i3 = list.length; _i3--;) {
		var canvas = list[_i3];
		var name = canvas.getAttribute('data-name');
		for (var j = testList.length; j--;) {
			var _testElement = testList[j];
			var graphName = _testElement.getAttribute('data-graph');
			if (graphName === name) {
				_testElement.appendChild(canvas);
			}
		}
	}
});
}());