'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

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

	describe('FileReader/read', function () {

		it('should be a function', function () {
			return read;
		});
	});
});
