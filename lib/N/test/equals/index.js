import {
	N,
} from 'j0';

describe('N.prototype.equals', function () {

	it('should return whether the given wraps the same element or not', function () {
		const element1 = new N();
		const element2 = new N(element1);
		const element3 = new N();
		assert.equal(element1.equals(element1), true);
		assert.equal(element1.equals(element2), true);
		assert.equal(element1.equals(element3), false);
		assert.equal(element2.equals(element1), true);
		assert.equal(element2.equals(element2), true);
		assert.equal(element2.equals(element3), false);
		assert.equal(element3.equals(element1), false);
		assert.equal(element3.equals(element2), false);
		assert.equal(element3.equals(element3), true);
	});

});
