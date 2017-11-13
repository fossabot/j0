function test(log, name = 'Math.log') {

	describe(name, function () {

		[
			[Math.E, 1],
			[1, 0],
			[Math.E * Math.E, 2],
		]
		.forEach(([value, expected]) => {
			it(`${name}(${value}) → ${expected}`, function () {
				assert.approxEqual(log(value), expected);
			});
		});

	});

}
export default test;
