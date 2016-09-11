describe('Error', function () {

	var assert = require('assert');
	var Error = require('../lib/Error');

	it('should create a new instance', function () {
		assert.doesNotThrow(function () {
			/* jshint -W031 */
			new Error();
		});
	});
});
