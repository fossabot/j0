(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x$1 = window;

var x$2 = fetch;

var x$3 = document;

function isString(x) {
	return typeof x === 'string';
}

var x$4 = Node;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

function isNode(x) {
	return isInstanceOf(x, x$4);
}

var x$5 = Promise;

var nodeKey = Symbol('node');
var eventsKey = Symbol('events');
var getBody = new x$5(function (resolve) {
	var interval = 50;
	function check() {
		var body = x$3.body;

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
			this[nodeKey] = x$3.createTextNode(source);
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
			    e = _source$e === undefined ? [] : _source$e,
			    n = source.n,
			    o = source.o;

			this[nodeKey] = wrap(n ? x$3.createElementNS(n, t, o) : x$3.createElement(t)).node;
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
		key: 'prepend',
		value: function prepend() {
			var _this = this;

			for (var _len = arguments.length, elements = Array(_len), _key = 0; _key < _len; _key++) {
				elements[_key] = arguments[_key];
			}

			elements.forEach(function (element) {
				_this.insertBefore(element, _this.firstChild);
			});
			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var _this2 = this;

			for (var _len2 = arguments.length, elements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				elements[_key2] = arguments[_key2];
			}

			elements.forEach(function (element) {
				_this2.node.appendChild(wrap(element).node);
			});
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
			for (var _len3 = arguments.length, value = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
				value[_key3 - 1] = arguments[_key3];
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
			var _this3 = this;

			var wrapped = function wrapped(event) {
				fn.call(_this3, event);
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
	}, {
		key: 'firstChild',
		get: function get() {
			return wrap(this.node.firstChild);
		}
	}, {
		key: 'lastChild',
		get: function get() {
			return wrap(this.node.lastChild);
		}
	}]);

	return J0Element;
}();

function wrap(source) {
	return new J0Element(source);
}

function _find(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$3;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x$3;

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

var x$6 = console;

wrap.ready().then(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	var response, _ref3, version;

	return regeneratorRuntime.wrap(function _callee2$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					_context2.next = 2;
					return x$2(wrap(x$3.getElementById('root')).text + '/package.json');

				case 2:
					response = _context2.sent;
					_context2.next = 5;
					return response.json();

				case 5:
					_ref3 = _context2.sent;
					version = _ref3.version;

					wrap.findAll('.version').forEach(function (element) {
						element.text = version;
					});

				case 8:
				case 'end':
					return _context2.stop();
			}
		}
	}, _callee2, this);
}))).catch(x$6.error);
x$1.assert = x$1.chai.assert;
x$1.mocha.setup('bdd');
}())
