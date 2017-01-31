var assert = require('assert');
var find = require('../lib/find');

describe('find', function () {

	it('should find an item', function () {
		var target = [1];
		assert.equal(find([
			[],
			[],
			[],
			[],
			[],
			target,
			[],
			[],
			[],
			[]
		], function (item) {
			return item[0];
		}), target);
	});

	it('should return null', function () {
		assert.equal(find([
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[],
			[]
		], function (item) {
			return item[0];
		}), null);
	});

});
