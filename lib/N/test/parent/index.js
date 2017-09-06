import {
	N,
} from 'j0';

describe('N.prototype.parent', function () {

	it('should return its parent', function () {
		const element1 = new N();
		const element2 = new N({c: [element1]});
		assert.equal(element1.parent.equals(element2), true);
	});

	it('should set its parent', function () {
		const element1 = new N();
		const element2 = new N();
		element1.setParent(element2);
		assert.equal(element1.parent.equals(element2), true);
	});

});
