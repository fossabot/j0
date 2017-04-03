import children from '..';
import createElement from '../../createElement';
import arrayFrom from '../../../Array/from';

describe('dom/children', function () {

	it('should get a list of children', function () {
		const c1 = createElement('c1');
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		assert.deepEqual(arrayFrom(children(parent)), [c2]);
	});

});
