import slice from '..';

describe('Array/slice', function () {

	it('should copy an array', function () {
		const array = [1, 2, 3, 4, 5];
		const actual = slice(array);
		const expected = [1, 2, 3, 4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should slice an array', function () {
		const array = [1, 2, 3, 4, 5];
		const actual = slice(array, 3);
		const expected = [4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should create an empty array from an array', function () {
		const array = [1, 2, 3, 4, 5];
		const actual = slice(array, 0, 0);
		const expected = [];
		assert.deepEqual(actual, expected);
	});

	it('should slice from end of an array', function () {
		const array = [1, 2, 3, 4, 5];
		const actual = slice(array, -2);
		const expected = [4, 5];
		assert.deepEqual(actual, expected);
	});

	it('should create a new array from arguments', function () {
		const args = (function () {
			return arguments;
		})(1, 2, 3, 4, 5);
		const actual = slice(args);
		const expected = [1, 2, 3, 4, 5];
		assert.deepEqual(actual, expected);
	});

});
