var assert = require('assert');
var availWidth = require('../lib/availWidth');

describe('availWidth', function () {

	it('should return a number', function () {
		assert.equal(0 < availWidth(), true);
	});

});
