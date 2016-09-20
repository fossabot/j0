describe('findIndex', function () {

	var assert = require('assert');
	var findIndex = require('../lib/findIndex');

	it('should find an item from an array by equality', function () {
		assert.equal(findIndex([1, 2, 3, 4], 3), 2);
	});

	it('should find an item from an array by a checker function', function () {
		assert.equal(findIndex([1, 2, 3, 4, 5, 6], function (value, index) {
			return index === 4;
		}), 4);
	});

	it('should return -1', function () {
		assert.equal(findIndex([1, 2, 3, 4, 5, 6], 7), -1);
	});
});
