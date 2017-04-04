import getComputedStyle from '..';
import document from '../../document';
import appendChild from '../../dom/appendChild';
import createElement from '../../dom/createElement';

describe('getComputedStyle', function () {

	it('should get color in rgb', function () {
		const element = createElement({
			a: [
				['style', 'color:#ff0099']
			]
		});
		appendChild(document.body, element);
		const style = getComputedStyle(element);
		assert.equal(style.color, 'rgb(255, 0, 153)');
	});

});
