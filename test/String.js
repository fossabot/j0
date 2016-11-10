var assert = require('assert');
var String = require('../lib/String');

describe('String', function () {

	it('should create a string from character codes', function () {
		assert.equal(String.fromCharCode(65, 66, 67, 68), 'ABCD');
	});

});
