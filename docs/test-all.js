(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _operators;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var wait$1 = function () {
	var _ref113 = _asyncToGenerator(regeneratorRuntime.mark(function _callee58(duration, data) {
		return regeneratorRuntime.wrap(function _callee58$(_context58) {
			while (1) {
				switch (_context58.prev = _context58.next) {
					case 0:
						_context58.next = 2;
						return new Promise(function (resolve) {
							setTimeout(resolve, duration);
						});

					case 2:
						return _context58.abrupt('return', data);

					case 3:
					case 'end':
						return _context58.stop();
				}
			}
		}, _callee58, this);
	}));

	return function wait$1(_x108, _x109) {
		return _ref113.apply(this, arguments);
	};
}();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function test$1(generator) {
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

var x$1 = Iterator;

function generator() {
	var array = this.slice();
	var length = array.length;

	var index = 0;
	return new x$1(function () {
		return {
			value: array[index],
			done: length <= index++
		};
	});
}

test$1(generator, 'Array.prototype[Symbol.iterator]#j0');

test$1(Array.prototype[Symbol.iterator]);

function test$3(copyWithin) {
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

test$3(copyWithin, 'Array.prototype.copyWithin#j0');

test$3(Array.prototype.copyWithin);

function test$5(entries) {
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
	return new x$1(function () {
		return {
			value: [index, _this[index]],
			done: _this.length < ++index
		};
	});
}

test$5(entries, 'Array.prototype.entries#j0');

test$5(Array.prototype.entries);

function test$7(copyWithin) {
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

test$7(copyWithin$2, 'Array.prototype.fill#j0');

test$7(Array.prototype.fill);

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

function test$9(find) {
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

test$9(findIndex, 'Array.prototype.find#j0');

test$9(Array.prototype.find);

function findIndex$2(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

function test$11(findIndex) {
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

test$11(findIndex$2, 'Array.prototype.findIndex#j0');

test$11(Array.prototype.findIndex);

var x$2 = isUndefined;

var x$3 = passThrough;

function arrayFrom(iterable) {
	var mapFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$3;
	var thisArg = arguments[2];

	var result = [];
	if (x$2(iterable.length)) {
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

function test$13(arrayFrom) {
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
			var iterable = _defineProperty({}, Symbol.iterator, function () {
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
			var iterable = _defineProperty({}, Symbol.iterator, function () {
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

test$13(arrayFrom, 'Array.from#j0');

test$13(Array.from);

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var length = this.length, i = fromIndex < 0 ? length + fromIndex : fromIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test$15(includes) {
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

test$15(includes, 'Array.prototype.includes#j0');

test$15(Array.prototype.includes);

function arrayOf() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args;
}

function test$17(arrayOf) {
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

test$17(arrayOf, 'Array.of#j0');

test$17(Array.of);

var x$4 = Uint8Array;

var x$5 = String;

var fromCharCode = x$5.fromCharCode;


var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

function arrayBufferToString$1(arrayBuffer) {
	var view = new x$4(arrayBuffer);
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

var x$6 = readBlob;

var x$7 = document;

function createArrayBuffer(data) {
	return x$6(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
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

						assert.equal(arrayBufferToString$1(arrayBuffer), src);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));

	it('should return こんにちは', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
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

						assert.equal(arrayBufferToString$1(arrayBuffer), src);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));

	it('should return wagahaiha-nekodearu.txt', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		var root, src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						root = x$7.getElementById('root').text;
						_context3.next = 3;
						return fetch(root + '/arrayBufferToString/wagahaiha-nekodearu.txt');

					case 3:
						_context3.next = 5;
						return _context3.sent.text();

					case 5:
						src = _context3.sent;
						_context3.next = 8;
						return createArrayBuffer(src);

					case 8:
						arrayBuffer = _context3.sent;

						assert.equal(arrayBufferToString$1(arrayBuffer), src);

					case 10:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});

function test$19(assign) {
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

var x$8 = Object;

var assign$1 = x$8.assign;

test$19(assign$1, 'assign');

var x$9 = JSON;

var x$10 = Blob;

var x$11 = ArrayBuffer;

var x$12 = DataView;

var x$13 = TypeError;

var x$14 = Promise;

var x$15 = FormData;

var x$16 = parseFormData;

var x$17 = isString;

var x$18 = URLSearchParams;

var x$19 = isInstanceOf;

var x$20 = isArrayBufferView;

var x$21 = arrayBufferToString;

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new x$4(buf.byteLength);
	view.set(new x$4(buf));
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
			} else if (x$17(body)) {
				this.bodyText = body;
			} else if (x$19(body, x$10)) {
				this.bodyBlob = body;
			} else if (x$19(body, x$15)) {
				this.bodyFormData = body;
			} else if (x$19(body, x$18)) {
				this.bodyText = body.toString();
			} else if (x$19(body, x$12)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new x$10([this.bodyArrayBuffer]);
			} else if (x$19(body, x$11) || x$20(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (x$17(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof x$18) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || x$14.resolve(this.bodyArrayBuffer);
			}
			return this.blob().then(function (blob) {
				return x$6(blob, 'ArrayBuffer');
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
				return x$14.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return x$14.resolve(new x$10([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return x$14.resolve(new x$10([this.bodyText]));
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
				return x$6(this.bodyBlob, 'Text');
			} else if (this.bodyArrayBuffer) {
				return x$14.resolve(x$21(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return x$14.resolve(this.bodyText);
			}
		}
	}, {
		key: 'formData',
		value: function formData() {
			return this.text().then(x$16);
		}
	}, {
		key: 'json',
		value: function json() {
			return this.text().then(x$9.parse);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return x$14.reject(new x$13('Already used'));
			}
			this.bodyUsed = true;
		}
	}]);

	return Body$1;
}();

function tests$1(Body) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Body';


	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Body();
			});
		});
	});
}

tests$1(Body$1, 'J0Body');

/* global Body */
tests$1(Body);

var x$22 = cancelAnimationFrame;

var x$23 = requestAnimationFrame;

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
		var baseInterval, timeoutMargin;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return new Promise(function (resolve) {
							x$23(function (time1) {
								x$23(function (time2) {
									resolve(time2 - time1);
								});
							});
						});

					case 2:
						baseInterval = _context4.sent;
						timeoutMargin = 50;

						this.timeout(timeoutMargin * baseInterval);
						assert.equal(0 < baseInterval, true);
						_context4.next = 8;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(function () {
								reject(new Error('requestAnimationFrame didn\'t invoke the given function.'));
							}, baseInterval * margin);
							x$23(function () {
								clearTimeout(timer);
								resolve();
							});
						});

					case 8:
						_context4.next = 10;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(resolve, baseInterval * margin);
							var id = x$23(function () {
								clearTimeout(timer);
								reject(new Error('cancelAnimationFrame didn\'t cancel the invocation.'));
							});
							x$22(id);
						});

					case 10:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	})));
});

function clamp$1(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref6 = [H, L];
		L = _ref6[0];
		H = _ref6[1];
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
		assert.equal(clamp$1(0, 1, 2), 1);
	});

	it('should return 2 if the arguments are [0, 2]', function () {
		assert.equal(clamp$1(0, 2), 2);
	});

	it('should return 2 if the arguments are [2, 1, 3]', function () {
		assert.equal(clamp$1(2, 1, 3), 2);
	});

	it('should return 2 if the arguments are [2, 3, 1]', function () {
		assert.equal(clamp$1(2, 3, 1), 2);
	});
});

function clone(obj) {
	return x$9.parse(x$9.stringify(obj));
}

function noop$1() {
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
			a: noop$1,
			b: 0,
			c: noop$1
		};
		var actual = clone(data);
		var expected = { b: 0 };
		assert.deepEqual(actual, expected);
	});

	it('should isolate original', function () {
		var data = {
			a: noop$1,
			b: {},
			c: noop$1
		};
		var actual = clone(data);
		actual.b.a = 0;
		var expected = { b: { a: 0 } };
		assert.deepEqual(actual, expected);
		assert.deepEqual(data.b, {});
	});
});

var x$24 = ConditionalSet;

/* eslint-disable no-magic-numbers, no-control-regex */
// https://infra.spec.whatwg.org/#code-points
var surrogate = x$24.solo(function (x) {
	return 0xD800 <= x && x <= 0xDFFF;
});
var scalarValue = x$24.not(surrogate);
var noncharacter = x$24.or(function (x) {
	return 0xFDD0 <= x && x <= 0xFDEF;
}, function (x) {
	return [0xFFFE, 0xFFFF, 0x1FFFE, 0x1FFFF, 0x2FFFE, 0x2FFFF, 0x3FFFE, 0x3FFFF, 0x4FFFE, 0x4FFFF, 0x5FFFE, 0x5FFFF, 0x6FFFE, 0x6FFFF, 0x7FFFE, 0x7FFFF, 0x8FFFE, 0x8FFFF, 0x9FFFE, 0x9FFFF, 0xAFFFE, 0xAFFFF, 0xBFFFE, 0xBFFFF, 0xCFFFE, 0xCFFFF, 0xDFFFE, 0xDFFFF, 0xEFFFE, 0xEFFFF, 0xFFFFE, 0xFFFFF, 0x10FFFE, 0x10FFFF].includes(x);
});
var ASCIICodePoint = x$24.solo(function (x) {
	return 0 <= x && x <= 0x7F;
});
var ASCIITabOrNewline = x$24.solo(function (x) {
	return [0x09, 0x0A, 0x0D].includes(x);
});
var ASCIIWhitespace = x$24.solo(function (x) {
	return [0x09, 0x0A, 0x0C, 0x0D, 0x20].includes(x);
});
var C0Control = x$24.solo(function (x) {
	return 0 <= x && x <= 0x1F;
});
var C0ControlOrSpace = x$24.or(C0Control, function (x) {
	return x === 0x20;
});
var control = x$24.or(C0Control, function (x) {
	return 0x7F <= x && x <= 0x9F;
});
var ASCIIDigit = x$24.solo(function (x) {
	return 0x30 <= x && x <= 0x39;
});
var ASCIIUpperHexDigit = x$24.or(ASCIIDigit, function (x) {
	return 0x41 <= x && x <= 0x46;
});
var ASCIILowerHexDigit = x$24.or(ASCIIDigit, function (x) {
	return 0x61 <= x && x <= 0x66;
});
var ASCIIHexDigit = x$24.or(ASCIIUpperHexDigit, ASCIILowerHexDigit);
var ASCIIUpperAlpha = x$24.solo(function (x) {
	return 0x41 <= x && x <= 0x5A;
});
var ASCIILowerAlpha = x$24.solo(function (x) {
	return 0x61 <= x && x <= 0x7A;
});
var ASCIIAlpha = x$24.or(ASCIIUpperAlpha, ASCIILowerAlpha);
var ASCIIAlphanumeric = x$24.or(ASCIIDigit, ASCIIAlpha);

var C0ControlPercentEncodeSet = x$24.or(C0Control, function (x) {
	return 0x7E < x;
});

