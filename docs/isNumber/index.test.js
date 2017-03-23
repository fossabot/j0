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

function isNumber(x) {
	return typeof x === 'number';
}

var isNumber$1 = function (...args) {
	return every(args, isNumber);
};

const tests = [
	[[undefined], false],
	[[null], false],
	[[NaN], true],
	[[123], true],
	[['123'], false],
	[[{}], false],
	[[[]], false],
	[[function () {}], false]
];

for (const [args, expected] of tests) {
	it(`should return ${expected} if the arguments are ${args}`, function () {
		assert.equal(isNumber$1(...args), expected);
	});
}

})));
