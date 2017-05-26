(function(){
'use strict';

var x = window;

function innerHeight() {
	return x.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});
}())
