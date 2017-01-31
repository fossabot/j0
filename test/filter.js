var assert = require('assert');
var filter = require('../lib/filter');

describe('filter', function () {

	it('should filter falsy items', function () {
		assert.deepEqual(filter([
			1, 0, 2, 3, 4, false, 5, 6, 7, null, 8, 9
		]), [
			1, 2, 3, 4, 5, 6, 7, 8, 9
		]);
	});

	it('should filter truthy items', function () {
		assert.deepEqual(filter([
			1, 0, 2, 3, 4, false, 5, 6, 7, null, 8, 9
		], function (item) {
			return !item;
		}), [
			0, false, null
		]);
	});

});
