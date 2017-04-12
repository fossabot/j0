import removeClass from '..';
import createElement from '../../createElement';
import hasClass from '../../hasClass';

describe('dom/removeClass', function () {

	it('should add a class', function () {
		const className = 'abc';
		const element = createElement({
			a: [
				['class', className]
			]
		});
		assert.equal(hasClass(element, className), true);
		removeClass(element, className);
		assert.equal(hasClass(element, className), false);
	});

});
