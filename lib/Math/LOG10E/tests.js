function test(LOG10E, name = 'Math.LOG10E') {

	describe(name, function () {

		it('should be approximately equal to 0.4342944819032518', function () {
			const expected = 0.4342944819032518;
			assert.approxEqual(LOG10E, expected);
		});

	});

}
export default test;
