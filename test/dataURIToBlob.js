var assert = require('assert');
var dataURIToBlob = require('../lib/dataURIToBlob');
var FileReader = require('../lib/FileReader');

describe('dataURIToBlob', function () {

	it('should convert a dataURI to Blob', function (done) {
		var blob = dataURIToBlob('data:text/plain;charset=utf-8,Slime');
		var reader = new FileReader();
		reader.onload = function () {
			assert.equal(reader.result, 'Slime');
			done();
		};
		reader.readAsText(blob);
	});

	it('should convert a base64 encoded dataURI to Blob', function (done) {
		var blob = dataURIToBlob('data:text/plain;charset=utf-8;base64,U2xpbWU=');
		var reader = new FileReader();
		reader.onload = function () {
			assert.equal(reader.result, 'Slime');
			done();
		};
		reader.readAsText(blob);
	});

});
