import setTextContent from '..';
import createElement from '../../createElement';

describe('dom/setTextContent', function () {

	it('should set a text', function () {
		const element = createElement();
		const text = 'abc';
		assert.equal(element.childNodes.length, 0);
		setTextContent(element, text);
		assert.equal(element.textContent, text);
	});

});
