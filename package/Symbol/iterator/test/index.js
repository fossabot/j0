import iteratorKey from '..';
import isUndefined from '../../../isUndefined';

describe('Symbol/iterator', function () {

	it('should not be undefined', function () {
		assert.equal(isUndefined(iteratorKey), false);
	});

});
