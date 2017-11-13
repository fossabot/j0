function test(tanh, name = 'Math.tanh') {

	describe(name, function () {

		for (let x = -5; x < 5; x += 1) {
			const expected = (Math.exp(2 * x) - 1) / (Math.exp(2 * x) + 1);
			it(`${name}(${x.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(tanh(x), expected);
			});
		}

	});

}
export default test;
