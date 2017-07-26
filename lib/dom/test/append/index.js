import dom from '../../index.js';

describe('J0Element.prototype.append', function () {

	it('should append nodes', function () {
		const element1 = dom(`${Date.now()}-1`);
		const element2 = dom();
		const element3 = dom(`${Date.now()}-2`);
		const element = dom({
			c: [
				element1
			]
		});
		element.append(element2, element3);
		assert.deepEqual(element.childNodes, [
			element1,
			element2,
			element3
		]);
	});

});
