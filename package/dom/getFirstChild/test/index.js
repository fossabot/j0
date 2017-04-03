import getFirstChild from '..';
import createElement from '../../createElement';

describe('dom/getFirstChild', function () {

	it('should return the first child', function () {
		const c1 = createElement('');
		const parent = createElement({c: [c1, {}, {}]});
		assert.equal(getFirstChild(parent), c1);
	});

});
