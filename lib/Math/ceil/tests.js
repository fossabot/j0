function test(ceil, name = 'Math.ceil') {

	describe(name, function () {

		[
			[-1.1, -1],
			[-0.1, 0],
			[0, 0],
			[0.1, 1],
			[1.1, 2],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(ceil(value), expected);
			});
		});

	});

}
export default test;
