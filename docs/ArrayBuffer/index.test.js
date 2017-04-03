'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	var lastMasks = [0x3f, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
	var availableBits = 6;
	var baseMask = lastMasks[0];

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
		console.log(data);
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

	describe('ArrayBuffer', function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new ArrayBuffer(1);
			});
		});
	});
});
