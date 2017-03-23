import createElement from '../../createElement';
import getAttribute from '..';

it('should get an attribute from element', function () {
	const attributeName = 'a';
	const attributeValue = 'b';
	const element = createElement({
		a: [
			[attributeName, attributeValue]
		]
	});
	assert.equal(getAttribute(element, attributeName), attributeValue);
});
