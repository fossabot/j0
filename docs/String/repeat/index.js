(function(){
'use strict';

function repeat(s, length) {
	return s.repeat(length);
}

describe('String/repeat', function () {

	it('should repeat the string for specified times', function () {
		var src = '3';
		var count = 10;
		var expected = '3333333333';
		assert.equal(repeat(src, count), expected);
	});
});
}())
