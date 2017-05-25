(function(){
'use strict';

function test(copyWithin) {
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

test(copyWithin, 'Array.prototype.copyWithin#j0');

test(Array.prototype.copyWithin);
}())
