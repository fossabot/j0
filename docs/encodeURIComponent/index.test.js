'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	describe('encodeURIComponent', function () {

		it('should encode an decoded string', function () {
			assert.equal(encodeURIComponent('こんにちは'), '%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF');
		});
	});
});
