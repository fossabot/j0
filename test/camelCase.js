describe('camelCase', function () {

	var assert = require('assert');
	var camelCase = require('../lib/camelCase');

	it('should convert space', function () {
		assert.equal(camelCase(' ghost mouse'), 'GhostMouse');
	});

	it('should convert hyphen', function () {
		assert.equal(camelCase('-ghost-rat'), 'GhostRat');
	});

	it('should convert underscore', function () {
		assert.equal(camelCase('_gold_batboon'), 'GoldBatboon');
	});

});
