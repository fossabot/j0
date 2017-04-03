'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isInstanceOf(instance, constructor) {
		return instance instanceof constructor;
	}

	describe('isInstanceOf', function () {

		it('should return true if the first argument is an instance of the last argument', function () {
			var A = function A() {
				_classCallCheck(this, A);
			};

			var a = new A();
			assert.equal(isInstanceOf(a, A), true);
		});

		it('should return false if the first argument is not an instance of the last argument', function () {
			var A = function A() {
				_classCallCheck(this, A);
			};

			var a = 0;
			assert.equal(isInstanceOf(a, A), false);
		});
	});
});
