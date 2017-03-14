import assert from 'assert';
import Number from '..';

describe('Number', function () {
	describe('isNaN', function () {
		const {isNaN} = Number;
		it('should return true if the argument is not a number', function () {
			assert.equal(isNaN(1), false);
		});
	});
});
