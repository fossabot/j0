import dom from '../..';

describe('J0Element.prototype.next', function () {

	it('should insert a new child before an existing child', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		const element1 = dom();
		const element2 = dom();
		const element = dom({
			c: [
				element2,
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element1.setNext(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should return null', function () {
		const element1 = dom();
		const element2 = dom();
		dom({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element2.next, null);
	});

});
