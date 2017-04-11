import arrayOf from '..';

describe('Array/of', function () {

	it('should create an array', function () {
		const actual = arrayOf(1, 2, 3);
		const expected = [1, 2, 3];
		assert.deepEqual(actual, expected);
	});

});
