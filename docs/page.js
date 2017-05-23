(function(){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var createNavigation = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var root, response, tree, pathname, basePath, rootBranch, parseBranch, nav;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						parseBranch = function parseBranch(parent, name, base) {
							var childElements = [];
							forEachKey(parent, function (branch, key) {
								push(childElements, parseBranch(branch, key, base ? base + '/' + name : name));
							});
							var ul = 0 < childElements.length ? {
								t: 'ul',
								c: childElements
							} : null;
							return name ? {
								t: 'li',
								c: [{
									t: 'a',
									a: [['href', base ? base + '/' + name : name]],
									c: [name]
								}, ul]
							} : ul;
						};

						root = getTextContent(getElementById('root'));
						_context.next = 4;
						return fetch(root + '/sitemap.json');

					case 4:
						response = _context.sent;
						_context.next = 7;
						return response.json();

					case 7:
						tree = _context.sent;
						pathname = location.pathname;
						basePath = '/' + normalizeUrl(pathname + '/' + root) + '/';
						rootBranch = reduce(pathname.replace(basePath, '').split('/'), function (parent, name) {
							return name ? parent[name] : parent;
						}, tree);
						nav = parseBranch(rootBranch, '', '');

						if (nav) {
							insertAfter(createElement(nav), getElementById('title'));
						}

					case 13:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function createNavigation() {
		return _ref.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var _window = window,
    String = _window.String,
    Uint8Array = _window.Uint8Array,
    ArrayBuffer = _window.ArrayBuffer,
    DataView = _window.DataView,
    location = _window.location,
    navigator = _window.navigator,
    document = _window.document,
    setTimeout = _window.setTimeout,
    clearTimeout = _window.clearTimeout;


var INTERVAL = 100;

var getBody = new Promise(function (resolve) {
	function get() {
		var body = document.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout(get, INTERVAL);
		}
	}
	get();
});

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

function parentNode(node) {
	return node.parentNode;
}

function insertBefore(newNode, referenceNode) {
	var parent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : parentNode(referenceNode);

	return parent.insertBefore(newNode, referenceNode);
}

function nextSibling(element) {
	return element.nextSibling;
}

function firstChild(element) {
	return element.firstChild;
}

function insertAfter(newNode, referenceNode, parentNode) {
	return insertBefore(newNode, referenceNode ? nextSibling(referenceNode) : firstChild(parentNode), parentNode);
}

function querySelectorAll(selectors) {
	var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return element.querySelector(selectors);
}

function getElementById(id, element) {
	return querySelectorAll('[id=\'' + id + '\']', element);
}

function getTextContent(node) {
	return node ? node.textContent : '';
}

function appendChild(parentNode, newNode) {
	parentNode.appendChild(newNode);
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

function reduce(iterable, fn) {
	var initialValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	var thisArg = arguments[3];

	var result = initialValue;
	forEach(iterable, function (item, index) {
		result = fn.call(thisArg, result, item, index, iterable);
	});
	return result;
}

function pop(array) {
	return array.pop();
}

function forEachKey(obj, fn, thisArg) {
	for (var _key3 in obj) {
		if (obj.hasOwnProperty(_key3)) {
			if (fn.call(thisArg, obj[_key3], _key3, obj)) {
				return;
			}
		}
	}
}

/* global chai */
var _window2 = window,
    mocha = _window2.mocha;


function startMocha() {
	mocha.run().once('end', function () {
		var className = 0 < this.stats.failures ? 'failed' : 'passed';
		document.body.classList.add('done');
		document.body.classList.add(className);
		document.title += '[' + className + ']';
	});
}

function showEnvironment() {
	var environment = getElementById('environment');
	forEach(Object.keys(navigator.constructor.prototype), function (key) {
		var value = navigator[key];
		appendChild(environment, createElement({
			t: 'tr',
			a: [['class', typeof value === 'undefined' ? 'undefined' : _typeof(value)]],
			c: [{
				t: 'th',
				c: [key]
			}, {
				t: 'td',
				c: [value]
			}]
		}));
	});
}

function normalizeUrl(url) {
	return reduce(url.split('/'), function (result, fragment) {
		switch (fragment) {
			case '..':
				pop(result);
				break;
			case '.':
			case '':
				break;
			default:
				push(result, fragment);
		}
		return result;
	}, []).join('/');
}

if (mocha) {
	window.assert = chai.assert;
	mocha.setup('bdd');
	window.start = startMocha;
}

getBody.then(function () {
	return Promise.all([mocha && showEnvironment(), createNavigation()]);
}).catch(onError);
}())
