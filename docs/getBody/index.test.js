'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var INTERVAL = 100;

	var getBody = new Promise(function (resolve) {
		function get() {
			var _document = document,
			    body = _document.body;

			if (body) {
				resolve(body);
			} else {
				setTimeout(get, INTERVAL);
			}
		}
		get();
	});

	describe('getBody', function () {

		it('should return a promise', function () {
			return getBody.then(function (body) {
				assert.equal(!body.appendChild, false);
			});
		});
	});
});
