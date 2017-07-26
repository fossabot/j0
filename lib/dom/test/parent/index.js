import dom from '../..';

describe('J0Element.prototype.parent', function () {

	it('should return its parent', function () {
		const element1 = dom();
		const element2 = dom({c: [element1]});
		assert.equal(element1.parent.equals(element2), true);
	});

	it('should set its parent', function () {
		const element1 = dom();
		const element2 = dom();
		element1.setParent(element2);
		assert.equal(element1.parent.equals(element2), true);
	});

});
