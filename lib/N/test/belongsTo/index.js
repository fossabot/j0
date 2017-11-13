import {
	N,
} from 'j0';

describe('N.prototype.belongsTo', function () {

	it('should return true if the node belongs to the given node', function () {
		const element1 = new N();
		const element = new N({
			c: [
				element1,
			],
		});
		assert.equal(element1.belongsTo(element), true);
	});

	it('should return false if the node does not contain the given node', function () {
		const element1 = new N();
		const element = new N();
		assert.equal(element1.belongsTo(element), false);
	});

});
