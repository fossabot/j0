import forEach from '..';
import push from '../../push';

describe('Array/forEach', function () {

	it('should iterate over an array', function () {
		const array = [1, 2, 3];
		forEach(array, function (value, index, arr) {
			assert.deepEqual([value, arr], [array[index], arr]);
		});
	});

	it('should iterate over an array-like', function () {
		const array = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		forEach(array, function (value, index, arr) {
			assert.deepEqual([value, arr], [array[index], arr]);
		});
	});

	it('should iterate over an iterable', function () {
		let count = 0;
		const iterable = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 4 < count
				};
			}
		};
		const results = [];
		forEach(iterable, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [
			[1, 0, iterable],
			[2, 1, iterable],
			[3, 2, iterable],
			[4, 3, iterable]
		]);
	});

	it('should iterate over a string', function () {
		const text = 'abcd';
		const results = [];
		forEach(text, function (value, index, arr) {
			push(results, [value, index, arr]);
		});
		assert.deepEqual(results, [
			['a', 0, text],
			['b', 1, text],
			['c', 2, text],
			['d', 3, text]
		]);
	});

	it('should call fn in a specified context', function () {
		function fn(value) {
			this.sum += value;
		}
		const context = {sum: 0};
		forEach([0, 1, 2, 3, 4, 5], fn, context);
		assert.deepEqual(context, {sum: 15});
	});

});
