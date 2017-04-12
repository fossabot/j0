'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function forEachKey(obj, fn, thisArg) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn.call(thisArg, obj[key], key, obj)) {
					return;
				}
			}
		}
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	describe('Object/forEachKey', function () {

		it('should iterate over an object', function () {
			var obj = {
				a: 0,
				b: 1
			};
			var results = [];
			forEachKey(obj, function () {
				for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
					args[_key2] = arguments[_key2];
				}

				push(results, args);
			});
			assert.deepEqual(results, [[0, 'a', obj], [1, 'b', obj]]);
		});

		it('should stop iteration if fn returns truthy value', function () {
			var obj = {
				a: 0,
				b: 1
			};
			var results = [];
			forEachKey(obj, function () {
				for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
					args[_key3] = arguments[_key3];
				}

				push(results, args);
				return true;
			});
			assert.deepEqual(results, [[0, 'a', obj]]);
		});

		it('should ignore properties which is not its own', function () {
			var obj = [1, 2];
			var results = [];
			forEachKey(obj, function () {
				for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
					args[_key4] = arguments[_key4];
				}

				push(results, args);
			});
			assert.deepEqual(results, [[1, '0', obj], [2, '1', obj]]);
		});
	});

	function toString(o) {
		return Object.prototype.toString.call(o);
	}

	describe('Object/toString', function () {

		it('should convert [] to [object Array]', function () {
			var value = [];
			var expected = '[object Array]';
			assert.equal(toString(value), expected);
		});
	});
});
