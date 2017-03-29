import insertBefore from '..';
import createElement from '../../createElement';
import getChildNodes from '../../getChildNodes';
import arrayFrom from '../../../Array/from';

describe('dom/insertBefore', function () {

	it('should insert an element before a specified element', function () {
		const c1 = createElement();
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		const newNode = createElement();
		insertBefore(newNode, c2);
		assert.deepEqual(arrayFrom(getChildNodes(parent)), [c1, newNode, c2]);
	});

	it('should insert an element after the last child', function () {
		const c1 = createElement();
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		const newNode = createElement();
		insertBefore(newNode, null, parent);
		assert.deepEqual(arrayFrom(getChildNodes(parent)), [c1, c2, newNode]);
	});

});
