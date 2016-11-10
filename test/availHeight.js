var assert = require('assert');
var availHeight = require('../lib/availHeight');

describe('availHeight', function () {

	it('should return a number', function () {
		assert.equal(0 < availHeight(), true);
	});

});
