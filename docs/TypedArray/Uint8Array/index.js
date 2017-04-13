(function(){
'use strict';

describe('Uint8Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Uint8Array(1);
		});
	});
});
}())
