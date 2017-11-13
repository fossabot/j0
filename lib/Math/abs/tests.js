function test(abs, name = 'Math.abs') {

	describe(name, function () {

		[
			[-Math.PI, Math.PI],
			[-0, 0],
			[0.1, 0.1],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.equal(abs(value), expected);
			});
		});

	});

}
export default test;
