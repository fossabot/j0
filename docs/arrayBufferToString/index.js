(function(){
'use strict';

/* global window */
var _window = window,
    String = _window.String;
var _window2 = window,
    Array = _window2.Array;
var _window3 = window,
    Uint8Array = _window3.Uint8Array;
var _window4 = window,
    Blob = _window4.Blob;
var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
}

var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

/* eslint-disable no-bitwise */
function consume(view, index, length) {
	var lastMask = lastMasks[length];
	var charCode = 0;
	var i = 0;
	while (0 < length--) {
		var mask = length === 0 ? lastMask : baseMask;
		var shiftSize = availableBits * i++;
		charCode |= (view[index + length] & mask) << shiftSize;
	}
	return String.fromCharCode(charCode);
}
/* eslint-enable no-bitwise */

function arrayBufferToString(arrayBuffer) {
	var view = new Uint8Array(arrayBuffer);
	var chars = [];
	for (var i = 0; i < view.length; i++) {
		var byte = view[i];
		var length = void 0;
		if (byte < 0x80) {
			length = 1;
		} else if (byte < 0xe0) {
			length = 2;
		} else if (byte < 0xf0) {
			length = 3;
		} else if (byte < 0xf8) {
			length = 4;
		} else if (byte < 0xfc) {
			length = 5;
		} else {
			length = 6;
		}
		push(chars, consume(view, i, length));
		i += length - 1;
	}
	return chars.join('');
}

function read(data, type) {
	var reader = new FileReader();
	var promise = new Promise(function (resolve, reject) {
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function () {
			reject(reader.error);
		};
		switch (type) {
			case 'ArrayBuffer':
				reader.readAsArrayBuffer(data);
				break;
			case 'BinaryString':
				reader.readAsBinaryString(data);
				break;
			case 'DataURL':
				reader.readAsDataURL(data);
				break;
			default:
				reader.readAsText(data);
				break;
		}
	});
	promise.reader = reader;
	return promise;
}

function createArrayBuffer(data) {
	return read(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', function () {
		var src = 'hello';
		return createArrayBuffer(src).then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});

	it('should return こんにちは', function () {
		var src = 'こんにちは';
		return createArrayBuffer(src).then(function (arrayBuffer) {
			assert.equal(arrayBufferToString(arrayBuffer), src);
		});
	});
});
}())
