function test(imul, name = 'Math.imul') {

	describe(name, function () {

		[
			[[2, 4], 8],
			[[-1, 8], -8],
			[[-2, -2], 4],
		]
		.forEach(([args, expected]) => {
			it(`${name}(${args.join(', ')}) → ${expected}`, function () {
				assert.approxEqual(imul(...args), expected);
			});
		});

	});

}
export default test;
