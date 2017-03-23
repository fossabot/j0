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

function isUndefined(x) {
	return typeof x === 'undefined';
}

var isUndefined$1 = function (...args) {
	return every(args, isUndefined);
};

function isFunction(x) {
	return typeof x === 'function';
}

var isFunction$1 = function (...args) {
	return every(args, isFunction);
};

function clamp(x, L = -Infinity, H = Infinity) {
	if (H < L) {
		[L, H] = [H, L];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

var MAX_SAFE_INTEGER = 9007199254740991;

function toLength(value) {
	const len = parseInt(value, 10);
	return clamp(len, 0, MAX_SAFE_INTEGER);
}

function from(arrayLike, mapFn, thisArg) {
	if (arrayLike === null) {
		throw new TypeError('Array.from: requires an array-like object - not null or undefined');
	}
	if (!(isUndefined$1(mapFn) || isFunction$1(mapFn))) {
		throw new TypeError('Array.from: when provided, the second argument must be a function');
	}
	const C = this;
	const items = Object(arrayLike);
	const length = toLength(items.length);
	const A = isFunction$1(C) ? Object(new C(length)) : [];
	for (let k = 0; k < length; k += 1) {
		const value = items[k];
		A[k] = mapFn ? mapFn.call(thisArg, value, k) : value;
	}
	A.length = length;
	return A;
}

var toString = Object.prototype.toString;

function isArray(x) {
	return toString.call(x) === '[object Array]';
}

function fromArguments() {
	return from(arguments);
}

it('should create a new instance of array from arguments', function () {
	const result = fromArguments(1, 2, 3);
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});


it('should create a new instance of array from an array-like object', function () {
	const result = from({0: 1, 1: 2, 2: 3, length: 3});
	assert.equal(isArray(result), true);
	assert.deepEqual(result, [1, 2, 3]);
});

})));
