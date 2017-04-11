import addClass from '..';
import createElement from '../../createElement';
import hasClass from '../../hasClass';

describe('dom/addClass', function () {

	it('should add a class', function () {
		const element = createElement({});
		const className = 'abc';
		assert.equal(hasClass(element, className), false);
		addClass(element, className);
		assert.equal(hasClass(element, className), true);
	});

});
