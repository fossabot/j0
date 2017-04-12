import reduce from '..';

describe('Array/reduce', function () {

	it('should iterate over an array', function () {
		const array = [1, 2, 3];
		const result = [];
		reduce(array, function (memo, value, index, arr) {
			memo[index] = value;
			assert.equal(arr, array);
			return memo;
		}, result);
		assert.deepEqual(result, array);
	});

	it('should iterate over an array-like', function () {
		const array = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		const result = [];
		const expected = [1, 2, 3];
		reduce(array, function (memo, value, index, arr) {
			memo[index] = value;
			assert.equal(arr, array);
			return memo;
		}, result);
		assert.deepEqual(result, expected);
	});

	it('should iterate over an iterable', function () {
		let count = 0;
		const iterable = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 4 < count
				};
			}
		};
		const expected = [1, 2, 3, 4];
		const result = [];
		reduce(iterable, function (memo, value, index, arr) {
			memo[index] = value;
			assert.equal(arr, iterable);
			return memo;
		}, result);
		assert.deepEqual(result, expected);
	});

	it('should iterate over a string', function () {
		const text = 'abcd';
		const expected = ['a', 'b', 'c', 'd'];
		const result = [];
		reduce(text, function (memo, value, index, arr) {
			memo[index] = value;
			assert.equal(arr, text);
			return memo;
		}, result);
		assert.deepEqual(result, expected);
	});

	it('should call fn in a specified context', function () {
		const array = [1, 2, 3];
		const context = {sum: 0};
		const result = [];
		const expected = [2, 5, 9];
		function fn(memo, value, index, arr) {
			this.sum += value;
			memo[index] = value + this.sum;
			assert.equal(arr, array);
			return memo;
		}
		reduce(array, fn, result, context);
		assert.deepEqual(context, {sum: 6});
		assert.deepEqual(result, expected);
	});

});
