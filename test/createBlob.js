var assert = require('assert');
var createBlob = require('../lib/createBlob');
var Blob = require('../lib/Blob');
var FileReader = require('../lib/FileReader');

describe('createBlob', function () {

	it('should create a blob', function () {
		assert.equal(createBlob(['']) instanceof Blob, true);
	});

	it('should create a blob with data', function (done) {
		var blob = createBlob(['Plesiosaur', 'Puppet Man']);
		var reader = new FileReader();
		reader.onerror = done;
		reader.onload = function () {
			assert.equal(reader.result, 'PlesiosaurPuppet Man');
			done();
		};
		reader.readAsText(blob);
	});

});
