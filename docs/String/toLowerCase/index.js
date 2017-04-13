(function(){
'use strict';

function toLowerCase(string) {
	return ('' + string).toLowerCase();
}

describe('toLowerCase', function () {

	it('should convert cases', function () {
		assert.equal(toLowerCase('ABc'), 'abc');
	});
});
}())
