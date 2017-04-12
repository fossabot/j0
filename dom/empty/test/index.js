import empty from '..';
import createElement from '../../createElement';

describe('dom/empty', function () {

	it('should clear an element', function () {
		const element = createElement({c: ['abc']});
		assert.equal(element.childNodes.length, 1);
		empty(element);
		assert.equal(element.childNodes.length, 0);
	});

});
