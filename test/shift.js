describe('shift', function () {

	var assert = require('assert');
	var shift = require('../lib/shift');

	it('should shift the array', function () {
		var target = [0, 1, 2];
		var item = shift(target);
		assert.deepEqual([target[0], target[1], item], [1, 2, 0]);
	});

	it('should shift the arguments', function () {
		(function () {
			var target = arguments;
			var item = shift(target);
			assert.deepEqual([target[0], target[1], item], [1, 2, 0]);
		})(0, 1, 2);
	});
});
