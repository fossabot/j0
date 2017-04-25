(function(){
'use strict';

function scrollX() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

	return element.scrollLeft || element.pageXOffset;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});
}())
