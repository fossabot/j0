function test(assign, name = 'Object.assign') {

	describe(name, function () {

		it('should assign properties', function () {
			const target = {};
			const key1 = `${Date.now()}_1`;
			const key2 = `${Date.now()}_2`;
			const key3 = `${Date.now()}_3`;
			const value1 = `${Date.now()}_4`;
			const value2 = `${Date.now()}_5`;
			const value3 = `${Date.now()}_6`;
			assign(
				target,
				{
					[key1]: value1,
					[key2]: value2
				},
				{
					[key2]: value3,
					[key3]: value2
				}
			);
			assert.deepEqual(target, {
				[key1]: value1,
				[key2]: value3,
				[key3]: value2
			});
		});

	});

}

export default test;
