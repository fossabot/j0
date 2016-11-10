var assert = require('assert');
var Uint8ClampedArray = require('../lib/Uint8ClampedArray');
var clamp = require('../lib/clamp');

describe('Uint8ClampedArray', function () {

	/* jshint -W016 */

	it('should create an array', function () {
		assert.doesNotThrow(function () {
			var array = new Uint8ClampedArray(1);
			array = null;
		});
	});

	it('should set a value', function () {
		var array = new Uint8ClampedArray(1);
		var value = 100;
		for (value = -0xff; value < 0x1ff; value++) {
			array[0] = value;
			assert.equal(array[0], clamp(value, 0, 0xff));
		}
	});

});
