function test(E, name = 'Math.E') {

	describe(name, function () {

		it('should be approximately equal to 2.718281828459045', function () {
			const expected = 2.718281828459045;
			assert.approxEqual(E, expected);
		});

	});

}
export default test;
