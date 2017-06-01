(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var wait$1 = function () {
	var _ref90 = _asyncToGenerator(regeneratorRuntime.mark(function _callee51(duration, data) {
		return regeneratorRuntime.wrap(function _callee51$(_context51) {
			while (1) {
				switch (_context51.prev = _context51.next) {
					case 0:
						_context51.next = 2;
						return new Promise(function (resolve) {
							setTimeout(resolve, duration);
						});

					case 2:
						return _context51.abrupt('return', data);

					case 3:
					case 'end':
						return _context51.stop();
				}
			}
		}, _callee51, this);
	}));

	return function wait$1(_x97, _x98) {
		return _ref90.apply(this, arguments);
	};
}();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var iteratorSymbol = Symbol.iterator;

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
	return new Iterator(function () {
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

function readBlob(data, type) {
	var reader = new x$2();
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

var x$3 = document;

function createArrayBuffer(data) {
	return readBlob(new Blob([data]), 'ArrayBuffer');
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

						assert.equal(arrayBufferToString(arrayBuffer), src);

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

						assert.equal(arrayBufferToString(arrayBuffer), src);

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
						root = x$3.getElementById('root').text;
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

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 10:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});

var x$4 = JSON;

var x$5 = Blob;

var x$6 = ArrayBuffer;

var x$7 = DataView;

var x$8 = TypeError;

var x$9 = Promise;

var x$10 = FormData;

var x$11 = decodeURIComponent;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new x$10();

	body.trim().split('&').forEach(function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    _name = _data$split2[0],
			    parts = _data$split2.slice(1);

			_name = x$11(_name.replace(/\+/g, ' '));
			parts = x$11(parts.join('=').replace(/\+/g, ' '));
			form.append(_name, parts);
		}
	});
	return form;
}

function isString(x) {
	return typeof x === 'string';
}

var x$12 = URLSearchParams;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var x$13 = Uint8ClampedArray;

var x$14 = Uint16Array;

var x$15 = Uint32Array;

var x$16 = Int8Array;

var x$17 = Int16Array;

var x$18 = Int32Array;

var x$19 = Float32Array;

var x$20 = Float64Array;

var viewClasses = [x$1, x$13, x$14, x$15, x$16, x$17, x$18, x$19, x$20];
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
			} else if (isInstanceOf(body, x$10)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, x$12)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, x$7)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new x$5([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, x$6) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (isString(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof x$12) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || x$9.resolve(this.bodyArrayBuffer);
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
				return x$9.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return x$9.resolve(new x$5([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return x$9.resolve(new x$5([this.bodyText]));
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
				return x$9.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return x$9.resolve(this.bodyText);
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
			return this.text().then(x$4.parse);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return x$9.reject(new x$8('Already used'));
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

var x$21 = cancelAnimationFrame;

var x$22 = requestAnimationFrame;

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
		var baseInterval, timeoutMargin;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return new Promise(function (resolve) {
							x$22(function (time1) {
								x$22(function (time2) {
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
							x$22(function () {
								clearTimeout(timer);
								resolve();
							});
						});

					case 8:
						_context4.next = 10;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(resolve, baseInterval * margin);
							var id = x$22(function () {
								clearTimeout(timer);
								reject(new Error('cancelAnimationFrame didn\'t cancel the invocation.'));
							});
							x$21(id);
						});

					case 10:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	})));
});

function clamp(x) {
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
	return x$4.parse(x$4.stringify(obj));
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

function test$19(CustomEvent) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'CustomEvent';


	describe(name, function () {

		it('should create an event', function () {
			var type = '' + Date.now();
			var event = new CustomEvent(type);
			assert.equal(event.type, type);
		});
	});
}

var x$23 = Event;

function CustomEvent$1(event) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
		bubbles: false,
		cancelable: false
	};

	var evt = x$3.createEvent('CustomEvent');
	evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	return evt;
}
CustomEvent$1.prototype = x$23.prototype;

test$19(CustomEvent$1, 'CustomEvent#j0');

test$19(CustomEvent);

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this2 = this;

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
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

var x$24 = Object;

var x$25 = Array;

var isArray = x$25.isArray;

var x$26 = Node;

function isNode(x) {
	return isInstanceOf(x, x$26);
}

var x$27 = CustomEvent;

var x$28 = Set;

