function test(arrayOf, name = 'Array.of') {

	describe(name, function () {

		it('should create an array', function () {
			const actual = arrayOf(1, 2, 3);
			const expected = [1, 2, 3];
			assert.deepEqual(actual, expected);
		});

	});

}

export default test;
