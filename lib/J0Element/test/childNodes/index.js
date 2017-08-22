import {
	dom
} from 'j0';

describe('J0Element.prototype.childNodes', function () {

	it('should return all nodes under the element', function () {
		const element1 = dom(`${Date.now()}`);
		const element2 = dom();
		const element = dom({
			c: [
				element1,
				element2
			]
		});
		assert.deepEqual(element.childNodes, [element1, element2]);
	});

});
