'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function noop(x) {
		return x;
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

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function filter(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function (value, index, iterable2) {
			if (fn.call(thisArg, value, index, iterable2)) {
				push(result, value);
			}
		});
		return result;
	}

	function childNodes(node) {
		return node.childNodes;
	}

	function children(node) {
		return filter(childNodes(node), function (_ref) {
			var _ref$nodeType = _ref.nodeType,
			    nodeType = _ref$nodeType === undefined ? 0 : _ref$nodeType;

			return nodeType === 1;
		});
	}

	function isString(x) {
		return typeof x === 'string';
	}

	function isNode(x) {
		return x instanceof Node;
	}

	function setAttribute(element, attrName) {
		for (var _len2 = arguments.length, value = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
			value[_key2 - 2] = arguments[_key2];
		}

		element.setAttribute(attrName, value.join(' '));
	}

	function appendChild(parentNode, newNode) {
		parentNode.appendChild(newNode);
	}

	var key = Symbol('events');

	function getEventListeners(element) {
		var eventName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

		var allEvents = element[key];
		var events = void 0;
		if (!allEvents) {
			allEvents = new Map();
			element[key] = allEvents;
		}
		if (eventName) {
			events = allEvents.get(eventName);
			if (!events) {
				events = new Set();
				allEvents.set(eventName, events);
			}
			return events;
		}
		return allEvents;
	}

	function addEventListener(element, eventName, fn) {
		element.addEventListener(eventName, fn);
		getEventListeners(element, eventName).add(fn);
	}

	function processTace() {
		var tace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
		var _tace$t = tace.t,
		    t = _tace$t === undefined ? 'div' : _tace$t,
		    _tace$a = tace.a,
		    a = _tace$a === undefined ? [] : _tace$a,
		    _tace$c = tace.c,
		    c = _tace$c === undefined ? [] : _tace$c,
		    _tace$e = tace.e,
		    e = _tace$e === undefined ? [] : _tace$e;

		var element = document.createElement(t);
		forEach(filter(a), function (args) {
			setAttribute.apply(undefined, [element].concat(_toConsumableArray(args)));
		});
		forEach(filter(c), function (data) {
			appendChild(element, createElement(data));
		});
		forEach(filter(e), function (args) {
			addEventListener.apply(undefined, [element].concat(_toConsumableArray(args)));
		});
		return element;
	}

	function createElement(data) {
		if (isNode(data)) {
			return data;
		} else if (isString(data)) {
			return document.createTextNode(data);
		}
		return processTace(data);
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function (value, index) {
			push(result, fn.call(thisArg, value, index, iterable));
		});
		return result;
	}

	describe('dom/children', function () {

		it('should get a list of children', function () {
			var c1 = createElement('c1');
			var c2 = createElement();
			var parent = createElement({
				c: [c1, c2]
			});
			assert.deepEqual(map(children(parent)), [c2]);
		});
	});
});