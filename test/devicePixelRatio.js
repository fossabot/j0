var assert = require('assert');
var devicePixelRatio = require('../lib/devicePixelRatio');

describe('devicePixelRatio', function () {

	it('should be bigger than 0', function () {
		assert.equal(0 < devicePixelRatio, true);
	});

});