var pathPercentEncodeSet = x$24.or(C0ControlPercentEncodeSet, function (x) {
	return [0x20, 0x22, 0x23, 0x3C, 0x3E, 0x3F, 0x60, 0x7B, 0x7D].includes(x);
});
var userinfoPercentEncodeSet = x$24.or(pathPercentEncodeSet, function (x) {
	return [0x2F, 0x3A, 0x3B, 0x3D, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x7C].includes(x);
});
var forbiddenHost = x$24.solo(function (x) {
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

var x$25 = Symbol;

var AND = x$25('AND');
var OR = x$25('OR');
var XOR = x$25('XOR');
var NOT = x$25('NOT');
var SOLO = x$25('SOLO');
var nestable = [AND, OR, XOR, NOT];

function execute(condition, args) {
	if (condition.includes) {
		return condition.includes.apply(condition, _toConsumableArray(args));
	}
	return condition.apply(undefined, _toConsumableArray(args));
}

var operators = (_operators = {}, _defineProperty(_operators, SOLO, function (_ref7) {
	var _ref8 = _slicedToArray(_ref7, 1),
	    condition = _ref8[0];

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

var ConditionalSet$2 = function () {
	function ConditionalSet$2(operator) {
		_classCallCheck(this, ConditionalSet$2);

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

	_createClass(ConditionalSet$2, [{
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
				if (x$19(condition, ConditionalSet$2)) {
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
			return new ConditionalSet$2(SOLO, fn);
		}
	}, {
		key: 'and',
		value: function and() {
			for (var _len9 = arguments.length, args = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
				args[_key9] = arguments[_key9];
			}

			return new (Function.prototype.bind.apply(ConditionalSet$2, [null].concat([AND], args)))();
		}
	}, {
		key: 'or',
		value: function or() {
			for (var _len10 = arguments.length, args = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
				args[_key10] = arguments[_key10];
			}

			return new (Function.prototype.bind.apply(ConditionalSet$2, [null].concat([OR], args)))();
		}
	}, {
		key: 'xor',
		value: function xor() {
			for (var _len11 = arguments.length, args = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
				args[_key11] = arguments[_key11];
			}

			return new (Function.prototype.bind.apply(ConditionalSet$2, [null].concat([XOR], args)))();
		}
	}, {
		key: 'not',
		value: function not() {
			for (var _len12 = arguments.length, args = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
				args[_key12] = arguments[_key12];
			}

			return new (Function.prototype.bind.apply(ConditionalSet$2, [null].concat([NOT], args)))();
		}
	}]);

	return ConditionalSet$2;
}();

/* eslint-disable no-magic-numbers */


describe('ConditionalSet', function () {

	this.timeout(10000);

	it('should create a set', function () {
		var set = ConditionalSet$2.and(function (x) {
			return 0 < x;
		});
		assert.equal(set.includes(-1), false);
		assert.equal(set.includes(1), true);
	});

	describe('ConditionalSet.prototype.includes', function () {

		var d = 0.6;
		var dd = 0.3;
		var offsets = [0, 1, 2].map(function (t, index, _ref9) {
			var length = _ref9.length;

			var rad = index * 2 * Math.PI / length;
			return [dd * Math.cos(rad), dd * Math.sin(rad)];
		});

		it('[id:ConditionalSet1] should draw an expected diagram (AND)', _asyncToGenerator(regeneratorRuntime.mark(function _callee5() {
			var set;
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							set = ConditionalSet$2.and(function (x, y) {
								return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
							});
							_context5.next = 3;
							return assert.graphicalEqual({
								name: 'ConditionalSet1',
								url: window.root + '/ConditionalSet/ConditionalSet1.png',
								fn: function fn(x, y) {
									return set.includes(x, y) ? 1 : 0;
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 3:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this);
		})));

		it('[id:ConditionalSet2] should draw an expected diagram (OR)', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
			var set;
			return regeneratorRuntime.wrap(function _callee6$(_context6) {
				while (1) {
					switch (_context6.prev = _context6.next) {
						case 0:
							set = ConditionalSet$2.or(function (x, y) {
								return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
							});
							_context6.next = 3;
							return assert.graphicalEqual({
								name: 'ConditionalSet2',
								url: window.root + '/ConditionalSet/ConditionalSet2.png',
								fn: function fn(x, y) {
									return set.includes(x, y) ? 1 : 0;
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 3:
						case 'end':
							return _context6.stop();
					}
				}
			}, _callee6, this);
		})));

		it('[id:ConditionalSet3] should draw an expected diagram (XOR)', _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
			var set;
			return regeneratorRuntime.wrap(function _callee7$(_context7) {
				while (1) {
					switch (_context7.prev = _context7.next) {
						case 0:
							set = ConditionalSet$2.xor(function (x, y) {
								return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
							});
							_context7.next = 3;
							return assert.graphicalEqual({
								name: 'ConditionalSet3',
								url: window.root + '/ConditionalSet/ConditionalSet3.png',
								fn: function fn(x, y) {
									return set.includes(x, y) ? 1 : 0;
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 3:
						case 'end':
							return _context7.stop();
					}
				}
			}, _callee7, this);
		})));

		it('[id:ConditionalSet4] should draw an expected diagram (NOT)', _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
			var set;
			return regeneratorRuntime.wrap(function _callee8$(_context8) {
				while (1) {
					switch (_context8.prev = _context8.next) {
						case 0:
							set = ConditionalSet$2.not(function (x, y) {
								return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
							});
							_context8.next = 3;
							return assert.graphicalEqual({
								name: 'ConditionalSet4',
								url: window.root + '/ConditionalSet/ConditionalSet4.png',
								fn: function fn(x, y) {
									return set.includes(x, y) ? 1 : 0;
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 3:
						case 'end':
							return _context8.stop();
					}
				}
			}, _callee8, this);
		})));

		it('[id:ConditionalSet5] should draw an expected diagram (Complex)', _asyncToGenerator(regeneratorRuntime.mark(function _callee9() {
			var set;
			return regeneratorRuntime.wrap(function _callee9$(_context9) {
				while (1) {
					switch (_context9.prev = _context9.next) {
						case 0:
							set = ConditionalSet$2.and(ConditionalSet$2.or(function (x, y) {
								return Math.hypot(x - offsets[0][0], y - offsets[0][1]) < d;
							}, function (x, y) {
								return Math.hypot(x - offsets[1][0], y - offsets[1][1]) < d;
							}), ConditionalSet$2.not(function (x, y) {
								return Math.hypot(x - offsets[2][0], y - offsets[2][1]) < d;
							}));
							_context9.next = 3;
							return assert.graphicalEqual({
								name: 'ConditionalSet5',
								url: window.root + '/ConditionalSet/ConditionalSet5.png',
								fn: function fn(x, y) {
									return set.includes(x, y) ? 1 : 0;
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 3:
						case 'end':
							return _context9.stop();
					}
				}
			}, _callee9, this);
		})));
	});
});

function test$21(info) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'console.info';


	describe(name, function () {

		it('should be a function', function () {
			assert.equal(typeof info === 'undefined' ? 'undefined' : _typeof(info), 'function');
		});
	});
}

/* eslint-disable no-console */
test$21(console.info);

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

function test$23(CustomEvent) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'CustomEvent';


	describe(name, function () {

		it('should create an event', function () {
			var type = '' + Date.now();
			var event = new CustomEvent(type);
			assert.equal(event.type, type);
		});
	});
}

var x$26 = Event;

function CustomEvent$1(event) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
		bubbles: false,
		cancelable: false
	};

	var evt = x$7.createEvent('CustomEvent');
	evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	return evt;
}
CustomEvent$1.prototype = x$26.prototype;

test$23(CustomEvent$1, 'CustomEvent#j0');

test$23(CustomEvent);

function debounce$1(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this2 = this;

		for (var _len13 = arguments.length, args = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
			args[_key13] = arguments[_key13];
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
			var execute = debounce$1(function (value) {
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
			var execute = debounce$1(function (value) {
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

var x$27 = keys;

var x$28 = assign;

var x$29 = Array;

var x$30 = isArray;

var x$31 = isNode;

var x$32 = CustomEvent;

var x$33 = Set;

var x$34 = getComputedStyle;

var nodeKey = x$25();
var getBody = new x$14(function (resolve) {
	var interval = 50;
	function check() {
		var body = x$7.body;

		if (body) {
			resolve(wrap(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

function superForEach() {
	for (var _len14 = arguments.length, args = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
		args[_key14] = arguments[_key14];
	}

	var fn = args.pop();
	if (x$17(args[0])) {
		fn.apply(undefined, args);
	} else {
		args.forEach(function (arg) {
			if (x$30(arg)) {
				superForEach.apply(undefined, _toConsumableArray(arg).concat([fn]));
			} else {
				x$27(arg).forEach(function (key) {
					superForEach(key, arg[key], fn);
				});
			}
		});
	}
}

var J0Element = function () {
	function J0Element() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, J0Element);

		x$28(this, {
			listeners: new x$33()
		});
		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (x$17(source)) {
			this[nodeKey] = x$7.createTextNode(source);
		} else if (x$31(source)) {
			this[nodeKey] = source;
		} else {
			var _ref15 = source || {},
			    t = _ref15.t,
			    a = _ref15.a,
			    c = _ref15.c,
			    e = _ref15.e,
			    n = _ref15.n,
			    o = _ref15.o;

			this[nodeKey] = wrap(n ? x$7.createElementNS(n, t, o) : x$7.createElement(t || 'div')).node;
			if (c) {
				this.append.apply(this, _toConsumableArray(c));
			}
			if (e) {
				this.on(e);
			}
			if (a) {
				this.attr(a);
			}
		}
	}

	_createClass(J0Element, [{
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
		value: function setPrevious(element) {
			this.parent.insertBefore(element, this);
			return this;
		}
	}, {
		key: 'setNext',
		value: function setNext(element) {
			this.parent.insertBefore(element, this.next);
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
		key: 'prepend',
		value: function prepend() {
			var _this3 = this;

			for (var _len15 = arguments.length, elements = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
				elements[_key15] = arguments[_key15];
			}

			elements.forEach(function (element) {
				_this3.setFirstChild(element);
			});
			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var node = this.node;

			for (var _len16 = arguments.length, elements = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
				elements[_key16] = arguments[_key16];
			}

			elements.forEach(function (element) {
				node.appendChild(wrap(element).node);
			});
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
			for (var _len17 = arguments.length, value = Array(_len17 > 1 ? _len17 - 1 : 0), _key17 = 1; _key17 < _len17; _key17++) {
				value[_key17 - 1] = arguments[_key17];
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
		key: 'attr',
		value: function attr() {
			var _this4 = this;

			for (var _len18 = arguments.length, args = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
				args[_key18] = arguments[_key18];
			}

			superForEach.apply(undefined, args.concat([function () {
				_this4.setAttribute.apply(_this4, arguments);
			}]));
			return this;
		}
	}, {
		key: 'addEventListener',
		value: function addEventListener(eventName, fn) {
			var _this5 = this;

			if (wrap.eventFilter && wrap.eventFilter.call(this, eventName, fn)) {
				return this;
			}
			var wrapped = function wrapped(event) {
				fn.call(_this5, event);
			};
			this.node.addEventListener(eventName, wrapped);
			this.listeners.add([eventName, fn, wrapped]);
			return this;
		}
	}, {
		key: 'once',
		value: function once(eventName, fn) {
			var _this6 = this;

			var item = [eventName, fn];
			var wrapped = function wrapped(event) {
				_this6.node.removeEventListener(eventName, wrapped);
				_this6.listeners.delete(item);
				fn.call(_this6, event);
			};
			item.push(wrapped);
			this.node.addEventListener(eventName, wrapped);
			this.listeners.add(item);
			return this;
		}
	}, {
		key: 'on',
		value: function on() {
			var _this7 = this;

			for (var _len19 = arguments.length, args = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
				args[_key19] = arguments[_key19];
			}

			superForEach.apply(undefined, args.concat([function () {
				_this7.addEventListener.apply(_this7, arguments);
			}]));
			return this;
		}
	}, {
		key: 'removeEventListener',
		value: function removeEventListener(eventName, fn) {
			var _this8 = this;

			this.listeners.forEach(function (item) {
				var _item = _slicedToArray(item, 3),
				    e = _item[0],
				    f = _item[1],
				    wrapped = _item[2];

				if (e === eventName && (!fn || fn === f)) {
					_this8.node.removeEventListener(e, wrapped);
					_this8.listeners.delete(item);
				}
			});
		}
	}, {
		key: 'off',
		value: function off(eventName, fn) {
			this.removeEventListener(eventName, fn);
		}
	}, {
		key: 'emit',
		value: function emit(eventName, detail) {
			var event = new x$32(eventName, { detail: detail });
			this.node.dispatchEvent(event);
			return this;
		}
	}, {
		key: 'find',
		value: function find(selector) {
			return _find(selector, this.node);
		}
	}, {
		key: 'findAll',
		value: function findAll(selector) {
			return _findAll(selector, this.node);
		}
	}, {
		key: 'setStyle',
		value: function setStyle(styles) {
			x$28(this.style, styles);
			return this;
		}
	}, {
		key: 'addClass',
		value: function addClass() {
			var _this9 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len20 = arguments.length, args = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
					args[_key20] = arguments[_key20];
				}

				args.forEach(function (arg) {
					_this9.classList.add(arg);
				});
			}
			return this;
		}
	}, {
		key: 'removeClass',
		value: function removeClass() {
			var _this10 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len21 = arguments.length, args = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
					args[_key21] = arguments[_key21];
				}

				args.forEach(function (arg) {
					_this10.classList.remove(arg);
				});
			}
			return this;
		}
	}, {
		key: 'toggleClass',
		value: function toggleClass() {
			var _this11 = this;

			var classList = this.classList;

			if (classList) {
				for (var _len22 = arguments.length, args = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
					args[_key22] = arguments[_key22];
				}

				args.forEach(function (arg) {
					_this11.classList.toggle(arg);
				});
			}
			return this;
		}
	}, {
		key: 'hasClass',
		value: function hasClass() {
			var _this12 = this;

			var classList = this.classList;

			for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
				args[_key23] = arguments[_key23];
			}

			if (classList) {
				return args.every(function (arg) {
					return _this12.classList.contains(arg);
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
			return x$29.from(this.node.childNodes).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return x$29.from(this.node.children).map(wrap);
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
			return this.node.attributes;
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
			return x$34(this.node);
		}
	}]);

	return J0Element;
}();

function wrap(source) {
	return new J0Element(source);
}

function _find(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$7;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$7;

	var list = rootElement.querySelectorAll(selector);
	var result = [];
	for (var i = 0, length = list.length; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

x$28(wrap, {
	find: _find,
	findAll: _findAll,
	ready: function () {
		var _ref16 = _asyncToGenerator(regeneratorRuntime.mark(function _callee10(fn) {
			var body;
			return regeneratorRuntime.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.next = 2;
							return getBody;

						case 2:
							body = _context10.sent;

							if (fn) {
								fn(body);
							}
							return _context10.abrupt('return', body);

						case 5:
						case 'end':
							return _context10.stop();
					}
				}
			}, _callee10, this);
		}));

		function ready(_x29) {
			return _ref16.apply(this, arguments);
		}

		return ready;
	}()
});

describe('J0Element.prototype.append', function () {

	it('should append nodes', function () {
		var element1 = wrap(Date.now() + '-1');
		var element2 = wrap();
		var element3 = wrap(Date.now() + '-2');
		var element = wrap({
			c: [element1]
		});
		element.append(element2, element3);
		assert.deepEqual(element.childNodes, [element1, element2, element3]);
	});
});

describe('J0Element.prototype.attr', function () {

	it('should set an attribute', function () {
		var element = wrap();
		var key = 'attr-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key), null);
		element.attr(key, value1, value2);
		assert.equal(element.getAttribute(key), value1 + ' ' + value2);
	});

	it('should set a "data-" prefixed attribute', function () {
		var element = wrap();
		var key = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key), null);
		element.attr(key, value1, value2);
		assert.equal(element.getAttribute(key), value1 + ' ' + value2);
	});

	it('should set attributes by an object', function () {
		var _element$attr;

		var element = wrap();
		var key1 = 'attr-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr((_element$attr = {}, _defineProperty(_element$attr, key1, value1), _defineProperty(_element$attr, key2, value2), _element$attr));
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by arrays', function () {
		var element = wrap();
		var key1 = 'attr-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr([key1, value1], [key2, value2]);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by an array of arrays', function () {
		var element = wrap();
		var key1 = 'attr-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr([[key1, value1], [key2, value2]]);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});

	it('should set attributes by an array of objects', function () {
		var element = wrap();
		var key1 = 'attr-' + Date.now();
		var key2 = 'data-' + Date.now();
		var value1 = 'value-' + Date.now();
		var value2 = 'value-' + Date.now();
		assert.equal(element.getAttribute(key1), null);
		assert.equal(element.getAttribute(key2), null);
		element.attr([_defineProperty({}, key1, value1), _defineProperty({}, key2, value2)]);
		assert.equal(element.getAttribute(key1), value1);
		assert.equal(element.getAttribute(key2), value2);
	});
});

describe('J0Element.prototype.bb', function () {

	it('should get a bounding box', function () {
		var _wrap$bb = wrap().bb,
		    left = _wrap$bb.left,
		    top = _wrap$bb.top;

		assert.equal(left, 0);
		assert.equal(top, 0);
	});
});

describe('J0Element.prototype.childNodes', function () {

	it('should return all nodes under the element', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
	});
});

describe('J0Element.prototype.children', function () {

	it('should return all elements under the element', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.deepEqual(element.children, [element2]);
	});
});

describe('J0Element.prototype.addClass', function () {

	it('should add a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = wrap({
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
		var element = wrap({
			a: [['class', class1]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
		element.addClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2, class3]);
	});
});

describe('J0Element.prototype.removeClass', function () {

	it('should remove a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = wrap({
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
		var element = wrap({
			a: [['class', class1 + ' ' + class2 + ' ' + class3]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2, class3]);
		element.removeClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1]);
	});
});

describe('J0Element.prototype.toggleClass', function () {

	it('should toggle a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = wrap({
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
		var element = wrap({
			a: [['class', class1 + ' ' + class2]]
		});
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
		element.toggleClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class3]);
		element.toggleClass(class2, class3);
		assert.deepEqual(element.getAttribute('class').split(/\s+/), [class1, class2]);
	});
});

describe('J0Element.prototype.hasClass', function () {

	it('should check a class', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var element = wrap({
			a: [['class', class1]]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class2), false);
	});

	it('should check 2 classes', function () {
		var class1 = '_' + Date.now() + '-1';
		var class2 = '_' + Date.now() + '-2';
		var class3 = '_' + Date.now() + '-3';
		var element = wrap({
			a: [['class', class1, class2]]
		});
		assert.equal(element.hasClass(class1), true);
		assert.equal(element.hasClass(class1, class2), true);
		assert.equal(element.hasClass(class1, class3), false);
	});

	it('should check nodes which has no classList', function () {
		var element = wrap(document);
		assert.equal(element.hasClass(), true);
		assert.equal(element.hasClass('_' + Date.now()), false);
	});
});

describe('J0Element.prototype.clone', function () {

	it('should clone a text node', function () {
		var text = '' + Date.now();
		var element1 = wrap(text);
		assert.equal(element1.text, text);
		var element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node', function () {
		var text = '' + Date.now();
		var element1 = wrap({
			c: [text]
		});
		assert.equal(element1.text, text);
		var element2 = element1.clone();
		assert.equal(element2.text, text);
	});

	it('should clone an element node shallowly', function () {
		var text = '' + Date.now();
		var element1 = wrap({
			c: [text]
		});
		assert.equal(element1.text, text);
		var element2 = element1.clone(false);
		assert.equal(element2.text, '');
	});
});

describe('J0Element.prototype.empty', function () {

	it('should remove childNodes', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
		assert.equal(element.empty(), element);
		assert.deepEqual(element.childNodes, []);
	});
});

describe('J0Element.prototype.equals', function () {

	it('should return whether the given wraps the same element or not', function () {
		var element1 = wrap();
		var element2 = wrap(element1);
		var element3 = wrap();
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
function wait(duration) {
	var defaultDuration = 20;
	return new Promise(function (resolve) {
		setTimeout(resolve, duration || defaultDuration);
	});
}

describe('J0Element.eventFilter', function () {

	after(function () {
		delete wrap.eventFilter;
	});

	it('should set a filter', function () {
		var actual = [];
		wrap.eventFilter = function () {
			for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
				args[_key24] = arguments[_key24];
			}

			actual.push.apply(actual, [this].concat(args));
		};
		var element = wrap();
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
		wrap.eventFilter = function () {
			for (var _len25 = arguments.length, args = Array(_len25), _key25 = 0; _key25 < _len25; _key25++) {
				args[_key25] = arguments[_key25];
			}

			actual.push.apply(actual, [this].concat(args));
			return true;
		};
		var element = wrap();
		var key = 'event-' + Date.now();
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(actual, [element, key, fn]);
		assert.deepEqual(Array.from(element.listeners), []);
	});
});

describe('J0Element.prototype.on', function () {

	it('should initialize with event listener', function () {
		var key = 'event-' + Date.now();
		function fn() {}
		var element = wrap({
			e: [[key, fn]]
		});
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key, fn]]);
	});

	it('should set an listener', function () {
		var element = wrap();
		var key = 'event-' + Date.now();
		function fn() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on(key, fn);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key, fn]]);
	});

	it('should set listeners', function () {
		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on([key1, fn1], [key2, fn2]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should set listeners by an array of arrays', function () {
		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on([[key1, fn1], [key2, fn2]]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should set listeners by an array of objects', function () {
		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on([_defineProperty({}, key1, fn1), _defineProperty({}, key2, fn2)]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should set listeners by an object', function () {
		var _element$on;

		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on((_element$on = {}, _defineProperty(_element$on, key1, fn1), _defineProperty(_element$on, key2, fn2), _element$on));
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});
});

describe('J0Element.prototype.off', function () {

	it('should remove an listener', function () {
		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on([key1, fn1], [key1, fn2], [key2, fn2]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key1, fn2], [key2, fn2]]);
		element.off(key1, fn2);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key2, fn2]]);
	});

	it('should remove listeners', function () {
		var element = wrap();
		var key1 = 'event1-' + Date.now();
		var key2 = 'event2-' + Date.now();
		function fn1() {}
		function fn2() {}
		assert.deepEqual(Array.from(element.listeners), []);
		element.on([key1, fn1], [key1, fn2], [key2, fn2]);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key1, fn1], [key1, fn2], [key2, fn2]]);
		element.off(key1);
		assert.deepEqual(Array.from(element.listeners).map(function (item) {
			return item.slice(0, 2);
		}), [[key2, fn2]]);
	});
});

