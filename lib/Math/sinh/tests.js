function test(sinh, name = 'Math.sinh') {

	describe(name, function () {

		for (let x = -5; x < 5; x += 1) {
			const expected = (Math.exp(x) - 1 / Math.exp(x)) / 2;
			it(`${name}(${x.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(sinh(x), expected);
			});
		}

	});

}
export default test;
