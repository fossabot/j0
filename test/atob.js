var assert = require('assert');
var atob = require('../lib/atob');

describe('atob', function () {

	it('should decode data', function () {
		assert.equal(atob('TGF2YSBTYXZhZ2U='), 'Lava Savage');
	});

});
