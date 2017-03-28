'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function leftpad(x) {
		var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
		var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

		var s = x.toString();
		var pad = length - s.length;
		return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
	}

	describe('String/leftpad', function () {

		it('should pad a string with 0', function () {
			assert.equal(leftpad(1), '01');
		});

		it('should pad a string with 0 [length=10]', function () {
			assert.equal(leftpad(1, 10), '0000000001');
		});

		it('should pad a string with * [length=10]', function () {
			assert.equal(leftpad(1, 10, '*+='), '*********1');
		});
	});

	describe('String/polyfill', function () {

		it('should have repeat', function () {
			assert.equal('a'.repeat(2), 'aa');
		});
	});

	function repeat(s, length) {
		return s.repeat(length);
	}

	describe('String/repeat', function () {

		it('should repeat the string for specified times', function () {
			var src = '3';
			var count = 10;
			var expected = '3333333333';
			assert.equal(repeat(src, count), expected);
		});
	});
});
