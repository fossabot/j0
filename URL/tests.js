function test(URL, name = 'URL') {

	describe(name, function () {

		it('should have createObjectURL', function () {
			assert.equal(typeof URL.createObjectURL, 'function');
		});

		it('should have revokeObjectURL', function () {
			assert.equal(typeof URL.revokeObjectURL, 'function');
		});

	});

}

export default test;
