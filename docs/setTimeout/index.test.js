'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var WAIT = 50;
	var MARGIN = 0.9;

	describe('setTimeout', function () {

		it('should call fn after ' + WAIT + 'ms', function () {
			var start = Date.now();
			return new Promise(function (resolve) {
				setTimeout(resolve, WAIT);
			}).then(function () {
				var elapsed = Date.now() - start;
				assert.equal(WAIT * MARGIN < elapsed, true);
			});
		});
	});
});
