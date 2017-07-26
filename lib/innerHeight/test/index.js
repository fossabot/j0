import innerHeight from '..';

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});

});
