import assert from 'assert';
import isArray from '..';

describe('isArray', function () {
	it('should return true is the argument is an number', function () {
		assert.equal(isArray(0), false);
	});
	it('should return true is the argument is an array', function () {
		assert.equal(isArray([]), true);
	});
});
