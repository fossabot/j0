var assert = require('assert');
var btoa = require('../lib/btoa');

describe('btoa', function () {

	it('should encode data', function () {
		assert.equal(btoa('Lava Savage'), 'TGF2YSBTYXZhZ2U=');
	});

});
