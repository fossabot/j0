import getBoundingClientRect from '..';
import appendChild from '../../appendChild';
import removeChild from '../../removeChild';
import setStyle from '../../setStyle';
import createElement from '../../createElement';

describe('dom/getBoundingClientRect', function () {

	let element;

	beforeEach(function () {
		element = createElement();
		appendChild(document.body, element);
	});

	afterEach(function () {
		removeChild(element, document.body);
	});

	it('should return a rect', function () {
		const expected = {
			left: 50,
			top: 60,
			width: 70,
			height: 80
		};
		setStyle(element, 'position', 'fixed');
		setStyle(element, 'left', `${expected.left}px`);
		setStyle(element, 'top', `${expected.top}px`);
		setStyle(element, 'width', `${expected.width}px`);
		setStyle(element, 'height', `${expected.height}px`);
		setStyle(element, 'margin', 0);
		appendChild(document.body, element);
		const rect = getBoundingClientRect(element);
		assert.deepEqual({
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		}, expected);
	});

});
