(function(){
'use strict';

function getScrollY(element) {
	return element ? element.scrollTop : window.pageYOffset;
}

describe('getScrollY', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= getScrollY(), true);
	});
});
}())
