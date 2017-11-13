function test(trunc, name = 'Math.trunc') {

	describe(name, function () {

		[
			[13.37, 13],
			[42.84, 42],
			[0.123, 0],
			[-0.123, -0],
			['-1.123', -1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(trunc(value), expected);
			});
		});

	});

}
export default test;
