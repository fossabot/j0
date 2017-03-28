import filter from '..';

describe('Array/filter', function () {

	it('should filter an array', function () {
		function fn(x) {
			return x % 2;
		}
		const array = [1, 2, 3, 4, 5];
		const actual = filter(array, fn);
		const expected = [1, 3, 5];
		assert.deepEqual(actual, expected);
	});

	it('should filter an array-like object', function () {
		function fn(x) {
			return x % 2;
		}
		const array = {
			0: 1,
			1: 2,
			2: 3,
			3: 4,
			4: 5,
			length: 5
		};
		const actual = filter(array, fn);
		const expected = [1, 3, 5];
		assert.deepEqual(actual, expected);
	});

	it('should filter an iterable', function () {
		function fn(x) {
			return x % 2;
		}
		let count = 0;
		const array = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 5 < count
				};
			}
		};
		const actual = filter(array, fn);
		const expected = [1, 3, 5];
		assert.deepEqual(actual, expected);
	});

});
