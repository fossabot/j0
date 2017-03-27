'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function onError(error) {
		onError.listener(error);
	}

	onError.listener = function (error) {
		console.error(error);
	};

	describe('onError', function () {

		it('should call its listener', function () {
			var count = 0;
			function listener(x) {
				count += x;
			}
			onError.listener = listener;
			onError(1);
			onError(2);
			assert.equal(count, 3);
		});
	});
});
