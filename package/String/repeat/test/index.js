import repeat from '..';

describe('String/repeat', function () {

	it('should repeat the string for specified times', function () {
		const src = '3';
		const count = 10;
		const expected = '3333333333';
		assert.equal(repeat(src, count), expected);
	});

});
