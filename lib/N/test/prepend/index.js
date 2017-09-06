import {
	N,
} from 'j0';

describe('N.prototype.prepend', function () {

	it('should prepend nodes', function () {
		const element1 = new N(`${Date.now()}-1`);
		const element2 = new N();
		const element3 = new N(`${Date.now()}-2`);
		const element = new N({
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
