'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function addClass(element, className) {
		element.classList.add(className);
	}

	function isString(x) {
		return typeof x === 'string';
	}

	function isNode(x) {
		return x instanceof Node;
	}

	function setAttribute(element, attrName) {
		for (var _len = arguments.length, value = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
			value[_key - 2] = arguments[_key];
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

	function noop(x) {
		return x;
	}

	function forEach(iterable, fn, thisArg) {
		var index = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				if (fn.call(thisArg, value, index, iterable)) {
					return;
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
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
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

	function hasClass(element, className) {
		return element.classList.contains(className);
	}

	describe('dom/addClass', function () {

		it('should add a class', function () {
			var element = createElement({});
			var className = 'abc';
			assert.equal(hasClass(element, className), false);
			addClass(element, className);
			assert.equal(hasClass(element, className), true);
		});
	});

	describe('dom/addEventListener', function () {

		it('should add a listener', function () {
			function fn() {}
			var element = createElement();
			var eventName = 'abc';
			addEventListener(element, eventName, fn);
			assert.equal(getEventListeners(element, eventName).has(fn), true);
		});
	});

	describe('dom/appendChild', function () {

		it('should append an element', function () {
			var parent = createElement();
			var child = createElement();
			appendChild(parent, child);
			assert.equal(child.parentNode, parent);
		});

		it('should append a text element', function () {
			var parent = createElement();
			var child = createElement('text');
			appendChild(parent, child);
			assert.equal(child.parentNode, parent);
		});
	});

	describe('dom/createElement', function () {

		it('should create a <div>', function () {
			var element = createElement();
			assert.equal(element.tagName.toLowerCase(), 'div');
		});
	});

	function removeChild(parentElement, childNode) {
		parentElement.removeChild(childNode);
	}

	function empty(element) {
		while (element.firstChild) {
			removeChild(element, element.firstChild);
		}
	}

	describe('dom/empty', function () {

		it('should clear an element', function () {
			var element = createElement({ c: ['abc'] });
			assert.equal(element.childNodes.length, 1);
			empty(element);
			assert.equal(element.childNodes.length, 0);
		});
	});

	function getAttribute(element, attributeName) {
		return element.getAttribute(attributeName);
	}

	describe('dom/getAttribute', function () {

		it('should get an attribute from an element', function () {
			var attributeName = 'a';
			var attributeValue = 'b';
			var element = createElement({
				a: [[attributeName, attributeValue]]
			});
			assert.equal(getAttribute(element, attributeName), attributeValue);
		});

		it('should get a "data-" prefixed attribute from an element', function () {
			var attributeName = 'data-a';
			var attributeValue = 'b';
			var element = createElement({
				a: [[attributeName, attributeValue]]
			});
			assert.equal(getAttribute(element, attributeName), attributeValue);
		});
	});

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		forEach(iterable, function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			push(result, fn.call.apply(fn, [thisArg].concat(args)));
		});
		return result;
	}

	describe('dom/getEventListeners', function () {

		it('should get a Map', function () {
			function fn1() {}
			function fn2() {}
			var eventName1 = 'abc';
			var eventName2 = 'def';
			var element = createElement({
				e: [[eventName1, fn1], [eventName2, fn2]]
			});
			var result = getEventListeners(element);
			assert.deepEqual(map(result.keys()), [eventName1, eventName2]);
			assert.deepEqual(map(result.values(), function (set) {
				return map(set);
			}), [[fn1], [fn2]]);
		});

		it('should get a Set', function () {
			function fn1() {}
			function fn2() {}
			var eventName1 = 'abc';
			var eventName2 = 'def';
			var element = createElement({
				e: [[eventName1, fn1], [eventName2, fn2]]
			});
			var result = getEventListeners(element, eventName2);
			assert.deepEqual(map(result), [fn2]);
		});
	});

	function getScrollY(element) {
		return element ? element.scrollTop : window.pageYOffset;
	}

	describe('getScrollY', function () {

		it('should return a non-negative integer', function () {
			assert.equal(0 <= getScrollY(), true);
		});
	});

	describe('dom/createElement', function () {

		it('should return true if the element has the class', function () {
			var className = 'abc';
			var element = createElement({
				a: [['class', className]]
			});
			assert.equal(hasClass(element, className), true);
		});

		it('should return false if the element does not have the class', function () {
			var className1 = 'abc';
			var className2 = 'def';
			var element = createElement({
				a: [['class', className1]]
			});
			assert.equal(hasClass(element, className2), false);
		});
	});

	function hasEventListener(element, eventName, fn) {
		var events = getEventListeners(element, fn ? eventName : null);
		return events && events.has(fn ? fn : eventName);
	}

	describe('dom/hasEventListener', function () {

		it('should return true if the element has a listener for abc events', function () {
			function fn() {}
			var eventName = 'abc';
			var element = createElement({
				e: [[eventName, fn]]
			});
			assert.equal(hasEventListener(element, eventName), true);
		});

		it('should return false if the element has no listeners for abc events', function () {
			function fn() {}
			var eventName1 = 'abc';
			var eventName2 = 'def';
			var element = createElement({
				e: [[eventName2, fn]]
			});
			assert.equal(hasEventListener(element, eventName1), false);
		});

		it('should return true if the element has a specified listener for abc events', function () {
			function fn() {}
			var eventName = 'abc';
			var element = createElement({
				e: [[eventName, fn]]
			});
			assert.equal(hasEventListener(element, eventName, fn), true);
		});

		it('should return false if the element does not have a specified listener for abc events', function () {
			function fn() {}
			function fn2() {}
			var eventName = 'abc';
			var element = createElement({
				e: [[eventName, fn]]
			});
			assert.equal(hasEventListener(element, eventName, fn2), false);
		});
	});

	function querySelectorAll(element, selectors) {
		return (element === null ? document : element).querySelector(selectors);
	}

	describe('dom/querySelector', function () {

		it('should get an element', function () {
			var className = 'abc';
			var child = createElement({
				a: [['class', className]]
			});
			var parent = createElement({
				c: [{ c: [child] }]
			});
			assert.equal(querySelectorAll(parent, '.' + className), child);
		});
	});

	function querySelectorAll$1(element, selectors) {
		return (element === null ? document : element).querySelectorAll(selectors);
	}

	describe('dom/querySelectorAll', function () {

		it('should get elements', function () {
			var className = 'abc';
			var child1 = createElement({
				a: [['class', className]]
			});
			var child2 = createElement({
				a: [['class', className]]
			});
			var parent = createElement({
				c: [{ c: [child1] }, child2]
			});
			assert.deepEqual(map(querySelectorAll$1(parent, '.' + className)), [child1, child2]);
		});
	});

	function removeAttribute(element, attributeName) {
		element.removeAttribute(attributeName);
	}

	describe('dom/removeAttribute', function () {

		it('should remove an arrtibute', function () {
			var attrName = 'abc';
			var value = '1';
			var element = createElement({
				a: [[attrName, value]]
			});
			assert.equal(getAttribute(element, attrName), value);
			removeAttribute(element, attrName);
			assert.equal(getAttribute(element, attrName), null);
		});
	});

	describe('dom/removeChild', function () {

		it('should remove a child', function () {
			var child = createElement();
			var parent = createElement({ c: [child] });
			assert.equal(child.parentNode, parent);
			removeChild(parent, child);
			assert.equal(child.parentNode, null);
		});
	});

	function removeClass(element, className) {
		element.classList.remove(className);
	}

	describe('dom/removeClass', function () {

		it('should add a class', function () {
			var className = 'abc';
			var element = createElement({
				a: [['class', className]]
			});
			assert.equal(hasClass(element, className), true);
			removeClass(element, className);
			assert.equal(hasClass(element, className), false);
		});
	});

	function removeEventListener(element, eventName, fn) {
		var events = getEventListeners(element, eventName);
		if (fn) {
			element.removeEventListener(eventName, fn);
			events.delete(fn);
		} else if (eventName) {
			forEach(events, function (f) {
				removeEventListener(element, eventName, f);
			});
			events.clear();
		} else {
			forEach(events, function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    set = _ref2[1];

				forEach(set, function (f) {
					removeEventListener(element, key, f);
				});
			});
		}
	}

	describe('dom/removeEventListener', function () {

		it('should remove a listener', function () {
			function fn() {}
			var eventName = 'abc';
			var element = createElement({
				e: [[eventName, fn]]
			});
			assert.equal(hasEventListener(element, eventName, fn), true);
			removeEventListener(element, eventName, fn);
			assert.equal(hasEventListener(element, eventName, fn), false);
		});
	});

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

	function setStyle(element, name, value) {
		element.style[name] = value;
	}

	describe('dom/setStyle', function () {

		it('should set css property', function () {
			var element = createElement();
			var key = 'color';
			var value = 'rgb(0, 0, 0)';
			setStyle(element, key, value);
			assert.equal(/color\s*:\s*rgb\(\s*0\s*,\s*0\s*,\s*0\s*\)/.test(getAttribute(element, 'style')), true);
		});
	});

	function setTextContent(node, text) {
		node.textContent = text;
	}

	describe('dom/setTextContent', function () {

		it('should set a text', function () {
			var element = createElement();
			var text = 'abc';
			assert.equal(element.childNodes.length, 0);
			setTextContent(element, text);
			assert.equal(element.textContent, text);
		});
	});

	function toggleClass(element, className) {
		return element.classList.toggle(className);
	}

	describe('dom/toggleClass', function () {

		it('should add a class', function () {
			var element = createElement({});
			var className = 'abc';
			toggleClass(element, className);
			assert.equal(hasClass(element, className), true);
		});

		it('should remove a class', function () {
			var element = createElement({});
			var className = 'abc';
			toggleClass(element, className);
			assert.equal(hasClass(element, className), true);
			toggleClass(element, className);
			assert.equal(hasClass(element, className), false);
		});
	});

	var Event = CustomEvent;
	try {
		new Event('G');
	} catch (error) {
		Event = null;
	}
	var CustomEvent$1 = Event;

	var createEvent = void 0;

	if (CustomEvent$1) {
		createEvent = function createEvent(eventName, data) {
			return new CustomEvent$1(eventName, {
				detail: data,
				bubbles: false,
				cancelable: false
			});
		};
	} else {
		createEvent = function createEvent(eventName, data) {
			var event = document.createEvent('CustomEvent');
			event.initCustomEvent(eventName, false, false, data);
			return event;
		};
	}

	function trigger(element, eventName, data) {
		element.dispatchEvent(createEvent(eventName, data));
	}

	describe('dom/trigger', function () {

		it('should trigger an event', function () {
			var count = 0;
			var element = createElement({
				e: [['abc', function () {
					count += 1;
				}]]
			});
			trigger(element, 'abc');
			assert.equal(count, 1);
		});
	});
});