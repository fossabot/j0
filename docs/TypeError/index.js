(function(){
'use strict';

describe('TypeError', function () {

	it('should have message', function () {
		var message = 'abc';
		var error = new TypeError(message);
		assert.equal(error.message, message);
	});
});
}())
