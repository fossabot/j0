'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function p(p1, p2, t) {
		return (1 - 3 * p2 + 3 * p1) * t * t * t + 3 * (p2 - 2 * p1) * t * t + 3 * p1 * t;
	}

	function cubicBezier(x1, y1, x2, y2, x) {
		function getT(lower, upper) {
			var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

			var t = (lower + upper) / 2;
			if (8 < depth) {
				return t;
			} else if (p(x1, x2, t) < x) {
				// gotten x is lower than x
				return getT(t, upper, depth + 1);
			} else {
				// gotten x is larger than x
				return getT(lower, t, depth + 1);
			}
		}
		return p(y1, y2, getT(0, 1));
	}

	describe('Math/cubicBezier', function () {

		it('should be linear', function () {
			var sum = 0;
			for (var t = 0; t <= 1; t += 0.1) {
				var d = cubicBezier(0, 0, 1, 1, t) - t;
				sum += d * d;
			}
			assert.equal(sum < 0.0001, true);
		});
	});
});
