function test(acos, name = 'Math.acos') {

	describe(name, function () {

		[
			[-1, Math.PI],
			[-0.5, Math.PI * 2 / 3],
			[0, Math.PI / 2],
			[0.5, Math.PI / 3],
			[1, 0],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(acos(value), expected);
			});
		});

	});

}
export default test;
