import isFunction from '..';

describe('isFunction', function () {

	const tests = [
		[[undefined], false],
		[[null], false],
		[[NaN], false],
		[[123], false],
		[['123'], false],
		[[{}], false],
		[[[]], false],
		[[function () {}], true]
	];

	for (const [args, expected] of tests) {
		it(`should return ${expected} if the arguments are ${args}`, function () {
			assert.equal(isFunction(...args), expected);
		});
	}

});
