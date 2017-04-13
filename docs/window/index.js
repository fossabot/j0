(function(){
'use strict';

describe('window', function () {

	it('should have document', function () {
		assert.equal(window.document.defaultView, window);
	});
});
}())
