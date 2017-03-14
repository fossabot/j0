import assert from 'assert';
import concat from '..';

describe('concat', function () {

	it('should concat the arguments', function () {
		assert.deepEqual(concat(1, [2], [3, 4]), [1, 2, 3, 4]);
	});

});
