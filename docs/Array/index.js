(function(){
'use strict';

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

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

function test(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.find';


	describe(name, function () {

		it('should return 1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 1;
			}), 1);
		});

		it('should return undefined', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 4;
			}));
		});
	});
}

test(findIndex, 'Array.prototype.find.j0');

test(Array.prototype.find);

function findIndex$2(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

function test$2(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.findIndex';


	describe(name, function () {

		it('should return 0', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, { expected: 1 }), 0);
		});

		it('should return -1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, { expected: 4 }), -1);
		});
	});
}

test$2(findIndex$2, 'Array.prototype.findIndex.j0');

test$2(Array.prototype.findIndex);

function test$4(arrayFrom) {
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

test$4(Array.from);

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var i = fromIndex, length = this.length; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test$6(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.includes';


	describe(name, function () {

		it('should find an item', function () {
			var array = [0, 1, 2, 3];
			assert.equal(includes.call(array, 1), true);
			assert.equal(includes.call(array, 4), false);
		});

		it('should find an item from array-like', function () {
			var arrayLike = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			};
			assert.equal(includes.call(arrayLike, 1), true);
			assert.equal(includes.call(arrayLike, 4), false);
		});

		it('should find a character from a string', function () {
			var string = 'abcde';
			assert.equal(includes.call(string, 'c'), true);
			assert.equal(includes.call(string, 'f'), false);
		});
	});
}

test$6(includes, 'j0includes');

test$6(Array.prototype.includes);

function test$8(arrayOf) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.of';


	describe(name, function () {

		it('should create an array', function () {
			var actual = arrayOf(1, 2, 3);
			var expected = [1, 2, 3];
			assert.deepEqual(actual, expected);
		});
	});
}

test$8(Array.of);
}())
