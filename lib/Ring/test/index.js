import Ring from '..';

describe('Ring', function () {

	describe('Ring.prototype.get', function () {

		[
			[-6, 0],
			[-5, 1],
			[-4, 2],
			[-3, 0],
			[-2, 1],
			[-1, 2],
			[0, 0],
			[1, 1],
			[2, 2],
			[3, 0],
			[4, 1],
			[5, 2],
		]
		.forEach(([index, expected]) => {
			it(`should return element at ${index}`, function () {
				const ring = new Ring([0, 1, 2]);
				assert.equal(ring.get(index), expected);
			});
		});
	});

	describe('Ring.prototype.rotate', function () {

		[
			[-6, [0, 1, 2]],
			[-5, [1, 2, 0]],
			[-4, [2, 0, 1]],
			[-3, [0, 1, 2]],
			[-2, [1, 2, 0]],
			[-1, [2, 0, 1]],
			[0, [0, 1, 2]],
			[1, [1, 2, 0]],
			[2, [2, 0, 1]],
			[3, [0, 1, 2]],
			[4, [1, 2, 0]],
			[5, [2, 0, 1]],
		]
		.forEach(([index, expected]) => {
			it(`should return rotate by ${index}`, function () {
				const ring = new Ring([0, 1, 2]);
				assert.deepEqual(ring.rotate(index).array, expected);
			});
		});

	});

});
