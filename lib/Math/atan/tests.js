function test(atan, name = 'Math.atan') {

	describe(name, function () {

		[
			[-Math.sqrt(3), Math.PI / -3],
			[-1, Math.PI / -4],
			[-1 / Math.sqrt(3), Math.PI / -6],
			[0, 0],
			[1 / Math.sqrt(3), Math.PI / 6],
			[1, Math.PI / 4],
			[Math.sqrt(3), Math.PI / 3],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(atan(value), expected);
			});
		});

	});

}
export default test;
