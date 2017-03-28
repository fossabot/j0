import isUndefined from '..';

describe('isUndefined', function () {

	it('should return true if the arguments are []', function () {
		assert.equal(isUndefined(), true);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isUndefined(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isUndefined(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isUndefined(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isUndefined('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isUndefined({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isUndefined([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isUndefined(function () {}), false);
	});

});
