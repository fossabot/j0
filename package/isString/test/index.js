import isString from '..';

describe('isString', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isString(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isString(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isString(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isString(123), false);
	});

	it('should return true if the arguments are [\'abc\']', function () {
		assert.equal(isString('abc'), true);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isString({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isString([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isString(function () {}), false);
	});

});
