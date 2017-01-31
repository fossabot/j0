var assert = require('assert');
var decodeURIComponent = require('../lib/decodeURIComponent');

describe('decodeURIComponent', function () {

	it('should decode encoded URI', function () {
		assert.equal(decodeURIComponent('%E3%83%94%E3%83%83%E3%82%AD%E3%83%BC'), 'ピッキー');
	});

});
