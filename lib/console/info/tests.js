function test(info, name = 'console.info') {

	describe(name, function () {

		it('should be a function', function () {
			assert.equal(typeof info, 'function');
		});

	});

}
export default test;
