(function(){
'use strict';

describe('Int16Array', function () {

	it('should create a new array', function () {
		assert.doesNotThrow(function () {
			return new Int16Array(1);
		});
	});
});
}())
