describe('ArrayBuffer', function () {

	var assert = require('assert');
	var ArrayBuffer = require('../lib/ArrayBuffer');

	it('should have byteLength', function () {
		var a = new ArrayBuffer(10);
		assert.equal(a.byteLength, 10);
	});

});
