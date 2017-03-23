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

	function every(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : iterable;

		var index = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				if (!fn.call(thisArg, value, index, iterable)) {
					return false;
				}
				index += 1;
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

		return true;
	}

	function isString(x) {
		return typeof x === 'string';
	}

	var isString$1 = function isString$1() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return every(args, isString);
	};

	function isNode() {
		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		return every(args, function (arg) {
			return arg instanceof Node;
		});
	}

	function setAttribute(element, attrName) {
		for (var _len3 = arguments.length, value = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
			value[_key3 - 2] = arguments[_key3];
		}

		element.setAttribute(attrName, value.join(' '));
	}

	function appendChild(parentNode) {
		for (var _len4 = arguments.length, newNodes = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
			newNodes[_key4 - 1] = arguments[_key4];
		}

		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = newNodes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var newNode = _step2.value;

				parentNode.appendChild(newNode);
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
	}

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	var isUndefined$1 = function isUndefined$1() {
		for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
			args[_key5] = arguments[_key5];
		}

		return every(args, isUndefined);
	};

	function getEvents(element) {
		var j0ev = element.j0ev;

		if (isUndefined$1(j0ev)) {
			j0ev = {};
			element.j0ev = j0ev;
		}
		return j0ev;
	}

	function addListener(events, eventName, fn) {
		var listeners = events[eventName];
		if (isUndefined$1(listeners)) {
			listeners = [];
			events[eventName] = listeners;
		}
		if (!listeners.includes(fn)) {
			listeners.push(fn);
		}
	}

	function addEventListener(element) {
		for (var _len6 = arguments.length, args = Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
			args[_key6 - 1] = arguments[_key6];
		}

		var fn = args.pop();
		var events = getEvents(element);
		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = args[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var eventName = _step3.value;

				element.addEventListener(eventName, fn);
				addListener(events, eventName, fn);
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
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = a.filter(noop)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _args = _step4.value;

				setAttribute.apply(undefined, [element].concat(_toConsumableArray(_args)));
			}
		} catch (err) {
			_didIteratorError4 = true;
			_iteratorError4 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion4 && _iterator4.return) {
					_iterator4.return();
				}
			} finally {
				if (_didIteratorError4) {
					throw _iteratorError4;
				}
			}
		}

		appendChild.apply(undefined, [element].concat(_toConsumableArray(c.filter(noop).map(createElement))));
		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			for (var _iterator5 = e.filter(noop)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				var _args2 = _step5.value;

				addEventListener.apply(undefined, [element].concat(_toConsumableArray(_args2)));
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5.return) {
					_iterator5.return();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		return element;
	}

	function createElement(data) {
		if (isNode(data)) {
			return data;
		} else if (isString$1(data)) {
			return document.createTextNode(data);
		}
		return processTace(data);
	}

	function getAttribute(element, attributeName) {
		return element.getAttribute(attributeName);
	}

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