var nodeKey = Symbol();
var listenersKey = Symbol();
var getBody = new x$9(function (resolve) {
	var interval = 50;
	function check() {
		var body = x$3.body;

		if (body) {
			resolve(wrap(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

function superForEach() {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	var fn = args.pop();
	if (isString(args[0])) {
		fn.apply(undefined, args);
	} else {
		args.forEach(function (arg) {
			if (isArray(arg)) {
				superForEach.apply(undefined, _toConsumableArray(arg).concat([fn]));
			} else {
				x$24.keys(arg).forEach(function (key) {
					superForEach(key, arg[key], fn);
				});
			}
		});
	}
}

var J0Element = function () {

	/* eslint-disable max-statements */
	function J0Element() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, J0Element);

		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = x$3.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			var t = source.t,
			    a = source.a,
			    c = source.c,
			    e = source.e,
			    n = source.n,
			    o = source.o;

			this[nodeKey] = wrap(n ? x$3.createElementNS(n, t, o) : x$3.createElement(t || 'div')).node;
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
		this[listenersKey] = new x$28();
	}
	/* eslint-enable max-statements */

	_createClass(J0Element, [{
		key: 'equals',
		value: function equals(element) {
			return this.node === wrap(element).node;
		}
	}, {
		key: 'text',
		value: function text(_text) {
			var node = this.node;

			if (isUndefined(_text)) {
				return node.textContent;
			}
			node.textContent = _text;
			return this;
		}
	}, {
		key: 'html',
		value: function html(_html) {
			var node = this.node;

			if (isUndefined(_html)) {
				return node.innerHTML;
			}
			node.innerHTML = _html;
			return this;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(newElement, referenceElement) {
			this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
		}
	}, {
		key: 'prepend',
		value: function prepend() {
			var _this3 = this;

			for (var _len4 = arguments.length, elements = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
				elements[_key4] = arguments[_key4];
			}

			elements.forEach(function (element) {
				_this3.firstChild = element;
			});
			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var node = this.node;

			for (var _len5 = arguments.length, elements = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				elements[_key5] = arguments[_key5];
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
		key: 'attr',
		value: function attr() {
			var _this4 = this;

			for (var _len7 = arguments.length, args = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
				args[_key7] = arguments[_key7];
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

			for (var _len8 = arguments.length, args = Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
				args[_key8] = arguments[_key8];
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
			var event = new x$27(eventName, { detail: detail });
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
		key: 'node',
		get: function get() {
			return this[nodeKey];
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
		key: 'previous',
		get: function get() {
			var previousSibling = this.node.previousSibling;

			return previousSibling ? wrap(previousSibling) : null;
		},
		set: function set(element) {
			this.parent.insertBefore(element, this);
		}
	}, {
		key: 'next',
		get: function get() {
			var nextSibling = this.node.nextSibling;

			return nextSibling ? wrap(nextSibling) : null;
		},
		set: function set(element) {
			this.parent.insertBefore(element, this.next);
		}
	}, {
		key: 'childNodes',
		get: function get() {
			return x$25.from(this.node.childNodes).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return x$25.from(this.node.children).map(wrap);
		}
	}, {
		key: 'firstChild',
		get: function get() {
			var firstChild = this.node.firstChild;

			return firstChild ? wrap(firstChild) : null;
		},
		set: function set(element) {
			var firstChild = this.firstChild;

			if (firstChild) {
				firstChild.previous = element;
			} else {
				this.append(element);
			}
		}
	}, {
		key: 'lastChild',
		get: function get() {
			var lastChild = this.node.lastChild;

			return lastChild ? wrap(lastChild) : null;
		},
		set: function set(element) {
			var lastChild = this.lastChild;

			if (lastChild) {
				this.lastChild.next = element;
			} else {
				this.append(element);
			}
		}
	}, {
		key: 'listeners',
		get: function get() {
			return this[listenersKey];
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

function _find(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$3;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$3;

	var list = rootElement.querySelectorAll(selector);
	var result = [];
	for (var i = 0, length = list.length; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

x$24.assign(wrap, {
	find: _find,
	findAll: _findAll,
	ready: function () {
		var _ref7 = _asyncToGenerator(regeneratorRuntime.mark(function _callee5(fn) {
			return regeneratorRuntime.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.next = 2;
							return getBody;

						case 2:
							if (fn) {
								fn();
							}

						case 3:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, this);
		}));

		function ready(_x27) {
			return _ref7.apply(this, arguments);
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

describe('J0Element.prototype.on', function () {

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

	it('should call a listener', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
		var element, key, data, event;
		return regeneratorRuntime.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						element = wrap();
						key = 'event-' + Date.now();
						data = new Date();
						_context6.next = 5;
						return new Promise(function (resolve) {
							element.on(key, resolve).emit(key, data);
						});

					case 5:
						event = _context6.sent;

						assert.equal(event.detail, data);

					case 7:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, this);
	})));

	it('should call listeners', _asyncToGenerator(regeneratorRuntime.mark(function _callee7() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						onCall = function onCall(_ref14) {
							var detail = _ref14.detail;

							results.push(detail);
						};

						element = wrap();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.on(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context7.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2, data2]);

					case 10:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, this);
	})));
});

describe('J0Element.prototype.once', function () {

	it('should call a listener only once', _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
		var element, key, data1, data2, results, onCall;
		return regeneratorRuntime.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						onCall = function onCall(_ref16) {
							var detail = _ref16.detail;

							results.push(detail);
						};

						element = wrap();
						key = 'event-' + Date.now();
						data1 = new Date();
						data2 = Date.now();
						results = [];

						element.once(key, onCall).on(key, onCall).emit(key, data1).emit(key, data2);
						_context8.next = 9;
						return wait();

					case 9:
						assert.deepEqual(results, [data1, data1, data2]);

					case 10:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, this);
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
		element.firstChild = element2;
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
		assert.equal(element.html(), expected);
	});

	it('should set its innerHTML', function () {
		var text = '' + Date.now();
		var element = wrap({
			c: [{}, {}, text]
		});
		element.html('<s>' + text + '</s>');
		var expected = '<s>' + text + '</s>';
		assert.equal(element.html(), expected);
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
		element.lastChild = element2;
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
		element1.next = element2;
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element2, element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.next = element2;
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
		element1.parent = element2;
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
		element1.previous = element2;
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1, element2]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element1.previous = element2;
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

describe('J0Element.prototype.next', function () {

	it('should insert a new child before an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.next = element2;
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		var element1 = wrap();
		var element2 = wrap();
		var element = wrap({
			c: [element2, element1]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.next = element2;
		assert.equal(element.lastChild.equals(element2), true);
	});
});

describe('dom (J0Element)', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in wrap(), true);
	});
});

var listenersKey$1 = Symbol();

var EventEmitter = function () {
	function EventEmitter() {
		_classCallCheck(this, EventEmitter);

		this[listenersKey$1] = new x$28();
	}

	_createClass(EventEmitter, [{
		key: 'emit',
		value: function emit(type) {
			var _this9 = this;

			for (var _len9 = arguments.length, data = Array(_len9 > 1 ? _len9 - 1 : 0), _key9 = 1; _key9 < _len9; _key9++) {
				data[_key9 - 1] = arguments[_key9];
			}

			this[listenersKey$1].forEach(function (item, index, listeners) {
				var _item2 = _slicedToArray(item, 3),
				    eventType = _item2[0],
				    fn = _item2[1],
				    once = _item2[2];

				if (eventType === type) {
					fn.apply(_this9, data);
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
			this[listenersKey$1].forEach(function (item, index, listeners) {
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
			this[listenersKey$1].add([type, fn]);
			return this;
		}
	}, {
		key: 'once',
		value: function once(type, fn) {
			this[listenersKey$1].add([type, fn, true]);
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
			for (var _len10 = arguments.length, data = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
				data[_key10] = arguments[_key10];
			}

			results.push([data, '1']);
		}).on(name1, function () {
			for (var _len11 = arguments.length, data = Array(_len11), _key11 = 0; _key11 < _len11; _key11++) {
				data[_key11] = arguments[_key11];
			}

			results.push([data, '2']);
		}).on(name2, function () {
			for (var _len12 = arguments.length, data = Array(_len12), _key12 = 0; _key12 < _len12; _key12++) {
				data[_key12] = arguments[_key12];
			}

			results.push([data, '3']);
		}).on(name2, function () {
			for (var _len13 = arguments.length, data = Array(_len13), _key13 = 0; _key13 < _len13; _key13++) {
				data[_key13] = arguments[_key13];
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
			for (var _len14 = arguments.length, data = Array(_len14), _key14 = 0; _key14 < _len14; _key14++) {
				data[_key14] = arguments[_key14];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len15 = arguments.length, data = Array(_len15), _key15 = 0; _key15 < _len15; _key15++) {
				data[_key15] = arguments[_key15];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len16 = arguments.length, data = Array(_len16), _key16 = 0; _key16 < _len16; _key16++) {
				data[_key16] = arguments[_key16];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len17 = arguments.length, data = Array(_len17), _key17 = 0; _key17 < _len17; _key17++) {
				data[_key17] = arguments[_key17];
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
			for (var _len18 = arguments.length, data = Array(_len18), _key18 = 0; _key18 < _len18; _key18++) {
				data[_key18] = arguments[_key18];
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
			for (var _len19 = arguments.length, data = Array(_len19), _key19 = 0; _key19 < _len19; _key19++) {
				data[_key19] = arguments[_key19];
			}

			results.push([data, '1']);
		}).once(name1, function () {
			for (var _len20 = arguments.length, data = Array(_len20), _key20 = 0; _key20 < _len20; _key20++) {
				data[_key20] = arguments[_key20];
			}

			results.push([data, '2']);
		}).once(name2, function () {
			for (var _len21 = arguments.length, data = Array(_len21), _key21 = 0; _key21 < _len21; _key21++) {
				data[_key21] = arguments[_key21];
			}

			results.push([data, '3']);
		}).once(name2, function () {
			for (var _len22 = arguments.length, data = Array(_len22), _key22 = 0; _key22 < _len22; _key22++) {
				data[_key22] = arguments[_key22];
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
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _ref17 = _step3.value;

					var _ref18 = _slicedToArray(_ref17, 2);

					var key = _ref18[0];
					var value = _ref18[1];

					this.append(key, value);
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
			return this.data.findIndex(function (_ref19) {
				var _ref20 = _slicedToArray(_ref19, 1),
				    itemName = _ref20[0];

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
			this.data = this.data.filter(function (_ref21) {
				var _ref22 = _slicedToArray(_ref21, 1),
				    itemName = _ref22[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = this.data.find(function (_ref23) {
				var _ref24 = _slicedToArray(_ref23, 1),
				    itemName = _ref24[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			this.data.forEach(function (_ref25) {
				var _ref26 = _slicedToArray(_ref25, 2),
				    itemName = _ref26[0],
				    value = _ref26[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref27) {
				var _ref28 = _slicedToArray(_ref27, 2),
				    name = _ref28[0],
				    _ref28$ = _ref28[1],
				    value = _ref28$ === undefined ? '' : _ref28$;

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
				var _iterator$next3 = iterator.next(),
				    value = _iterator$next3.value,
				    done = _iterator$next3.done;

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
				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

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
			x$24.keys(headers).forEach(function (key) {
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
			var _this11 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return new Iterator(function () {
				while (1) {
					var _iterator$next5 = iterator.next(),
					    value = _iterator$next5.value,
					    done = _iterator$next5.done;

					var key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						history.push(key);
						return {
							value: [key, _this11.get(key)],
							done: done
						};
					}
				}
			});
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

		var _this12 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this12.inheritFrom(input, body, init);
		} else {
			_this12.url = '' + input;
		}
		_this12.credentials = init.credentials || _this12.credentials || 'omit';
		if (init.headers || !_this12.headers) {
			_this12.headers = new Headers$1(init.headers);
		}
		_this12.method = (init.method || _this12.method || 'GET').toUpperCase();
		_this12.mode = init.mode || _this12.mode || null;
		_this12.referrer = null;
		if ((_this12.method === 'GET' || _this12.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this12.initBody(body);
		return _this12;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref29) {
			var headers = _ref29.headers;

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

		var _this13 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this13.type = 'default';
		_this13.status = 'status' in init ? init.status : minOkStatus;
		_this13.ok = _this13.status >= minOkStatus && _this13.status < maxOkStatus;
		_this13.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this13.headers = new Headers$1(init.headers);
		_this13.url = init.url || '';
		_this13.initBody(body);
		return _this13;
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

var x$29 = Headers;

function parse$2(rawHeaders) {
	var headers = new x$29();
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

var x$30 = XMLHttpRequest;

function fetch$1(input, init) {
	return new x$9(function (resolve, reject) {
		var request = new Request$1(input, init);
		var xhr = new x$30();
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
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = request.headers.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _ref30 = _step4.value;

				var _ref31 = _slicedToArray(_ref30, 2);

				var _name2 = _ref31[0];
				var value = _ref31[1];

				xhr.setRequestHeader(_name2, value);
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

		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
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

var x$31 = Date;

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
	var date = new x$31(src);
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
				var _iterator$next6 = iterator.next(),
				    value = _iterator$next6.value,
				    done = _iterator$next6.done;

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
				var _iterator$next7 = iterator.next(),
				    value = _iterator$next7.value,
				    done = _iterator$next7.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1 + ',' + value2]);
		});
	});
}

tests$5(Headers$1, 'Headers/j0');

tests$5(Headers);

function generator$2() {
	var _this14 = this;

	var length = this.length;

	var index = 0;
	return {
		next: function next() {
			return {
				value: _this14[index],
				done: length <= index++
			};
		}
	};
}

function test$21(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HTMLCollection/@iterator';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = expected[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var element = _step5.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
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
			assert.deepEqual(results, expected);
		});
	});
}

test$21(generator$2, 'HTMLCollection/@iterator/j0');

test$21(HTMLCollection.prototype[Symbol.iterator]);

var x$32 = window;

function innerHeight() {
	return x$32.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});

function innerWidth() {
	return x$32.innerWidth;
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

function isFunction(x) {
	return typeof x === 'function';
}

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

function isObject(x) {
	return isInstanceOf(x, x$24);
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
		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = iterator[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var result = _step6.value;

				results.push(result);
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

		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});
});

function test$23(storage, testName) {

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
			var _this15 = this;

			x$24.keys(this).forEach(function (key) {
				_this15.removeItem(key);
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
			return x$24.keys(this)[n];
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
			return x$24.keys(this).length;
		}
	}]);

	return J0Storage;
}();

test$23(new J0Storage(), 'J0Storage');

describe('leftpad', function () {

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

var localStorage$1 = new J0Storage();

test$23(localStorage$1, 'localStorage#j0');

test$23(localStorage, 'localStorage');

function test$26(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Map.prototype[Symbol.iterator]';


	describe(name, function () {

		it(name, function () {
			var data = [[1, 2], [3, 4]];
			var map = new Map(data);
			var iterator = generator.call(map);
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
			assert.deepEqual(results, data);
		});
	});
}

function generator$4() {
	return this.entries();
}

test$26(generator$4, 'Map.prototype[Symbol.iterator]#j0');

test$26(Map.prototype[Symbol.iterator]);

var Map$1 = function () {
	function Map$1(iterable) {
		_classCallCheck(this, Map$1);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = iterable[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var _ref32 = _step7.value;

					var _ref33 = _slicedToArray(_ref32, 2);

					var key = _ref33[0];
					var value = _ref33[1];

					this.set(key, value);
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
			return this.data.findIndex(function (_ref34) {
				var _ref35 = _slicedToArray(_ref34, 1),
				    itemKey = _ref35[0];

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
			var found = this.data.find(function (_ref36) {
				var _ref37 = _slicedToArray(_ref36, 1),
				    itemKey = _ref37[0];

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
			return this.data[Symbol.iterator]();
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this16 = this;

			this.data.slice().forEach(function (_ref38) {
				var _ref39 = _slicedToArray(_ref38, 2),
				    key = _ref39[0],
				    value = _ref39[1];

				fn.call(thisArg, value, key, _this16);
			});
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next10 = iterator.next(),
				    value = _iterator$next10.value,
				    done = _iterator$next10.done;

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
				var _iterator$next11 = iterator.next(),
				    value = _iterator$next11.value,
				    done = _iterator$next11.done;

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
			var iterable = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee9() {
				var count;
				return regeneratorRuntime.wrap(function _callee9$(_context9) {
					while (1) {
						switch (_context9.prev = _context9.next) {
							case 0:
								count = 0;

							case 1:
								if (!(count < 1)) {
									_context9.next = 7;
									break;
								}

								_context9.next = 4;
								return [count, count + 1];

							case 4:
								count += 1;
								_context9.next = 1;
								break;

							case 7:
							case 'end':
								return _context9.stop();
						}
					}
				}, _callee9, this);
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
				for (var _len23 = arguments.length, args = Array(_len23), _key23 = 0; _key23 < _len23; _key23++) {
					args[_key23] = arguments[_key23];
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

function test$28(abs) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.abs';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee10() {
			return regeneratorRuntime.wrap(function _callee10$(_context10) {
				while (1) {
					switch (_context10.prev = _context10.next) {
						case 0:
							_context10.next = 2;
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
							return _context10.stop();
					}
				}
			}, _callee10, this);
		})));
	});
}

test$28(Math.abs);

/* eslint-disable no-magic-numbers */
function test$30(acos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acos';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee11() {
			return regeneratorRuntime.wrap(function _callee11$(_context11) {
				while (1) {
					switch (_context11.prev = _context11.next) {
						case 0:
							_context11.next = 2;
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
							return _context11.stop();
					}
				}
			}, _callee11, this);
		})));
	});
}

test$30(Math.acos);

/* eslint-disable no-magic-numbers */
function test$32(acosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.acosh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee12() {
			return regeneratorRuntime.wrap(function _callee12$(_context12) {
				while (1) {
					switch (_context12.prev = _context12.next) {
						case 0:
							_context12.next = 2;
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
							return _context12.stop();
					}
				}
			}, _callee12, this);
		})));
	});
}

var x$33 = Math;

function acosh(x) {
	return x$33.log(x + x$33.sqrt(x * x - 1));
}

test$32(acosh, 'Math.acosh#j0');

test$32(Math.acosh);

/* eslint-disable no-magic-numbers */
function test$34(asin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asin';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee13() {
			return regeneratorRuntime.wrap(function _callee13$(_context13) {
				while (1) {
					switch (_context13.prev = _context13.next) {
						case 0:
							_context13.next = 2;
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
							return _context13.stop();
					}
				}
			}, _callee13, this);
		})));
	});
}

test$34(Math.asin);

/* eslint-disable no-magic-numbers */
function test$36(asinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.asinh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee14() {
			return regeneratorRuntime.wrap(function _callee14$(_context14) {
				while (1) {
					switch (_context14.prev = _context14.next) {
						case 0:
							_context14.next = 2;
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
							return _context14.stop();
					}
				}
			}, _callee14, this);
		})));
	});
}

function asinh(x) {
	if (x === -Infinity) {
		return x;
	}
	return x$33.log(x + x$33.sqrt(x * x + 1));
}

test$36(asinh, 'Math.asinh#j0');

test$36(Math.asinh);

/* eslint-disable no-magic-numbers */
function test$38(atan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee15() {
			return regeneratorRuntime.wrap(function _callee15$(_context15) {
				while (1) {
					switch (_context15.prev = _context15.next) {
						case 0:
							_context15.next = 2;
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
							return _context15.stop();
					}
				}
			}, _callee15, this);
		})));
	});
}

test$38(Math.atan);

/* eslint-disable no-magic-numbers */
function test$40(atan2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atan2';


	describe(name, function () {

		it('[id:' + name + '+] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee16() {
			return regeneratorRuntime.wrap(function _callee16$(_context16) {
				while (1) {
					switch (_context16.prev = _context16.next) {
						case 0:
							_context16.next = 2;
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
							return _context16.stop();
					}
				}
			}, _callee16, this);
		})));

		it('[id:' + name + '-] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee17() {
			return regeneratorRuntime.wrap(function _callee17$(_context17) {
				while (1) {
					switch (_context17.prev = _context17.next) {
						case 0:
							_context17.next = 2;
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
							return _context17.stop();
					}
				}
			}, _callee17, this);
		})));
	});
}

