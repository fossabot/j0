function test(SQRT2, name = 'Math.SQRT2') {

	describe(name, function () {

		it('should be approximately equal to 1.4142135623730951', function () {
			const expected = 1.4142135623730951;
			assert.approxEqual(SQRT2, expected);
		});

	});

}
export default test;
