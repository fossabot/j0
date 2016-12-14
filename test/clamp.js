var assert = require('assert');
var clamp = require('../lib/clamp');
var forEach = require('../lib/forEach');
var JSON = require('../lib/JSON');

describe('clamp', function () {

	forEach([
		[[0, -1, 1], 0],
		[[-2, -1, 1], -1],
		[[2, -1, 1], 1]
	], function (test) {
		var testee = test[0];
		var expected = test[1];
		it('should return ' + JSON.stringify(expected) + ' if the argument is ' + JSON.stringify(testee), function () {
			assert.equal(clamp.apply(null, testee), expected);
		});
	});

});
