var assert = require('assert');
var encodeCharacterReference = require('../lib/encodeCharacterReference');

describe('encodeCharacterReference', function () {

	it('should encode < and >', function () {
		assert.equal(encodeCharacterReference('<div></div>'), '&lt;div&gt;&lt;/div&gt;');
	});

});