describe('J0Element.prototype.emit', function () {

	it('should call a listener', _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
		var element, key, data, event;
		return regeneratorRuntime.wrap(function _callee11$(_context11) {
			while (1) {
				switch (_context11.prev = _context11.next) {
					case 0:
						element = wrap();
						key = 'event-' + Date.now();
						data = new Date();
						_context11.next = 5;
						return new Promise(function (resolve) {
							element.on(key, resolve).emit(key, data);
						});

					case 5:
						event = _context11.sent;

						assert.equal(event.detail, data);

					case 7:
					case 'end':
						return _context11.stop();
				}
			}
		}, _callee11, this);
	})));

	it('should call listeners', _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee12$(_context12) {
			while (1) {
				switch (_context12.prev = _context12.next) {
					case 0:
						onCall = function onCall(_ref23) {
							var detail = _ref23.detail;

							results.push(detail);
						};

						element = wrap();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.on(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context12.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2, data2]);

					case 10:
					case 'end':
						return _context12.stop();
				}
			}
		}, _callee12, this);
	})));
});

describe('J0Element.prototype.once', function () {

	it('should call a listener only once', _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee13$(_context13) {
			while (1) {
				switch (_context13.prev = _context13.next) {
					case 0:
						onCall = function onCall(_ref25) {
							var detail = _ref25.detail;

							results.push(detail);
						};

						element = wrap();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.once(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context13.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2]);

					case 10:
					case 'end':
						return _context13.stop();
				}
			}
		}, _callee13, this);
	})));
});

describe('J0Element.prototype.find', function () {

	it('should return the first matched elements', function () {
		var className = 'c' + Date.now();
		var element1 = wrap({
			a: [['class', className]]
		});
		var element2 = wrap({
			a: [['class', className]]
		});
		var element3 = wrap({
			a: [['class', className]]
		});
		var element = wrap({
			c: [element2, {
				c: [element3]
			}]
		});
		wrap({
			c: [element1, element]
		});
		assert.deepEqual(element.find('.' + className), element2);
	});
});

describe('J0Element.prototype.findAll', function () {

	it('should return an array of matched elements', function () {
		var className = 'c' + Date.now();
		var element1 = wrap({
			a: [['class', className]]
		});
		var element2 = wrap({
			a: [['class', className]]
		});
		var element3 = wrap({
			a: [['class', className]]
		});
		var element = wrap({
			c: [element2, {
				c: [element3]
			}]
		});
		wrap({
			c: [element1, element]
		});
		assert.deepEqual(element.findAll('.' + className), [element2, element3]);
	});
});

describe('J0Element.prototype.firstChild', function () {

	it('should return null', function () {
		var element = wrap();
		assert.equal(element.firstChild, null);
	});

	it('should return the first child', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
	});

	it('should set the first child', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.setFirstChild(element2);
		assert.equal(element.firstChild.equals(element2), true);
	});
});

describe('J0Element.prototype.html', function () {

	it('should return its innerHTML', function () {
		var text = '' + Date.now();
		var element = wrap({
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
		var element = wrap({
			c: [{}, {}, text]
		});
		element.setHTML('<s>' + text + '</s>');
		var expected = '<s>' + text + '</s>';
		assert.equal(element.html, expected);
	});
});

describe('J0Element.prototype.insertBefore', function () {

	it('should insert a new child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});
});

describe('J0Element.prototype.lastChild', function () {

	it('should return null', function () {
		var element = wrap();
		assert.equal(element.lastChild, null);
	});

	it('should return the first child', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should set the first child', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element.setLastChild(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});
});

describe('J0Element.prototype.next', function () {

	it('should insert a new child before an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element2, element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should return null', function () {
		var element1 = wrap();
		var element2 = wrap();
		wrap({
			c: [element1, element2]
		});
		assert.equal(element2.next, null);
	});
});

describe('J0Element.prototype.parent', function () {

	it('should return its parent', function () {
		var element1 = wrap();
		var element2 = wrap({ c: [element1] });
		assert.equal(element1.parent.equals(element2), true);
	});

	it('should set its parent', function () {
		var element1 = wrap();
		var element2 = wrap();
		element1.setParent(element2);
		assert.equal(element1.parent.equals(element2), true);
	});
});

describe('J0Element.prototype.prepend', function () {

	it('should prepend nodes', function () {
		var element1 = wrap(Date.now() + '-1');
		var element2 = wrap();
		var element3 = wrap(Date.now() + '-2');
		var element = wrap({
			c: [element1]
		});
		element.prepend(element2, element3);
		assert.deepEqual(element.childNodes, [element3, element2, element1]);
	});
});

describe('J0Element.prototype.previous', function () {

	it('should insert a new child before an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.setPrevious(element2);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should return null', function () {
		var element1 = wrap();
		var element2 = wrap();
		wrap({
			c: [element1, element2]
		});
		assert.equal(element1.previous, null);
	});
});

describe('J0Element.prototype.remove', function () {

	it('should remove itself from its parent', function () {
		var element1 = wrap('' + Date.now());
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
		assert.equal(element1.remove(), element1);
		assert.equal(element1.remove(), element1);
		assert.deepEqual(element.childNodes, [element2]);
	});
});

describe('J0Element.prototype.text', function () {

	it('should return its textContent', function () {
		var text = '' + Date.now();
		var element = wrap({
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
		var element = wrap({
			c: [{}, {}, text]
		});
		element.setText('<s>' + text + '</s>');
		var expected = '<s>' + text + '</s>';
		assert.equal(element.text, expected);
	});
});

describe('dom (J0Element)', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in wrap(), true);
	});
});

var listenersKey = x$25();

var EventEmitter$1 = function () {
	function EventEmitter$1() {
		_classCallCheck(this, EventEmitter$1);

		this[listenersKey] = new x$33();
	}

	_createClass(EventEmitter$1, [{
		key: 'emit',
		value: function emit(type) {
			var _this13 = this;

			for (var _len26 = arguments.length, data = Array(_len26 > 1 ? _len26 - 1 : 0), _key26 = 1; _key26 < _len26; _key26++) {
				data[_key26 - 1] = arguments[_key26];
			}

			this[listenersKey].forEach(function (item, index, listeners) {
				var _item2 = _slicedToArray(item, 3),
				    eventType = _item2[0],
				    fn = _item2[1],
				    once = _item2[2];

				if (eventType === type) {
					fn.apply(_this13, data);
					if (once) {
						listeners.delete(item);
					}
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

	return EventEmitter$1;
}();

describe('EventEmitter', function () {

	it('should call listeners', function () {
		var emitter = new EventEmitter$1();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.on(name1, function () {
			for (var _len27 = arguments.length, data = Array(_len27), _key27 = 0; _key27 < _len27; _key27++) {
				data[_key27] = arguments[_key27];
			}

			results.push([data, '1']);
		}).on(name1, function () {
			for (var _len28 = arguments.length, data = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
				data[_key28] = arguments[_key28];
			}

			results.push([data, '2']);
		}).on(name2, function () {
			for (var _len29 = arguments.length, data = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
				data[_key29] = arguments[_key29];
			}

			results.push([data, '3']);
		}).on(name2, function () {
			for (var _len30 = arguments.length, data = Array(_len30), _key30 = 0; _key30 < _len30; _key30++) {
				data[_key30] = arguments[_key30];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value2, value3], '1'], [[value2, value3], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should call listeners once', function () {
		var emitter = new EventEmitter$1();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len31 = arguments.length, data = Array(_len31), _key31 = 0; _key31 < _len31; _key31++) {
				data[_key31] = arguments[_key31];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len32 = arguments.length, data = Array(_len32), _key32 = 0; _key32 < _len32; _key32++) {
				data[_key32] = arguments[_key32];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len33 = arguments.length, data = Array(_len33), _key33 = 0; _key33 < _len33; _key33++) {
				data[_key33] = arguments[_key33];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len34 = arguments.length, data = Array(_len34), _key34 = 0; _key34 < _len34; _key34++) {
				data[_key34] = arguments[_key34];
			}

			results.push([data, '4']);
		}).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2'], [[value3, value1], '3'], [[value3, value1], '4']]);
	});

	it('should call listeners once even if the functions are same', function () {
		var emitter = new EventEmitter$1();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		var count = 0;
		function listener() {
			for (var _len35 = arguments.length, data = Array(_len35), _key35 = 0; _key35 < _len35; _key35++) {
				data[_key35] = arguments[_key35];
			}

			results.push([data, count++]);
		}
		emitter.once(name1, listener).once(name1, listener).once(name2, listener).once(name2, listener).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], 0], [[value1, value2], 1], [[value3, value1], 2], [[value3, value1], 3]]);
	});

	it('should remove listeners', function () {
		var emitter = new EventEmitter$1();
		var name1 = Date.now() + '-1';
		var name2 = Date.now() + '-2';
		var value1 = Date.now() + '-3';
		var value2 = Date.now() + '-4';
		var value3 = Date.now() + '-5';
		var results = [];
		emitter.once(name1, function () {
			for (var _len36 = arguments.length, data = Array(_len36), _key36 = 0; _key36 < _len36; _key36++) {
				data[_key36] = arguments[_key36];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len37 = arguments.length, data = Array(_len37), _key37 = 0; _key37 < _len37; _key37++) {
				data[_key37] = arguments[_key37];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len38 = arguments.length, data = Array(_len38), _key38 = 0; _key38 < _len38; _key38++) {
				data[_key38] = arguments[_key38];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len39 = arguments.length, data = Array(_len39), _key39 = 0; _key39 < _len39; _key39++) {
				data[_key39] = arguments[_key39];
			}

			results.push([data, '4']);
		}).off(name2).emit(name1, value1, value2).emit(name1, value2, value3).emit(name2, value3, value1);
		assert.deepEqual(results, [[[value1, value2], '1'], [[value1, value2], '2']]);
	});
});

var x$35 = StringList;

function toLowerCase(x) {
	return x ? x.toLowerCase() : '';
}

var Headers$1 = function (_x$) {
	_inherits(Headers$1, _x$);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			x$27(headers).forEach(function (key) {
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
			var _this15 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return new x$1(function () {
				while (1) {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

					var key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						history.push(key);
						return {
							value: [key, _this15.get(key)],
							done: done
						};
					}
				}
			});
		}
	}]);

	return Headers$1;
}(x$35);

var Request$1 = function (_Body$) {
	_inherits(Request$1, _Body$);

	function Request$1(input) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Request$1);

		var body = init.body;

		var _this16 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this16.inheritFrom(input, body, init);
		} else {
			_this16.url = '' + input;
		}
		_this16.credentials = init.credentials || _this16.credentials || 'omit';
		if (init.headers || !_this16.headers) {
			_this16.headers = new Headers$1(init.headers);
		}
		_this16.method = (init.method || _this16.method || 'GET').toUpperCase();
		_this16.mode = init.mode || _this16.mode || null;
		_this16.referrer = null;
		if ((_this16.method === 'GET' || _this16.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this16.initBody(body);
		return _this16;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref26) {
			var headers = _ref26.headers;

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

		var _this17 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this17.type = 'default';
		_this17.status = 'status' in init ? init.status : minOkStatus;
		_this17.ok = _this17.status >= minOkStatus && _this17.status < maxOkStatus;
		_this17.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this17.headers = new Headers$1(init.headers);
		_this17.url = init.url || '';
		_this17.initBody(body);
		return _this17;
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

var x$36 = parseHeaders;

var x$37 = XMLHttpRequest;

function fetch$1(input, init) {
	return new x$14(function (resolve, reject) {
		var request = new Request$1(input, init);
		var xhr = new x$37();
		xhr.onload = function () {
			var options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: x$36(xhr.getAllResponseHeaders() || '')
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
		var _iteratorNormalCompletion23 = true;
		var _didIteratorError23 = false;
		var _iteratorError23 = undefined;

		try {
			for (var _iterator23 = request.headers.entries()[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
				var _ref27 = _step23.value;

				var _ref28 = _slicedToArray(_ref27, 2);

				var _name = _ref28[0];
				var value = _ref28[1];

				xhr.setRequestHeader(_name, value);
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

		xhr.send(x$2(request.bodyInit) ? null : request.bodyInit);
	});
}

function tests$3(fetch) {
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
			return fetch(document.getElementById('root').textContent + '/fetch/test.json').then(function (response) {
				return response.json();
			}).then(function (data) {
				assert.deepEqual(data, { a: 'b' });
			});
		});
	});
}

tests$3(fetch$1, 'J0Fetch');

tests$3(fetch);

var x$38 = Date;

var x$39 = leftpad;

var century = 100;
var shortenedLength = 3;

var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function format(src, template) {
	var date = new x$38(src);
	if (0 < date) {
		var Y = date.getFullYear();
		var M = date.getMonth();
		var D = date.getDate();
		var d = date.getDay();
		var h = date.getHours();
		var m = date.getMinutes();
		return template.replace(/%YYYY/g, Y.toString()).replace(/%YY/g, x$39(Y % century)).replace(/%MMMM/g, MonthNames[M]).replace(/%MMM/g, MonthNames[M].slice(0, shortenedLength)).replace(/%MM/g, x$39(M + 1)).replace(/%M/g, (M + 1).toString()).replace(/%DD/g, x$39(D)).replace(/%D/g, D.toString()).replace(/%dddd/g, DayNames[d]).replace(/%ddd/g, DayNames[d].slice(0, shortenedLength)).replace(/%hh/, x$39(h)).replace(/%h/, h.toString()).replace(/%mm/, x$39(m)).replace(/%m/, m.toString());
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
			var index = 0;
			var results = [];
			var iterator = headers.entries();
			while (1) {
				var _ref29;

				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

				if (done) {
					break;
				}
				results[index++] = (_ref29 = []).concat.apply(_ref29, _toConsumableArray(value.map(function (result) {
					return result.split(/\s*,\s*/);
				})));
			}
			assert.deepEqual(results, [[name, value1, value2]]);
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
				var _iterator$next5 = iterator.next(),
				    value = _iterator$next5.value,
				    done = _iterator$next5.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results.map(function (result) {
				return result.split(/\s*,\s*/);
			}), [[value1, value2]]);
		});
	});
}

