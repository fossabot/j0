function test(clz32, name = 'Math.clz32') {

	describe(name, function () {

		[
			[1, 31],
			[1000, 22],
			[0, 32],
			[3.5, 30],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.equal(clz32(value), expected);
			});
		});

	});

}
export default test;
