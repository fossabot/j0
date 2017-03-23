(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function noopTrue() {
	return true;
}

describe('noop', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});

});

})));
