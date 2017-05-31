import dom from '../..';

describe('J0Element.prototype.children', function () {

	it('should return all elements under the element', function () {
		const element1 = dom(`${Date.now()}`);
		const element2 = dom();
		const element = dom({
			c: [
				element1,
				element2
			]
		});
		assert.deepEqual(element.children, [element2]);
	});

});
