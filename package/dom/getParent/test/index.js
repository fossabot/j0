import getParent from '..';
import createElement from '../../createElement';

describe('dom/getParent', function () {

	it('should return a parent of a node', function () {
		const child = createElement('');
		const parent = createElement({c: [child]});
		assert.equal(getParent(child), parent);
	});

});
