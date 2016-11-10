var assert = require('assert');
var addCss = require('../lib/addCss');
var getElementById = require('../lib/getElementById');

describe('addCss', function () {

	it('should add a style sheet', function () {
		addCss('test.css', 'testCss');
		assert.equal(!!getElementById('testCss'), true);
	});

});
