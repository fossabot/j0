import assert from 'assert';

describe('abs', function () {
	it('should return the sign', function () {
		assert.equal(Math.sign(100), 1);
	});
	it('should return the sign', function () {
		assert.equal(Math.sign(-100), -1);
	});
});
