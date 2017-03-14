import clamp from '..';

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
