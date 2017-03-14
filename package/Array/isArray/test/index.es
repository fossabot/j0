import isArray from '..';

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
