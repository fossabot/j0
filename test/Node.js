describe('Node', function () {

	var assert = require('assert');
	var Node = require('../lib/Node');
	var document = require('../lib/document');

	it('should be the constructor of an element node', function () {
		assert.equal(document.createElement('div') instanceof Node, true);
	});

	it('should be the constructor of a text node', function () {
		assert.equal(document.createTextNode('Special Gauge') instanceof Node, true);
	});

});
