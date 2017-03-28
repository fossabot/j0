import includes from '..';

describe('Array/includes', function () {

	it('should find an item', function () {
		const array = [0, 1, 2, 3];
		assert.equal(includes(array, 1), true);
		assert.equal(includes(array, 4), false);
	});

	it('should find an item from array-like', function () {
		const arrayLike = {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		};
		assert.equal(includes(arrayLike, 1), true);
		assert.equal(includes(arrayLike, 4), false);
	});

	it('should find an item from iterable', function () {
		let count = 0;
		const iterator = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 4 < count
				};
			}
		};
		assert.equal(includes(iterator, 1), true);
		assert.equal(includes(iterator, 4), false);
	});

	it('should find a character from a string', function () {
		const string = 'abcde';
		assert.equal(includes(string, 'c'), true);
		assert.equal(includes(string, 'f'), false);
	});

});
