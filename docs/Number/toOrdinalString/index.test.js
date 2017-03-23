(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

const suffixes = ['th', 'st', 'nd', 'rd'];
const TEN = 10;
const HUNDRED = 100;

function getOrdinalSuffix(n) {
	let type = n % TEN;
	const r2 = n % HUNDRED;
	if ((10 < r2 && r2 < 20) || 3 < type) {
		type = 0;
	}
	return suffixes[type];
}

function toOrdinalString(n, radix) {
	const i = parseInt(n, radix);
	return `${i}${getOrdinalSuffix(i)}`;
}

const tests = [
	[0, '0th'],
	[1, '1st'],
	[2, '2nd'],
	[3, '3rd'],
	[4, '4th'],
	[5, '5th'],
	[6, '6th'],
	[7, '7th'],
	[8, '8th'],
	[9, '9th'],
	[10, '10th'],
	[11, '11th'],
	[12, '12th'],
	[13, '13th'],
	[14, '14th'],
	[15, '15th'],
	[16, '16th'],
	[17, '17th'],
	[18, '18th'],
	[19, '19th'],
	[20, '20th'],
	[121, '121st'],
	[122, '122nd'],
	[123, '123rd'],
	[124, '124th']
];

describe('toOrdinalString', function () {

	for (const [n, expected] of tests) {
		it(`should return ${expected} if the argument is ${n}`, function () {
			assert.equal(toOrdinalString(n), expected);
		});
	}

});

})));
