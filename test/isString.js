describe('isString', function () {

	var assert = require('assert');
	var isString = require('../lib/isString');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be a string', function () {
			assert.equal(isString(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('0', 0, false);
	test('{}', {}, false);
	test('function () {}', function () {}, false);
	test('arguments', arguments, false);
	test('[]', [], false);
	test('""', '', true);

});
