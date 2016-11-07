describe('BlobBuilder', function () {

	var assert = require('assert');
	var BlobBuilder = require('../lib/BlobBuilder');

	it('should be a constructor or null', function () {
		assert.equal(BlobBuilder === null || typeof BlobBuilder === 'function', true);
	});

});
