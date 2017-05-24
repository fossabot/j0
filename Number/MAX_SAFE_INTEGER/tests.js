function test(MAX_SAFE_INTEGER, name = 'Number.MAX_SAFE_INTEGER') {

	describe(name, function () {

		it('should evaluate to true', function () {
			assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
		});

	});

}
export default test;
