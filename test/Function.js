describe('Function', function () {

	var assert = require('assert');
	var Function = require('../lib/Function');

	it('should be the constructor of a function', function () {
		assert.equal(function () {} instanceof Function, true);
	});

});
