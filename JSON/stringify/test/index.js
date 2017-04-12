import stringify from '..';

describe('JSON/stringify', function () {

	it('should convert a string', function () {
		const value = 'abc';
		const expected = '"abc"';
		assert.equal(stringify(value), expected);
	});

	it('should convert a number', function () {
		const value = 123;
		const expected = '123';
		assert.equal(stringify(value), expected);
	});

});
