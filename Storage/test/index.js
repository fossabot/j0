import Storage from '..';

describe('Storage', function () {

	it('should add an item', function () {
		const storage = new Storage();
		const key = `${Date.now()}`;
		const data = new Date().toISOString();
		storage[key] = data;
		assert.equal(storage[key], data);
	});

	it('should remove an item', function () {
		const storage = new Storage();
		const key = `${Date.now()}`;
		const data = new Date().toISOString();
		storage[key] = data;
		storage.removeItem(key);
		assert.equal(storage[key]);
	});

	it('should save removeItem from overwriting', function () {
		const storage = new Storage();
		const key = 'removeItem';
		const data = new Date().toISOString();
		assert.throws(() => {
			storage[key] = data;
		});
	});

	it('should save removeItem from deleting', function () {
		const storage = new Storage();
		const key = 'removeItem';
		assert.throws(() => {
			storage.removeItem(key);
		});
	});

});