tests$5(Headers$1, 'Headers/j0');

tests$5(Headers);

function generator$2() {
	var _this18 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this18[index],
				done: length <= index++
			};
		}
	};
}

function test$25(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HTMLCollection/@iterator';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion24 = true;
			var _didIteratorError24 = false;
			var _iteratorError24 = undefined;

			try {
				for (var _iterator24 = expected[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
					var element = _step24.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next6 = iterator.next(),
				    value = _iterator$next6.value,
				    done = _iterator$next6.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, expected);
		});
	});
}

test$25(generator$2, 'HTMLCollection/@iterator/j0');

test$25(HTMLCollection.prototype[Symbol.iterator]);

var x$40 = window;

function innerHeight() {
	return x$40.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});

function innerWidth() {
	return x$40.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});

var isArray$2 = x$29.isArray;

describe('isArray', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isArray$2(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isArray$2(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isArray$2(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isArray$2(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isArray$2('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isArray$2({}), false);
	});

	it('should return true if the arguments are [[]]', function () {
		assert.equal(isArray$2([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isArray$2(function () {}), false);
	});
});

var x$41 = Uint8ClampedArray;

var x$42 = Uint16Array;

var x$43 = Uint32Array;

var x$44 = Int8Array;

var x$45 = Int16Array;

var x$46 = Int32Array;

var x$47 = Float32Array;

var x$48 = Float64Array;

var viewClasses = [x$4, x$41, x$42, x$43, x$44, x$45, x$46, x$47, x$48];
function isArrayBufferView$2(obj) {
	return 0 <= viewClasses.findIndex(function (constructor) {
		return x$19(obj, constructor);
	});
}

describe('isArrayBufferView', function () {

	it('should return true if the argument is Int8Array', function () {
		assert.equal(isArrayBufferView$2(new Int8Array(1)), true);
	});

	it('should return true if the argument is Int16Array', function () {
		assert.equal(isArrayBufferView$2(new Int16Array(1)), true);
	});

	it('should return true if the argument is Int32Array', function () {
		assert.equal(isArrayBufferView$2(new Int32Array(1)), true);
	});

	it('should return true if the argument is Uint8ClampedArray', function () {
		assert.equal(isArrayBufferView$2(new Uint8ClampedArray(1)), true);
	});

	it('should return true if the argument is Uint8Array', function () {
		assert.equal(isArrayBufferView$2(new Uint8Array(1)), true);
	});

	it('should return true if the argument is Uint16Array', function () {
		assert.equal(isArrayBufferView$2(new Uint16Array(1)), true);
	});

	it('should return true if the argument is Uint32Array', function () {
		assert.equal(isArrayBufferView$2(new Uint32Array(1)), true);
	});

	it('should return true if the argument is Float32Array', function () {
		assert.equal(isArrayBufferView$2(new Float32Array(1)), true);
	});

	it('should return true if the argument is Float64Array', function () {
		assert.equal(isArrayBufferView$2(new Float64Array(1)), true);
	});

	it('should return false if the argument is Object', function () {
		assert.equal(isArrayBufferView$2({}), false);
	});

	it('should return false if the argument is Number', function () {
		assert.equal(isArrayBufferView$2(1), false);
	});
});

function isChildClassOf(A, B) {
	return x$19(A.prototype, B);
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

function isFunction$1(x) {
	return typeof x === 'function';
}

describe('isFunction', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isFunction$1(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isFunction$1(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isFunction$1(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isFunction$1(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isFunction$1('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isFunction$1({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isFunction$1([]), false);
	});

	it('should return true if the arguments are [function () {}]', function () {
		assert.equal(isFunction$1(function () {}), true);
	});
});

function isInstanceOf$2(instance, constructor) {
	return instance instanceof constructor;
}

describe('isInstanceOf', function () {

	it('should return true if the first argument is an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = new A();
		assert.equal(isInstanceOf$2(a, A), true);
	});

	it('should return false if the first argument is not an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = 0;
		assert.equal(isInstanceOf$2(a, A), false);
	});
});

var x$49 = Node;

function isNode$2(x) {
	return x$19(x, x$49);
}

describe('isNode', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNode$2(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNode$2(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isNode$2(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isNode$2(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNode$2('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNode$2({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNode$2([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNode$2(function () {}), false);
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

function isObject(x) {
	if (x === null) {
		return false;
	}
	var type = typeof x === 'undefined' ? 'undefined' : _typeof(x);
	return type === 'object' || type === 'function';
}

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

function isString$2(x) {
	return typeof x === 'string';
}

describe('isString', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isString$2(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isString$2(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isString$2(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isString$2(123), false);
	});

	it('should return true if the arguments are [\'abc\']', function () {
		assert.equal(isString$2('abc'), true);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isString$2({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isString$2([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isString$2(function () {}), false);
	});
});

function isUndefined$2(x) {
	return typeof x === 'undefined';
}

describe('isUndefined', function () {

	it('should return true if the arguments are []', function () {
		assert.equal(isUndefined$2(), true);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isUndefined$2(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isUndefined$2(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isUndefined$2(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isUndefined$2('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isUndefined$2({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isUndefined$2([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isUndefined$2(function () {}), false);
	});
});

var x$50 = iteratorSymbol;

var Iterator$2 = function () {
	function Iterator$2(fn) {
		_classCallCheck(this, Iterator$2);

		this.next = fn;
	}

	_createClass(Iterator$2, [{
		key: x$50,
		value: function value() {
			return this;
		}
	}]);

	return Iterator$2;
}();

describe('Iterator', function () {

	it('should return a function which returns an iterator', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator$2(function () {
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
		var iterator = new Iterator$2(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var results = [];
		var _iteratorNormalCompletion25 = true;
		var _didIteratorError25 = false;
		var _iteratorError25 = undefined;

		try {
			for (var _iterator25 = iterator[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
				var result = _step25.value;

				results.push(result);
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

		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});
});

function test$27(storage, testName) {

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

var J0Storage$1 = function () {
	function J0Storage$1() {
		_classCallCheck(this, J0Storage$1);
	}

	_createClass(J0Storage$1, [{
		key: 'clear',
		value: function clear() {
			var _this20 = this;

			x$27(this).forEach(function (key) {
				_this20.removeItem(key);
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
			return x$27(this)[n];
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
			return x$27(this).length;
		}
	}]);

	return J0Storage$1;
}();

test$27(new J0Storage$1(), 'J0Storage');

var keys$2 = x$8.keys;

describe('keys', function () {

	it('should return a list of keys', function () {
		var _obj;

		var key1 = Date.now() + '-1';
		var key2 = Date.now() + '-2';
		var key3 = Date.now() + '-3';
		var obj = (_obj = {}, _defineProperty(_obj, key1, null), _defineProperty(_obj, key2, null), _defineProperty(_obj, key3, null), _obj);
		var actual = keys$2(obj);
		var expected = [key1, key2, key3];
		assert.deepEqual(actual, expected);
	});
});

var Lazy = function () {
	function Lazy() {
		_classCallCheck(this, Lazy);
	}

	_createClass(Lazy, [{
		key: 'getLazy',
		value: function getLazy(key, getter, force) {
			var value = this[key];
			if (force || x$2(value)) {
				value = getter();
				this[key] = value;
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

function leftpad$2(x) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

	var s = x.toString();
	var pad = length - s.length;
	return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
}

describe('leftpad', function () {

	it('should pad a string with 0', function () {
		assert.equal(leftpad$2(1), '01');
	});

	it('should pad a string with 0 [length=10]', function () {
		assert.equal(leftpad$2(1, 10), '0000000001');
	});

	it('should pad a string with * [length=10]', function () {
		assert.equal(leftpad$2(1, 10, '*+='), '*********1');
	});
});

var x$51 = J0Storage;

var localStorage$1 = new x$51();

test$27(localStorage$1, 'localStorage#j0');

test$27(localStorage, 'localStorage');

function test$30(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Map.prototype[Symbol.iterator]';


	describe(name, function () {

		it(name, function () {
			var data = [[1, 2], [3, 4]];
			var map = new Map(data);
			var iterator = generator.call(map);
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
			assert.deepEqual(results, data);
		});
	});
}

function generator$4() {
	return this.entries();
}

test$30(generator$4, 'Map.prototype[Symbol.iterator]#j0');

test$30(Map.prototype[Symbol.iterator]);

var Map$1 = function () {
	function Map$1(iterable) {
		_classCallCheck(this, Map$1);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion26 = true;
			var _didIteratorError26 = false;
			var _iteratorError26 = undefined;

			try {
				for (var _iterator26 = iterable[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
					var _ref30 = _step26.value;

					var _ref31 = _slicedToArray(_ref30, 2);

					var key = _ref31[0];
					var value = _ref31[1];

					this.set(key, value);
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

	_createClass(Map$1, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOfKey',
		value: function indexOfKey(key) {
			return this.data.findIndex(function (_ref32) {
				var _ref33 = _slicedToArray(_ref32, 1),
				    itemKey = _ref33[0];

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
			var found = this.data.find(function (_ref34) {
				var _ref35 = _slicedToArray(_ref34, 1),
				    itemKey = _ref35[0];

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
			return this.data[x$25.iterator]();
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this21 = this;

			this.data.slice().forEach(function (_ref36) {
				var _ref37 = _slicedToArray(_ref36, 2),
				    key = _ref37[0],
				    value = _ref37[1];

				fn.call(thisArg, value, key, _this21);
			});
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new x$1(function () {
				var _iterator$next8 = iterator.next(),
				    value = _iterator$next8.value,
				    done = _iterator$next8.done;

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
			return new x$1(function () {
				var _iterator$next9 = iterator.next(),
				    value = _iterator$next9.value,
				    done = _iterator$next9.done;

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

	return Map$1;
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
			var iterable = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee14() {
				var count;
				return regeneratorRuntime.wrap(function _callee14$(_context14) {
					while (1) {
						switch (_context14.prev = _context14.next) {
							case 0:
								count = 0;

							case 1:
								if (!(count < 1)) {
									_context14.next = 7;
									break;
								}

								_context14.next = 4;
								return [count, count + 1];

							case 4:
								count += 1;
								_context14.next = 1;
								break;

							case 7:
							case 'end':
								return _context14.stop();
						}
					}
				}, _callee14, this);
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
				for (var _len40 = arguments.length, args = Array(_len40), _key40 = 0; _key40 < _len40; _key40++) {
					args[_key40] = arguments[_key40];
				}

				map.delete(args[1]);
				args.push(this);
				results.push(args);
			}, context);
			assert.deepEqual(results, [[2, 1, map, context], [4, 3, map, context], [6, 5, map, context]]);
		});
	});
}

tests$7(Map$1, 'Map#j0');

tests$7(Map);

function test$32(abs) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.abs';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
			return regeneratorRuntime.wrap(function _callee15$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							_context15.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/abs/abs.png',
								fn: abs,
								xRange: [-1, 1],
								yRange: [-1, 1],
								xGrid: [0],
								yGrid: [0]
							});

						case 2:
						case 'end':
							return _context15.stop();
					}
				}
			}, _callee15, this);
		})));
	});
}

test$32(Math.abs);

/* eslint-disable no-magic-numbers */
function test$34(acos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acos';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
			return regeneratorRuntime.wrap(function _callee16$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_context16.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/acos/acos.png',
								fn: acos,
								xRange: [-1, 1],
								yRange: [0, Math.PI],
								xGrid: [-0.5, 0, 0.5],
								yGrid: [Math.PI / 2]
							});

						case 2:
						case 'end':
							return _context16.stop();
					}
				}
			}, _callee16, this);
		})));
	});
}

test$34(Math.acos);

/* eslint-disable no-magic-numbers */
function test$36(acosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acosh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
			return regeneratorRuntime.wrap(function _callee17$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							_context17.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/acosh/acosh.png',
								fn: acosh,
								xRange: [0, 10],
								yRange: [0, 4],
								xGrid: [1, 3, 5, 7, 9],
								yGrid: [1, 2, 3]
							});

						case 2:
						case 'end':
							return _context17.stop();
					}
				}
			}, _callee17, this);
		})));
	});
}

var x$52 = Math;

function acosh(x) {
	return x$52.log(x + x$52.sqrt(x * x - 1));
}

test$36(acosh, 'Math.acosh#j0');

test$36(Math.acosh);

/* eslint-disable no-magic-numbers */
function test$38(asin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asin';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
			return regeneratorRuntime.wrap(function _callee18$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							_context18.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/asin/asin.png',
								fn: asin,
								xRange: [-1, 1],
								yRange: [-Math.PI / 2, Math.PI / 2],
								xGrid: [-0.5, 0, 0.5],
								yGrid: [0]
							});

						case 2:
						case 'end':
							return _context18.stop();
					}
				}
			}, _callee18, this);
		})));
	});
}

