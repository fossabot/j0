import push from '..';

describe('Array/push', function () {

	it('should append an item to an array', function () {
		const item = 3;
		const array = [0, 1, 2];
		const expected = [0, 1, 2, 3];
		push(array, item);
		assert.deepEqual(array, expected);
	});

	it('should append 3 items to an array', function () {
		const items = [3, 4, 5];
		const array = [0, 1, 2];
		const expected = [0, 1, 2, 3, 4, 5];
		push(array, ...items);
		assert.deepEqual(array, expected);
	});

	it('should append an item to an array-like object', function () {
		const item = 3;
		const array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push(array, item);
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			length: 4
		});
	});

	it('should append 3 items to an array-like object', function () {
		const items = [3, 4, 5];
		const array = {
			0: 0,
			1: 1,
			2: 2,
			length: 3
		};
		push(array, ...items);
		assert.deepEqual(array, {
			0: 0,
			1: 1,
			2: 2,
			3: 3,
			4: 4,
			5: 5,
			length: 6
		});
	});

});
