(function(){
'use strict';

describe('navigator', function () {

	it('should have userAgent', function () {
		assert.equal(0 < navigator.userAgent.length, true);
	});
});
}())
