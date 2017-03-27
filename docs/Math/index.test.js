'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function clamp(x) {
		var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
		var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

		if (H < L) {
			var _ref = [H, L];
			L = _ref[0];
			H = _ref[1];
		}
		if (x < L) {
			x = L;
		} else if (H < x) {
			x = H;
		}
		return x;
	}

	describe('Math/clamp', function () {

		it('should return 1 if the arguments are [0, 1, 2]', function () {
			assert.equal(clamp(0, 1, 2), 1);
		});

		it('should return 2 if the arguments are [0, 2]', function () {
			assert.equal(clamp(0, 2), 2);
		});

		it('should return 2 if the arguments are [2, 1, 3]', function () {
			assert.equal(clamp(2, 1, 3), 2);
		});

		it('should return 2 if the arguments are [2, 3, 1]', function () {
			assert.equal(clamp(2, 3, 1), 2);
		});
	});
});
