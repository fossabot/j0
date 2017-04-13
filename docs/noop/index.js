(function(){
'use strict';

function noopTrue() {
	return true;
}

describe('noop/true', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});
});

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
