'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var isArray = Array.isArray;

	function createArrayFromArguments() {
		return Array.from(arguments);
	}

	describe('Array/from', function () {

		it('should create a new instance of array from arguments', function () {
			var result = createArrayFromArguments(1, 2, 3);
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});

		it('should create a new instance of array from an array-like object', function () {
			var result = Array.from({
				0: 1,
				1: 2,
				2: 3,
				length: 3
			});
			assert.equal(isArray(result), true);
			assert.deepEqual(result, [1, 2, 3]);
		});
	});
});
