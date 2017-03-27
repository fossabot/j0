'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('assert')) : typeof define === 'function' && define.amd ? define(['assert'], factory) : factory(global.assert);
})(undefined, function (assert) {
	'use strict';

	assert = 'default' in assert ? assert['default'] : assert;

	describe('setTimeout', function () {

		var WAIT = 100;
		var MARGIN = 0.9;

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
