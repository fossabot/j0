function test(pow, name = 'Math.pow') {

	describe(name, function () {

		[
			[[1, 10], 1],
			[[2, 10], 1024],
		]
		.forEach(([args, expected]) => {
			it(`${name}(${args.join(', ')}) → ${expected}`, function () {
				assert.approxEqual(pow(...args), expected);
			});
		});

	});

}
export default test;
