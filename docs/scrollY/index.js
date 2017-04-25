(function(){
'use strict';

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

	return element.scrollTop || element.pageYOffset;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});
}())
