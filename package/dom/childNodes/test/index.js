import childNodes from '..';
import createElement from '../../createElement';
import arrayFrom from '../../../Array/from';

describe('dom/childNodes', function () {

	it('should get a list of children', function () {
		const c1 = createElement();
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		assert.deepEqual(arrayFrom(childNodes(parent)), [c1, c2]);
	});

});
