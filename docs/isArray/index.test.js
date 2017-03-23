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

var toString = Object.prototype.toString;

function isArray$1(x) {
	return toString.call(x) === '[object Array]';
}

var isArray = function (...args) {
	return every(args, isArray$1);
};

const tests = [
	[[[], 0, 1], false],
	[[[], [], []], true]
];

describe('isArray', function () {

	for (const [args, expected] of tests) {
		it(`should return ${expected} if args is ${args}`, function () {
			assert.equal(isArray(0), false);
		});
	}

});

})));
