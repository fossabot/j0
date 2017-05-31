import dom from '../..';

describe('J0Element.prototype.prepend', function () {

	it('should prepend nodes', function () {
		const element1 = dom(`${Date.now()}-1`);
		const element2 = dom();
		const element3 = dom(`${Date.now()}-2`);
		const element = dom({
			c: [
				element1
			]
		});
		element.prepend(element2, element3);
		assert.deepEqual(element.childNodes, [
			element3,
			element2,
			element1
		]);
	});

});
