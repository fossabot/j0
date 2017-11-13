function test(log10, name = 'Math.log10') {

	describe(name, function () {

		[
			[0.1, -1],
			[10, 1],
			[1, 0],
			[100, 2],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(log10(value), expected);
			});
		});

	});

}
export default test;
