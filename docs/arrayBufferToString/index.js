(function(){
'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var Uint8Array = window.Uint8Array;

var fromCharCode = String.fromCharCode;


var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

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
		var lastMask = lastMasks[length];
		var charCode = 0;
		var j = 0;
		var offset = length;
		while (0 < offset--) {
			var mask = offset === 0 ? lastMask : baseMask;
			/* eslint-disable no-bitwise */
			charCode |= (view[i + offset] & mask) << availableBits * j++;
			/* eslint-disable no-bitwise */
		}
		chars.push(charCode);
		i += length - 1;
	}
	var strings = [];
	var chunkLength = 4096;
	while (0 < chars.length) {
		strings.push(fromCharCode.apply(undefined, _toConsumableArray(chars.splice(0, chunkLength))));
	}
	return strings.join('');
}

var FileReader = window.FileReader;

function readBlob(data, type) {
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
	return readBlob(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						src = 'hello';
						_context.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));

	it('should return こんにちは', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						src = 'こんにちは';
						_context2.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context2.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));

	it('should return wagahaiha-nekodearu.txt', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						_context3.next = 2;
						return fetch('wagahaiha-nekodearu.txt');

					case 2:
						_context3.next = 4;
						return _context3.sent.text();

					case 4:
						src = _context3.sent;
						_context3.next = 7;
						return createArrayBuffer(src);

					case 7:
						arrayBuffer = _context3.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 9:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});
}())
