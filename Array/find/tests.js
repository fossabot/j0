function test(findIndex, name = 'Array.prototype.find') {

	describe(name, function () {

		it('should return 1', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 1;
			}), 1);
		});

		it('should return undefined', function () {
			assert.equal(findIndex.call([1, 2, 3], function (x) {
				return x === 4;
			}));
		});

	});

}

export default test;
