import keys from '..';

describe('keys', function () {

	it('should return a list of keys', function () {
		const key1 = `${Date.now()}-1`;
		const key2 = `${Date.now()}-2`;
		const key3 = `${Date.now()}-3`;
		const obj = {
			[key1]: null,
			[key2]: null,
			[key3]: null
		};
		const actual = keys(obj);
		const expected = [key1, key2, key3];
		assert.deepEqual(actual, expected);
	});

});
