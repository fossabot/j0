import preventDefault from '..';
import isFunction from '../../isFunction';

describe('preventDefault', function () {

	it('should be a function', function () {
		assert.equal(isFunction(preventDefault), true);
	});

});
