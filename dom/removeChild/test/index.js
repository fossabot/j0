import removeChild from '..';
import createElement from '../../createElement';

describe('dom/removeChild', function () {

	it('should remove a child', function () {
		const child = createElement();
		const parent = createElement({c: [child]});
		assert.equal(child.parentNode, parent);
		removeChild(child);
		assert.equal(child.parentNode, null);
	});

});
