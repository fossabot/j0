'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	describe('XMLHttpRequest', function () {

		it('should get this page', function () {
			return new Promise(function (resolve, reject) {
				var xhr = new XMLHttpRequest();
				xhr.open('GET', '.');
				xhr.onerror = function () {
					reject(xhr.error);
				};
				xhr.onload = function () {
					resolve(xhr.response);
				};
				xhr.send();
			}).then(function (result) {
				assert.equal(/<!doctype/.test(result), true);
			});
		});
	});
});
