function test(arrayOf, name = 'Array.of') {

	describe(name, function () {

		it('should create an array', function () {
			const expected = [
				new Date(),
				Date.now(),
				new Date().toString()
			];
			const actual = arrayOf(...expected);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;
