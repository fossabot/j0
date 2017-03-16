import isArray from '..';

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
