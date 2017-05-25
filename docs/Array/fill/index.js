(function(){
'use strict';

function test(copyWithin) {
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

function copyWithin(value) {
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

test(copyWithin, 'Array.prototype.fill#j0');

test(Array.prototype.fill);
}())
