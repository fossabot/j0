(function(){
'use strict';

describe('Boolean', function () {

	it('should convert 0 to false', function () {
		assert.equal(Boolean(0), false);
	});

	it('should convert 100 to true', function () {
		assert.equal(Boolean(100), true);
	});
});
}())
