(function(){
'use strict';

/* global window */
var w = window;

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(w.global, w);
	});
});
}())
