(function(){
'use strict';

describe('Float64Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Float64Array(1);
		});
	});
});
}())
