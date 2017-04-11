import toggleClass from '..';
import createElement from '../../createElement';
import hasClass from '../../hasClass';

describe('dom/toggleClass', function () {

	it('should add a class', function () {
		const element = createElement({});
		const className = 'abc';
		toggleClass(element, className);
		assert.equal(hasClass(element, className), true);
	});

	it('should remove a class', function () {
		const element = createElement({});
		const className = 'abc';
		toggleClass(element, className);
		assert.equal(hasClass(element, className), true);
		toggleClass(element, className);
		assert.equal(hasClass(element, className), false);
	});

});
