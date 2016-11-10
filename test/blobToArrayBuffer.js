var assert = require('assert');
var blobToArrayBuffer = require('../lib/blobToArrayBuffer');
var Blob = require('../lib/Blob');
var Uint8Array = require('../lib/Uint8Array');
var map = require('../lib/map');

describe('blobToArrayBuffer', function () {

	it('should return an ArrayBuffer', function (done) {
		var data = 'Mamoo';
		var blob = new Blob([data], {type: 'text/plain'});
		blobToArrayBuffer(blob).then(function (arrayBuffer) {
			assert.deepEqual(new Uint8Array(arrayBuffer), map(data.split(''), function (c) {
				return c.charCodeAt(0);
			}));
			done();
		}).catch(done);
	});

});
