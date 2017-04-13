(function(){
'use strict';

var dec = 10;
var hex = 16;

describe('parseInt', function () {

	it('should convert a dec to an integer', function () {
		var value = '100';
		var expected = 100;
		assert.equal(parseInt(value, dec), expected);
	});

	it('should convert a hex to an integer', function () {
		var value = '100';
		var expected = 256;
		assert.equal(parseInt(value, hex), expected);
	});
});
}())
