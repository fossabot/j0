import forEachKey from '..';

describe('Object/forEachKey', function () {

	it('should iterate over an object', function () {
		const obj = {
			a: 0,
			b: 1
		};
		const results = [];
		forEachKey(obj, function (...args) {
			results.push(args);
		});
		assert.deepEqual(results, [
			[0, 'a', obj],
			[1, 'b', obj]
		]);
	});

	it('should stop iteration if fn returns truthy value', function () {
		const obj = {
			a: 0,
			b: 1
		};
		const results = [];
		forEachKey(obj, function (...args) {
			results.push(args);
			return true;
		});
		assert.deepEqual(results, [
			[0, 'a', obj]
		]);
	});

	it('should ignore properties which is not its own', function () {
		const obj = [1, 2];
		const results = [];
		forEachKey(obj, function (...args) {
			results.push(args);
		});
		assert.deepEqual(results, [
			[1, '0', obj],
			[2, '1', obj]
		]);
	});

});
