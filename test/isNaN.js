describe('isNaN', function () {

	var assert = require('assert');
	var isNaN = require('../lib/isNaN');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be a NaN', function () {
			assert.equal(isNaN(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('""', '', false);
	test('[]', [], false);
	test('{}', {}, false);
	test('function () {}', function () {}, false);
	test('NaN', NaN, true);
	test('0', 0, false);
	test('Infinity', Infinity, false);

});
