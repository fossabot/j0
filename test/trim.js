describe('trim', function () {

	var assert = require('assert');
	var trim = require('../lib/trim');

	it('should change nothing', function () {
		assert.equal(trim('Hibabango'), 'Hibabango');
	});

	it('should remove spaces at start and end', function () {
		assert.equal(trim('\n\n \tHork\n\n \t'), 'Hork');
	});

});
