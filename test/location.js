describe('location', function () {

	var assert = require('assert');
	var location = require('../lib/location');
	var isString = require('../lib/isString');

	it('should be a location object', function () {
		assert.deepEqual([
			isString(location.href),
			isString(location.hash),
			isString(location.hostname),
			isString(location.pathname),
			isString(location.port),
			isString(location.protocol),
			isString(location.search)
		], [
			true,
			true,
			true,
			true,
			true,
			true,
			true
		]);
	});
});
