import cubicBezier from '..';

describe('Math/cubicBezier', function () {

	it('should be linear', function () {
		let sum = 0;
		for (let t = 0; t <= 1; t += 0.1) {
			const d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});

});
