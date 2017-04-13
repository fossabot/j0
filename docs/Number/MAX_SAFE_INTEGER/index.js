(function(){
'use strict';

var MAX_SAFE_INTEGER = 9007199254740991;

describe('Number/MAX_SAFE_INTEGER', function () {

	it('should evaluate to true', function () {
		assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
	});
});
}())
