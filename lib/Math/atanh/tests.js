function test(atanh, name = 'Math.atanh') {

	describe(name, function () {

		for (let value = -0.99; value < 1; value += 0.1) {
			const expected = Math.log((1 + value) / (1 - value)) / 2;
			it(`${name}(${value.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(atanh(value), expected);
			});
		}

	});

}
export default test;
