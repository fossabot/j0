function test(expm1, name = 'Math.expm1') {

	describe(name, function () {

		[
			[2, (Math.E * Math.E) - 1],
			[-2, 1 / (Math.E * Math.E) - 1],
			[0, 0],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(expm1(value), expected);
			});
		});

	});

}
export default test;