test$40(Math.atan2);

/* eslint-disable no-magic-numbers */
function test$42(atanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.atanh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee18() {
			return regeneratorRuntime.wrap(function _callee18$(_context18) {
				while (1) {
					switch (_context18.prev = _context18.next) {
						case 0:
							_context18.next = 2;
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
							return _context18.stop();
					}
				}
			}, _callee18, this);
		})));
	});
}

function atanh(x) {
	return x$33.log((1 + x) / (1 - x)) / 2;
}

test$42(atanh, 'Math.atanh#j0');

test$42(Math.atanh);

/* eslint-disable no-magic-numbers */
function test$44(cbrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cbrt';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee19() {
			return regeneratorRuntime.wrap(function _callee19$(_context19) {
				while (1) {
					switch (_context19.prev = _context19.next) {
						case 0:
							_context19.next = 2;
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
							return _context19.stop();
					}
				}
			}, _callee19, this);
		})));
	});
}

/* eslint no-magic-numbers: ["warn", {ignore: [0, 1, 3]}] */
function cbrt(x) {
	var root = x$33.pow(x$33.abs(x), 1 / 3);
	return x < 0 ? -root : root;
}

test$44(cbrt, 'Math.cbrt#j0');

test$44(Math.cbrt);

/* eslint-disable no-magic-numbers */
function test$46(ceil) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.ceil';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee20() {
			return regeneratorRuntime.wrap(function _callee20$(_context20) {
				while (1) {
					switch (_context20.prev = _context20.next) {
						case 0:
							_context20.next = 2;
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
							return _context20.stop();
					}
				}
			}, _callee20, this);
		})));
	});
}

