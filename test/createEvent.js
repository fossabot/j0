describe('createEvent', function () {

	var assert = require('assert');
	var createEvent = require('../lib/createEvent');
	var isFunction = require('../lib/isFunction');

	it('should be a function', function () {
		assert.equal(isFunction(createEvent), true);
	});
});
