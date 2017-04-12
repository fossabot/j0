'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	function throttle(fn) {
		var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var context = arguments[2];

		var lastArgs = [];
		var timer = null;
		var scheduled = false;
		function call() {
			var thisArg = isUndefined(context) ? this : context;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			lastArgs = args;
			if (timer) {
				scheduled = true;
			} else {
				fn.apply(thisArg, args);
				timer = setTimeout(function () {
					timer = null;
					if (scheduled) {
						scheduled = null;
						call.apply(thisArg, lastArgs);
					}
				}, interval);
			}
		}
		return call;
	}

	describe('throttle', function () {

		it('should call the function intermittently', function () {
			return new Promise(function (resolve) {
				var count = 0;
				var execute = throttle(function (value) {
					count += value;
					if (1 < count) {
						resolve(count);
					}
				}, 50);
				execute(1);
				execute(2);
				execute(3);
				execute(4);
				execute(5);
			}).then(function (result) {
				assert.equal(result, 6);
			});
		});
	});
});
