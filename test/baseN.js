describe('baseN', function () {

	var assert = require('assert');
	var baseN = require('../lib/baseN');

	it('encode', function () {
		var base;
		var encode;
		for (base = 2; base <= 62; base++) {
			encode = baseN(base);
			assert.equal(encode(0), '0');
			assert.equal(encode(base), '10');
			assert.equal(encode(base * base), '100');
		}
	});

	it('decode', function () {
		var base;
		var decode;
		for (base = 2; base <= 62; base++) {
			decode = baseN(base).decode;
			assert.equal(decode('0'), 0);
			assert.equal(decode('10'), base);
			assert.equal(decode('100'), base * base);
		}
	});

});
