import insertAfter from '..';
import createElement from '../../createElement';
import childNodes from '../../childNodes';
import arrayFrom from '../../../Array/from';

describe('dom/insertAfter', function () {

	it('should insert an element after a specified element', function () {
		const c1 = createElement();
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		const newNode = createElement();
		insertAfter(newNode, c1);
		assert.deepEqual(arrayFrom(childNodes(parent)), [c1, newNode, c2]);
	});

	it('should insert an element before the first child', function () {
		const c1 = createElement();
		const c2 = createElement();
		const parent = createElement({
			c: [
				c1,
				c2
			]
		});
		const newNode = createElement();
		insertAfter(newNode, null, parent);
		assert.deepEqual(arrayFrom(childNodes(parent)), [newNode, c1, c2]);
	});

});
