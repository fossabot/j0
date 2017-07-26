import dom from '../../index.js';

describe('J0Element.prototype.bb', function () {

	it('should get a bounding box', function () {
		const {left, top} = dom().bb;
		assert.equal(left, 0);
		assert.equal(top, 0);
	});

});
