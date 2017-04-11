import nextSibling from '..';
import createElement from '../../../dom/createElement';

describe('Node/nextSibling', function () {

	it('should return the next node', function () {
		const n1 = createElement({});
		const n2 = createElement('');
		createElement({c: [n1, n2]});
		assert.equal(nextSibling(n1), n2);
	});

	it('should return null if there is nothing', function () {
		const n1 = createElement({});
		createElement({c: [n1]});
		assert.equal(nextSibling(n1), null);
	});

});
