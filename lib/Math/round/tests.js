function test(round, name = 'Math.round') {

	describe(name, function () {

		[
			[-0.6, -1],
			[-0.2, 0],
			[0.2, 0],
			[0.6, 1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(round(value), expected);
			});
		});

	});

}
export default test;
