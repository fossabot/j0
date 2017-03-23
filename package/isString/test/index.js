import isString from '..';

const tests = [
	[[undefined], false],
	[[null], false],
	[[NaN], false],
	[[123], false],
	[['123'], true],
	[[{}], false],
	[[[]], false],
	[[function () {}], false]
];

for (const [args, expected] of tests) {
	it(`should return ${expected} if the arguments are ${args}`, function () {
		assert.equal(isString(...args), expected);
	});
}
