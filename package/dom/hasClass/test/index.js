import hasClass from '..';
import createElement from '../../createElement';

describe('dom/createElement', function () {

	it('should return true if the element has the class', function () {
		const className = 'abc';
		const element = createElement({
			a: [
				['class', className]
			]
		});
		assert.equal(hasClass(element, className), true);
	});

	it('should return false if the element does not have the class', function () {
		const className1 = 'abc';
		const className2 = 'def';
		const element = createElement({
			a: [
				['class', className1]
			]
		});
		assert.equal(hasClass(element, className2), false);
	});

});
