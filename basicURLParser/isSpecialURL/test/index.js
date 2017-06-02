import isSpecialURL from '..';

describe('basicURLParser/isSpecialURL', function () {

	it('should return true if url.scheme is "ftp"', function () {
		assert.equal(isSpecialURL({scheme: 'ftp'}), true);
	});

	it('should return true if url.scheme is "file"', function () {
		assert.equal(isSpecialURL({scheme: 'file'}), true);
	});

	it('should return true if url.scheme is "gopher"', function () {
		assert.equal(isSpecialURL({scheme: 'gopher'}), true);
	});

	it('should return true if url.scheme is "http"', function () {
		assert.equal(isSpecialURL({scheme: 'http'}), true);
	});

	it('should return true if url.scheme is "https"', function () {
		assert.equal(isSpecialURL({scheme: 'https'}), true);
	});

	it('should return true if url.scheme is "ws"', function () {
		assert.equal(isSpecialURL({scheme: 'ws'}), true);
	});

	it('should return true if url.scheme is "wss"', function () {
		assert.equal(isSpecialURL({scheme: 'wss'}), true);
	});

	it('should return false if url.scheme is unknown', function () {
		assert.equal(isSpecialURL({scheme: 'film'}), false);
		assert.equal(isSpecialURL({scheme: 'htttp'}), false);
		assert.equal(isSpecialURL({scheme: 'wsss'}), false);
	});

});
