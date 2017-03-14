import assert from 'assert';
import isNumber from '..';

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
		assert.equal(isNumber(...args), expected);
	});
}
