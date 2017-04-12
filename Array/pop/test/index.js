import pop from '..';

describe('Array/pop', function () {

	it('should return the last item of array', function () {
		const array = [1, 2, 3, 4, 5];
		const actual = pop(array);
		const expected1 = 5;
		const expected2 = [1, 2, 3, 4];
		assert.equal(actual, expected1);
		assert.deepEqual(array, expected2);
	});

});
