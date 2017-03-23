(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var MAX_SAFE_INTEGER = 9007199254740991;

it('should evaluate to true', function () {
	assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
});

})));
