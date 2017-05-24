import find from '..';

describe('Array/find', function () {

	it('should find an item from iterable', function () {
		const iterable = {
			[Symbol.iterator]: function () {
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
		const actual = find(iterable, matcher);
		const expected = 10;
		assert.equal(actual, expected);
	});

});
