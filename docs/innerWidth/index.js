(function(){
'use strict';

var window$1 = window.window;

function innerWidth() {
	return window$1.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});
}())
