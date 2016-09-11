describe('Array', function () {

	var assert = require('assert');
	var Array = require('../lib/Array');

	it('should be the constructor of an array', function () {
		assert.equal([] instanceof Array, true);
	});

});
