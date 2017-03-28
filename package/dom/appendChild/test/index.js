import appendChild from '..';
import createElement from '../../createElement';

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

});
