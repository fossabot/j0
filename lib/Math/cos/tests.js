function test(cos, name = 'Math.cos') {

	describe(name, function () {

		[
			[-Math.PI, -1],
			[-Math.PI / 2, 0],
			[0, 1],
			[Math.PI / 2, 0],
			[Math.PI, -1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(cos(value), expected);
			});
		});

	});

}
export default test;
