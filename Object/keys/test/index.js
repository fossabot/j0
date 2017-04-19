import keys from '..';

describe('Object/keys', function () {

	it('should return an array of keys', function () {
		const data = {
			a: 0,
			b: 0,
			c: 0
		};
		const actual = keys(data);
		const expected = ['a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});

});
