import Array from '../..';

describe('Array/from', function () {

	it('should create an array', function () {
		const actual = Array.of(1, 2, 3);
		const expected = [1, 2, 3];
		assert.deepEqual(actual, expected);
	});

});
