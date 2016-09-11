describe('isUndefined', function () {

	var assert = require('assert');
	var isUndefined = require('../lib/isUndefined');

	var test = function (testeeName, testee, expected) {
		it('should judge ' + testeeName + (expected ? '' : ' not') + ' to be undefined', function () {
			assert.equal(isUndefined(testee), expected);
		});
	};

	test('undefined', undefined, true);
	test('[][1]', [][1], true);
	test('{}[1]', {}[1], true);

	test('null', null, false);
	test('0', 0, false);
	test('""', '', false);
	test('[]', [], false);
	test('{}', {}, false);
	test('function () {}', function () {}, false);

});
