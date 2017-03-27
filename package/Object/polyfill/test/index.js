import Array from '../../../Array';

describe('Object/polyfill', function () {

	it('should make array-like iterable', function () {
		const arrayLike = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		const expected = [1, 2, 3];
		assert.deepEqual(Array.from(arrayLike), expected);
	});

});