test$46(Math.ceil);

/* eslint-disable no-magic-numbers */
function test$48(clz32) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.clz32';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee21() {
			return regeneratorRuntime.wrap(function _callee21$(_context21) {
				while (1) {
					switch (_context21.prev = _context21.next) {
						case 0:
							_context21.next = 2;
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
							return _context21.stop();
					}
				}
			}, _callee21, this);
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
	return 31 - x$33.floor(x$33.log(x >>> 0) * x$33.LOG2E);
}

test$48(clz32, 'Math.clz32#j0');

test$48(Math.clz32);

/* eslint-disable no-magic-numbers */
function test$50(cos) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cos';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee22() {
			return regeneratorRuntime.wrap(function _callee22$(_context22) {
				while (1) {
					switch (_context22.prev = _context22.next) {
						case 0:
							_context22.next = 2;
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
							return _context22.stop();
					}
				}
			}, _callee22, this);
		})));
	});
}

test$50(Math.cos);

/* eslint-disable no-magic-numbers */
function test$52(cosh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.cosh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee23() {
			return regeneratorRuntime.wrap(function _callee23$(_context23) {
				while (1) {
					switch (_context23.prev = _context23.next) {
						case 0:
							_context23.next = 2;
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
							return _context23.stop();
					}
				}
			}, _callee23, this);
		})));
	});
}

function cosh(x) {
	var y = x$33.exp(x);
	return (y + 1 / y) / 2;
}

test$52(cosh, 'Math.cosh#j0');

test$52(Math.cosh);

function test$54(E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.E';


	describe(name, function () {

		it('should be approximately equal to 2.718281828459045', function () {
			var expected = 2.718281828459045;
			assert.approxEqual(E, expected);
		});
	});
}

test$54(Math.E);

