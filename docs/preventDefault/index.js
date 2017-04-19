(function(){
'use strict';

function preventDefault(event) {
	event.preventDefault();
}

function isFunction(x) {
	return typeof x === 'function';
}

describe('preventDefault', function () {

	it('should be a function', function () {
		assert.equal(isFunction(preventDefault), true);
	});
});
}())
