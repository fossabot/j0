import nextSibling from '..';
import createElement from '../../createElement';

describe('dom/nextSibling', function () {

	it('should return the previous element', function () {
		const c1 = createElement('a');
		const c2 = createElement();
		createElement({c: [c1, c2]});
		assert.equal(nextSibling(c1), c2);
	});

});
