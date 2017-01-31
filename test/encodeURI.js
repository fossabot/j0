var assert = require('assert');
var encodeURI = require('../lib/encodeURI');

describe('encodeURI', function () {

	it('should encode URI', function () {
		assert.equal(encodeURI('https://example.123/ピッキー'), 'https://example.123/%E3%83%94%E3%83%83%E3%82%AD%E3%83%BC');
	});

});
