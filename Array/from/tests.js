function test(arrayFrom, name = 'Array.from') {

	describe(name, function () {

		it('should create a new array from an array-like object', function () {
			const result = arrayFrom({
				0: 1,
				1: 2,
				2: 3,
				length: 3
			});
			assert.equal(Array.isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new array from an iterable object', function () {
			const iterable = {
				[Symbol.iterator]: function () {
					let count = 0;
					return {
						next: function () {
							count += 1;
							return {
								value: count,
								done: 5 <= count
							};
						}
					};
				}
			};
			const result = arrayFrom(iterable);
			assert.equal(Array.isArray(result), true);
			assert.deepEqual(result, [1, 2, 3, 4]);
		});

	});

}

export default test;
