var assert = require('assert');
var every = require('../lib/every');

describe('every', function () {

	it('should check all items', function () {
		var items = [
			[],
			[],
			[],
			[],
			[],
			[]
		];
		assert.equal(every(items, function (item, index) {
			item[0] = index;
			return true;
		}), true);
		assert.deepEqual(items, items.map(function (item, index) {
			return [index];
		}));
	});

	it('should skip after falsy item', function () {
		var items = [
			[],
			[],
			[],
			[],
			[],
			[]
		];
		assert.equal(every(items, function (item, index) {
			item[0] = index;
			return index < 3;
		}), false);
		assert.deepEqual(items, items.map(function (item, index) {
			return index < 4 ? [index] : [];
		}));
	});

});
