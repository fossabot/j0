function test(min, name = 'Math.min') {

	describe(name, function () {

		[
			[[3, 4], 3],
			[[1, 1, 1, 2], 1],
		]
		.forEach(([args, expected]) => {
			it(`${name}(${args.join(', ')}) → ${expected}`, function () {
				assert.approxEqual(min(...args), expected);
			});
		});

	});

}
export default test;
