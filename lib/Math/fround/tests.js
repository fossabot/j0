function test(fround, name = 'Math.fround') {

	describe(name, function () {

		[
			[1.337, 1.3370000123977661],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(fround(value), expected);
			});
		});

	});

}
export default test;
