import noopTrue from '..';

describe('noop', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});

});
