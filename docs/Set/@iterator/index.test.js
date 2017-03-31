'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function generator() {
		return this.values();
	}

	describe('Set/@iterator', function () {

		it('should return an iterator', function () {
			var data = [1, 2];
			var map = new Set(data);
			var iterator = generator.call(map);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, data);
		});
	});
});
