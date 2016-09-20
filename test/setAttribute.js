describe('setAttribute', function () {

	var assert = require('assert');
	var createElement = require('../lib/createElement');
	var setAttribute = require('../lib/setAttribute');
	var getAttribute = require('../lib/getAttribute');

	it('should set an attribute', function () {
		var element = createElement({});
		setAttribute(element, 'class', 'Graboopi');
		assert.equal(getAttribute(element, 'class'), 'Graboopi');
	});

	it('should set a data- prefixed attribute', function () {
		var element = createElement({});
		setAttribute(element, 'data-class', 'Green Dragon');
		assert.equal(getAttribute(element, 'data-class'), 'Green Dragon');
	});

});
