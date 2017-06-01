function test(LOG2E, name = 'Math.LOG2E') {

	describe(name, function () {

		it('should be approximately equal to 1.4426950408889633', function () {
			const expected = 1.4426950408889633;
			assert.approxEqual(LOG2E, expected);
		});

	});

}
export default test;
