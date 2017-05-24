function tests(Body, name = 'Body') {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Body();
			});
		});

	});

}

export default tests;
