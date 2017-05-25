function test(copyWithin, name = 'Array.prototype.copyWithin') {

	describe(name, function () {

		it('should support (2, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const actual = copyWithin.call(array, target);
			const expected = [v1, v2, v1, v2, v3];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = 3;
			const actual = copyWithin.call(array, target, start);
			const expected = [v1, v2, v4, v5, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3, 4)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = 3;
			const end = 4;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, 3, -1)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = 3;
			const end = -1;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = -4;
			const actual = copyWithin.call(array, target, start);
			const expected = [v1, v2, v2, v3, v4];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = -4;
			const end = 3;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (2, -4, -2)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = 2;
			const start = -4;
			const end = -2;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const actual = copyWithin.call(array, target);
			const expected = [v1, v2, v1, v2, v3];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = 3;
			const actual = copyWithin.call(array, target, start);
			const expected = [v1, v2, v4, v5, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3, 4)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = 3;
			const end = 4;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, 3, -1)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = 3;
			const end = -1;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v4, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = -4;
			const actual = copyWithin.call(array, target, start);
			const expected = [v1, v2, v2, v3, v4];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = -4;
			const end = 3;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (-3, -4, -2)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const target = -3;
			const start = -4;
			const end = -2;
			const actual = copyWithin.call(array, target, start, end);
			const expected = [v1, v2, v2, v3, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;
