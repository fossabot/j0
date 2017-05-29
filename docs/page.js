(function(){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var createNavigation = function () {
	var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var root, response, tree, pathname, basePath, rootBranch, parseBranch, nav;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						parseBranch = function parseBranch(parent, name, base) {
							var childElements = [];
							x$8.keys(parent).sort(function (a, b) {
								return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
							}).forEach(function (key) {
								var branch = parent[key];
								childElements.push(parseBranch(branch, key, base ? base + '/' + name : name));
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

						root = wrap.find('#root').text;
						_context2.next = 4;
						return x$5(root + '/sitemap.json');

					case 4:
						response = _context2.sent;
						_context2.next = 7;
						return response.json();

					case 7:
						tree = _context2.sent;
						pathname = x$6.pathname;
						basePath = '/' + normalizeUrl(pathname + '/' + root) + '/';
						rootBranch = pathname.replace(basePath, '').split('/').reduce(function (parent, name) {
							return name ? parent[name] : parent;
						}, tree);
						nav = parseBranch(rootBranch, '', '');

						if (nav) {
							wrap.find('#title').after(nav);
						}

					case 13:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	}));

	return function createNavigation() {
		return _ref2.apply(this, arguments);
	};
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x$1 = document;

function isString(x) {
	return typeof x === 'string';
}

var x$2 = Node;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

function isNode(x) {
	return isInstanceOf(x, x$2);
}

var x$3 = Promise;

var nodeKey = Symbol('node');
var eventsKey = Symbol('events');
var getBody = new x$3(function (resolve) {
	var interval = 50;
	function check() {
		var body = x$1.body;

		if (body) {
			resolve(wrap(body));
		} else {
			setTimeout(check, interval);
		}
	}
	setTimeout(check);
});

var J0Element = function () {

	/* eslint-disable max-statements */
	function J0Element() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, J0Element);

		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = x$1.createTextNode(source);
		} else if (isNode(source)) {
			this[nodeKey] = source;
		} else {
			var _source$t = source.t,
			    t = _source$t === undefined ? 'div' : _source$t,
			    _source$a = source.a,
			    a = _source$a === undefined ? [] : _source$a,
			    _source$c = source.c,
			    c = _source$c === undefined ? [] : _source$c,
			    _source$e = source.e,
			    e = _source$e === undefined ? [] : _source$e;

			this[nodeKey] = wrap(x$1['createElement' + (t.indexOf(':') < 0 ? '' : 'NS')](t)).node;
			for (var i = 0, length = c.length; i < length; i++) {
				var item = c[i];
				if (item) {
					this.append(item);
				}
			}
			for (var _i = 0, _length = e.length; _i < _length; _i++) {
				var _item = e[_i];
				if (_item) {
					this.on(_item[0], _item[1]);
				}
			}
			for (var _i2 = 0, _length2 = a.length; _i2 < _length2; _i2++) {
				var _item2 = a[_i2];
				if (_item2) {
					this.setAttribute.apply(this, _toConsumableArray(_item2));
				}
			}
		}
		this[eventsKey] = [];
	}
	/* eslint-enable max-statements */

	_createClass(J0Element, [{
		key: 'append',
		value: function append(element) {
			this.node.appendChild(wrap(element).node);
			return this;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(newElement, referenceElement) {
			this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
		}
	}, {
		key: 'before',
		value: function before(element) {
			this.parent.insertBefore(element, this);
		}
	}, {
		key: 'after',
		value: function after(element) {
			this.parent.insertBefore(element, this.next);
		}
	}, {
		key: 'remove',
		value: function remove() {
			var parent = this.parent;

			if (parent) {
				parent.node.removeChild(this.node);
			}
			return this;
		}
	}, {
		key: 'empty',
		value: function empty() {
			var childNodes = this.childNodes;

			for (var i = 0, length = childNodes.length; i < length; i++) {
				childNodes[i].remove();
			}
			return this;
		}
	}, {
		key: 'setAttribute',
		value: function setAttribute(name) {
			for (var _len = arguments.length, value = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
				value[_key - 1] = arguments[_key];
			}

			this.node.setAttribute(name, value.join(' '));
			return this;
		}
	}, {
		key: 'getAttribute',
		value: function getAttribute(name) {
			return this.node.getAttribute(name);
		}
	}, {
		key: 'on',
		value: function on(eventName, fn) {
			var _this = this;

			var wrapped = function wrapped(event) {
				fn.call(_this, event);
			};
			this.node.addEventListener(eventName, wrapped);
			this.events.push([eventName, fn, wrapped]);
			return this;
		}
	}, {
		key: 'off',
		value: function off(eventName, fn) {
			var events = this.events;

			for (var i = events.length; i--;) {
				var _events$i = _slicedToArray(events[i], 3),
				    e = _events$i[0],
				    f = _events$i[1],
				    wrapped = _events$i[2];

				if (e === eventName && (!fn || fn === f)) {
					this.node.removeEventListener(eventName, wrapped);
					events.splice(i, 1);
				}
			}
		}
	}, {
		key: 'find',
		value: function find(selector) {
			return _find(selector, this);
		}
	}, {
		key: 'findAll',
		value: function findAll(selector) {
			return _findAll(selector, this);
		}
	}, {
		key: 'node',
		get: function get() {
			return this[nodeKey];
		}
	}, {
		key: 'text',
		get: function get() {
			return this.node.textContent;
		},
		set: function set() {
			var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

			this.node.textContent = text;
		}
	}, {
		key: 'parent',
		get: function get() {
			var parentNode = this.node.parentNode;

			return parentNode && wrap(parentNode);
		},
		set: function set(source) {
			wrap(source).append(this);
		}
	}, {
		key: 'previous',
		get: function get() {
			var previousSibling = this.node.previousSibling;

			return previousSibling && wrap(previousSibling);
		}
	}, {
		key: 'next',
		get: function get() {
			var nextSibling = this.node.nextSibling;

			return nextSibling && wrap(nextSibling);
		}
	}, {
		key: 'childNodes',
		get: function get() {
			return [].concat(_toConsumableArray(this.node.childNodes)).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return [].concat(_toConsumableArray(this.node.children)).map(wrap);
		}
	}, {
		key: 'events',
		get: function get() {
			return this[eventsKey];
		}
	}, {
		key: 'attributes',
		get: function get() {
			return this.node.attributes;
		}
	}]);

	return J0Element;
}();

function wrap(source) {
	return new J0Element(source);
}

function _find(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$1;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$1;

	var list = rootElement.querySelectorAll(selector);
	var result = [];
	for (var i = 0, length = list.length; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

wrap.find = _find;
wrap.findAll = _findAll;
wrap.ready = function () {
	var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(fn) {
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.next = 2;
						return getBody;

					case 2:
						if (fn) {
							fn();
						}

					case 3:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function (_x5) {
		return _ref.apply(this, arguments);
	};
}();

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

var x$4 = window;

var x$5 = fetch;

var x$6 = location;

var x$7 = navigator;

var x$8 = Object;

/* global chai */
var mocha = x$4.mocha;


function startMocha() {
	mocha.run().once('end', function () {
		var className = 0 < this.stats.failures ? 'failed' : 'passed';
		x$1.body.classList.add('done');
		x$1.body.classList.add(className);
		x$1.title += '[' + className + ']';
	});
}

function showEnvironment() {
	var environment = wrap.find('#environment');
	x$8.keys(x$7.constructor.prototype).forEach(function (key) {
		var value = x$7[key];
		environment.append({
			t: 'tr',
			a: [['class', typeof value === 'undefined' ? 'undefined' : _typeof(value)]],
			c: [{
				t: 'th',
				c: [key]
			}, {
				t: 'td',
				c: [value]
			}]
		});
	});
}

function normalizeUrl(url) {
	return url.split('/').reduce(function (result, fragment) {
		switch (fragment) {
			case '..':
				result.pop();
				break;
			case '.':
			case '':
				break;
			default:
				result.push(fragment);
		}
		return result;
	}, []).join('/');
}

if (mocha) {
	x$4.assert = chai.assert;
	mocha.setup('bdd');
	x$4.start = startMocha;
}

wrap.ready().then(function () {
	return x$3.all([mocha && showEnvironment(), createNavigation()]);
}).catch(onError);
}())
