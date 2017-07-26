import isObject from '..';

describe('isObject', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isObject(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isObject(null), false);
	});

	it('should return true if the arguments are [NaN]', function () {
		assert.equal(isObject(NaN), false);
	});

	it('should return true if the arguments are [123]', function () {
		assert.equal(isObject(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isObject('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isObject({}), true);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isObject([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isObject(function () {}), true);
	});

});
