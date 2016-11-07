var assert = require('assert');
var Blob = require('../lib/Blob');

describe('Blob', function () {

	it('should create a blob object', function () {
		assert.doesNotThrow(function () {
			var blob = new Blob(['Barbarossa']);
			return blob;
		});
	});

	it('should have a size', function () {
		var blob = new Blob(['Barbarossa']);
		assert.equal(blob.size, 10);
	});

});
