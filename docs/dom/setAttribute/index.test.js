'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isString(x) {
		return typeof x === 'string';
	}

	function isNode(x) {
		return x instanceof Node;
	}

	function noop(x) {
		return x;
	}

	function setAttribute(element, attrName) {
		for (var _len = arguments.length, value = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			value[_key - 2] = arguments[_key];
		}

		element.setAttribute(attrName, value.join(' '));
	}

	function appendChild(parentNode) {
		for (var _len2 = arguments.length, newNodes = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			newNodes[_key2 - 1] = arguments[_key2];
		}

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = newNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var newNode = _step.value;

				parentNode.appendChild(newNode);
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
				allEvents[eventName] = events;
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
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = a.filter(noop)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var args = _step2.value;

				setAttribute.apply(undefined, [element].concat(_toConsumableArray(args)));
			}
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		appendChild.apply(undefined, [element].concat(_toConsumableArray(c.filter(noop).map(createElement))));
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = e.filter(noop)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _args = _step3.value;

				addEventListener.apply(undefined, [element].concat(_toConsumableArray(_args)));
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

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

	function getAttribute(element, attributeName) {
		return element.getAttribute(attributeName);
	}

	describe('dom/setAttribute', function () {

		it('should set an attribute to an element', function () {
			var attributeName = 'a';
			var attributeValue = 'b';
			var element = createElement({});
			setAttribute(element, attributeName, attributeValue);
			assert.equal(getAttribute(element, attributeName), attributeValue);
		});

		it('should set a "data-" prefixed attribute to an element', function () {
			var attributeName = 'data-a';
			var attributeValue = 'b';
			var element = createElement({});
			setAttribute(element, attributeName, attributeValue);
			assert.equal(getAttribute(element, attributeName), attributeValue);
		});
	});
});
