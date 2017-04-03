import firstChild from '..';
import createElement from '../../createElement';

describe('dom/firstChild', function () {

	it('should return the first child', function () {
		const c1 = createElement('');
		const parent = createElement({c: [c1, {}, {}]});
		assert.equal(firstChild(parent), c1);
	});

});
