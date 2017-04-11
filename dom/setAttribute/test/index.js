import createElement from '../../createElement';
import getAttribute from '../../getAttribute';
import setAttribute from '..';

describe('dom/setAttribute', function () {

	it('should set an attribute to an element', function () {
		const attributeName = 'a';
		const attributeValue = 'b';
		const element = createElement({});
		setAttribute(element, attributeName, attributeValue);
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

	it('should set a "data-" prefixed attribute to an element', function () {
		const attributeName = 'data-a';
		const attributeValue = 'b';
		const element = createElement({});
		setAttribute(element, attributeName, attributeValue);
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

});
