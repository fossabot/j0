function test(sign, name = 'Math.sign') {

	describe(name, function () {

		[
			[-0.6, -1],
			[-0.2, -1],
			[0, 0],
			[0.2, 1],
			[0.6, 1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(sign(value), expected);
			});
		});

	});

}
export default test;
