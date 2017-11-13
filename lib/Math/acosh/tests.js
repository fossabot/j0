function test(acosh, name = 'Math.acosh') {

	describe(name, function () {

		for (let value = 1; value < 9; value += 0.4) {
			const expected = Math.log(value + Math.sqrt(value * value - 1));
			it(`${name}(${value.toFixed(1)}) → ${expected}`, async function () {
				assert.approxEqual(acosh(value), expected);
			});
		}

	});

}
export default test;
