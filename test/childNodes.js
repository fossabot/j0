var assert = require('assert');
var createElement = require('../lib/createElement');
var childNodes = require('../lib/childNodes');
var removeElement = require('../lib/removeElement');

describe('childNodes', function () {

	it('should return a iterable of elements', function () {
		var a = createElement('Necromancer');
		var b = createElement({});
		var c = createElement({
			c: ['Nereus']
		});
		var element = createElement({
			c: [a, b, c]
		});
		assert.deepEqual(childNodes(element), [a, b, c]);
	});

	it('should return an array which is not a live HTMLCollection', function () {
		var a = createElement('Night Wisp');
		var b = createElement({});
		var c = createElement({
			c: ['Owlbear']
		});
		var element = createElement({
			c: [a, b, c]
		});
		var result = childNodes(element);
		removeElement(c);
		assert.deepEqual(result, [a, b, c]);
	});

});