/* eslint-disable no-magic-numbers */
function test$56(exp) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.exp';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee24() {
			return regeneratorRuntime.wrap(function _callee24$(_context24) {
				while (1) {
					switch (_context24.prev = _context24.next) {
						case 0:
							_context24.next = 2;
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
							return _context24.stop();
					}
				}
			}, _callee24, this);
		})));
	});
}

test$56(Math.exp);

/* eslint-disable no-magic-numbers */
function test$58(expm1) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.expm1';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee25() {
			return regeneratorRuntime.wrap(function _callee25$(_context25) {
				while (1) {
					switch (_context25.prev = _context25.next) {
						case 0:
							_context25.next = 2;
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
							return _context25.stop();
					}
				}
			}, _callee25, this);
		})));
	});
}

function expm1(x) {
	return x$33.exp(x) - 1;
}

test$58(expm1, 'Math.expm1#j0');

test$58(Math.expm1);

/* eslint-disable no-magic-numbers */
function test$60(floor) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.floor';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee26() {
			return regeneratorRuntime.wrap(function _callee26$(_context26) {
				while (1) {
					switch (_context26.prev = _context26.next) {
						case 0:
							_context26.next = 2;
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
							return _context26.stop();
					}
				}
			}, _callee26, this);
		})));
	});
}

test$60(Math.floor);

/* eslint-disable no-magic-numbers */
function test$62(fround) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.fround';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee27() {
			var d;
			return regeneratorRuntime.wrap(function _callee27$(_context27) {
				while (1) {
					switch (_context27.prev = _context27.next) {
						case 0:
							d = 1;
							_context27.next = 3;
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
							return _context27.stop();
					}
				}
			}, _callee27, this);
		})));

		it('should return 1.3370000123977661', function () {
			assert.equal(fround(1.337), 1.3370000123977661);
		});
	});
}

function fround(x) {
	return new x$19([x])[0];
}

test$62(fround, 'Math.fround#j0');

test$62(Math.fround);

/* eslint-disable no-magic-numbers */
function test$64(hypot) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.hypot';


	describe(name, function () {

		it('[id:' + name + '-y=3] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee28() {
			return regeneratorRuntime.wrap(function _callee28$(_context28) {
				while (1) {
					switch (_context28.prev = _context28.next) {
						case 0:
							_context28.next = 2;
							return assert.graphicalEqual({
								name: name + '-y=3',
								url: window.root + '/Math/hypot/hypot-y=3.png',
								fn: function fn(x) {
									return hypot(x, 3);
								},
								xRange: [-6, 6],
								yRange: [2, 8],
								xGrid: [-4, -2, 0, 2, 4],
								yGrid: [3, 4, 5, 6, 7]
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

function hypot() {
	var sum = 0;

	for (var _len24 = arguments.length, args = Array(_len24), _key24 = 0; _key24 < _len24; _key24++) {
		args[_key24] = arguments[_key24];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var value = args[i];
		sum += value * value;
	}
	return x$33.sqrt(sum);
}

test$64(hypot, 'Math.hypot#j0');

test$64(Math.hypot);

/* eslint-disable no-magic-numbers */
function test$66(imul) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.imul';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee29() {
			return regeneratorRuntime.wrap(function _callee29$(_context29) {
				while (1) {
					switch (_context29.prev = _context29.next) {
						case 0:
							_context29.next = 2;
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
							return _context29.stop();
					}
				}
			}, _callee29, this);
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

test$66(imul, 'Math.imul#j0');

test$66(Math.imul);

function test$68(LN10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN10';


	describe(name, function () {

		it('should be approximately equal to 2.302585092994046', function () {
			var expected = 2.302585092994046;
			assert.approxEqual(LN10, expected);
		});
	});
}

test$68(Math.LN10);

function test$70(LN2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LN2';


	describe(name, function () {

		it('should be approximately equal to 0.6931471805599453', function () {
			var expected = 0.6931471805599453;
			assert.approxEqual(LN2, expected);
		});
	});
}

test$70(Math.LN2);

/* eslint-disable no-magic-numbers */
function test$72(log) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee30() {
			return regeneratorRuntime.wrap(function _callee30$(_context30) {
				while (1) {
					switch (_context30.prev = _context30.next) {
						case 0:
							_context30.next = 2;
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
							return _context30.stop();
					}
				}
			}, _callee30, this);
		})));
	});
}

test$72(Math.log);

/* eslint-disable no-magic-numbers */
function test$74(log10) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log10';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee31() {
			return regeneratorRuntime.wrap(function _callee31$(_context31) {
				while (1) {
					switch (_context31.prev = _context31.next) {
						case 0:
							_context31.next = 2;
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
							return _context31.stop();
					}
				}
			}, _callee31, this);
		})));
	});
}

function log10(x) {
	return x$33.log(x) / x$33.LN10;
}

test$74(log10, 'Math.log10#j0');

test$74(Math.log10);

function test$76(LOG10E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG10E';


	describe(name, function () {

		it('should be approximately equal to 0.4342944819032518', function () {
			var expected = 0.4342944819032518;
			assert.approxEqual(LOG10E, expected);
		});
	});
}

test$76(Math.LOG10E);

/* eslint-disable no-magic-numbers */
function test$78(log1p) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log1p';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee32() {
			return regeneratorRuntime.wrap(function _callee32$(_context32) {
				while (1) {
					switch (_context32.prev = _context32.next) {
						case 0:
							_context32.next = 2;
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
							return _context32.stop();
					}
				}
			}, _callee32, this);
		})));
	});
}

function log1p(x) {
	return x$33.log(x + 1);
}

test$78(log1p, 'Math.log1p#j0');

test$78(Math.log1p);

/* eslint-disable no-magic-numbers */
function test$80(log2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.log2';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee33() {
			return regeneratorRuntime.wrap(function _callee33$(_context33) {
				while (1) {
					switch (_context33.prev = _context33.next) {
						case 0:
							_context33.next = 2;
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
							return _context33.stop();
					}
				}
			}, _callee33, this);
		})));
	});
}

function log2(x) {
	return x$33.log(x) / x$33.LN2;
}

test$80(log2, 'Math.log2#j0');

test$80(Math.log2);

function test$82(LOG2E) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.LOG2E';


	describe(name, function () {

		it('should be approximately equal to 1.4426950408889633', function () {
			var expected = 1.4426950408889633;
			assert.approxEqual(LOG2E, expected);
		});
	});
}

test$82(Math.LOG2E);

/* eslint-disable no-magic-numbers */
function test$84(max) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.max';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee34() {
			return regeneratorRuntime.wrap(function _callee34$(_context34) {
				while (1) {
					switch (_context34.prev = _context34.next) {
						case 0:
							_context34.next = 2;
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
							return _context34.stop();
					}
				}
			}, _callee34, this);
		})));
	});
}

test$84(Math.max);

/* eslint-disable no-magic-numbers */
function test$86(min) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.min';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee35() {
			return regeneratorRuntime.wrap(function _callee35$(_context35) {
				while (1) {
					switch (_context35.prev = _context35.next) {
						case 0:
							_context35.next = 2;
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
							return _context35.stop();
					}
				}
			}, _callee35, this);
		})));
	});
}

