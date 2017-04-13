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
}())
