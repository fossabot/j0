import parentNode from '..';
import createElement from '../../createElement';

describe('dom/parentNode', function () {

	it('should return a parent of a node', function () {
		const child = createElement('');
		const parent = createElement({c: [child]});
		assert.equal(parentNode(child), parent);
	});

});
