function test(max, name = 'Math.max') {

	describe(name, function () {

		[
			[[3, 4], 4],
			[[1, 1, 1, 2], 2],
		]
		.forEach(([args, expected]) => {
			it(`${name}(${args.join(', ')}) → ${expected}`, function () {
				assert.approxEqual(max(...args), expected);
			});
		});

	});

}
export default test;
