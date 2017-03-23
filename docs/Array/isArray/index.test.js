(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var toString = Object.prototype.toString;

function isArray(x) {
	return toString.call(x) === '[object Array]';
}

const tests = [
	[[undefined], false],
	[[null], false],
	[[NaN], false],
	[[123], false],
	[['123'], false],
	[[{}], false],
	[[[]], true],
	[[function () {}], false]
];

for (const [args, expected] of tests) {
	it(`should return ${expected} if the arguments are ${args}`, function () {
		assert.equal(isArray(...args), expected);
	});
}

})));
