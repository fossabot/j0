(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

function forEach(iterable, fn, thisArg = iterable) {
	let index = 0;
	for (const value of iterable) {
		if (fn.call(thisArg, value, index, iterable)) {
			return;
		}
		index += 1;
	}
}

it('should iterate an array', function () {
	const array = [1, 2, 3];
	forEach(array, function (value, index, arr) {
		assert.deepEqual([value, arr], [array[index], arr]);
	});
});

})));
