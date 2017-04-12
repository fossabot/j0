'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	var iteratorKey = Symbol.iterator;

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	describe('Symbol/iterator', function () {

		it('should not be undefined', function () {
			assert.equal(isUndefined(iteratorKey), false);
		});
	});

	describe('Symbol/polyfill', function () {

		it('should generate a new symbol', function () {
			var s1 = Symbol();
			var s2 = Symbol();
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol even if they have same key', function () {
			var key = 'key';
			var s1 = Symbol(key);
			var s2 = Symbol(key);
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol unless the symbol has created by Symbol.for', function () {
			var key = 'key';
			var s1 = Symbol(key);
			var s2 = Symbol.for(key);
			assert.equal(s1 !== s2, true);
		});

		it('should get a symbol from a key', function () {
			var key = 'key1';
			var s = Symbol.for(key);
			assert.equal(Symbol.for(key), s);
		});

		it('should get a key from a symbol', function () {
			var key = 'key1';
			var s = Symbol.for(key);
			assert.equal(Symbol.keyFor(s), key);
		});

		it('should have Symbol.iterator', function () {
			assert.equal(!Symbol.iterator, false);
		});
	});
});
