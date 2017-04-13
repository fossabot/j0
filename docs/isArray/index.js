(function(){
'use strict';

var isArray$1 = Array.isArray;

describe('isArray', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isArray$1(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isArray$1(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isArray$1(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isArray$1(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isArray$1('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isArray$1({}), false);
	});

	it('should return true if the arguments are [[]]', function () {
		assert.equal(isArray$1([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isArray$1(function () {}), false);
	});
});
}())
