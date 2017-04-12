import findIndex from '..';
import iteratorKey from '../../../Symbol/iterator';

describe('Array/findIndex', function () {

	it('should find an index an item from iterable', function () {
		const iterable = {
			[iteratorKey]: function () {
				let count = 0;
				return {
					next: function () {
						count += 1;
						return {
							value: count,
							done: 20 < count
						};
					}
				};
			}
		};
		function matcher(x) {
			return 10 <= x;
		}
		const actual = findIndex(iterable, matcher);
		const expected = 9;
		assert.equal(actual, expected);
	});

});
