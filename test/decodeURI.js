var assert = require('assert');
var decodeURI = require('../lib/decodeURI');

describe('decodeURI', function () {

	it('should decode encoded URI', function () {
		assert.equal(decodeURI('https://example.123/%E3%83%94%E3%83%83%E3%82%AD%E3%83%BC'), 'https://example.123/ピッキー');
	});

});
