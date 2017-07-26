function test(LN10, name = 'Math.LN10') {

	describe(name, function () {

		it('should be approximately equal to 2.302585092994046', function () {
			const expected = 2.302585092994046;
			assert.approxEqual(LN10, expected);
		});

	});

}
export default test;
