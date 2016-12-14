var assert = require('assert');
var cloneObject = require('../lib/cloneObject');

describe('cloneObject', function () {

	it('should clone everything except functions, Infinity, undefined', function () {
		assert.deepEqual(cloneObject({
			number: 1,
			string: 'string',
			array: [],
			object: {
				deep1: {
					deep2: {
						deep3: {
							deep4: {
								deep5: 6
							}
						}
					}
				}
			},
			null: null,
			undefined: undefined,
			function: function () {},
			bigNumber: Infinity
		}), {
			number: 1,
			string: 'string',
			array: [],
			object: {
				deep1: {
					deep2: {
						deep3: {
							deep4: {
								deep5: 6
							}
						}
					}
				}
			},
			null: null,
			bigNumber: null
		});
	});

});
