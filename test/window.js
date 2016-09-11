describe('window', function () {

	var assert = require('assert');
	var window = require('../lib/window');

	it('should be the global object', function () {
		assert.equal(window, global);
	});

});
