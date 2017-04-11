import splice from '..';

describe('Array/splice', function () {

	it('should remove items from an array', function () {
		const array = [1, 2, 3, 4, 5];
		splice(array, 1, 2);
		assert.deepEqual(array, [1, 4, 5]);
	});

});
