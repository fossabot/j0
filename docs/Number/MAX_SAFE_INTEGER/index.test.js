'use strict';

var MAX_SAFE_INTEGER = 9007199254740991;

it('should evaluate to true', function () {
	assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
});