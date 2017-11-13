function test(asinh, name = 'Math.asinh') {

	describe(name, function () {

		for (let value = -5; value < 5; value += 1) {
			const expected = Math.log(value + Math.sqrt(value * value + 1));
			it(`${name}(${value.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(asinh(value), expected);
			});
		}

	});

}
export default test;
