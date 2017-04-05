import prependChild from '..';
import createElement from '../../createElement';

describe('dom/prependChild', function () {

	it('should append an element', function () {
		const parent = createElement();
		const child = createElement();
		prependChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

	it('should append a text element', function () {
		const parent = createElement();
		const child = createElement('text');
		prependChild(parent, child);
		assert.equal(child.parentNode, parent);
	});

});
