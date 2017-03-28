import addClass from '..';
import createElement from '../../createElement';
import getAttribute from '../../getAttribute';

describe('dom/addClass', function () {

	it('should add classes', function () {
		const element = createElement({});
		const c1 = 'abc';
		const c2 = 'def';
		const c3 = 'ghi';
		const expected = 'abc def ghi';
		addClass(element, c1, c2, c3);
		assert.equal(getAttribute(element, 'class'), expected);
	});

	it('should keep uniqueness', function () {
		const element = createElement({});
		const c1 = 'abc';
		const c2 = 'def';
		const c3 = 'abc';
		const expected = 'abc def';
		addClass(element, c1, c2, c3);
		assert.equal(getAttribute(element, 'class'), expected);
	});

});
