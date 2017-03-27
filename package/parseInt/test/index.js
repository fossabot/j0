import parseInt from '..';

const dec = 10;
const hex = 16;

describe('parseInt', function () {

	it('should convert a dec to an integer', function () {
		const value = '100';
		const expected = 100;
		assert.equal(parseInt(value, dec), expected);
	});

	it('should convert a hex to an integer', function () {
		const value = '100';
		const expected = 256;
		assert.equal(parseInt(value, hex), expected);
	});

});
