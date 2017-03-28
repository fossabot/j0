import join from '..';

describe('Array/join', function () {

	it('should join items of an array', function () {
		const array = [1, 2, 3];
		const expected = '1,2,3';
		assert.equal(join(array), expected);
	});

	it('should join items of an array with specified separator', function () {
		const array = [1, 2, 3];
		const expected = '1--2--3';
		assert.equal(join(array, '--'), expected);
	});

	it('should join items of an array-like object with specified separator', function () {
		const array = {
			0: 1,
			1: 2,
			2: 3,
			length: 3
		};
		const expected = '1--2--3';
		assert.equal(join(array, '--'), expected);
	});

	it('should join items of a string with specified separator', function () {
		const array = '123';
		const expected = '1--2--3';
		assert.equal(join(array, '--'), expected);
	});

	it('should join items of an iterable with specified separator', function () {
		let count = 0;
		const array = {
			next: function () {
				count += 1;
				return {
					value: count,
					done: 3 < count
				};
			}
		};
		const expected = '1--2--3';
		assert.equal(join(array, '--'), expected);
	});

});
