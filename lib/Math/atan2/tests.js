function test(atan2, name = 'Math.atan2') {

	describe(name, function () {

		[
			[-Math.sqrt(3), 1, Math.PI / -3],
			[-1, 1, Math.PI / -4],
			[-1 / Math.sqrt(3), 1, Math.PI / -6],
			[0, 1, 0],
			[1 / Math.sqrt(3), 1, Math.PI / 6],
			[1, 1, Math.PI / 4],
			[Math.sqrt(3), 1, Math.PI / 3],
			[-Math.sqrt(3), -1, Math.PI * 2 / -3],
			[-1, -1, Math.PI * -3 / 4],
			[-1 / Math.sqrt(3), -1, Math.PI * -5 / 6],
			[0, -1, Math.PI],
			[1 / Math.sqrt(3), -1, Math.PI * 5/ 6],
			[1, -1, Math.PI * 3 / 4],
			[Math.sqrt(3), -1, Math.PI * 2 / 3],
		]
		.forEach(([x, y, expected]) => {
			it(`${name}(${x}, ${y}) → ${expected}`, function () {
				assert.approxEqual(atan2(x, y), expected);
			});
		});

	});

}
export default test;
