import {
	N,
} from 'j0';

describe('N.prototype.insertBefore', function () {

	it('should insert a new child', function () {
		const element1 = new N();
		const element2 = new N();
		const element = new N({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.insertBefore(element2, element1);
		assert.equal(element.firstChild.equals(element2), true);
	});

	it('should replace an existing child', function () {
		const element1 = new N();
		const element2 = new N();
		const element = new N({
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
