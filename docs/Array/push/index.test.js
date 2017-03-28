'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	describe('Array/push', function () {

		it('should append an item to an array', function () {
			var item = 3;
			var array = [0, 1, 2];
			var expected = [0, 1, 2, 3];
			push(array, item);
			assert.deepEqual(array, expected);
		});

		it('should append 3 items to an array', function () {
			var items = [3, 4, 5];
			var array = [0, 1, 2];
			var expected = [0, 1, 2, 3, 4, 5];
			push.apply(undefined, [array].concat(items));
			assert.deepEqual(array, expected);
		});

		it('should append an item to an array-like object', function () {
			var item = 3;
			var array = {
				0: 0,
				1: 1,
				2: 2,
				length: 3
			};
			push(array, item);
			assert.deepEqual(array, {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			});
		});

		it('should append 3 items to an array-like object', function () {
			var items = [3, 4, 5];
			var array = {
				0: 0,
				1: 1,
				2: 2,
				length: 3
			};
			push.apply(undefined, [array].concat(items));
			assert.deepEqual(array, {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				4: 4,
				5: 5,
				length: 6
			});
		});
	});
});
