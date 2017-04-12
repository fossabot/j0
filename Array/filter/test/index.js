import filter from '..';
import iteratorKey from '../../../Symbol/iterator';

describe('Array/filter', function () {

	it('should filter an iterable', function () {
		function fn(x) {
			return x % 2;
		}
		const iterable = {
			[iteratorKey]: function () {
				let count = 0;
				return {
					next: function () {
						count += 1;
						return {
							value: count,
							done: 5 < count
						};
					}
				};
			}
		};
		const actual = filter(iterable, fn);
		const expected = [1, 3, 5];
		assert.deepEqual(actual, expected);
	});

});