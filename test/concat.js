var assert = require('assert');
var forEach = require('../lib/forEach');
var concat = require('../lib/concat');

describe('concat', function () {

	forEach([
		[[1, 2, 3], [1, 2, 3]],
		[[[1], 2, 3], [1, 2, 3]],
		[[[1], 2, [[3]]], [1, 2, [3]]],
		[[[1], 2, undefined, [[3]]], [1, 2, undefined, [3]]]
	], function (test) {
		var testee = test[0];
		var expected = test[1];
		it('should return ' + JSON.stringify(expected) + ' if the argument is ' + JSON.stringify(testee), function () {
			assert.deepEqual(concat.apply(null, testee), expected);
		});
	});

});