test$38(Math.asin);

/* eslint-disable no-magic-numbers */
function test$40(asinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asinh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
			return regeneratorRuntime.wrap(function _callee19$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							_context19.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/asinh/asinh.png',
								fn: asinh,
								xRange: [-16, 16],
								yRange: [-4, 4],
								xGrid: [-15, -10, -5, 0, 5, 10, 15],
								yGrid: [-3, -2, -1, 0, 1, 2, 3]
							});

						case 2:
						case 'end':
							return _context19.stop();
					}
				}
			}, _callee19, this);
		})));
	});
}

function asinh(x) {
	if (x === -Infinity) {
		return x;
	}
	return x$52.log(x + x$52.sqrt(x * x + 1));
}

test$40(asinh, 'Math.asinh#j0');

test$40(Math.asinh);

/* eslint-disable no-magic-numbers */
function test$42(atan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
			return regeneratorRuntime.wrap(function _callee20$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							_context20.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/atan/atan.png',
								fn: atan,
								xRange: [-10, 10],
								yRange: [-Math.PI / 2, Math.PI / 2],
								xGrid: [-5, 0, 5],
								yGrid: [0]
							});

						case 2:
						case 'end':
							return _context20.stop();
					}
				}
			}, _callee20, this);
		})));
	});
}

test$42(Math.atan);

/* eslint-disable no-magic-numbers */
function test$44(atan2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan2';


	describe(name, function () {

		it('[id:' + name + '+] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
			return regeneratorRuntime.wrap(function _callee21$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							_context21.next = 2;
							return assert.graphicalEqual({
								name: name + '+',
								url: window.root + '/Math/atan2/atan2+.png',
								fn: function fn(x) {
									return atan2(1, x);
								},
								xRange: [-10, 10],
								yRange: [0, Math.PI],
								xGrid: [-5, 0, 5],
								yGrid: [Math.PI / 2]
							});

						case 2:
						case 'end':
							return _context21.stop();
					}
				}
			}, _callee21, this);
		})));

		it('[id:' + name + '-] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
			return regeneratorRuntime.wrap(function _callee22$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							_context22.next = 2;
							return assert.graphicalEqual({
								name: name + '-',
								url: window.root + '/Math/atan2/atan2-.png',
								fn: function fn(x) {
									return atan2(-1, x);
								},
								xRange: [-10, 10],
								yRange: [-Math.PI, 0],
								xGrid: [-5, 0, 5],
								yGrid: [-Math.PI / 2]
							});

						case 2:
						case 'end':
							return _context22.stop();
					}
				}
			}, _callee22, this);
		})));
	});
}

test$44(Math.atan2);

/* eslint-disable no-magic-numbers */
function test$46(atanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atanh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
			return regeneratorRuntime.wrap(function _callee23$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							_context23.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/atanh/atanh.png',
								fn: atanh,
								xRange: [-1, 1],
								yRange: [-5, 5],
								xGrid: [-0.5, 0, 0.5],
								yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
							});

						case 2:
						case 'end':
							return _context23.stop();
					}
				}
			}, _callee23, this);
		})));
	});
}

function atanh(x) {
	return x$52.log((1 + x) / (1 - x)) / 2;
}

test$46(atanh, 'Math.atanh#j0');

test$46(Math.atanh);

/* eslint-disable no-magic-numbers */
function test$48(cbrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cbrt';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
			return regeneratorRuntime.wrap(function _callee24$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							_context24.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/cbrt/cbrt.png',
								fn: cbrt,
								xRange: [-64, 64],
								yRange: [-4, 4],
								xGrid: [-27, -8, 0, 8, 27],
								yGrid: [-3, -2, -1, 0, 1, 2, 3]
							});

						case 2:
						case 'end':
							return _context24.stop();
					}
				}
			}, _callee24, this);
		})));
	});
}

/* eslint no-magic-numbers: ["warn", {ignore: [0, 1, 3]}] */
function cbrt(x) {
	var root = x$52.pow(x$52.abs(x), 1 / 3);
	return x < 0 ? -root : root;
}

test$48(cbrt, 'Math.cbrt#j0');

test$48(Math.cbrt);

/* eslint-disable no-magic-numbers */
function test$50(ceil) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.ceil';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
			return regeneratorRuntime.wrap(function _callee25$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							_context25.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/ceil/ceil.png',
								fn: ceil,
								xRange: [-5, 5],
								yRange: [-5, 5],
								xGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
								yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
							});

						case 2:
						case 'end':
							return _context25.stop();
					}
				}
			}, _callee25, this);
		})));
	});
}

test$50(Math.ceil);

/* eslint-disable no-magic-numbers */
function test$52(clz32) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.clz32';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
			return regeneratorRuntime.wrap(function _callee26$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							_context26.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/clz32/clz32.png',
								fn: clz32,
								xRange: [0, 0xffffff],
								yRange: [0, 33],
								xGrid: [0x1fffff, 0x7fffff],
								yGrid: [1, 10, 20, 30]
							});

						case 2:
						case 'end':
							return _context26.stop();
					}
				}
			}, _callee26, this);
		})));
	});
}

/* eslint no-magic-numbers: ["warn", {ignore: [-1, 0, 1, 31, 32]}], no-bitwise: "off" */
function clz32(x) {
	if (x <= -1) {
		return 0;
	}
	if (x === null || x <= 1) {
		return 32;
	}
	return 31 - x$52.floor(x$52.log(x >>> 0) * x$52.LOG2E);
}

test$52(clz32, 'Math.clz32#j0');

test$52(Math.clz32);

/* eslint-disable no-magic-numbers */
function test$54(cos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cos';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
			return regeneratorRuntime.wrap(function _callee27$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							_context27.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/cos/cos.png',
								fn: cos,
								xRange: [0, 2 * Math.PI],
								yRange: [-1, 1],
								xGrid: [0.5 * Math.PI, 1.0 * Math.PI, 1.5 * Math.PI],
								yGrid: [-0.5, 0, 0.5]
							});

						case 2:
						case 'end':
							return _context27.stop();
					}
				}
			}, _callee27, this);
		})));
	});
}

test$54(Math.cos);

/* eslint-disable no-magic-numbers */
function test$56(cosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cosh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee28() {
			return regeneratorRuntime.wrap(function _callee28$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							_context28.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/cosh/cosh.png',
								fn: cosh,
								xRange: [-12, 12],
								yRange: [0, 25000],
								xGrid: [-10, -5, 0, 5, 10],
								yGrid: [5000, 10000, 15000, 20000]
							});

						case 2:
						case 'end':
							return _context28.stop();
					}
				}
			}, _callee28, this);
		})));
	});
}

function cosh(x) {
	var y = x$52.exp(x);
	return (y + 1 / y) / 2;
}

test$56(cosh, 'Math.cosh#j0');

test$56(Math.cosh);

function test$58(E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.E';


	describe(name, function () {

		it('should be approximately equal to 2.718281828459045', function () {
			var expected = 2.718281828459045;
			assert.approxEqual(E, expected);
		});
	});
}

test$58(Math.E);

/* eslint-disable no-magic-numbers */
function test$60(exp) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.exp';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
			return regeneratorRuntime.wrap(function _callee29$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							_context29.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/exp/exp.png',
								fn: exp,
								xRange: [-10, 3],
								yRange: [0, 9],
								xGrid: [0, 1],
								yGrid: [1, Math.E]
							});

						case 2:
						case 'end':
							return _context29.stop();
					}
				}
			}, _callee29, this);
		})));
	});
}

test$60(Math.exp);

/* eslint-disable no-magic-numbers */
function test$62(expm1) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.expm1';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee30() {
			return regeneratorRuntime.wrap(function _callee30$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							_context30.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/expm1/expm1.png',
								fn: expm1,
								xRange: [-10, 3],
								yRange: [-1, 8],
								xGrid: [0, 1],
								yGrid: [0, Math.E - 1]
							});

						case 2:
						case 'end':
							return _context30.stop();
					}
				}
			}, _callee30, this);
		})));
	});
}

function expm1(x) {
	return x$52.exp(x) - 1;
}

test$62(expm1, 'Math.expm1#j0');

test$62(Math.expm1);

/* eslint-disable no-magic-numbers */
function test$64(floor) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.floor';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee31() {
			return regeneratorRuntime.wrap(function _callee31$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							_context31.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/floor/floor.png',
								fn: floor,
								xRange: [-5, 5],
								yRange: [-5, 5],
								xGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
								yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
							});

						case 2:
						case 'end':
							return _context31.stop();
					}
				}
			}, _callee31, this);
		})));
	});
}

test$64(Math.floor);

/* eslint-disable no-magic-numbers */
function test$66(fround) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.fround';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee32() {
			var d;
			return regeneratorRuntime.wrap(function _callee32$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							d = 1;
							_context32.next = 3;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/fround/fround.png',
								fn: fround,
								xRange: [-d, d],
								yRange: [-d, d],
								xGrid: [-d / 2, 0, d / 2],
								yGrid: [-d / 2, 0, d / 2]
							});

						case 3:
						case 'end':
							return _context32.stop();
					}
				}
			}, _callee32, this);
		})));

		it('should return 1.3370000123977661', function () {
			assert.equal(fround(1.337), 1.3370000123977661);
		});
	});
}

function fround(x) {
	return new x$47([x])[0];
}

test$66(fround, 'Math.fround#j0');

test$66(Math.fround);

/* eslint-disable no-magic-numbers */
function test$68(hypot) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.hypot';


	describe(name, function () {

		it('[id:' + name + '-y=3] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee33() {
			return regeneratorRuntime.wrap(function _callee33$(_context33) {
				while (1) {
					switch (_context33.prev = _context33.next) {
						case 0:
							_context33.next = 2;
							return assert.graphicalEqual({
								name: name + '-y=3',
								url: window.root + '/Math/hypot/hypot-y=3.png',
								fn: function fn(x, y) {
									return hypot(x, y);
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								zRange: [0, 1]
							});

						case 2:
						case 'end':
							return _context33.stop();
					}
				}
			}, _callee33, this);
		})));
	});
}

function hypot() {
	var sum = 0;

	for (var _len41 = arguments.length, args = Array(_len41), _key41 = 0; _key41 < _len41; _key41++) {
		args[_key41] = arguments[_key41];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var value = args[i];
		sum += value * value;
	}
	return x$52.sqrt(sum);
}

test$68(hypot, 'Math.hypot#j0');

test$68(Math.hypot);

/* eslint-disable no-magic-numbers */
function test$70(imul) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.imul';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee34() {
			return regeneratorRuntime.wrap(function _callee34$(_context34) {
				while (1) {
					switch (_context34.prev = _context34.next) {
						case 0:
							_context34.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/imul/imul.png',
								fn: function fn(x) {
									return imul(x, 1);
								},
								xRange: [-10, 10],
								yRange: [-10, 10],
								xGrid: [0],
								yGrid: [0]
							});

						case 2:
						case 'end':
							return _context34.stop();
					}
				}
			}, _callee34, this);
		})));

		it('imul(2, 4) should be 8', function () {
			assert.equal(imul(2, 4), 8);
		});

		it('imul(-1, 8) should be -8', function () {
			assert.equal(imul(-1, 8), -8);
		});

		it('imul(-2, -2) should be 4', function () {
			assert.equal(imul(-2, -2), 4);
		});

		// it('imul(0xffffffff, 5) should be -5', function () {
		// 	assert.equal(imul(0xffffffff, 5), -5);
		// });
		//
		// it('imul(0xfffffffe, 5) should be -10', function () {
		// 	assert.equal(imul(0xfffffffe, 5), -10);
		// });
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

test$70(imul, 'Math.imul#j0');

test$70(Math.imul);

function test$72(LN10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN10';


	describe(name, function () {

		it('should be approximately equal to 2.302585092994046', function () {
			var expected = 2.302585092994046;
			assert.approxEqual(LN10, expected);
		});
	});
}

test$72(Math.LN10);

function test$74(LN2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN2';


	describe(name, function () {

		it('should be approximately equal to 0.6931471805599453', function () {
			var expected = 0.6931471805599453;
			assert.approxEqual(LN2, expected);
		});
	});
}

test$74(Math.LN2);

/* eslint-disable no-magic-numbers */
function test$76(log) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee35() {
			return regeneratorRuntime.wrap(function _callee35$(_context35) {
				while (1) {
					switch (_context35.prev = _context35.next) {
						case 0:
							_context35.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/log/log.png',
								fn: log,
								xRange: [0, 10],
								yRange: [-10, 4],
								xGrid: [1 / Math.E, 1, Math.E],
								yGrid: [-1, 0, 1]
							});

						case 2:
						case 'end':
							return _context35.stop();
					}
				}
			}, _callee35, this);
		})));
	});
}

test$76(Math.log);

/* eslint-disable no-magic-numbers */
function test$78(log10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log10';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee36() {
			return regeneratorRuntime.wrap(function _callee36$(_context36) {
				while (1) {
					switch (_context36.prev = _context36.next) {
						case 0:
							_context36.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/log10/log10.png',
								fn: log10,
								xRange: [0, 100],
								yRange: [-5, 2],
								xGrid: [0.1, 1, 10],
								yGrid: [-1, 0, 1]
							});

						case 2:
						case 'end':
							return _context36.stop();
					}
				}
			}, _callee36, this);
		})));
	});
}

function log10(x) {
	return x$52.log(x) / x$52.LN10;
}

test$78(log10, 'Math.log10#j0');

test$78(Math.log10);

function test$80(LOG10E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG10E';


	describe(name, function () {

		it('should be approximately equal to 0.4342944819032518', function () {
			var expected = 0.4342944819032518;
			assert.approxEqual(LOG10E, expected);
		});
	});
}

test$80(Math.LOG10E);

/* eslint-disable no-magic-numbers */
function test$82(log1p) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log1p';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee37() {
			return regeneratorRuntime.wrap(function _callee37$(_context37) {
				while (1) {
					switch (_context37.prev = _context37.next) {
						case 0:
							_context37.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/log1p/log1p.png',
								fn: log1p,
								xRange: [-1, 9],
								yRange: [-10, 4],
								xGrid: [1 / Math.E - 1, 0, Math.E - 1],
								yGrid: [-1, 0, 1]
							});

						case 2:
						case 'end':
							return _context37.stop();
					}
				}
			}, _callee37, this);
		})));
	});
}

function log1p(x) {
	return x$52.log(x + 1);
}

test$82(log1p, 'Math.log1p#j0');

test$82(Math.log1p);

