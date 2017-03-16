'use strict';

function noopTrue() {
	return true;
}

describe('noop', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});
});