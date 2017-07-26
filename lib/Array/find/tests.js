function test(find, name = 'Array.prototype.find') {

	describe(name, function () {

		it('should return 1', function () {
			const expected = Date.now();
			const array = [
				new Date(),
				expected,
				new Date().toISOString()
			];
			const actual = find.call(array, function (x) {
				return x === this.expected;
			}, {expected});
			assert.equal(actual, expected);
		});

		it('should return undefined', function () {
			const [expected] = [];
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const actual = find.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});

	});

}

export default test;
