import tagName from '..';
import createElement from '../../createElement';

describe('dom/tagName', function () {

	it('should return a tagName', function () {
		const element = createElement();
		const expected = 'div';
		assert.equal(tagName(element), expected);
	});

});
