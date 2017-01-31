var assert = require('assert');
var createCSSClass = require('../../mod/createCSSClass');

describe('mod/createCSSClass', function () {

	it('should create a css class', function () {
		var count = 0xffff;
		while (0 < count--) {
			assert.equal(/_[0-9a-f]+/.test(createCSSClass()), 1);
		}
	});

});
