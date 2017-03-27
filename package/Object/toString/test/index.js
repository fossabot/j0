import toString from '..';

describe('Object/toString', function () {

	it('should convert null to [object Null]', function () {
		const value = null;
		const expected = '[object Null]';
		assert.equal(toString(value), expected);
	});

	it('should convert undefined to [object Undefined]', function () {
		const expected = '[object Undefined]';
		assert.equal(toString(), expected);
	});

});
