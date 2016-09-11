describe('isObject', function () {

	var assert = require('assert');
	var isObject = require('../lib/isObject');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be an object', function () {
			assert.equal(isObject(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('0', 0, false);
	test('""', '', false);
	test('{}', {}, true);
	test('function () {}', function () {}, true);
	test('arguments', arguments, true);
	test('[]', [], true);

});
