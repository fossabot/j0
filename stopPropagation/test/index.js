import stopPropagation from '..';
import isFunction from '../../isFunction';

describe('stopPropagation', function () {

	it('should be a function', function () {
		assert.equal(isFunction(stopPropagation), true);
	});

});
