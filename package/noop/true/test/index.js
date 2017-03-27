import noopTrue from '..';

describe('noop/true', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});

});
