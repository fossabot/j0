import {
	N
} from 'j0';

describe('N.prototype.children', function () {

	it('should return all elements under the element', function () {
		const element1 = new N(`${Date.now()}`);
		const element2 = new N();
		const element = new N({
			c: [
				element1,
				element2
			]
		});
		assert.deepEqual(element.children, [element2]);
	});

});
