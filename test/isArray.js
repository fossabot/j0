describe('isArray', function () {

	var assert = require('assert');
	var isArray = require('../lib/isArray');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be an array', function () {
			assert.equal(isArray(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('0', 0, false);
	test('""', '', false);
	test('{}', {}, false);
	test('function () {}', function () {}, false);
	test('arguments', arguments, false);
	test('[]', [], true);

});
