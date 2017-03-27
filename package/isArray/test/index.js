import isArray from '..';

describe('isArray', function () {

	it('should return false if the argument is a number', function () {
		assert.equal(isArray(0), false);
	});

	it('should return true if the argument is an array', function () {
		assert.equal(isArray([]), true);
	});

});
