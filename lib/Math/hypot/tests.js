function test(hypot, name = 'Math.hypot') {

	describe(name, function () {

		[
			[[3, 4], 5],
			[[1, 1, 1, 1], 2],
		]
		.forEach(([args, expected]) => {
			it(`${name}(${args.join(', ')}) → ${expected}`, function () {
				assert.approxEqual(hypot(...args), expected);
			});
		});

	});

}
export default test;
