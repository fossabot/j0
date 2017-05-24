(function(){
'use strict';

var window$1 = window.window;

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window$1;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});
}())
