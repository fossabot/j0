import Iterator from '../index.js';

describe('Iterator', function () {

	it('should return a function which returns an iterator', function () {
		let value = 0;
		const max = 5;
		const iterator = new Iterator(function () {
			return {
				value,
				done: max < value++
			};
		});
		let result = iterator.next();
		const results = [];
		while (!result.done) {
			results.push(result.value);
			result = iterator.next();
		}
		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});

	it('should return a function which returns an iterator iterable in for-of syntax', function () {
		let value = 0;
		const max = 5;
		const iterator = new Iterator(function () {
			return {
				value,
				done: max < value++
			};
		});
		const results = [];
		for (const result of iterator) {
			results.push(result);
		}
		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});

});
