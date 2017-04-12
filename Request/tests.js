function tests(Request, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Request();
			});
		});

	});

}

export default tests;
