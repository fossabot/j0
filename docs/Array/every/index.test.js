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

it('should return true if items are truthy', function () {
	assert.equal(every([-1, 1, [], {}]), true);
});

it('should return false if the array have falthy value', function () {
	assert.equal(every([-1, 1, [], {}, 0]), false);
});

it('should use given functions', function () {
	function fn(x) {
		return -3 < x && x < 3;
	}
	assert.equal(every([-2, -1, 0, 1, 2], fn), true);
});

it('should use given functions', function () {
	function fn(x) {
		return -3 < x && x < 3;
	}
	assert.equal(every([-2, -1, 0, 1, 2], fn), true);
});

it('should stop iteration at failure', function () {
	const consumed = [];
	function fn(x) {
		consumed[consumed.length] = x;
		return x < 3;
	}
	assert.equal(every([0, 1, 2, 3, 4, 5], fn), false);
	assert.deepEqual(consumed, [0, 1, 2, 3]);
});

})));
