import {
	N,
} from 'j0';

describe('N.prototype.firstChild', function () {

	it('should return null', function () {
		const element = new N();
		assert.equal(element.firstChild, null);
	});

	it('should return the first child', function () {
		const element1 = new N(`${Date.now()}`);
		const element2 = new N();
		const element = new N({
			c: [
				element1,
				element2
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
	});

	it('should set the first child', function () {
		const element1 = new N(`${Date.now()}`);
		const element2 = new N();
		const element = new N({
			c: [
				element1
			]
		});
		assert.equal(element.firstChild.equals(element1), true);
		element.setFirstChild(element2);
		assert.equal(element.firstChild.equals(element2), true);
	});

});
