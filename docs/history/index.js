(function(){
'use strict';

function isFunction(x) {
	return typeof x === 'function';
}

describe('history', function () {

	it('should have replaceState()', function () {
		assert.equal(isFunction(history.replaceState), true);
	});
});
}())
