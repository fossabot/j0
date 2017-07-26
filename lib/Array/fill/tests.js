function test(copyWithin, name = 'Array.prototype.fill') {

	describe(name, function () {

		it('should support (value, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const actual = copyWithin.call(array, value);
			const expected = [value, value, value, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = 3;
			const actual = copyWithin.call(array, value, start);
			const expected = [v1, v2, v3, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3, 4)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = 3;
			const end = 4;
			const actual = copyWithin.call(array, value, start, end);
			const expected = [v1, v2, v3, value, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, 3, -1)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = 3;
			const end = -1;
			const actual = copyWithin.call(array, value, start, end);
			const expected = [v1, v2, v3, value, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, 0)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = -4;
			const actual = copyWithin.call(array, value, start);
			const expected = [v1, value, value, value, value];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, 3)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = -4;
			const end = 3;
			const actual = copyWithin.call(array, value, start, end);
			const expected = [v1, value, value, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

		it('should support (value, -4, -2)', function () {
			const v1 = Math.random();
			const v2 = Math.random();
			const v3 = Math.random();
			const v4 = Math.random();
			const v5 = Math.random();
			const array = [v1, v2, v3, v4, v5];
			const value = Math.random();
			const start = -4;
			const end = -2;
			const actual = copyWithin.call(array, value, start, end);
			const expected = [v1, value, value, v4, v5];
			assert.equal(actual, array);
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;
