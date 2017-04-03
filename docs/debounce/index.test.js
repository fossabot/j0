'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function debounce(fn) {
		var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
		var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;

		var timer = void 0;
		return function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			clearTimeout(timer);
			timer = setTimeout(function () {
				fn.call.apply(fn, [thisArg].concat(args));
			}, delay);
		};
	}

	describe('debounce', function () {

		it('should call the function after the last call', function () {
			return new Promise(function (resolve) {
				var execute = debounce(function (value) {
					resolve(value);
				}, 50);
				execute(1);
				execute(2);
				execute(3);
			}).then(function (result) {
				assert.equal(result, 3);
			});
		});
	});
});
