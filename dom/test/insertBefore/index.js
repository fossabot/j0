import dom from '../..';

describe('J0Element.prototype.insertBefore', function () {

	it('should insert a new child', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});

});