/* eslint-disable no-magic-numbers */
function test$84(log2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log2';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee38() {
			return regeneratorRuntime.wrap(function _callee38$(_context38) {
				while (1) {
					switch (_context38.prev = _context38.next) {
						case 0:
							_context38.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/log2/log2.png',
								fn: log2,
								xRange: [0, 8],
								yRange: [-5, 3],
								xGrid: [1 / 2, 1, 2],
								yGrid: [-1, 0, 1]
							});

						case 2:
						case 'end':
							return _context38.stop();
					}
				}
			}, _callee38, this);
		})));
	});
}

function log2(x) {
	return x$52.log(x) / x$52.LN2;
}

test$84(log2, 'Math.log2#j0');

test$84(Math.log2);

function test$86(LOG2E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG2E';


	describe(name, function () {

		it('should be approximately equal to 1.4426950408889633', function () {
			var expected = 1.4426950408889633;
			assert.approxEqual(LOG2E, expected);
		});
	});
}

test$86(Math.LOG2E);

/* eslint-disable no-magic-numbers */
function test$88(max) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.max';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee39() {
			return regeneratorRuntime.wrap(function _callee39$(_context39) {
				while (1) {
					switch (_context39.prev = _context39.next) {
						case 0:
							_context39.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/max/max.png',
								fn: function fn(x) {
									return max(0, x);
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								xGrid: [-0.5, 0, 0.5],
								yGrid: [-0.5, 0, 0.5]
							});

						case 2:
						case 'end':
							return _context39.stop();
					}
				}
			}, _callee39, this);
		})));
	});
}

test$88(Math.max);

/* eslint-disable no-magic-numbers */
function test$90(min) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.min';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee40() {
			return regeneratorRuntime.wrap(function _callee40$(_context40) {
				while (1) {
					switch (_context40.prev = _context40.next) {
						case 0:
							_context40.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/min/min.png',
								fn: function fn(x) {
									return min(0, x);
								},
								xRange: [-1, 1],
								yRange: [-1, 1],
								xGrid: [-0.5, 0, 0.5],
								yGrid: [-0.5, 0, 0.5]
							});

						case 2:
						case 'end':
							return _context40.stop();
					}
				}
			}, _callee40, this);
		})));
	});
}

test$90(Math.min);

function test$92(PI) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.PI';


	describe(name, function () {

		it('should be approximately equal to 3.141592653589793', function () {
			var expected = 3.141592653589793;
			assert.approxEqual(PI, expected);
		});
	});
}

test$92(Math.PI);

/* eslint-disable no-magic-numbers */
function test$94(pow) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.pow';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee41() {
			return regeneratorRuntime.wrap(function _callee41$(_context41) {
				while (1) {
					switch (_context41.prev = _context41.next) {
						case 0:
							_context41.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/pow/pow.png',
								fn: function fn(x) {
									return pow(2, x);
								},
								xRange: [-2, 2],
								yRange: [0, 4],
								xGrid: [-1, 0, 1],
								yGrid: [1, 2, 3]
							});

						case 2:
						case 'end':
							return _context41.stop();
					}
				}
			}, _callee41, this);
		})));
	});
}

test$94(Math.pow);

/* eslint-disable no-magic-numbers */
function test$96(random) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.random';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', function () {
			var timeout = 5000;
			this.timeout(timeout);
			return assert.graphicalEqual({
				name: name,
				url: window.root + '/Math/random/random.png',
				fn: random,
				xRange: [0, 1],
				yRange: [0, 1],
				xGrid: [],
				yGrid: [0.5]
			}).catch(function (error) {
				if (error.code === 'EDIFF') {
					return;
				}
				throw error;
			});
		});
	});
}

test$96(Math.random);

/* eslint-disable no-magic-numbers */
function test$98(round) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.round';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee42() {
			return regeneratorRuntime.wrap(function _callee42$(_context42) {
				while (1) {
					switch (_context42.prev = _context42.next) {
						case 0:
							_context42.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/round/round.png',
								fn: round,
								xRange: [-5, 5],
								yRange: [-5, 5],
								xGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4],
								yGrid: [-4, -3, -2, -1, 0, 1, 2, 3, 4]
							});

						case 2:
						case 'end':
							return _context42.stop();
					}
				}
			}, _callee42, this);
		})));
	});
}

test$98(Math.round);

/* eslint-disable no-magic-numbers */
function test$100(sign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sign';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee43() {
			return regeneratorRuntime.wrap(function _callee43$(_context43) {
				while (1) {
					switch (_context43.prev = _context43.next) {
						case 0:
							_context43.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/sign/sign.png',
								fn: sign,
								xRange: [-3, 3],
								yRange: [-1.1, 1.1],
								xGrid: [-2, -1, 0, 1, 2],
								yGrid: [-1, 0, 1]
							});

						case 2:
						case 'end':
							return _context43.stop();
					}
				}
			}, _callee43, this);
		})));
	});
}

var x$53 = isNaN;

function sign(x) {
	x = +x;
	if (x === 0 || x$53(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
}

test$100(sign, 'Math.sign#j0');

test$100(Math.sign);

/* eslint-disable no-magic-numbers */
function test$102(sin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sin';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee44() {
			return regeneratorRuntime.wrap(function _callee44$(_context44) {
				while (1) {
					switch (_context44.prev = _context44.next) {
						case 0:
							_context44.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/sin/sin.png',
								fn: sin,
								xRange: [0, 2 * Math.PI],
								yRange: [-1, 1],
								xGrid: [0.5 * Math.PI, 1.0 * Math.PI, 1.5 * Math.PI],
								yGrid: [-0.5, 0, 0.5]
							});

						case 2:
						case 'end':
							return _context44.stop();
					}
				}
			}, _callee44, this);
		})));
	});
}

test$102(Math.sin);

/* eslint-disable no-magic-numbers */
function test$104(sinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sinh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee45() {
			return regeneratorRuntime.wrap(function _callee45$(_context45) {
				while (1) {
					switch (_context45.prev = _context45.next) {
						case 0:
							_context45.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/sinh/sinh.png',
								fn: sinh,
								xRange: [-12, 12],
								yRange: [-5000, 5000],
								xGrid: [-10, -5, 0, 5, 10],
								yGrid: [-4000, -2000, 0, 2000, 4000]
							});

						case 2:
						case 'end':
							return _context45.stop();
					}
				}
			}, _callee45, this);
		})));
	});
}

function sinh(x) {
	var y = x$52.exp(x);
	return (y - 1 / y) / 2;
}

test$104(sinh, 'Math.sinh#j0');

test$104(Math.sinh);

/* eslint-disable no-magic-numbers */
function test$106(sqrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sqrt';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee46() {
			return regeneratorRuntime.wrap(function _callee46$(_context46) {
				while (1) {
					switch (_context46.prev = _context46.next) {
						case 0:
							_context46.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/sqrt/sqrt.png',
								fn: sqrt,
								xRange: [0, 10],
								yRange: [0, 4],
								xGrid: [1, 4, 9],
								yGrid: [1, 2, 3]
							});

						case 2:
						case 'end':
							return _context46.stop();
					}
				}
			}, _callee46, this);
		})));
	});
}

test$106(Math.sqrt);

function test$108(SQRT1_2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT1_2';


	describe(name, function () {

		it('should be approximately equal to 0.7071067811865476', function () {
			var expected = 0.7071067811865476;
			assert.approxEqual(SQRT1_2, expected);
		});
	});
}

test$108(Math.SQRT1_2);

function test$110(SQRT2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT2';


	describe(name, function () {

		it('should be approximately equal to 1.4142135623730951', function () {
			var expected = 1.4142135623730951;
			assert.approxEqual(SQRT2, expected);
		});
	});
}

test$110(Math.SQRT2);

/* eslint-disable no-magic-numbers */
function test$112(tan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tan';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee47() {
			return regeneratorRuntime.wrap(function _callee47$(_context47) {
				while (1) {
					switch (_context47.prev = _context47.next) {
						case 0:
							_context47.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/tan/tan.png',
								fn: tan,
								xRange: [0, 2 * Math.PI],
								yRange: [-5, 5],
								xGrid: [0.5 * Math.PI, 1.0 * Math.PI, 1.5 * Math.PI],
								yGrid: [-2, -1, 0, 1, 2]
							});

						case 2:
						case 'end':
							return _context47.stop();
					}
				}
			}, _callee47, this);
		})));
	});
}

test$112(Math.tan);

/* eslint-disable no-magic-numbers */
function test$114(tanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tanh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee48() {
			return regeneratorRuntime.wrap(function _callee48$(_context48) {
				while (1) {
					switch (_context48.prev = _context48.next) {
						case 0:
							_context48.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/tanh/tanh.png',
								fn: tanh,
								xRange: [-6, 6],
								yRange: [-1, 1],
								xGrid: [-4, -2, 0, 2, 4],
								yGrid: [-0.5, 0, 0.5]
							});

						case 2:
						case 'end':
							return _context48.stop();
					}
				}
			}, _callee48, this);
		})));
	});
}

function tanh(x) {
	if (x === Infinity) {
		return 1;
	} else if (x === -Infinity) {
		return -1;
	}
	var y = x$52.exp(2 * x);
	return (y - 1) / (y + 1);
}

test$114(tanh, 'Math.tanh#j0');

test$114(Math.tanh);

/* eslint-disable no-magic-numbers */
function test$116(trunc) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.trunc';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee49() {
			return regeneratorRuntime.wrap(function _callee49$(_context49) {
				while (1) {
					switch (_context49.prev = _context49.next) {
						case 0:
							_context49.next = 2;
							return assert.graphicalEqual({
								name: name,
								url: window.root + '/Math/trunc/trunc.png',
								fn: trunc,
								xRange: [-10, 10],
								yRange: [-10, 10],
								xGrid: [0],
								yGrid: [0]
							});

						case 2:
						case 'end':
							return _context49.stop();
					}
				}
			}, _callee49, this);
		})));

		it('trunc(13.37) should be 13', function () {
			assert.equal(trunc(13.37), 13);
		});

		it('trunc(42.84) should be 42', function () {
			assert.equal(trunc(42.84), 42);
		});

		it('trunc(0.123) should be 0', function () {
			assert.equal(trunc(0.123), 0);
		});

		it('trunc(-0.123) should be -0', function () {
			assert.equal(trunc(-0.123), -0);
		});

		it('trunc(\'-1.123\') should be -1', function () {
			assert.equal(trunc('-1.123'), -1);
		});

		it('trunc(NaN) should be NaN', function () {
			assert.equal(isNaN(trunc(NaN)), true);
		});

		it('trunc(\'foo\') should be NaN', function () {
			assert.equal(isNaN(trunc('foo')), true);
		});

		it('trunc() should be NaN', function () {
			assert.equal(isNaN(trunc()), true);
		});
	});
}

/* eslint-disable no-bitwise, no-magic-numbers */
function trunc(x) {
	return x - x % 1;
}

test$116(trunc, 'Math.trunc#j0');

test$116(Math.trunc);

