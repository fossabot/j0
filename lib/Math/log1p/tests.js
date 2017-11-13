function test(log1p, name = 'Math.log1p') {

	describe(name, function () {

		[
			[Math.E - 1, 1],
			[0, 0],
			[Math.E * Math.E - 1, 2],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(log1p(value), expected);
			});
		});

	});

}
export default test;
