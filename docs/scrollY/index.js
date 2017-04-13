(function(){
'use strict';

function scrollY() {
	return window.pageYOffset;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});
}())
