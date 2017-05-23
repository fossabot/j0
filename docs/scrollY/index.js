(function(){
'use strict';

/* global window */
var w = window;

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : w;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});
}())
