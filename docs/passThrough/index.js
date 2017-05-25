(function(){
'use strict';

function passThrough(x) {
	return x;
}

describe('passThrough', function () {

	it('should return the first argument', function () {
		var value = Date.now();
		assert.equal(passThrough(value), value);
	});
});
}())
