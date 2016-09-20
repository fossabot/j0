describe('CustomEvent', function () {

	var assert = require('assert');
	var CustomEvent = require('../lib/CustomEvent');
	var isUndefined = require('../lib/isUndefined');

	it('should be undefined or be able to create a new instance', function () {
		if (!isUndefined(CustomEvent)) {
			assert.doesNotThrow(function () {
				new CustomEvent('G');
			});
		}
	});

});
