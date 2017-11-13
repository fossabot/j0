function test(tan, name = 'Math.tan') {

	describe(name, function () {

		[
			[Math.PI / -3, -Math.sqrt(3)],
			[Math.PI / -4, -1],
			[0, 0],
			[Math.PI / 4, 1],
			[Math.PI / 3, Math.sqrt(3)],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(tan(value), expected);
			});
		});

	});

}
export default test;
