import {
	N,
} from 'j0';

describe('N.prototype.lastChild', function () {

	it('should return null', function () {
		const element = new N();
		assert.equal(element.lastChild, null);
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
		assert.equal(element.lastChild.equals(element2), true);
	});

	it('should set the first child', function () {
		const element1 = new N(`${Date.now()}`);
		const element2 = new N();
		const element = new N({
			c: [
				element1
			]
		});
		assert.equal(element.lastChild.equals(element1), true);
		element.setLastChild(element2);
		assert.equal(element.lastChild.equals(element2), true);
	});

});
