function test(sin, name = 'Math.sin') {

	describe(name, function () {

		[
			[Math.PI / -2, -1],
			[Math.PI / -4, Math.sqrt(2) / -2],
			[0, 0],
			[Math.PI / 4, Math.sqrt(2) / 2],
			[Math.PI / 2, 1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(sin(value), expected);
			});
		});

	});

}
export default test;
