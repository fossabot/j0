(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function noop(x) {
	return x;
}

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop();
		});
	});

	it('should return the first argument', function () {
		const data = new Date();
		assert.equal(noop(data), data);
	});

});

})));
