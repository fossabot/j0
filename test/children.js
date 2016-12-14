var assert = require('assert');
var createElement = require('../lib/createElement');
var children = require('../lib/children');
var removeElement = require('../lib/removeElement');

describe('children', function () {

	it('should return a iterable of elements', function () {
		var a = createElement('Octoleech');
		var b = createElement({});
		var c = createElement({
			c: ['Ogre Head']
		});
		var element = createElement({
			c: [a, b, c]
		});
		assert.deepEqual(children(element), [b, c]);
	});

	it('should return an array which is not a live HTMLCollection', function () {
		var a = createElement('Mystery Doll');
		var b = createElement({});
		var c = createElement({
			c: ['Necrodain']
		});
		var element = createElement({
			c: [a, b, c]
		});
		var result = children(element);
		removeElement(c);
		assert.deepEqual(result, [b, c]);
	});

});
