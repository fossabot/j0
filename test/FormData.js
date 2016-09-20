describe('FormData', function () {

	var assert = require('assert');
	var FormData = require('../lib/FormData');

	it('should append data', function () {
		assert.doesNotThrow(function () {
			var data = new FormData();
			data.append('a', 'b');
		});
	});

});
