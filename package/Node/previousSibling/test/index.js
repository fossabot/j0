import previousSibling from '..';
import createElement from '../../../dom/createElement';

describe('Node/previousSibling', function () {

	it('should return the previous node', function () {
		const n1 = createElement({});
		const n2 = createElement('');
		createElement({c: [n1, n2]});
		assert.equal(previousSibling(n2), n1);
	});

	it('should return null if there is nothing', function () {
		const n1 = createElement({});
		createElement({c: [n1]});
		assert.equal(previousSibling(n1), null);
	});

});
