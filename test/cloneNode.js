var assert = require('assert');
var createElement = require('../lib/createElement');
var getTextContent = require('../lib/getTextContent');
var cloneNode = require('../lib/cloneNode');

describe('cloneNode', function () {

	it('should clone an element shallowly', function () {
		var element = createElement({
			c: ['Pheonix']
		});
		var clonedElement = cloneNode(element);
		assert.equal(element === clonedElement, false);
		assert.deepEqual(element, clonedElement);
		assert.equal(getTextContent(element) === getTextContent(clonedElement), false);
	});

	it('should clone an element deeply', function () {
		var element = createElement({
			c: ['Pheonix']
		});
		var clonedElement = cloneNode(element, true);
		assert.equal(element === clonedElement, false);
		assert.deepEqual(element, clonedElement);
		assert.equal(getTextContent(element) === getTextContent(clonedElement), true);
	});

});
