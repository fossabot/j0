import dom from '../..';

describe('J0Element.prototype.remove', function () {

	it('should remove itself from its parent', function () {
		const element1 = dom(`${Date.now()}`);
		const element2 = dom();
		const element = dom({
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
