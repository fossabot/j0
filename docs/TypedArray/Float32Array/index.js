(function(){
'use strict';

describe('Float32Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Float32Array(1);
		});
	});
});
}())
