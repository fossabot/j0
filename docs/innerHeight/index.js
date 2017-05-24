(function(){
'use strict';

var window$1 = window.window;

function innerHeight() {
	return window$1.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});
}())
