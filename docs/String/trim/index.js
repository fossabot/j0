(function(){
'use strict';

function trim(string) {
	return string.trim();
}

describe('String/trim', function () {

	it('should trim spaces at beginning and ending', function () {
		assert.equal(trim('\r\n\tab\tc\n\r\t'), 'ab\tc');
	});
});
}())
