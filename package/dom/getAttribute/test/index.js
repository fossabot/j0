import createElement from '../../createElement';
import getAttribute from '..';

describe('dom/getAttribute', function () {

	it('should get an attribute from an element', function () {
		const attributeName = 'a';
		const attributeValue = 'b';
		const element = createElement({
			a: [
				[attributeName, attributeValue]
			]
		});
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

	it('should get a "data-" prefixed attribute from an element', function () {
		const attributeName = 'data-a';
		const attributeValue = 'b';
		const element = createElement({
			a: [
				[attributeName, attributeValue]
			]
		});
		assert.equal(getAttribute(element, attributeName), attributeValue);
	});

});
