import {
	N,
} from 'j0';

describe('N.prototype.empty', function () {

	it('should remove childNodes', function () {
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
		assert.equal(element.empty(), element);
		assert.deepEqual(element.childNodes, []);
	});

});
