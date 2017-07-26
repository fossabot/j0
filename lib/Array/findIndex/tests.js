function test(findIndex, name = 'Array.prototype.findIndex') {

	describe(name, function () {

		it('should return 0', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const expected = 1;
			const actual = findIndex.call(array, function (x) {
				return x === array[this.expected];
			}, {expected});
			assert.equal(actual, expected);
		});

		it('should return -1', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			const expected = -1;
			const actual = findIndex.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});

	});

}

export default test;
