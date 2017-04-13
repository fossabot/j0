(function(){
'use strict';

function isFunction(x) {
	return typeof x === 'function';
}

describe('document', function () {

	it('should have document.createElement', function () {
		assert.equal(isFunction(document.createElement), true);
	});
});
}())
