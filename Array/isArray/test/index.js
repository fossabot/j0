import isArray from '..';

describe('Array/isArray', function () {

	it('should return false if the argument is undefined', function () {
		assert.equal(isArray(), false);
	});

	it('should return false if the argument is null', function () {
		assert.equal(isArray(null), false);
	});

	it('should return false if the argument is NaN', function () {
		assert.equal(isArray(NaN), false);
	});

	it('should return false if the argument is a number', function () {
		assert.equal(isArray(123), false);
	});

	it('should return false if the argument is a string', function () {
		assert.equal(isArray('xyz'), false);
	});

	it('should return false if the argument is an object', function () {
		assert.equal(isArray({}), false);
	});

	it('should return true if the argument is an array', function () {
		assert.equal(isArray([]), true);
	});

	it('should return false if the argument is a function', function () {
		assert.equal(isArray(function () {}), false);
	});

});