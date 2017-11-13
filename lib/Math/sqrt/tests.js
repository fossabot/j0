function test(sqrt, name = 'Math.sqrt') {

	describe(name, function () {

		[
			[Math.PI * Math.PI, Math.PI],
			[9, 3],
			[0.01, 0.1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(sqrt(value), expected);
			});
		});

	});

}
export default test;