function test$118(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NamedNodeMap.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion27 = true;
			var _didIteratorError27 = false;
			var _iteratorError27 = undefined;

			try {
				for (var _iterator27 = expected[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
					var element = _step27.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			while (1) {
				var _iterator$next10 = iterator.next(),
				    value = _iterator$next10.value,
				    done = _iterator$next10.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion28 = true;
			var _didIteratorError28 = false;
			var _iteratorError28 = undefined;

			try {
				for (var _iterator28 = expected[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
					var element = _step28.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion29 = true;
			var _didIteratorError29 = false;
			var _iteratorError29 = undefined;

			try {
				for (var _iterator29 = iterator[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
					var value = _step29.value;

					results.push(value);
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

			assert.deepEqual(results, expected);
		});
	});
}

function generator$6() {
	var _this22 = this;

	var length = this.length;

	var index = 0;
	return new x$1(function () {
		return {
			value: _this22[index],
			done: length <= index++
		};
	});
}

test$118(generator$6, 'NamedNodeMap.prototype[Symbol.iterator]#j0');

test$118(NamedNodeMap.prototype[Symbol.iterator]);

function test$120(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NodeList.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion30 = true;
			var _didIteratorError30 = false;
			var _iteratorError30 = undefined;

			try {
				for (var _iterator30 = expected[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
					var element = _step30.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			while (1) {
				var _iterator$next11 = iterator.next(),
				    value = _iterator$next11.value,
				    done = _iterator$next11.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion31 = true;
			var _didIteratorError31 = false;
			var _iteratorError31 = undefined;

			try {
				for (var _iterator31 = expected[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
					var element = _step31.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion32 = true;
			var _didIteratorError32 = false;
			var _iteratorError32 = undefined;

			try {
				for (var _iterator32 = iterator[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
					var value = _step32.value;

					results.push(value);
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

			assert.deepEqual(results, expected);
		});
	});
}

function generator$8() {
	var _this23 = this;

	var length = this.length;

	var index = 0;
	return new x$1(function () {
		return {
			value: _this23[index],
			done: length <= index++
		};
	});
}

test$120(generator$8, 'NodeList.prototype[Symbol.iterator]#j0');

test$120(NodeList.prototype[Symbol.iterator]);

function noop$2(x) {
	return x;
}

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop$2();
		});
	});

	it('should return the first argument', function () {
		var data = new Date();
		assert.equal(noop$2(data), data);
	});
});

function assign$3(target) {
	for (var _len42 = arguments.length, objects = Array(_len42 > 1 ? _len42 - 1 : 0), _key42 = 1; _key42 < _len42; _key42++) {
		objects[_key42 - 1] = arguments[_key42];
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

test$19(assign$3, 'Object.assign#j0');

test$19(Object.assign);

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

var x$54 = decodeURIComponent;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new x$15();

	body.trim().split('&').forEach(function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    _name2 = _data$split2[0],
			    parts = _data$split2.slice(1);

			_name2 = x$54(_name2.replace(/\+/g, ' '));
			parts = x$54(parts.join('=').replace(/\+/g, ' '));
			form.append(_name2, parts);
		}
	});
	return form;
}

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

var x$55 = Headers;

function parse$2(rawHeaders) {
	var headers = new x$55();
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

describe('parseHeaders', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse$2(src);
		assert.deepEqual(Array.from(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});

function passThrough$2(x) {
	return x;
}

describe('passThrough', function () {

	it('should return the first argument', function () {
		var value = Date.now();
		assert.equal(passThrough$2(value), value);
	});
});

var x$56 = isFunction;

var x$57 = setImmediate;

var x$58 = noop;

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
	this.promise = new J0Promise(x$58);
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
			var _this24 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this24.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this24.reject(error);
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
					throw new x$13('A promise cannot be resolved with itself');
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
			var _this25 = this;

			this.deferreds.forEach(function (deferred) {
				_this25.handle(deferred);
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
			x$57(function () {
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
	return value && x$56(value.then) && x$56(value.catch);
}

function test$122(Promise, name) {

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

test$122(J0Promise, 'Promise/j0');

test$122(Promise, 'Promise');

var x$59 = FileReader;

function readBlob$2(data, type) {
	var reader = new x$59();
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

describe('readBlob', function () {

	it('should be a function', function () {
		return readBlob$2;
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

tests$10(Request, 'Request');

describe('requestAnimationFrame', function () {

	it('should call the given function with timeStamp', _asyncToGenerator(regeneratorRuntime.mark(function _callee50() {
		var timeStamp;
		return regeneratorRuntime.wrap(function _callee50$(_context50) {
			while (1) {
				switch (_context50.prev = _context50.next) {
					case 0:
						_context50.next = 2;
						return new Promise(x$23);

					case 2:
						timeStamp = _context50.sent;

						assert(0 < timeStamp, true);

					case 4:
					case 'end':
						return _context50.stop();
				}
			}
		}, _callee50, this);
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

tests$12(Response, 'Response');

function scrollX() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$40;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$40;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});

function test$123(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Set.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var set = new Set(data);
			var iterator = generator.call(set);
			var results = [];
			while (1) {
				var _iterator$next12 = iterator.next(),
				    value = _iterator$next12.value,
				    done = _iterator$next12.done;

				if (done) {
					break;
				}
				results.push(value);
			}
			assert.deepEqual(results, data);
		});
	});
}

function generator$10() {
	return this.values();
}

test$123(generator$10, 'Set.prototype[Symbol.iterator]#j0');

test$123(Set.prototype[Symbol.iterator]);

var Set$2 = function () {
	function Set$2(iterable) {
		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion33 = true;
			var _didIteratorError33 = false;
			var _iteratorError33 = undefined;

			try {
				for (var _iterator33 = iterable[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
					var value = _step33.value;

					this.add(value);
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
			var _this26 = this;

			this.data.slice().forEach(function (value) {
				fn.call(thisArg, value, value, _this26);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data.slice()[x$50]();
		}
	}, {
		key: x$50,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next13 = iterator.next(),
					    value = _iterator$next13.value,
					    done = _iterator$next13.done;

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

/* eslint-disable no-magic-numbers */

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
				for (var _len43 = arguments.length, args = Array(_len43), _key43 = 0; _key43 < _len43; _key43++) {
					args[_key43] = arguments[_key43];
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
				var _iterator$next14 = iterator.next(),
				    value = _iterator$next14.value,
				    done = _iterator$next14.done;

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
				var _iterator$next15 = iterator.next(),
				    value = _iterator$next15.value,
				    done = _iterator$next15.done;

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

tests$14(Set, 'Set');

var x$60 = setTimeout;

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!x$40.immediateId) {
	x$40.immediateId = 0;
}
x$40.immediateId += 1;
var setImmediateNative = x$40.setImmediate;

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
	return x$60(fn);
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
x$60(function () {
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

var setImmediate$2 = function setImmediate$2(fn) {
	return setImmediateAvailable(fn);
};

describe('setImmediate', function () {

	it('should call the function at end of current processes', function () {
		var order = 3;
		var expected = 36;
		return new Promise(function (resolve) {
			setImmediate$2(function () {
				order *= order;
			});
			order += order;
			setTimeout(resolve, 50);
		}).then(function () {
			assert.equal(order, expected);
		});
	});
});

var x$61 = encodeURIComponent;

var State = function () {
	function State(stateInfo) {
		_classCallCheck(this, State);

		if (!x$19(stateInfo, State)) {
			var path = stateInfo.path;

			var parts = [];
			var pos = 0;
			path.replace(/\{(\w+):(.*?)\}/g, function (_ref74, name, expression, offset, source) {
				var length = _ref74.length;

				if (pos < offset) {
					parts.push(source.slice(pos, offset));
				}
				parts.push([name, new RegExp('^' + expression + '$'), expression]);
				pos = offset + length;
			});
			if (pos < path.length) {
				parts.push(path.slice(pos));
			}
			var matcher = new RegExp(parts.map(function (part) {
				if (x$17(part)) {
					return part;
				}
				return '(' + part[2] + ')';
			}).join(''));
			x$28(stateInfo, {
				parts: parts,
				matcher: matcher
			});
		}
		x$28(this, stateInfo);
	}

	_createClass(State, [{
		key: 'compose',
		value: function compose(fn) {
			var parts = this.parts;

			var result = [];
			for (var index = 0, length = parts.length; index < length; index++) {
				var part = parts[index];
				if (x$17(part)) {
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
					return x$61(value);
				}
			});
		}
	}, {
		key: 'parse',
		value: function parse() {
			var _this27 = this;

			var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			var params = void 0;
			href.replace(this.matcher, function (match) {
				for (var _len44 = arguments.length, args = Array(_len44 > 1 ? _len44 - 1 : 0), _key44 = 1; _key44 < _len44; _key44++) {
					args[_key44 - 1] = arguments[_key44];
				}

				var index = 0;
				params = {};
				return _this27.compose(function (key) {
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

			var params = x$17(src) ? this.parse(src) : src;
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
		var expected = name + '/' + param1 + '/' + param2;
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

var x$62 = Map;

var x$63 = EventEmitter;

var x$64 = debounce;

var x$65 = location;

var x$66 = history;

var x$67 = addEventListener;

var x$68 = Boolean;

var StateManager = function (_x$2) {
	_inherits(StateManager, _x$2);

	function StateManager(config) {
		_classCallCheck(this, StateManager);

		var _this28 = _possibleConstructorReturn(this, (StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call(this));

		x$28(_this28, { prefix: '#' }, config, {
			states: new x$62(),
			listeners: []
		});
		if (!_this28.parser) {
			if (_this28.prefix.charAt(0) === '#') {
				_this28.parser = function (url) {
					return url.hash.slice(this.prefix.length);
				};
			} else {
				_this28.parser = function (url) {
					var pathname = url.pathname,
					    search = url.search,
					    hash = url.hash;

					return ('' + pathname + search + hash).slice(this.prefix.length);
				};
			}
		}
		return _this28;
	}

	_createClass(StateManager, [{
		key: 'parseURL',
		value: function parseURL() {
			var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$65;

			var stateString = this.parser(url);
			var _iteratorNormalCompletion34 = true;
			var _didIteratorError34 = false;
			var _iteratorError34 = undefined;

			try {
				for (var _iterator34 = this.states[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
					var _ref75 = _step34.value;

					var _ref76 = _slicedToArray(_ref75, 2);

					var state = _ref76[1];

					var params = state.parse(stateString);
					if (params) {
						return state.instantiate(params);
					}
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

			return this.fallback;
		}
	}, {
		key: 'define',
		value: function define(stateInfo) {
			var name = stateInfo.name;

			if (x$17(name) && name) {
				this.states.set(name, new State(stateInfo));
			} else {
				throw new Error('Invalid name');
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get() {
			var _ref77 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
			    name = _ref77.name,
			    params = _ref77.params;

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
				throw new Error('Failed to set fallback: ' + x$9.stringify(stateInfo) + ' is not exist.');
			}
			return this;
		}
	}, {
		key: 'is',
		value: function is(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$68(current && state && current.is(state));
		}
	}, {
		key: 'isIn',
		value: function isIn(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$68(current && state && current.isIn(state));
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$68(current && state && current.isAncestorOf(state));
		}
	}, {
		key: 'setCurrent',
		value: function setCurrent(stateInfo, method) {
			var newState = this.get(stateInfo);
			if (this.is(newState)) {
				return;
			}
			x$66[method](newState.name, newState.params, newState.href);
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
			var _this29 = this;

			var debounceDuration = 30;
			var onStateChange = x$64(function () {
				_this29.replace(_this29.parseURL());
			}, debounceDuration);
			x$67('hashchange', onStateChange);
			x$67('pushstate', onStateChange);
			x$67('popstate', onStateChange);
			onStateChange();
		}
	}]);

	return StateManager;
}(x$63);

var hex = 16;
var initialState = location.pathname;

function resetState() {
	history.replaceState(null, {}, initialState);
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
		var _iteratorNormalCompletion35 = true;
		var _didIteratorError35 = false;
		var _iteratorError35 = undefined;

		try {
			for (var _iterator35 = states.states[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
				var _ref78 = _step35.value;

				var _ref79 = _slicedToArray(_ref78, 2);

				var state = _ref79[1];

				results.push(state);
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

	it('should start management', _asyncToGenerator(regeneratorRuntime.mark(function _callee51() {
		var states, name0, name1, name2, _ref81, _ref82, toState, fromState;

		return regeneratorRuntime.wrap(function _callee51$(_context51) {
			while (1) {
				switch (_context51.prev = _context51.next) {
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
						_context51.next = 7;
						return new Promise(function (resolve) {
							states.on('change', function () {
								for (var _len45 = arguments.length, data = Array(_len45), _key45 = 0; _key45 < _len45; _key45++) {
									data[_key45] = arguments[_key45];
								}

								resolve(data);
							}).start();
						});

					case 7:
						_ref81 = _context51.sent;
						_ref82 = _slicedToArray(_ref81, 2);
						toState = _ref82[0];
						fromState = _ref82[1];

						assert.deepEqual(toState, states.fallback);
						assert.equal(!fromState, true);

					case 13:
					case 'end':
						return _context51.stop();
				}
			}
		}, _callee51, this);
	})));

	it('should return whether the current state is the given state or not', _asyncToGenerator(regeneratorRuntime.mark(function _callee52() {
		var states, name0, name1, name2;
		return regeneratorRuntime.wrap(function _callee52$(_context52) {
			while (1) {
				switch (_context52.prev = _context52.next) {
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
						_context52.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve);
						});

					case 7:
						assert.equal(states.is({ name: name0 }), true);
						assert.equal(states.is({ name: name1 }), false);

					case 9:
					case 'end':
						return _context52.stop();
				}
			}
		}, _callee52, this);
	})));

	it('should go to the other state', _asyncToGenerator(regeneratorRuntime.mark(function _callee53() {
		var states, name0, name1, name2, param1, params;
		return regeneratorRuntime.wrap(function _callee53$(_context53) {
			while (1) {
				switch (_context53.prev = _context53.next) {
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
						_context53.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						param1 = '' + Date.now();
						params = { param1: param1 };
						_context53.next = 11;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name1,
								params: params
							});
						});

					case 11:
						assert.equal(states.current.name, name1);

					case 12:
					case 'end':
						return _context53.stop();
				}
			}
		}, _callee53, this);
	})));

	it('should return whether the current state is one of the given states', _asyncToGenerator(regeneratorRuntime.mark(function _callee54() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1;
		return regeneratorRuntime.wrap(function _callee54$(_context54) {
			while (1) {
				switch (_context54.prev = _context54.next) {
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
						_context54.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context54.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context54.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context54.sent;

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
						return _context54.stop();
				}
			}
		}, _callee54, this);
	})));

	it('should detect history.back()', _asyncToGenerator(regeneratorRuntime.mark(function _callee55() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1, toState2;
		return regeneratorRuntime.wrap(function _callee55$(_context55) {
			while (1) {
				switch (_context55.prev = _context55.next) {
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
						_context55.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context55.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context55.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context55.sent;

						assert.equal(toState1.name, name2);
						_context55.next = 18;
						return new Promise(function (resolve) {
							states.once('change', resolve);
							history.back();
						});

					case 18:
						toState2 = _context55.sent;

						assert.equal(toState2.name, name0);

					case 20:
					case 'end':
						return _context55.stop();
				}
			}
		}, _callee55, this);
	})));
});

function test$125(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next16 = iterator.next(),
				    value = _iterator$next16.value,
				    done = _iterator$next16.done;

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
			var _iteratorNormalCompletion36 = true;
			var _didIteratorError36 = false;
			var _iteratorError36 = undefined;

			try {
				for (var _iterator36 = iterator[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
					var value = _step36.value;

					results.push(value);
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

			assert.deepEqual(results, string.split(''));
		});
	});
}

function generator$12() {
	var _this30 = this;

	var length = this.length;

	var index = 0;
	return new x$1(function () {
		return {
			value: _this30[index],
			done: length <= index++
		};
	});
}

test$125(generator$12, 'String.prototype[Symbol.iterator]#j0');

test$125(String.prototype[Symbol.iterator]);

/* eslint-disable no-magic-numbers */
function test$127(codePointAt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.codePointAt';


	describe(name, function () {

		[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref87) {
			var _ref88 = _slicedToArray(_ref87, 3),
			    string = _ref88[0],
			    from = _ref88[1],
			    to = _ref88[2];

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

test$127(codePointAt, 'String.prototype.codePointAt#j0');

test$127(String.prototype.codePointAt);

function test$129(endsWith) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.endsWith';


	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			var fragment = '' + Date.now();
			var string1 = Date.now() + 'abc';
			var string2 = 'abc' + Date.now();
			assert.equal(endsWith.call(string1, fragment), false);
			assert.equal(endsWith.call(string2, fragment), true);
		});
	});
}

function endsWith(fragment) {
	return this.indexOf(fragment) === this.length - fragment.length;
}

test$129(endsWith, 'String.prototype.endsWith#j0');

test$129(String.prototype.endsWith);

/* eslint-disable no-magic-numbers */

function test$131(fromCodePoint) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.fromCodePoint';


	describe(name, function () {

		[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref89) {
			var _ref90 = _slicedToArray(_ref89, 3),
			    expected = _ref90[0],
			    from = _ref90[1],
			    to = _ref90[2];

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

var x$69 = isFinite;

var x$70 = RangeError;

/* eslint-disable no-magic-numbers, no-bitwise */

function fromCodePoint() {
	var chars = [];
	var fromCharCode = x$5.fromCharCode;

	for (var _len46 = arguments.length, args = Array(_len46), _key46 = 0; _key46 < _len46; _key46++) {
		args[_key46] = arguments[_key46];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var codePoint = args[i];
		if (!x$69(codePoint) || codePoint < 0 || codePoint > 0x10FFFF) {
			throw new x$70('Invalid code point: ' + codePoint);
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

test$131(fromCodePoint, 'String.fromCodePoint#j0');

test$131(String.fromCodePoint);

var x$71 = unorm;

function normalize(form) {
	return x$71[form.toLowerCase()](this);
}

var x$72 = fetch;

var forms = ['NFC', 'NFD', 'NFKC', 'NFKD'];

function test$133(normalize) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.normalize';


	describe(name, function () {

		var tests = void 0;

		before(_asyncToGenerator(regeneratorRuntime.mark(function _callee56() {
			var root, response;
			return regeneratorRuntime.wrap(function _callee56$(_context56) {
				while (1) {
					switch (_context56.prev = _context56.next) {
						case 0:
							this.timeout(10000);
							root = document.getElementById('root').textContent;
							_context56.next = 4;
							return x$72(root + '/String/normalize/tests.json');

						case 4:
							response = _context56.sent;
							_context56.next = 7;
							return response.json();

						case 7:
							tests = _context56.sent;

						case 8:
						case 'end':
							return _context56.stop();
					}
				}
			}, _callee56, this);
		})));

		it('should normalize texts', function () {
			var failed = [];
			var _tests = tests,
			    length = _tests.length;

			this.timeout(10000);

			var _loop = function _loop() {
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
				_loop();
			}
			if (0 < failed.length) {
				console.error(new Error(failed.length + ' of ' + length + ' failed'));
				console.log(failed);
				// throw new Error(`${failed.length} of ${length} failed`);
			}
		});
	});
}

test$133(normalize, 'String.prototype.normalize#j0');

test$133(String.prototype.normalize);

function test$135(repeat) {
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

var x$73 = parseInt;

function repeat(c) {
	var count = x$73(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

test$135(repeat, 'String.prototype.repeat#j0');

test$135(String.prototype.repeat);

function test$137(startsWith) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype.startsWith';


	describe(name, function () {

		it('should return whether the string starts with the given string or not', function () {
			var fragment = '' + Date.now();
			var string1 = Date.now() + 'abc';
			var string2 = 'abc' + Date.now();
			assert.equal(startsWith.call(string1, fragment), true);
			assert.equal(startsWith.call(string2, fragment), false);
		});
	});
}

function startsWith(fragment) {
	return this.indexOf(fragment) === 0;
}

test$137(startsWith, 'String.prototype.startsWith#j0');

test$137(String.prototype.startsWith);

var StringList$2 = function () {
	function StringList$2(iterable) {
		_classCallCheck(this, StringList$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion37 = true;
			var _didIteratorError37 = false;
			var _iteratorError37 = undefined;

			try {
				for (var _iterator37 = iterable[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
					var _ref92 = _step37.value;

					var _ref93 = _slicedToArray(_ref92, 2);

					var key = _ref93[0];
					var value = _ref93[1];

					this.append(key, value);
				}
			} catch (err) {
				_didIteratorError37 = true;
				_iteratorError37 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion37 && _iterator37.return) {
						_iterator37.return();
					}
				} finally {
					if (_didIteratorError37) {
						throw _iteratorError37;
					}
				}
			}
		}
	}

	_createClass(StringList$2, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return this.data.findIndex(function (_ref94) {
				var _ref95 = _slicedToArray(_ref94, 1),
				    itemName = _ref95[0];

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
			this.data = this.data.filter(function (_ref96) {
				var _ref97 = _slicedToArray(_ref96, 1),
				    itemName = _ref97[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = this.data.find(function (_ref98) {
				var _ref99 = _slicedToArray(_ref98, 1),
				    itemName = _ref99[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			this.data.forEach(function (_ref100) {
				var _ref101 = _slicedToArray(_ref100, 2),
				    itemName = _ref101[0],
				    value = _ref101[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref102) {
				var _ref103 = _slicedToArray(_ref102, 2),
				    name = _ref103[0],
				    _ref103$ = _ref103[1],
				    value = _ref103$ === undefined ? '' : _ref103$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[x$50]();
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new x$1(function () {
				var _iterator$next17 = iterator.next(),
				    value = _iterator$next17.value,
				    done = _iterator$next17.done;

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
			return new x$1(function () {
				var _iterator$next18 = iterator.next(),
				    value = _iterator$next18.value,
				    done = _iterator$next18.done;

				return {
					value: value && value[1],
					done: done
				};
			});
		}
	}, {
		key: x$50,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList$2;
}();

describe('StringList', function () {

	it('should have has()', function () {
		var searchParams = new StringList$2([['topic', 'a']]);
		assert.equal(searchParams.has('topic'), true);
		assert.equal(searchParams.has('topick'), false);
	});

	it('should have append()', function () {
		var searchParams = new StringList$2();
		var name = 'a';
		var value = 'b';
		searchParams.append(name, value);
		searchParams.append(name, value);
		assert.equal(searchParams.toString(), 'a:b,a:b');
	});

	it('should have set()', function () {
		var searchParams = new StringList$2();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.set(name, value1);
		searchParams.set(name, value2);
		assert.equal(searchParams.toString(), 'a:c');
	});

	it('should have get()', function () {
		var searchParams = new StringList$2();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.equal(searchParams.get(name), value1);
	});

	it('should have getAll()', function () {
		var searchParams = new StringList$2();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.deepEqual(searchParams.getAll(name), [value1, value2]);
	});

	it('should have delete()', function () {
		var searchParams = new StringList$2();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		searchParams.delete(name);
		assert.equal(searchParams.toString(), '');
	});

	it('should have entries()', function () {
		var searchParams = new StringList$2();
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
		var searchParams = new StringList$2();
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

	[['abc', 0x61, 0x63], ['𐀀𐀁𐀂𐀃𐀄𐀅𐀆𐀇𐀈𐀉𐀊𐀋𐀌𐀍𐀎𐀏', 0x10000, 0x1000F], ['𐰀𐰁𐰂𐰃𐰄𐰅𐰆𐰇𐰈𐰉𐰊𐰋𐰌𐰍𐰎𐰏𐰐𐰑𐰒𐰓𐰔𐰕𐰖𐰗𐰘𐰙𐰚𐰛𐰜𐰝𐰞𐰟𐰠', 0x10c00, 0x10c20], ['􏿰􏿱􏿲􏿳􏿴􏿵􏿶􏿷􏿸􏿹􏿺􏿻􏿼􏿽􏿾􏿿', 0x10FFF0, 0x10FFFF]].forEach(function (_ref104) {
		var _ref105 = _slicedToArray(_ref104, 3),
		    string = _ref105[0],
		    from = _ref105[1],
		    to = _ref105[2];

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

function test$139(_Symbol) {
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

test$139(Symbol, 'J0Symbol');

test$139(Symbol);

var x$74 = pluralFunctions;

var pluralFunction = void 0;

function template(templateString) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	return x$27(params).reduce(function (result, paramKey) {
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

	pluralFunction = x$74[index];
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

var x$75 = clamp;

/* eslint no-magic-numbers: "off" */
function thermalRGB(value) {
	var ratio = value * 2;
	var b = x$75(1 - ratio, 0, 1);
	var r = x$75(ratio - 1, 0, 1);
	var g = x$75(0.8 - b - r, 0, 1);
	return [r, g, b];
}
function css(value) {
	return 'rgb(' + thermalRGB(value).map(function (v) {
		return x$52.floor(x$75(256 * v, 0, 255));
	}).join(',') + ')';
}
thermalRGB.css = css;

describe('thermalRGB', function () {

	it('should return an array of numbers', function () {
		assert.deepEqual(thermalRGB(0), [0, 0, 1]);
		assert.deepEqual(thermalRGB(1), [1, 0, 0]);
	});

	describe('thermalRGB.css', function () {

		it('should return a string', function () {
			assert.deepEqual(thermalRGB.css(0), 'rgb(0,0,255)');
			assert.deepEqual(thermalRGB.css(1), 'rgb(255,0,0)');
		});

		it('[id:thermalRGB] should draw an expected map', _asyncToGenerator(regeneratorRuntime.mark(function _callee57() {
			var timeout;
			return regeneratorRuntime.wrap(function _callee57$(_context57) {
				while (1) {
					switch (_context57.prev = _context57.next) {
						case 0:
							timeout = 5000;

							this.timeout(timeout);
							_context57.next = 4;
							return assert.graphicalEqual({
								name: 'thermalRGB',
								url: window.root + '/thermalRGB/thermalRGB.png',
								fn: function fn(x, y) {
									return y;
								},
								xRange: [0, 1],
								yRange: [0, 1],
								zRange: [0, 1],
								xGrid: [],
								yGrid: []
							});

						case 4:
						case 'end':
							return _context57.stop();
					}
				}
			}, _callee57, this);
		})));
	});
});

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = x$2(context) ? this : context;

		for (var _len47 = arguments.length, args = Array(_len47), _key47 = 0; _key47 < _len47; _key47++) {
			args[_key47] = arguments[_key47];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = x$60(function () {
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

/* eslint-disable no-new, no-console, max-lines */

function decoder(key) {
	return function (data) {
		return decodeURIComponent(data[key]);
	};
}

function test$141(URL) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'URL';


	describe(name, function () {

		[[['http://example\t.\norg', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['host', 'example.org'], ['hostname', 'example.org'], ['pathname', '/']]], [['http://user:pass@foo:21/bar;par?b#c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'foo'], ['port', '21'], ['host', 'foo:21'], ['pathname', '/bar;par'], ['search', '?b'], ['hash', '#c']]], [['http:foo.com', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/foo.com'], ['search', ''], ['hash', '']]], [['\t   :foo.com   \n', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com'], ['search', ''], ['hash', '']]], [[' foo.com  ', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/foo.com'], ['search', ''], ['hash', '']]], [['a:\t foo.com', 'http://example.org/foo/bar'], [['protocol', 'a:'], ['hostname', ''], ['port', ''], ['host', ''], [decoder('pathname'), ' foo.com'], ['search', ''], ['hash', '']]], [['http://f:21/ b ? d # e ', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', '21'], ['host', 'f:21'], ['pathname', '/%20b%20'], ['search', '?%20d%20'], ['hash', '# e']]], [['http://f:/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', ''], ['host', 'f'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f:0/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', '0'], ['host', 'f:0'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f:00000000000000/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', '0'], ['host', 'f:0'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f:00000000000000000000080/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', ''], ['host', 'f'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f:b/c', 'http://example.org/foo/bar']], [['http://f: /c', 'http://example.org/foo/bar']], [['http://f:\n/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', ''], ['host', 'f'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f:fifty-two/c', 'http://example.org/foo/bar']], [['http://f:9999/c', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'f'], ['port', '9999'], ['host', 'f:9999'], ['pathname', '/c'], ['search', ''], ['hash', '']]], [['http://f: 21 / b ? d # e ', 'http://example.org/foo/bar']], [['', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']]], [['  \t', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']]], [[':foo.com/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com/'], ['search', ''], ['hash', '']]], [[':foo.com\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:foo.com/'], ['search', ''], ['hash', '']]], [[':', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:'], ['search', ''], ['hash', '']]], [[':a', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:a'], ['search', ''], ['hash', '']]], [[':/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:/'], ['search', ''], ['hash', '']]], [[':\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:/'], ['search', ''], ['hash', '']]], [[':#', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:'], ['search', ''], ['hash', '']
		// ['hash', '#']
		]], [['#', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '']
		// ['hash', '#']
		]], [['#/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#/']]], [['#\\', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#\\']]], [['#;?', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'], ['search', ''], ['hash', '#;?']]], [['?', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/bar'],
		// ['search', '?'],
		['search', ''], ['hash', '']]], [['/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/'], ['search', ''], ['hash', '']]], [[':23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:23'], ['search', ''], ['hash', '']]], [['/:23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/:23'], ['search', ''], ['hash', '']]], [['::', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/::'], ['search', ''], ['hash', '']]], [['::23', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/::23'], ['search', ''], ['hash', '']]], [['foo://', 'http://example.org/foo/bar'], [['protocol', 'foo:'], ['hostname', ''], ['port', ''], ['host', ''], ['pathname', '//'], ['search', ''], ['hash', '']]], [['http://a:b@c:29/d', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['username', 'a'], ['password', 'b'], ['hostname', 'c'], ['port', '29'], ['host', 'c:29'], ['pathname', '/d'], ['search', ''], ['hash', '']]], [['http::@c:29', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['hostname', 'example.org'], ['port', ''], ['host', 'example.org'], ['pathname', '/foo/:@c:29'], ['search', ''], ['hash', '']]], [['http://&a:foo(b]c@d:2/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['username', '&a'], [decoder('password'), 'foo(b]c'], ['hostname', 'd'], ['port', '2'], ['host', 'd:2'], ['pathname', '/'], ['search', ''], ['hash', '']]],
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
		[['http://foo.com:b@d:2/', 'http://example.org/foo/bar'], [['protocol', 'http:'], ['username', 'foo.com'], ['password', 'b'], ['hostname', 'd'], ['port', '2'], ['host', 'd:2'], ['pathname', '/'], ['search', ''], ['hash', '']]]].forEach(function (_ref107, index) {
			var _ref108 = _slicedToArray(_ref107, 2),
			    input = _ref108[0],
			    tests = _ref108[1];

			if (tests) {
				it('#' + index + ' should construct a new URL ' + input, function () {
					var url = new (Function.prototype.bind.apply(URL, [null].concat(_toConsumableArray(input))))();
					tests.forEach(function (_ref109) {
						var _ref110 = _slicedToArray(_ref109, 2),
						    key = _ref110[0],
						    expected = _ref110[1];

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
						console.info('#' + index + ' An error is expected but not occurred');
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

var x$76 = URL;

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
	return !x$2(relative[scheme]);
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
	return x$61(c);
}

function percentEscapeQuery(c) {
	// XXX This actually needs to encode c using encoding and then convert the bytes one-by-one.
	var unicode = c.charCodeAt(0);
	if (unicode > 0x20 && unicode < 0x7F &&
	// " # < > ` (do not escape '?')
	![0x22, 0x23, 0x3C, 0x3E, 0x60].includes(unicode)) {
		return c;
	}
	return x$61(c);
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

		if (!x$2(base) && !(base instanceof URL$1)) {
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

x$8.defineProperties(URL$1, {
	createObjectURL: { value: x$76.createObjectURL },
	revokeObjectURL: { value: x$76.revokeObjectURL }
});

test$141(URL$1, 'URL#j0');

test$141(URL);

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_x$3) {
	_inherits(URLSearchParams$2, _x$3);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? init.replace(/^\?/, '').split(separator).map(function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref111) {
				var _ref112 = _slicedToArray(_ref111, 2),
				    name = _ref112[0],
				    _ref112$ = _ref112[1],
				    value = _ref112$ === undefined ? '' : _ref112$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(x$35);

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
				var _iterator$next21 = iterator.next(),
				    value = _iterator$next21.value,
				    done = _iterator$next21.done;

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
				var _iterator$next22 = iterator.next(),
				    value = _iterator$next22.value,
				    done = _iterator$next22.done;

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

tests$16(URLSearchParams);

describe('wait', function () {
	it('should return a promise and it should resolved with given data', _asyncToGenerator(regeneratorRuntime.mark(function _callee59() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee59$(_context59) {
			while (1) {
				switch (_context59.prev = _context59.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.8;
						_context59.next = 6;
						return wait$1(duration, data);

					case 6:
						actual = _context59.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context59.stop();
				}
			}
		}, _callee59, this);
	})));
});

var x$77 = canvasTestClass;

mocha.run().once('end', function () {
	var result = 0 < this.stats.failures ? 'failed' : 'passed';
	x$7.title += '[' + result + ']';
	x$7.body.classList.add('done');
	var tests = x$7.querySelectorAll('.test');
	var testList = [];

	var _loop2 = function _loop2(i) {
		var testElement = tests[i];
		testElement.querySelector('h2').textContent.replace(/^\s*\[\s*id\s*:\s*(.*?)\s*\]/, function (match, name) {
			testElement.setAttribute('data-graph', name);
			testList.push(testElement);
		});
	};

	for (var i = tests.length; i--;) {
		_loop2(i);
	}
	var canvasList = x$7.querySelectorAll('.' + x$77);
	var list = [];
	for (var i = canvasList.length; i--;) {
		list[i] = canvasList[i];
	}
	for (var _i3 = list.length; _i3--;) {
		var canvas = list[_i3];
		var _name3 = canvas.getAttribute('data-name');
		for (var j = testList.length; j--;) {
			var _testElement = testList[j];
			var graphName = _testElement.getAttribute('data-graph');
			if (graphName === _name3) {
				_testElement.appendChild(canvas);
			}
		}
	}
});
}())