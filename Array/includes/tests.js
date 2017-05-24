function test(includes, name = 'Array.prototype.includes') {

	describe(name, function () {

		it('should find an item', function () {
			const array = [0, 1, 2, 3];
			assert.equal(includes.call(array, 1), true);
			assert.equal(includes.call(array, 4), false);
		});

		it('should find an item from array-like', function () {
			const arrayLike = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			};
			assert.equal(includes.call(arrayLike, 1), true);
			assert.equal(includes.call(arrayLike, 4), false);
		});

		it('should find a character from a string', function () {
			const string = 'abcde';
			assert.equal(includes.call(string, 'c'), true);
			assert.equal(includes.call(string, 'f'), false);
		});

	});

}

export default test;
