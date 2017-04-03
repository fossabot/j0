import previousSibling from '..';
import createElement from '../../createElement';

describe('dom/previousSibling', function () {

	it('should return the previous element', function () {
		const c1 = createElement('a');
		const c2 = createElement();
		createElement({c: [c1, c2]});
		assert.equal(previousSibling(c2), c1);
	});

});
