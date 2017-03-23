'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
	}

	describe('noop', function () {

		it('should be callable', function () {
			assert.doesNotThrow(function () {
				noop();
			});
		});

		it('should return the first argument', function () {
			var data = new Date();
			assert.equal(noop(data), data);
		});
	});
});
