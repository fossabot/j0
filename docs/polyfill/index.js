(function(){
'use strict';

var window$1 = window.window;

describe('polyfill', function () {

	it('should add global', function () {
		assert.equal(window$1.global, window$1);
	});
});
}())
