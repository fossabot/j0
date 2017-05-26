(function(){
'use strict';

var x = window;

function innerWidth() {
	return x.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});
}())
