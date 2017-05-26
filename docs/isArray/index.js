(function(){
'use strict';

var x = Array;

var isArray = x.isArray;

describe('isArray', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isArray(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isArray(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isArray(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isArray(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isArray('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isArray({}), false);
	});

	it('should return true if the arguments are [[]]', function () {
		assert.equal(isArray([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isArray(function () {}), false);
	});
});
}())
