import decodeURIComponent from '..';

describe('decodeURIComponent', function () {

	it('should decode an encoded string', function () {
		assert.equal(decodeURIComponent('%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF'), 'こんにちは');
	});

});
