(function(){
'use strict';

function innerWidth() {
	return window.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});
}())
