(function(){
'use strict';

var x = window;

function scrollX() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : x;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});
}())
