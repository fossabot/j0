(function(){
'use strict';

describe('DataView', function () {

	it('should create a new DataView', function () {
		assert.doesNotThrow(function () {
			return new DataView(new ArrayBuffer(0));
		});
	});
});
}())
