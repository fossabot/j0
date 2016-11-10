var assert = require('assert');
var TypeError = require('../lib/TypeError');

describe('TypeError', function () {

	it('should create a new TypeError', function () {
		assert.doesNotThrow(function () {
			var error = new TypeError('This is an error');
			error = null;
		});
	});

});
