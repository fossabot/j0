import isFunction from '..';

describe('isFunction', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isFunction(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isFunction(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isFunction(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isFunction(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isFunction('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isFunction({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isFunction([]), false);
	});

	it('should return true if the arguments are [function () {}]', function () {
		assert.equal(isFunction(function () {}), true);
	});

});
