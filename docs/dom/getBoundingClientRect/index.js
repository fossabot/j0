(function(){
'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function getBoundingClientRect(element) {
	var _element$getBoundingC = element.getBoundingClientRect(),
	    left = _element$getBoundingC.left,
	    top = _element$getBoundingC.top,
	    width = _element$getBoundingC.width,
	    height = _element$getBoundingC.height;

	return {
		left: left,
		right: left + width,
		top: top,
		bottom: top + height,
		width: width,
		height: height,
		cx: left + width / 2,
		cy: top + height / 2
	};
}

function appendChild(parentNode, newNode) {
	parentNode.appendChild(newNode);
}

function parentNode(node) {
	return node.parentNode;
}

function removeChild(childNode) {
	var parentElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : parentNode(childNode);

	if (parentElement) {
		parentElement.removeChild(childNode);
	}
}

function setStyle(element, name, value) {
	element.style[name] = value;
}

var _window = window,
    String = _window.String,
    Object = _window.Object,
    parseInt = _window.parseInt,
    ArrayBuffer = _window.ArrayBuffer,
    DataView = _window.DataView,
    location = _window.location,
    navigator = _window.navigator,
    document$1 = _window.document,
    setTimeout = _window.setTimeout,
    clearTimeout = _window.clearTimeout,
    decodeURIComponent = _window.decodeURIComponent,
    encodeURIComponent = _window.encodeURIComponent,
    TypeError = _window.TypeError,
    Uint8Array = _window.Uint8Array,
    Uint8ClampedArray = _window.Uint8ClampedArray,
    Uint16Array = _window.Uint16Array,
    Uint32Array = _window.Uint32Array,
    Int8Array = _window.Int8Array,
    Int16Array = _window.Int16Array,
    Int32Array = _window.Int32Array,
    Float32Array = _window.Float32Array,
    Float64Array = _window.Float64Array;


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
				var _value = _step.value;

				if (fn.call(thisArg, _value, _index2, iterable)) {
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

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		args[_key2 - 1] = arguments[_key2];
	}

	return arrayPush.apply(arrayLike, args);
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

	var element = document$1.createElement(t);
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
		return document$1.createTextNode(data);
	}
	return processTace(data);
}

describe('dom/getBoundingClientRect', function () {

	var element = void 0;

	beforeEach(function () {
		element = createElement();
		appendChild(document.body, element);
	});

	afterEach(function () {
		removeChild(element, document.body);
	});

	it('should return a rect', function () {
		var expected = {
			left: 50,
			top: 60,
			width: 70,
			height: 80
		};
		setStyle(element, 'position', 'fixed');
		setStyle(element, 'left', expected.left + 'px');
		setStyle(element, 'top', expected.top + 'px');
		setStyle(element, 'width', expected.width + 'px');
		setStyle(element, 'height', expected.height + 'px');
		setStyle(element, 'margin', 0);
		appendChild(document.body, element);
		var rect = getBoundingClientRect(element);
		assert.deepEqual({
			left: rect.left,
			top: rect.top,
			width: rect.width,
			height: rect.height
		}, expected);
	});
});
}())
