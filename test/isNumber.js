describe('isNumber', function () {

	var assert = require('assert');
	var isNumber = require('../lib/isNumber');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be a number', function () {
			assert.equal(isNumber(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('""', '', false);
	test('[]', [], false);
	test('{}', {}, false);
	test('function () {}', function () {}, false);
	test('NaN', NaN, false);
	test('0', 0, true);
	test('Infinity', Infinity, true);

});
