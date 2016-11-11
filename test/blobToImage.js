var assert = require('assert');
var blobToImage = require('../lib/blobToImage');
var http = require('../lib/http');
var naturalWidth = require('../lib/naturalWidth');
var naturalHeight = require('../lib/naturalHeight');

describe('blobToImage', function () {

	it('should create an image element from a blob', function (done) {
		http({
			method: 'GET',
			url: 'files/j0-1.jpg',
			responseType: 'blob'
		}).then(blobToImage).then(function (img) {
			assert.equal(0 < naturalWidth(img) * naturalHeight(img), true);
			done();
		}).catch(done);
	});

});
