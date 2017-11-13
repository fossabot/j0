import {
	N,
} from 'j0';

describe('N.prototype.contains', function () {

	it('should return true if the node contains the given node', function () {
		const element1 = new N();
		const element = new N({
			c: [
				element1,
			],
		});
		assert.equal(element.contains(element1), true);
	});

	it('should return false if the node does not contain the given node', function () {
		const element1 = new N();
		const element = new N();
		assert.equal(element.contains(element1), false);
	});

});
