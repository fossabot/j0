'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(require('assert')) : typeof define === 'function' && define.amd ? define(['assert'], factory) : factory(global.assert);
})(undefined, function (assert) {
	'use strict';

	assert = 'default' in assert ? assert['default'] : assert;

	var WAIT = 100;

	describe('clearTimeout', function () {

		it('should cancel calling', function () {
			var count = 0;
			return new Promise(function (resolve) {
				var timer = setTimeout(function () {
					count += 1;
				});
				clearTimeout(timer);
				setTimeout(resolve, WAIT);
			}).then(function () {
				assert.equal(count, 0);
			});
		});
	});
});