test$86(Math.min);

function test$88(PI) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.PI';


	describe(name, function () {

		it('should be approximately equal to 3.141592653589793', function () {
			var expected = 3.141592653589793;
			assert.approxEqual(PI, expected);
		});
	});
}

test$88(Math.PI);

/* eslint-disable no-magic-numbers */
function test$90(pow) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.pow';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee36() {
			return regeneratorRuntime.wrap(function _callee36$(_context36) {
				while (1) {
					switch (_context36.prev = _context36.next) {
						case 0:
							_context36.next = 2;
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
							return _context36.stop();
					}
				}
			}, _callee36, this);
		})));
	});
}

test$90(Math.pow);

/* eslint-disable no-magic-numbers */
function test$92(random) {
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

test$92(Math.random);

/* eslint-disable no-magic-numbers */
function test$94(round) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.round';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee37() {
			return regeneratorRuntime.wrap(function _callee37$(_context37) {
				while (1) {
					switch (_context37.prev = _context37.next) {
						case 0:
							_context37.next = 2;
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
							return _context37.stop();
					}
				}
			}, _callee37, this);
		})));
	});
}

test$94(Math.round);

/* eslint-disable no-magic-numbers */
function test$96(sign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sign';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee38() {
			return regeneratorRuntime.wrap(function _callee38$(_context38) {
				while (1) {
					switch (_context38.prev = _context38.next) {
						case 0:
							_context38.next = 2;
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
							return _context38.stop();
					}
				}
			}, _callee38, this);
		})));
	});
}

var x$34 = isNaN;

function sign(x) {
	x = +x;
	if (x === 0 || x$34(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
}

test$96(sign, 'Math.sign#j0');

test$96(Math.sign);

/* eslint-disable no-magic-numbers */
function test$98(sin) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sin';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee39() {
			return regeneratorRuntime.wrap(function _callee39$(_context39) {
				while (1) {
					switch (_context39.prev = _context39.next) {
						case 0:
							_context39.next = 2;
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
							return _context39.stop();
					}
				}
			}, _callee39, this);
		})));
	});
}

test$98(Math.sin);

/* eslint-disable no-magic-numbers */
function test$100(sinh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sinh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee40() {
			return regeneratorRuntime.wrap(function _callee40$(_context40) {
				while (1) {
					switch (_context40.prev = _context40.next) {
						case 0:
							_context40.next = 2;
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
							return _context40.stop();
					}
				}
			}, _callee40, this);
		})));
	});
}

function sinh(x) {
	var y = x$33.exp(x);
	return (y - 1 / y) / 2;
}

test$100(sinh, 'Math.sinh#j0');

test$100(Math.sinh);

/* eslint-disable no-magic-numbers */
function test$102(sqrt) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.sqrt';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee41() {
			return regeneratorRuntime.wrap(function _callee41$(_context41) {
				while (1) {
					switch (_context41.prev = _context41.next) {
						case 0:
							_context41.next = 2;
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
							return _context41.stop();
					}
				}
			}, _callee41, this);
		})));
	});
}

test$102(Math.sqrt);

function test$104(SQRT1_2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT1_2';


	describe(name, function () {

		it('should be approximately equal to 0.7071067811865476', function () {
			var expected = 0.7071067811865476;
			assert.approxEqual(SQRT1_2, expected);
		});
	});
}

test$104(Math.SQRT1_2);

function test$106(SQRT2) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.SQRT2';


	describe(name, function () {

		it('should be approximately equal to 1.4142135623730951', function () {
			var expected = 1.4142135623730951;
			assert.approxEqual(SQRT2, expected);
		});
	});
}

test$106(Math.SQRT2);

/* eslint-disable no-magic-numbers */
function test$108(tan) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tan';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee42() {
			return regeneratorRuntime.wrap(function _callee42$(_context42) {
				while (1) {
					switch (_context42.prev = _context42.next) {
						case 0:
							_context42.next = 2;
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
							return _context42.stop();
					}
				}
			}, _callee42, this);
		})));
	});
}

test$108(Math.tan);

/* eslint-disable no-magic-numbers */
function test$110(tanh) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.tanh';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee43() {
			return regeneratorRuntime.wrap(function _callee43$(_context43) {
				while (1) {
					switch (_context43.prev = _context43.next) {
						case 0:
							_context43.next = 2;
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
							return _context43.stop();
					}
				}
			}, _callee43, this);
		})));
	});
}

function tanh(x) {
	if (x === Infinity) {
		return 1;
	} else if (x === -Infinity) {
		return -1;
	}
	var y = x$33.exp(2 * x);
	return (y - 1) / (y + 1);
}

test$110(tanh, 'Math.tanh#j0');

test$110(Math.tanh);

