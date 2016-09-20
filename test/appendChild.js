describe('appendChild', function () {

	var assert = require('assert');
	var createElement = require('../lib/createElement');
	var appendChild = require('../lib/appendChild');

	it('should append an element', function () {
		var parentElement = createElement({});
		var childElement = createElement('Gold Batboon');
		assert.deepEqual([
			appendChild(parentElement, childElement),
			parentElement.firstChild
		], [
			childElement,
			childElement
		]);
	});

});
