describe('JSON', function () {

	var assert = require('assert');
	var JSON = require('../lib/JSON');

	it('should stringify an object', function () {
		assert.equal(JSON.stringify({
			a: 1,
			b: []
		}), '{"a":1,"b":[]}');
	});

	it('should parse a JSON string', function () {
		assert.deepEqual(JSON.parse('[[[1]]]'), [
			[
				[1]
			]
		]);
	});

});
