(function(){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
	var _this = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this[index],
			done: length <= index++
		};
	});
}

test(generator, 'Array.prototype[Symbol.iterator]#j0');

test(Array.prototype[Symbol.iterator]);

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
	var _this2 = this;

	var index = 0;
	return new Iterator(function () {
		return {
			value: [index, _this2[index]],
			done: _this2.length < ++index
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
}())
