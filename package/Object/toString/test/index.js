import toString from '..';

describe('Object/toString', function () {

	it('should convert [] to [object Array]', function () {
		const value = [];
		const expected = '[object Array]';
		assert.equal(toString(value), expected);
	});

});
