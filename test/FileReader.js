var assert = require('assert');
var FileReader = require('../lib/FileReader');
var Blob = require('../lib/Blob');
var ArrayBuffer = require('../lib/ArrayBuffer');
var DataView = require('../lib/DataView');
var forEach = require('../lib/forEach');

describe('FileReader', function () {

	it('should read data from a Blob as Text', function (done) {
		var reader = new FileReader();
		var data = 'Horned Rabbit';
		reader.onload = function () {
			assert.equal(reader.result, data);
			done();
		};
		reader.readAsText(new Blob([data]));
	});

	it('should read data from a Blob as ArrayBuffer', function (done) {
		var reader = new FileReader();
		var data = new ArrayBuffer(8);
		var view = new DataView(data);
		var dataset = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8
		];
		forEach(dataset, function (value, offset) {
			view.setUint8(offset, value);
		});
		reader.onload = function () {
			view = new DataView(reader.result);
			forEach(dataset, function (value, offset) {
				assert.equal(view.getUint8(offset), value);
			});
			done();
		};
		reader.readAsArrayBuffer(new Blob([data]));
	});

	it('should read data from a Blob as DataURL', function (done) {
		var reader = new FileReader();
		var data = 'Horse Devil';
		reader.onload = function () {
			assert.equal(reader.result, 'data:text/plain;base64,SG9yc2UgRGV2aWw=');
			done();
		};
		reader.readAsDataURL(new Blob([data], {
			type: 'text/plain'
		}));
	});

});
