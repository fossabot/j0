function test(exp, name = 'Math.exp') {

	describe(name, function () {

		[
			[2, Math.E * Math.E],
			[-2, 1 / (Math.E * Math.E)],
			[0, 1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(exp(value), expected);
			});
		});

	});

}
export default test;
