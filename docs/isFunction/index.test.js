(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function noop(x) {
	return x;
}

function every(iterable, fn = noop, thisArg = iterable) {
	let index = 0;
	for (const value of iterable) {
		if (!fn.call(thisArg, value, index, iterable)) {
			return false;
		}
		index += 1;
	}
	return true;
}

function isFunction(x) {
	return typeof x === 'function';
}

var isFunction$1 = function (...args) {
	return every(args, isFunction);
};

const tests = [
	[[undefined], false],
	[[null], false],
	[[NaN], false],
	[[123], false],
	[['123'], false],
	[[{}], false],
	[[[]], false],
	[[function () {}], true]
];

for (const [args, expected] of tests) {
	it(`should return ${expected} if the arguments are ${args}`, function () {
		assert.equal(isFunction$1(...args), expected);
	});
}

})));
