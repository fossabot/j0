var assert = require('assert');
var Uint8Array = require('../lib/Uint8Array');

describe('Uint8Array', function () {

	/* jshint -W016 */

	it('should create an array', function () {
		assert.doesNotThrow(function () {
			var array = new Uint8Array(1);
			array = null;
		});
	});

	it('should set a value', function () {
		var array = new Uint8Array(1);
		var value = 100;
		for (value = -0xff; value < 0x1ff; value++) {
			array[0] = value;
			assert.equal(array[0], value & 0xff);
		}
	});

});
