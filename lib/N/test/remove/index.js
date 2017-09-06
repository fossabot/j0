import {
	N,
} from 'j0';

describe('N.prototype.remove', function () {

	it('should remove itself from its parent', function () {
		const element1 = new N(`${Date.now()}`);
		const element2 = new N();
		const element = new N({
			c: [
				element1,
				element2
			]
		});
		assert.deepEqual(element.childNodes, [
			element1,
			element2
		]);
		assert.equal(element1.remove(), element1);
		assert.equal(element1.remove(), element1);
		assert.deepEqual(element.childNodes, [
			element2
		]);
	});

});
