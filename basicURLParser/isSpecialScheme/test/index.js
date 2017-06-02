import isSpecialScheme from '..';

describe('basicURLParser/isSpecialScheme', function () {

	it('should return true if the given scheme is "ftp"', function () {
		assert.equal(isSpecialScheme('ftp'), true);
	});

	it('should return true if the given scheme is "file"', function () {
		assert.equal(isSpecialScheme('file'), true);
	});

	it('should return true if the given scheme is "gopher"', function () {
		assert.equal(isSpecialScheme('gopher'), true);
	});

	it('should return true if the given scheme is "http"', function () {
		assert.equal(isSpecialScheme('http'), true);
	});

	it('should return true if the given scheme is "https"', function () {
		assert.equal(isSpecialScheme('https'), true);
	});

	it('should return true if the given scheme is "ws"', function () {
		assert.equal(isSpecialScheme('ws'), true);
	});

	it('should return true if the given scheme is "wss"', function () {
		assert.equal(isSpecialScheme('wss'), true);
	});

	it('should return false if the given scheme is unknown', function () {
		assert.equal(isSpecialScheme('film'), false);
		assert.equal(isSpecialScheme('htttp'), false);
		assert.equal(isSpecialScheme('wsss'), false);
	});

});
