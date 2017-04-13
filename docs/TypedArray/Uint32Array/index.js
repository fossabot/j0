(function(){
'use strict';

describe('Uint32Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Uint32Array(1);
		});
	});
});
}())
