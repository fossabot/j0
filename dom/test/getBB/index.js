import dom from '../..';

describe('J0Element.prototype.getBB', function () {

	it('should get a bounding box', function () {
		const {left, top} = dom().getBB();
		assert.equal(left, 0);
		assert.equal(top, 0);
	});

});
