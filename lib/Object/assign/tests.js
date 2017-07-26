function test(assign, name = 'Object.assign') {

	describe(name, function () {

		it('should assign properties', function () {
			const key1 = `${Date.now()}_1`;
			const key2 = `${Date.now()}_2`;
			const key3 = `${Date.now()}_3`;
			const value1 = `${Date.now()}_4`;
			const value2 = `${Date.now()}_5`;
			const value3 = `${Date.now()}_6`;
			const seed = {
				[key1]: value3
			};
			const result = assign(
				seed,
				{
					[key1]: value1,
					[key2]: value2
				},
				{
					[key2]: value3,
					[key3]: value2
				}
			);
			assert.equal(result, seed);
			assert.deepEqual(result, {
				[key1]: value1,
				[key2]: value3,
				[key3]: value2
			});
		});

	});

}

export default test;
