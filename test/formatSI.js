var assert = require('assert');
var forEach = require('../lib/forEach');
var formatSI = require('../lib/formatSI');

describe('formatSI', function () {

	forEach([
		[321, '321'],
		[4321, '4.3k'],
		[54321, '54.3k'],
		[654321, '654.3k'],
		[7654321, '7.7M'],
		[87654321, '87.7M'],
		[987654321, '987.7M'],
		[1987654321, '2.0G'],
		[21987654321, '22.0G'],
		[321987654321, '322.0G'],
		[4321987654321, '4.3T'],
		[54321987654321, '54.3T'],
		[654321987654321, '654.3T']
	], function (test) {
		var value = test[0];
		var expected = test[1];
		it('should convert ' + value + ' -> ' + expected, function () {
			assert.equal(formatSI(value), expected);
		});
	});

});
