var Promise = require('./Promise');
var ArrayBuffer = require('./ArrayBuffer');
var DataView = require('./DataView');
var Error = require('./Error');
var bufferToArrayBuffer = require('./blobToArrayBuffer');
var push = require('./push');
var slice = require('./slice');
var String = require('./String');
var Uint8Array = require('./Uint8Array');
var getUint16 = function (data, offset, endian) {
	return data.getUint16(offset, endian);
};
var getUint32 = function (data, offset, endian) {
	return data.getUint32(offset, endian);
};
var getInt32 = function (data, offset, endian) {
	return data.getInt32(offset, endian);
};
module.exports = function (file) {
	var app1Offset = 2;
	return (file instanceof ArrayBuffer ? Promise.resolve(file) : bufferToArrayBuffer(file)).then(function (data) {
		data = new DataView(data);
		if (getUint16(data, 0) !== 0xffd8) {
			throw new Error('Invalid SOI');
		}
		return data;
	}).then(function (data) {
		var app = getUint16(data, app1Offset);
		if (app === 0xffe0) {
			app1Offset += 2 + getUint16(data, app1Offset + 2);
		} else if (app !== 0xffe1) {
			throw new Error('Invalid structure');
		}
		return data;
	}).then(function (data) {
		var app1 = getUint16(data, app1Offset) !== 0xffe1 && 'APP1';
		var exifId = getUint32(data, app1Offset + 4) + getUint16(data, app1Offset + 8) !== 0x45786966 && 'ExifID';
		// var tiffId = getUint16(data, app1Offset + 12) !== 0x2a && 'TIFFID';
		// var error = app1 || exifId || tiffId;
		var error = app1 || exifId;
		if (error) {
			throw new Error('Invalid ' + error);
		}
		return data;
	}).then(function (data) {
		/* jshint -W074 */
		var tiffHeaderOffset = app1Offset + 10;
		var endian = getUint16(data, tiffHeaderOffset);
		var addTag = function (offset, tags) {
			var size;
			var parser;
			var value;
			var tag = getUint16(data, offset, endian);
			var type = getUint16(data, offset + 2, endian);
			var count = getUint32(data, offset + 4, endian);
			switch (type) {
				case 7:
				case 1:
					// BYTE
					size = count;
					parser = function (x) {
						return new Uint8Array(x);
					};
					break;
				case 2:
					// ASCII
					size = count;
					parser = function (x) {
						return String.fromCharCode.apply(null, new Uint8Array(slice(x, 0, -1)));
					};
					break;
				case 3:
					// SHORT
					size = 2 * count;
					parser = function (x) {
						var values = [];
						var i;
						x = new DataView(x);
						for (i = 0; i < count; i++) {
							values[i] = getUint16(x, i * 2, endian);
						}
						return values;
					};
					break;
				case 4:
					// LONG
					size = 4 * count;
					parser = function (x) {
						var values = [];
						var i;
						x = new DataView(x);
						for (i = 0; i < count; i++) {
							values[i] = getUint32(x, i * 4, endian);
						}
						return values;
					};
					break;
				case 5:
					// RATIONAL
					size = 8 * count;
					parser = function (x) {
						var values = [];
						var i;
						x = new DataView(x);
						for (i = 0; i < count; i++) {
							values[i] = [getUint32(x, i * 8, endian), getUint32(x, i * 8 + 4, endian)];
						}
						return values;
					};
					break;
				case 9:
					// SLONG
					size = 4 * count;
					parser = function (x) {
						var values = [];
						var i;
						x = new DataView(x);
						for (i = 0; i < count; i++) {
							values[i] = getInt32(x, i * 4, endian);
						}
						return values;
					};
					break;
				case 10:
					// SRATIONAL
					size = 8 * count;
					parser = function (x) {
						var values = [];
						var i;
						x = new DataView(x);
						for (i = 0; i < count; i++) {
							values[i] = [getInt32(x, i * 8, endian), getInt32(x, i * 8 + 4, endian)];
						}
						return values;
					};
					break;
			}
			offset = getUint32(data, offset + 8, endian);
			if (size < 5) {
				/* jshint -W016 */
				value = new DataView(slice(data.buffer, 0, size));
				if (size === 1) {
					if (endian) {
						value.setUint8(0, offset & 0xff);
					} else {
						value.setUint8(0, (offset >> 16) & 0xff);
					}
				} else if (size === 2) {
					if (endian) {
						value.setUint16(0, offset & 0xffff, endian);
					} else {
						value.setUint16(0, (offset >> 16) & 0xffff, endian);
					}
				} else if (size === 3) {
					if (endian) {
						value.setUint8(0, (offset >> 8) & 0xff);
						value.setUint8(1, (offset >> 16) & 0xff);
						value.setUint8(2, (offset >> 24) & 0xff);
					} else {
						value.setUint8(0, (offset >> 16) & 0xff);
						value.setUint8(1, (offset >> 8) & 0xff);
						value.setUint8(2, (offset >> 0) & 0xff);
					}
				} else {
					value.setUint32(0, offset, endian);
				}
				value = value.buffer;
			} else {
				value = slice(data.buffer, tiffHeaderOffset + offset, tiffHeaderOffset + offset + size);
				offset += tiffHeaderOffset;
			}
			switch (tag) {
				case 0xa005:
				case 0x8769:
				case 0x8825:
					addTags(tiffHeaderOffset + getUint32(new DataView(value), 0, endian), tags);
					break;
				case 0x927c:
					break;
				default:
					push(tags, [tag, parser(value)]);
			}
		};
		var addTags = function (offset, tags) {
			var tagCount = getUint16(data, offset, endian);
			offset += 2;
			while (0 < tagCount--) {
				addTag(offset, tags);
				offset += 12;
			}
			return tags;
		};
		if (endian === 0x4d4d) {
			// Big endian
			endian = false;
		} else if (endian === 0x4949) {
			// Little endian
			endian = true;
		} else {
			throw new Error('Invalid endian');
		}
		return addTags(tiffHeaderOffset + getUint32(data, tiffHeaderOffset + 4, endian), []);
	});
};
