function test(storage, testName) {

	describe(testName, function () {

		it('should set/get an item', function () {
			const name = `${Date.now()}`;
			const value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
		});

		it('should remove an item', function () {
			const name = `${Date.now()}`;
			const value = new Date().toISOString();
			storage.setItem(name, value);
			assert.equal(storage.getItem(name), value);
			storage.removeItem(name);
			assert.equal(storage.getItem(name));
		});

		it('should clear all', function () {
			const name1 = `${Date.now()}1`;
			const name2 = `${Date.now()}2`;
			const value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			assert.equal(storage.getItem(name1), value);
			assert.equal(storage.getItem(name2), value);
			storage.clear();
			assert.equal(storage.getItem(name1));
			assert.equal(storage.getItem(name2));
		});

		it('should have key()', function () {
			const name1 = `${Date.now()}1`;
			const name2 = `${Date.now()}2`;
			const value = new Date().toISOString();
			storage.setItem(name1, value);
			storage.setItem(name2, value);
			const results = [];
			for (let i = 0, {length} = storage; i < length; i++) {
				results.push(storage.key(i));
			}
			assert.equal(
				[name1, name2]
				.every((name) => {
					return results.includes(name);
				}),
				true
			);
		});

	});

}

export default test;
