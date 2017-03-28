import removeAttribute from '..';
import createElement from '../../createElement';
import getAttribute from '../../getAttribute';

describe('dom/removeAttribute', function () {

	it('should remove an arrtibute', function () {
		const attrName = 'abc';
		const value = '1';
		const element = createElement({
			a: [
				[attrName, value]
			]
		});
		assert.equal(getAttribute(element, attrName), value);
		removeAttribute(element, attrName);
		assert.equal(getAttribute(element, attrName), null);
	});

});
