import dom from '../..';

describe('J0Element.prototype.firstChild', function () {

	it('should return null', function () {
		const element = dom();
		assert.equal(element.firstChild, null);
	});

	it('should return the first child', function () {
		const element1 = dom(`${Date.now()}`);
		const element2 = dom();
		const element = dom({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
	});

	it('should set the first child', function () {
		const element1 = dom(`${Date.now()}`);
		const element2 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.firstChild = element2;
		assert.equal(element.firstChild.equals(element2), true);
	});

});
