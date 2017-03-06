import assert from 'assert';

describe('abs', function () {
	it('should return 100', function () {
		assert.equal(Math.abs(100), 100);
	});
	it('should return 100', function () {
		assert.equal(Math.abs(-100), 100);
	});
});
