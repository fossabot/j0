(function(){
'use strict';

function scrollX() {
	return window.pageXOffset;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});
}())
