import trim from '..';
describe('String/trim', function () {

	it('should trim spaces at beginning and ending', function () {
		assert.equal(trim('\r\n\tab\tc\n\r\t'), 'ab\tc');
	});

});
