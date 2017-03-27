import appendChild from '..';
import createElement from '../../createElement';
import arrayFrom from '../../../Array/from';

describe('dom/appendChild', function () {

	it('should append an element', function () {
		const parent = createElement();
		const child = createElement();
		appendChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

	it('should append a text element', function () {
		const parent = createElement();
		const child = createElement('text');
		appendChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

	it('should append multiple elements', function () {
		const parent = createElement();
		const children = [
			{},
			'text',
			'text2'
		].map(createElement);
		appendChild(parent, ...children);
		assert.deepEqual(arrayFrom(parent.childNodes), children);
	});

});
