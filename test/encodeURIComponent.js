var assert = require('assert');
var encodeURIComponent = require('../lib/encodeURIComponent');

describe('encodeURIComponent', function () {

	it('should encode URI', function () {
		assert.equal(encodeURIComponent('ピッキー'), '%E3%83%94%E3%83%83%E3%82%AD%E3%83%BC');
	});

});
