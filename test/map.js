describe('map', function () {

	var assert = require('assert');
	var map = require('../lib/map');

	it('should iterate and return an array', function () {
		assert.deepEqual(map([0, 1, 2, 3, 4, 5, 6], function (x, index) {
			return x + index;
		}), [0, 2, 4, 6, 8, 10, 12]);
	});

});
