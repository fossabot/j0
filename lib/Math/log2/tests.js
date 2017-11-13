function test(log2, name = 'Math.log2') {

	describe(name, function () {

		[
			[1 / 2, -1],
			[1, 0],
			[2, 1],
			[4, 2],
			[8, 3],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(log2(value), expected);
			});
		});

	});

}
export default test;
