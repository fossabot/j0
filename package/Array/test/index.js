import assert from 'assert';
import Array from '..';

describe('Array', function () {

	it('should be a constructor of an array', function () {
		assert.equal([] instanceof Array, true);
	});

	it('should create a new array', function () {
		const length = 10;
		const array = new Array(length);
		assert.deepEqual(array, []);
		assert.equal(array.length, length);
	});

});
