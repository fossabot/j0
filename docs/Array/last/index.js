'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function last(arrayLike) {
		return arrayLike[arrayLike.length - 1];
	}

	describe('Array/last', function () {

		it('should return the last item of an array', function () {
			var array = [1, 2, 3];
			assert.equal(last(array), 3);
		});

		it('should return the last item of an array-like object', function () {
			var arrayLike = {
				2: 3,
				length: 3
			};
			assert.equal(last(arrayLike), 3);
		});
	});
});
