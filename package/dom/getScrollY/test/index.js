import getScrollY from '..';

describe('getScrollY', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= getScrollY(), true);
	});

});
