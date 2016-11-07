var assert = require('assert');
var ArrayBuffer = require('../lib/ArrayBuffer');
var DataView = require('../lib/DataView');

describe('DataView', function () {

	this.timeout(5000);

	it('should create a DataView object', function () {
		assert.doesNotThrow(function () {
			return new DataView(new ArrayBuffer(0));
		});
	});

	it('should write and read data into the buffer in Int8', function () {
		var dataView = new DataView(new ArrayBuffer(1));
		var data;
		for (data = -0x80; data <= 0x7f; data++) {
			dataView.setInt8(0, data);
			assert.equal(dataView.getInt8(0), data);
		}
	});

	it('should write and read data into the buffer in Uint8', function () {
		var dataView = new DataView(new ArrayBuffer(1));
		var data;
		for (data = 0x00; data <= 0xff; data++) {
			dataView.setUint8(0, data);
			assert.equal(dataView.getUint8(0), data);
		}
	});

	it('should write and read data into the buffer in Int16', function () {
		var dataView = new DataView(new ArrayBuffer(2));
		var data;
		for (data = -0x8000; data <= 0x7fff; data++) {
			dataView.setInt16(0, data, true);
			assert.equal(dataView.getInt16(0, true), data);
			dataView.setInt16(0, data, false);
			assert.equal(dataView.getInt16(0, false), data);
		}
	});

	it('should write and read data into the buffer in UInt16', function () {
		var dataView = new DataView(new ArrayBuffer(2));
		var data;
		for (data = 0x0000; data <= 0xffff; data++) {
			dataView.setUint16(0, data, true);
			assert.equal(dataView.getUint16(0, true), data);
			dataView.setUint16(0, data, false);
			assert.equal(dataView.getUint16(0, false), data);
		}
	});

	it('should write and read data into the buffer in Int32', function () {
		var dataView = new DataView(new ArrayBuffer(4));
		var data;
		for (data = -0x800000; data <= 0x7fffff; data += 0xff) {
			dataView.setInt32(0, data, true);
			assert.equal(dataView.getInt32(0, true), data);
			dataView.setInt32(0, data, false);
			assert.equal(dataView.getInt32(0, false), data);
		}
	});

	it('should write and read data into the buffer in UInt32', function () {
		var dataView = new DataView(new ArrayBuffer(4));
		var data;
		for (data = 0x0000; data <= 0xffffff; data += 0xff) {
			dataView.setUint32(0, data, true);
			assert.equal(dataView.getUint32(0, true), data);
			dataView.setUint32(0, data, false);
			assert.equal(dataView.getUint32(0, false), data);
		}
	});

});
