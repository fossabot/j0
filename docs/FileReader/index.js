(function(){
'use strict';

describe('FileReader', function () {

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			return new FileReader();
		});
	});
});
}())
