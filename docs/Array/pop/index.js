'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function pop(array) {
		return array.pop();
	}

	describe('Array/pop', function () {

		it('should return the last item of array', function () {
			var array = [1, 2, 3, 4, 5];
			var actual = pop(array);
			var expected1 = 5;
			var expected2 = [1, 2, 3, 4];
			assert.equal(actual, expected1);
			assert.deepEqual(array, expected2);
		});
	});
});
