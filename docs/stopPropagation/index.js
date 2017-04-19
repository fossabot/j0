(function(){
'use strict';

function stopPropagation(event) {
	event.stopPropagation();
}

function isFunction(x) {
	return typeof x === 'function';
}

describe('stopPropagation', function () {

	it('should be a function', function () {
		assert.equal(isFunction(stopPropagation), true);
	});
});
}())
