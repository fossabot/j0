describe('push', function () {

	var assert = require('assert');
	var push = require('../lib/push');
	var map = require('../lib/map');

	it('should append elements at end of an array', function () {
		var target = [1, 2, 3, 4];
		var result = push(target, 5, 6, 7, 8);
		assert.deepEqual([target, result], [
			[1, 2, 3, 4, 5, 6, 7, 8], 8
		]);
	});

	it('should append elements at end of arguments', function () {
		(function () {
			var target = arguments;
			var result = push(target, 5, 6, 7, 8);
			assert.deepEqual([map(target), result], [
				[1, 2, 3, 4, 5, 6, 7, 8], 8
			]);
		})(1, 2, 3, 4);
	});

});
