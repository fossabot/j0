function test(LN2, name = 'Math.LN2') {

	describe(name, function () {

		it('should be approximately equal to 0.6931471805599453', function () {
			const expected = 0.6931471805599453;
			assert.approxEqual(LN2, expected);
		});

	});

}
export default test;
