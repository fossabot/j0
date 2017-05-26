(function(){
'use strict';

function noop(x) {
	return x;
}

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop();
		});
	});

	it('should return the first argument', function () {
		var data = new Date();
		assert.equal(noop(data), data);
	});
});
}())
