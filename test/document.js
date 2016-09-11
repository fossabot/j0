describe('document', function () {

	var assert = require('assert');
	var document = require('../lib/document');

	it('should be the document element', function () {
		assert.equal(document, global.document);
	});

});
