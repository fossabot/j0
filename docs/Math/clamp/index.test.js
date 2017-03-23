(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

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

const tests = [
	[[0, 1, 2], 1],
	[[0, 2], 2],
	[[2, 1, 3], 2],
	[[2, 3, 1], 2]
];

for (const [args, expected] of tests) {
	it(`should return ${expected} if the arguments are ${args}`, function () {
		assert.equal(clamp(...args), expected);
	});
}

})));
