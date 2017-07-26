import dom from '../..';

describe('J0Element.prototype.empty', function () {

	it('should remove childNodes', function () {
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
		assert.equal(element.empty(), element);
		assert.deepEqual(element.childNodes, []);
	});

});
