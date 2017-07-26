import Lazy from '../index.js';
describe('Lazy', function () {

	it('should return a result of the getter', function () {
		const lazy = new Lazy();
		const key = `${Date.now()}`;
		const value = new Date();
		function getter() {
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
	});

	it('should not call the getter twice', function () {
		const lazy = new Lazy();
		const key = `${Date.now()}`;
		const value = new Date();
		let count = 0;
		function getter() {
			count += 1;
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(count, 1);
	});

	it('should call the getter again', function () {
		const lazy = new Lazy();
		const key = `${Date.now()}`;
		const value = new Date();
		let count = 0;
		function getter() {
			count += 1;
			return value;
		}
		assert.equal(lazy.getLazy(key, getter), value);
		assert.equal(lazy.getLazy(key, getter, true), value);
		assert.equal(count, 2);
	});

});
