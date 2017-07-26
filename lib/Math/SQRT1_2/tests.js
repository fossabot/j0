function test(SQRT1_2, name = 'Math.SQRT1_2') {

	describe(name, function () {

		it('should be approximately equal to 0.7071067811865476', function () {
			const expected = 0.7071067811865476;
			assert.approxEqual(SQRT1_2, expected);
		});

	});

}
export default test;
