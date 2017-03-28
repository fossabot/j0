'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isNode(x) {
		return x instanceof Node;
	}

	describe('isNode', function () {

		it('should return false if the arguments are []', function () {
			assert.equal(isNode(), false);
		});

		it('should return false if the arguments are [null]', function () {
			assert.equal(isNode(null), false);
		});

		it('should return false if the arguments are [NaN]', function () {
			assert.equal(isNode(NaN), false);
		});

		it('should return false if the arguments are [123]', function () {
			assert.equal(isNode(123), false);
		});

		it('should return false if the arguments are [\'abc\']', function () {
			assert.equal(isNode('abc'), false);
		});

		it('should return false if the arguments are [{}]', function () {
			assert.equal(isNode({}), false);
		});

		it('should return false if the arguments are [[]]', function () {
			assert.equal(isNode([]), false);
		});

		it('should return false if the arguments are [function () {}]', function () {
			assert.equal(isNode(function () {}), false);
		});
	});
});
