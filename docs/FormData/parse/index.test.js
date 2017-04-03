'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function trim(string) {
		return string.trim();
	}

	var iteratorKey = Symbol.iterator;

	function isFunction(x) {
		return typeof x === 'function';
	}

	var MAX_SAFE_INTEGER = 9007199254740991;

	function forEach(iterable, fn, thisArg) {
		var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var length = iterable.length;

		var iterator = iterable[iteratorKey] ? iterable[iteratorKey]() : iterable;
		if (0 <= length) {
			for (var index = fromIndex; index < length; index += 1) {
				if (fn.call(thisArg, iterable[index], index, iterable)) {
					return;
				}
			}
		} else if (isFunction(iterator.next)) {
			var _index = 0;
			while (_index < MAX_SAFE_INTEGER) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done || fromIndex <= _index && fn.call(thisArg, value, _index, iterable)) {
					return;
				}
				_index += 1;
			}
		} else {
			var _index2 = fromIndex;
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					if (fn.call(thisArg, value, _index2, iterable)) {
						return;
					}
					_index2 += 1;
				}
			} catch (err) {
				_didIteratorError = true;
				_iteratorError = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion && _iterator.return) {
						_iterator.return();
					}
				} finally {
					if (_didIteratorError) {
						throw _iteratorError;
					}
				}
			}
		}
	}

	function parse(body) {
		var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();

		forEach(trim(body).split('&'), function (data) {
			if (data) {
				var _data$split = data.split('='),
				    _data$split2 = _toArray(_data$split),
				    name = _data$split2[0],
				    parts = _data$split2.slice(1);

				name = decodeURIComponent(name.replace(/\+/g, ' '));
				parts = decodeURIComponent(parts.join('=').replace(/\+/g, ' '));
				form.append(name, parts);
			}
		});
		return form;
	}

	describe('FormData/parse', function () {

		it('should parse string', function () {
			var form = parse('a=b&c=d', {
				data: {},
				append: function append(key, value) {
					this.data[key] = value;
				}
			});
			assert.deepEqual(form.data, {
				a: 'b',
				c: 'd'
			});
		});
	});
});
