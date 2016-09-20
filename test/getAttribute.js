describe('getAttribute', function () {

	var assert = require('assert');
	var getAttribute = require('../lib/getAttribute');
	var createElement = require('../lib/createElement');

	it('should get an attribute', function () {
		assert.equal(getAttribute(createElement({
			a: [
				['class', 'Goopi']
			]
		}), 'class'), 'Goopi');
	});

	it('should get a data- prefixed attribute', function () {
		assert.equal(getAttribute(createElement({
			a: [
				['data-class', 'Gorgon']
			]
		}), 'data-class'), 'Gorgon');
	});

});