/* eslint-disable no-magic-numbers */
function test$112(trunc) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Math.trunc';


	describe(name, function () {

		it('[id:' + name + '] should draw expected graph', _asyncToGenerator(regeneratorRuntime.mark(function _callee44() {
			return regeneratorRuntime.wrap(function _callee44$(_context44) {
				while (1) {
					switch (_context44.prev = _context44.next) {
						case 0:
							_context44.next = 2;
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
							return _context44.stop();
					}
				}
			}, _callee44, this);
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

test$112(trunc, 'Math.trunc#j0');

test$112(Math.trunc);

function test$114(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NamedNodeMap.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion8 = true;
			var _didIteratorError8 = false;
			var _iteratorError8 = undefined;

			try {
				for (var _iterator8 = expected[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
					var element = _step8.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
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
			assert.deepEqual(results, expected);
		});

		it('should create an iterator which is iterable in for-of syntax', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion9 = true;
			var _didIteratorError9 = false;
			var _iteratorError9 = undefined;

			try {
				for (var _iterator9 = expected[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
					var element = _step9.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion10 = true;
			var _didIteratorError10 = false;
			var _iteratorError10 = undefined;

			try {
				for (var _iterator10 = iterator[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
					var value = _step10.value;

					results.push(value);
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

			assert.deepEqual(results, expected);
		});
	});
}

function generator$6() {
	var _this17 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this17[index],
			done: length <= index++
		};
	});
}

test$114(generator$6, 'NamedNodeMap.prototype[Symbol.iterator]#j0');

test$114(NamedNodeMap.prototype[Symbol.iterator]);

function test$116(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'NodeList.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion11 = true;
			var _didIteratorError11 = false;
			var _iteratorError11 = undefined;

			try {
				for (var _iterator11 = expected[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
					var element = _step11.value;

					parent.appendChild(element);
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
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion12 = true;
			var _didIteratorError12 = false;
			var _iteratorError12 = undefined;

			try {
				for (var _iterator12 = expected[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
					var element = _step12.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var _iteratorNormalCompletion13 = true;
			var _didIteratorError13 = false;
			var _iteratorError13 = undefined;

			try {
				for (var _iterator13 = iterator[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
					var value = _step13.value;

					results.push(value);
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

			assert.deepEqual(results, expected);
		});
	});
}

function generator$8() {
	var _this18 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this18[index],
			done: length <= index++
		};
	});
}

test$116(generator$8, 'NodeList.prototype[Symbol.iterator]#j0');

test$116(NodeList.prototype[Symbol.iterator]);

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

function assign(target) {
	for (var _len25 = arguments.length, objects = Array(_len25 > 1 ? _len25 - 1 : 0), _key25 = 1; _key25 < _len25; _key25++) {
		objects[_key25 - 1] = arguments[_key25];
	}

	objects.forEach(function (obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				target[key] = obj[key];
			}
		}
	});
}

function test$118(assign) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Object.assign';


	describe(name, function () {

		it('should assign properties', function () {
			var _assign, _assign2, _assert$deepEqual;

			var target = {};
			var key1 = Date.now() + '_1';
			var key2 = Date.now() + '_2';
			var key3 = Date.now() + '_3';
			var value1 = Date.now() + '_4';
			var value2 = Date.now() + '_5';
			var value3 = Date.now() + '_6';
			assign(target, (_assign = {}, _defineProperty(_assign, key1, value1), _defineProperty(_assign, key2, value2), _assign), (_assign2 = {}, _defineProperty(_assign2, key2, value3), _defineProperty(_assign2, key3, value2), _assign2));
			assert.deepEqual(target, (_assert$deepEqual = {}, _defineProperty(_assert$deepEqual, key1, value1), _defineProperty(_assert$deepEqual, key2, value3), _defineProperty(_assert$deepEqual, key3, value2), _assert$deepEqual));
		});
	});
}

test$118(assign, 'Object.assign#j0');

test$118(Object.assign);

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

describe('Headers/parse', function () {

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

var x$35 = setTimeout;

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!x$32.immediateId) {
	x$32.immediateId = 0;
}
x$32.immediateId += 1;
var setImmediateNative = x$32.setImmediate;

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
	return x$35(fn);
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
x$35(function () {
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
			var _this19 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this19.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this19.reject(error);
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
					throw new x$8('A promise cannot be resolved with itself');
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
			var _this20 = this;

			this.deferreds.forEach(function (deferred) {
				_this20.handle(deferred);
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

function test$120(Promise, name) {

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

test$120(J0Promise, 'Promise/j0');

test$120(Promise, 'Promise');

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

tests$10(Request, 'Request');

describe('requestAnimationFrame', function () {

	it('should call the given function with timeStamp', _asyncToGenerator(regeneratorRuntime.mark(function _callee45() {
		var timeStamp;
		return regeneratorRuntime.wrap(function _callee45$(_context45) {
			while (1) {
				switch (_context45.prev = _context45.next) {
					case 0:
						_context45.next = 2;
						return new Promise(x$22);

					case 2:
						timeStamp = _context45.sent;

						assert(0 < timeStamp, true);

					case 4:
					case 'end':
						return _context45.stop();
				}
			}
		}, _callee45, this);
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
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$32;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$32;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});

function test$121(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Set.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var set = new Set(data);
			var iterator = generator.call(set);
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
			assert.deepEqual(results, data);
		});
	});
}

function generator$10() {
	return this.values();
}

test$121(generator$10, 'Set.prototype[Symbol.iterator]#j0');

test$121(Set.prototype[Symbol.iterator]);

var Set$2 = function () {
	function Set$2(iterable) {
		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion14 = true;
			var _didIteratorError14 = false;
			var _iteratorError14 = undefined;

			try {
				for (var _iterator14 = iterable[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
					var value = _step14.value;

					this.add(value);
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
			var _this21 = this;

			this.data.slice().forEach(function (value) {
				fn.call(thisArg, value, value, _this21);
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
					var _iterator$next15 = iterator.next(),
					    value = _iterator$next15.value,
					    done = _iterator$next15.done;

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
				for (var _len26 = arguments.length, args = Array(_len26), _key26 = 0; _key26 < _len26; _key26++) {
					args[_key26] = arguments[_key26];
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
				var _iterator$next16 = iterator.next(),
				    value = _iterator$next16.value,
				    done = _iterator$next16.done;

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
				var _iterator$next17 = iterator.next(),
				    value = _iterator$next17.value,
				    done = _iterator$next17.done;

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

var x$36 = encodeURIComponent;

var State = function () {
	function State(stateInfo) {
		_classCallCheck(this, State);

		if (!isInstanceOf(stateInfo, State)) {
			var path = stateInfo.path;

			var parts = [];
			var pos = 0;
			path.replace(/\{(\w+):(.*?)\}/g, function (_ref76, name, expression, offset, source) {
				var length = _ref76.length;

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
				if (isString(part)) {
					return part;
				}
				return '(' + part[2] + ')';
			}).join(''));
			x$24.assign(stateInfo, {
				parts: parts,
				matcher: matcher
			});
		}
		x$24.assign(this, stateInfo);
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
					return x$36(value);
				}
			});
		}
	}, {
		key: 'parse',
		value: function parse() {
			var _this22 = this;

			var href = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			var params = void 0;
			href.replace(this.matcher, function (match) {
				for (var _len27 = arguments.length, args = Array(_len27 > 1 ? _len27 - 1 : 0), _key27 = 1; _key27 < _len27; _key27++) {
					args[_key27 - 1] = arguments[_key27];
				}

				var index = 0;
				params = {};
				return _this22.compose(function (key) {
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

var x$37 = Map;

var x$38 = location;

var x$39 = history;

var x$40 = addEventListener;

var x$41 = Boolean;

var StateManager = function (_EventEmitter) {
	_inherits(StateManager, _EventEmitter);

	function StateManager(config) {
		_classCallCheck(this, StateManager);

		var _this23 = _possibleConstructorReturn(this, (StateManager.__proto__ || Object.getPrototypeOf(StateManager)).call(this));

		x$24.assign(_this23, { prefix: '#' }, config, {
			states: new x$37(),
			listeners: []
		});
		if (!_this23.parser) {
			if (_this23.prefix.charAt(0) === '#') {
				_this23.parser = function (url) {
					return url.hash.slice(this.prefix.length);
				};
			} else {
				_this23.parser = function (url) {
					var pathname = url.pathname,
					    search = url.search,
					    hash = url.hash;

					return ('' + pathname + search + hash).slice(this.prefix.length);
				};
			}
		}
		return _this23;
	}

	_createClass(StateManager, [{
		key: 'parseURL',
		value: function parseURL() {
			var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x$38;

			var stateString = this.parser(url);
			var _iteratorNormalCompletion15 = true;
			var _didIteratorError15 = false;
			var _iteratorError15 = undefined;

			try {
				for (var _iterator15 = this.states[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
					var _ref77 = _step15.value;

					var _ref78 = _slicedToArray(_ref77, 2);

					var state = _ref78[1];

					var params = state.parse(stateString);
					if (params) {
						return state.instantiate(params);
					}
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
		value: function get(stateInfo, noFallback) {
			var name = stateInfo.name,
			    params = stateInfo.params;

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
				throw new Error('Failed to set fallback: ' + x$4.stringify(stateInfo) + ' is not exist.');
			}
			return this;
		}
	}, {
		key: 'is',
		value: function is(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$41(current && state && current.is(state));
		}
	}, {
		key: 'isIn',
		value: function isIn(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$41(current && state && current.isIn(state));
		}
	}, {
		key: 'isAncestorOf',
		value: function isAncestorOf(stateInfo) {
			var current = this.current;

			var state = this.get(stateInfo, true);
			return x$41(current && state && current.isAncestorOf(state));
		}
	}, {
		key: 'setCurrent',
		value: function setCurrent(stateInfo, method) {
			var newState = this.get(stateInfo);
			if (this.is(newState)) {
				return;
			}
			this.emit('change', newState, this.current);
			this.current = newState;
			x$39[method](newState.name, newState.params, newState.href);
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
			var _this24 = this;

			var debounceDuration = 30;
			var onStateChange = debounce(function () {
				_this24.replace(_this24.parseURL());
			}, debounceDuration);
			x$40('hashchange', onStateChange);
			x$40('pushstate', onStateChange);
			x$40('popstate', onStateChange);
			onStateChange();
		}
	}]);

	return StateManager;
}(EventEmitter);

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
		var _iteratorNormalCompletion16 = true;
		var _didIteratorError16 = false;
		var _iteratorError16 = undefined;

		try {
			for (var _iterator16 = states.states[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
				var _ref79 = _step16.value;

				var _ref80 = _slicedToArray(_ref79, 2);

				var state = _ref80[1];

				results.push(state);
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

	it('should start management', _asyncToGenerator(regeneratorRuntime.mark(function _callee46() {
		var states, name0, name1, name2, _ref82, _ref83, toState, fromState;

		return regeneratorRuntime.wrap(function _callee46$(_context46) {
			while (1) {
				switch (_context46.prev = _context46.next) {
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
						_context46.next = 7;
						return new Promise(function (resolve) {
							states.on('change', function () {
								for (var _len28 = arguments.length, data = Array(_len28), _key28 = 0; _key28 < _len28; _key28++) {
									data[_key28] = arguments[_key28];
								}

								resolve(data);
							}).start();
						});

					case 7:
						_ref82 = _context46.sent;
						_ref83 = _slicedToArray(_ref82, 2);
						toState = _ref83[0];
						fromState = _ref83[1];

						assert.deepEqual(toState, states.fallback);
						assert.equal(!fromState, true);

					case 13:
					case 'end':
						return _context46.stop();
				}
			}
		}, _callee46, this);
	})));

	it('should return whether the current state is the given state or not', _asyncToGenerator(regeneratorRuntime.mark(function _callee47() {
		var states, name0, name1, name2;
		return regeneratorRuntime.wrap(function _callee47$(_context47) {
			while (1) {
				switch (_context47.prev = _context47.next) {
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
						_context47.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve);
						});

					case 7:
						assert.equal(states.is({ name: name0 }), true);
						assert.equal(states.is({ name: name1 }), false);

					case 9:
					case 'end':
						return _context47.stop();
				}
			}
		}, _callee47, this);
	})));

	it('should go to the other state', _asyncToGenerator(regeneratorRuntime.mark(function _callee48() {
		var states, name0, name1, name2, param1, params;
		return regeneratorRuntime.wrap(function _callee48$(_context48) {
			while (1) {
				switch (_context48.prev = _context48.next) {
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
						_context48.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						param1 = '' + Date.now();
						params = { param1: param1 };
						_context48.next = 11;
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
						return _context48.stop();
				}
			}
		}, _callee48, this);
	})));

	it('should return whether the current state is one of the given states', _asyncToGenerator(regeneratorRuntime.mark(function _callee49() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1;
		return regeneratorRuntime.wrap(function _callee49$(_context49) {
			while (1) {
				switch (_context49.prev = _context49.next) {
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
						_context49.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context49.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context49.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context49.sent;

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
						return _context49.stop();
				}
			}
		}, _callee49, this);
	})));

	it('should detect history.back()', _asyncToGenerator(regeneratorRuntime.mark(function _callee50() {
		var states, name0, name1, name2, toState0, param1, param2, params, toState1, toState2;
		return regeneratorRuntime.wrap(function _callee50$(_context50) {
			while (1) {
				switch (_context50.prev = _context50.next) {
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
						_context50.next = 7;
						return new Promise(function (resolve) {
							states.once('change', resolve).start();
						});

					case 7:
						toState0 = _context50.sent;

						assert.equal(toState0.name, name0);
						param1 = '' + Date.now();
						param2 = Date.now() + '_param2';
						params = {
							param1: param1,
							param2: param2
						};
						_context50.next = 14;
						return new Promise(function (resolve) {
							states.once('change', resolve).go({
								name: name2,
								params: params
							});
						});

					case 14:
						toState1 = _context50.sent;

						assert.equal(toState1.name, name2);
						_context50.next = 18;
						return new Promise(function (resolve) {
							states.once('change', resolve);
							history.back();
						});

					case 18:
						toState2 = _context50.sent;

						assert.equal(toState2.name, name0);

					case 20:
					case 'end':
						return _context50.stop();
				}
			}
		}, _callee50, this);
	})));
});

function test$123(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'String.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var string = '' + Date.now();
			var iterator = generator.call(string);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next18 = iterator.next(),
				    value = _iterator$next18.value,
				    done = _iterator$next18.done;

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
			var _iteratorNormalCompletion17 = true;
			var _didIteratorError17 = false;
			var _iteratorError17 = undefined;

			try {
				for (var _iterator17 = iterator[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
					var value = _step17.value;

					results.push(value);
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

			assert.deepEqual(results, string.split(''));
		});
	});
}

function generator$12() {
	var _this25 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this25[index],
			done: length <= index++
		};
	});
}

test$123(generator$12, 'String.prototype[Symbol.iterator]#j0');

test$123(String.prototype[Symbol.iterator]);

function test$125(repeat) {
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

var x$42 = parseInt;

function repeat(c) {
	var count = x$42(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

test$125(repeat, 'String.prototype.repeat#j0');

test$125(String.prototype.repeat);

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

function test$127(_Symbol) {
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

test$127(Symbol, 'J0Symbol');

test$127(Symbol);

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = isUndefined(context) ? this : context;

		for (var _len29 = arguments.length, args = Array(_len29), _key29 = 0; _key29 < _len29; _key29++) {
			args[_key29] = arguments[_key29];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = x$35(function () {
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

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? init.replace(/^\?/, '').split(separator).map(function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref88) {
				var _ref89 = _slicedToArray(_ref88, 2),
				    name = _ref89[0],
				    _ref89$ = _ref89[1],
				    value = _ref89$ === undefined ? '' : _ref89$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

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
	it('should return a promise and it should resolved with given data', _asyncToGenerator(regeneratorRuntime.mark(function _callee52() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee52$(_context52) {
			while (1) {
				switch (_context52.prev = _context52.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.9;
						_context52.next = 6;
						return wait$1(duration, data);

					case 6:
						actual = _context52.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context52.stop();
				}
			}
		}, _callee52, this);
	})));
});
}())
