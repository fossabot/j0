import shift from '..';

describe('Array/shift', function () {

	it('should remove the first item of an array', function () {
		const array = [1, 2, 3, 4];
		const expected1 = 1;
		const expected2 = [2, 3, 4];
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});

	it('should remove the first item of an array-like object', function () {
		const array = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			length: 4
		};
		const expected1 = 1;
		const expected2 = {
			0: 2,
			1: 3,
			2: 4,
			length: 3
		};
		assert.equal(shift(array), expected1);
		assert.deepEqual(array, expected2);
	});

});
