function test(cbrt, name = 'Math.cbrt') {

	describe(name, function () {

		for (let x = -5; x < 5; x += 0.5) {
			const expected = Math.sign(x) * Math.pow(Math.abs(x), 1 / 3);
			it(`${name}(${x.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(cbrt(x), expected);
			});
		}

	});

}
export default test;
