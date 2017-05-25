function test(includes, name = 'Array.prototype.includes') {

	describe(name, function () {

		it('should return whether the array has the value', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			assert.equal(includes.call(array, array[0]), true);
			assert.equal(includes.call(array, array[array.length]), false);
		});

		it('should support positive fromIndex', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			assert.equal(includes.call(array, array[1], 1), true);
			assert.equal(includes.call(array, array[1], 2), false);
		});

		it('should support negative fromIndex', function () {
			const array = [
				new Date(),
				Date.now(),
				new Date().toISOString()
			];
			assert.equal(includes.call(array, array[1], -1), false);
			assert.equal(includes.call(array, array[1], -2), true);
		});

	});

}

export default test;
