(function(){
'use strict';

/* global window */
var w = window;

function innerWidth() {
	return w.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});
}())
