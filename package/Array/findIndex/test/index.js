import findIndex from '..';

function getArguments() {
	return arguments;
}

describe('Array/findIndex', function () {

	it('should find an index an item', function () {
		function matcher(x) {
			return x === 3;
		}
		const actual = findIndex([0, 1, 2, 3], matcher);
		const expected = 3;
		assert.equal(actual, expected);
	});

	it('should find an index the first truthy item', function () {
		const actual = findIndex([0, false, null, 1]);
		const expected = 3;
		assert.equal(actual, expected);
	});

	it('should find an index an item from arguments', function () {
		function matcher(x) {
			return x === 3;
		}
		const actual = findIndex(getArguments(0, 1, 2, 3), matcher);
		const expected = 3;
		assert.equal(actual, expected);
	});

	it('should find an index an item from iterable', function () {
		let count = 0;
		const iterator = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 20 < count
				};
			}
		};
		function matcher(x) {
			return 10 <= x;
		}
		const actual = findIndex(iterator, matcher);
		const expected = 9;
		assert.equal(actual, expected);
	});

	it('should find an index a character from a string', function () {
		function matcher(x) {
			return x === 'b';
		}
		const actual = findIndex('abc', matcher);
		const expected = 1;
		assert.equal(actual, expected);
	});

	it('should call matcher in a specified context', function () {
		function matcher(x) {
			this.sum += x;
			return 4 < x;
		}
		const context = {sum: 0};
		const actual = findIndex([0, 1, 2, 3, 4, 5, 6], matcher, context);
		const expected = 5;
		assert.equal(actual, expected);
		assert.deepEqual(context, {sum: 15});
	});

});
