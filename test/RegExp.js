var assert = require('assert');
var RegExp = require('../lib/RegExp');

describe('RegExp', function () {

	it('should construct a new regular expression', function () {
		var exp = new RegExp('Eig.+n');
		assert.equal(exp.test('Eigerhorn'), true);
	});

});
