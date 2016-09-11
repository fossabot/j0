describe('isFunction', function () {

	var assert = require('assert');
	var isFunction = require('../lib/isFunction');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be a function', function () {
			assert.equal(isFunction(testee), expected);
		});
	};

	test('undefined', undefined, false);
	test('null', null, false);
	test('0', 0, false);
	test('""', '', false);
	test('[]', [], false);
	test('{}', {}, false);
	test('function () {}', function () {}, true);
	test('("").slice', ('').slice, true);

});
