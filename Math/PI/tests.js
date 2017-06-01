function test(PI, name = 'Math.PI') {

	describe(name, function () {

		it('should be approximately equal to 3.141592653589793', function () {
			const expected = 3.141592653589793;
			assert.approxEqual(PI, expected);
		});

	});

}
export default test;
