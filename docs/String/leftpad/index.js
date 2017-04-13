(function(){
'use strict';

function leftpad(x) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

	var s = x.toString();
	var pad = length - s.length;
	return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
}

describe('String/leftpad', function () {

	it('should pad a string with 0', function () {
		assert.equal(leftpad(1), '01');
	});

	it('should pad a string with 0 [length=10]', function () {
		assert.equal(leftpad(1, 10), '0000000001');
	});

	it('should pad a string with * [length=10]', function () {
		assert.equal(leftpad(1, 10, '*+='), '*********1');
	});
});
}())
