var assert = require('assert');
var addClass = require('../lib/addClass');
var createElement = require('../lib/createElement');
var getAttribute = require('../lib/getAttribute');

var S_CLASS = 'class';

describe('addClass', function () {

	it('should add a class', function () {
		var element = createElement({});
		addClass(element, 'Gema');
		assert.equal(getAttribute(element, S_CLASS), 'Gema');
	});

	it('should add a classes with arguments', function () {
		var element = createElement({});
		addClass(element, 'Gema', 'Ghost');
		assert.deepEqual(getAttribute(element, S_CLASS).split(/\s+/), ['Gema', 'Ghost']);
	});

	it('should add classes as SSV', function () {
		var element = createElement({});
		addClass(element, 'Gema Ghost');
		assert.deepEqual(getAttribute(element, S_CLASS).split(/\s+/), ['Gema', 'Ghost']);
	});

});
