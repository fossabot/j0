import scrollX from '../index.js';
describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});
