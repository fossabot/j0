function test(floor, name = 'Math.floor') {

	describe(name, function () {

		[
			[-0.1, -1],
			[0.1, 0],
			[1.1, 1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(floor(value), expected);
			});
		});

	});

}
export default test;
