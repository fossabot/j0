import map from '..';

it('should iterate over an array', function () {
	const actual = map([0, 1, 2, 3], function (x) {
		return x * 2;
	});
	const expected = [0, 2, 4, 6];
	assert.deepEqual(actual, expected);
});

it('should iterate over an array-like', function () {
	const actual = map({
		0: 0,
		1: 1,
		2: 2,
		3: 3,
		length: 4
	}, function (x) {
		return x * 2;
	});
	const expected = [0, 2, 4, 6];
	assert.deepEqual(actual, expected);
});

it('should iterate over a string', function () {
	const actual = map('xyz', function (x) {
		return x + x;
	});
	const expected = ['xx', 'yy', 'zz'];
	assert.deepEqual(actual, expected);
});

it('should iterate over an iterable', function () {
	let counter = 0;
	const iterable = {
		next: function () {
			counter += 1;
			return {
				value: counter,
				done: 4 < counter
			};
		}
	};
	const actual = map(iterable, function (x) {
		return x * 2;
	});
	const expected = [2, 4, 6, 8];
	assert.deepEqual(actual, expected);
});

it('should call fn in a specified context', function () {
	function fn(value) {
		this.sum += value;
		return this.sum;
	}
	const context = {sum: 0};
	const result = map([0, 1, 2, 3, 4, 5], fn, context);
	const expected = [0, 1, 3, 6, 10, 15];
	assert.deepEqual(result, expected);
});
