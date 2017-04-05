import history from '..';
import isFunction from '../../isFunction';

describe('history', function () {

	it('should have replaceState()', function () {
		assert.equal(isFunction(history.replaceState), true);
	});

});
