function test(findIndex, name = 'Array.prototype.findIndex') {

	describe(name, function () {

		it('should return 0', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, {expected: 1}), 0);
		});

		it('should return -1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === this.expected;
			}, {expected: 4}), -1);
		});

	});

}

export default test;
