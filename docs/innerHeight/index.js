(function(){
'use strict';

/* global window */
var w = window;

function innerHeight() {
	return w.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});
}())
