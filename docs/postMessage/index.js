(function(){
'use strict';

var postMessage = window.postMessage;

function isFunction(x) {
	return typeof x === 'function';
}

describe('postMessage', function () {

	it('should be a function', function () {
		assert.equal(isFunction(postMessage), true);
	});
});
}())
