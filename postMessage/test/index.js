import postMessage from '..';
import isFunction from '../../isFunction';

describe('postMessage', function () {

	it('should be a function', function () {
		assert.equal(isFunction(postMessage), true);
	});

});
