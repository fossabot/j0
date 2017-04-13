(function(){
'use strict';

var iteratorKey = Symbol.iterator;

function isUndefined(x) {
	return typeof x === 'undefined';
}

describe('Symbol/iterator', function () {

	it('should not be undefined', function () {
		assert.equal(isUndefined(iteratorKey), false);
	});
});
}())
