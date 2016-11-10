var assert = require('assert');
var document = require('../lib/document');
var Range = require('../lib/Range');

describe('Range', function () {

	it('should be the constructor of a range', function () {
		assert.equal(document.createRange() instanceof Range, true);
	});

});
