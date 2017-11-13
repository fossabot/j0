function test(asin, name = 'Math.asin') {

	describe(name, function () {

		[
			[-1, Math.PI / -2],
			[-0.5, Math.PI / -6],
			[0, 0],
			[0.5, Math.PI / 6],
			[1, Math.PI / 2],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(asin(value), expected);
			});
		});

	});

}
export default test;
