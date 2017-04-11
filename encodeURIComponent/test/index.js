import encodeURIComponent from '..';

describe('encodeURIComponent', function () {

	it('should encode an decoded string', function () {
		assert.equal(encodeURIComponent('こんにちは'), '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF');
	});

});
