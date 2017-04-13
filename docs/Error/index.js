(function(){
'use strict';

describe('Error', function () {

	it('should have message', function () {
		var message = 'abc';
		var error = new Error(message);
		assert.equal(error.message, message);
	});
});
}())
