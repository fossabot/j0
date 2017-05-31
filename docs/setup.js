(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var x$1 = window;

var x$2 = fetch;

var x$3 = document;

var x$4 = Object;

var x$5 = Array;

var isArray = x$5.isArray;

function isString(x) {
	return typeof x === 'string';
}

var x$6 = Node;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

function isNode(x) {
	return isInstanceOf(x, x$6);
}

function isUndefined(x) {
	return typeof x === 'undefined';
}

var x$7 = Promise;

var x$8 = CustomEvent;

var x$9 = Set;

var nodeKey = Symbol();
var listenersKey = Symbol();
var getBody = new x$7(function (resolve) {
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

function superForEach() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var fn = args.pop();
	if (isString(args[0])) {
		fn.apply(undefined, args);
	} else {
		args.forEach(function (arg) {
			if (isArray(arg)) {
				superForEach.apply(undefined, _toConsumableArray(arg).concat([fn]));
			} else {
				x$4.keys(arg).forEach(function (key) {
					superForEach(key, arg[key], fn);
				});
			}
		});
	}
}

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
			var t = source.t,
			    a = source.a,
			    c = source.c,
			    e = source.e,
			    n = source.n,
			    o = source.o;

			this[nodeKey] = wrap(n ? x$3.createElementNS(n, t, o) : x$3.createElement(t || 'div')).node;
			if (c) {
				this.append.apply(this, _toConsumableArray(c));
			}
			if (e) {
				this.on(e);
			}
			if (a) {
				this.attr(a);
			}
		}
		this[listenersKey] = new x$9();
	}
	/* eslint-enable max-statements */

	_createClass(J0Element, [{
		key: 'equals',
		value: function equals(element) {
			return this.node === wrap(element).node;
		}
	}, {
		key: 'text',
		value: function text(_text) {
			var node = this.node;

			if (isUndefined(_text)) {
				return node.textContent;
			}
			node.textContent = _text;
			return this;
		}
	}, {
		key: 'html',
		value: function html(_html) {
			var node = this.node;

			if (isUndefined(_html)) {
				return node.innerHTML;
			}
			node.innerHTML = _html;
			return this;
		}
	}, {
		key: 'insertBefore',
		value: function insertBefore(newElement, referenceElement) {
			this.node.insertBefore(wrap(newElement).node, referenceElement && referenceElement.node);
		}
	}, {
		key: 'prepend',
		value: function prepend() {
			var _this = this;

			for (var _len2 = arguments.length, elements = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
				elements[_key2] = arguments[_key2];
			}

			elements.forEach(function (element) {
				_this.firstChild = element;
			});
			return this;
		}
	}, {
		key: 'append',
		value: function append() {
			var node = this.node;

			for (var _len3 = arguments.length, elements = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				elements[_key3] = arguments[_key3];
			}

			elements.forEach(function (element) {
				node.appendChild(wrap(element).node);
			});
			return this;
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
			for (var _len4 = arguments.length, value = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
				value[_key4 - 1] = arguments[_key4];
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
		key: 'attr',
		value: function attr() {
			var _this2 = this;

			for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
				args[_key5] = arguments[_key5];
			}

			superForEach.apply(undefined, args.concat([function () {
				_this2.setAttribute.apply(_this2, arguments);
			}]));
			return this;
		}
	}, {
		key: 'addEventListener',
		value: function addEventListener(eventName, fn) {
			var _this3 = this;

			var wrapped = function wrapped(event) {
				fn.call(_this3, event);
			};
			this.node.addEventListener(eventName, wrapped);
			this.listeners.add([eventName, fn, wrapped]);
			return this;
		}
	}, {
		key: 'once',
		value: function once(eventName, fn) {
			var _this4 = this;

			var item = [eventName, fn];
			var wrapped = function wrapped(event) {
				_this4.node.removeEventListener(eventName, wrapped);
				_this4.listeners.delete(item);
				fn.call(_this4, event);
			};
			item.push(wrapped);
			this.node.addEventListener(eventName, wrapped);
			this.listeners.add(item);
			return this;
		}
	}, {
		key: 'on',
		value: function on() {
			var _this5 = this;

			for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
				args[_key6] = arguments[_key6];
			}

			superForEach.apply(undefined, args.concat([function () {
				_this5.addEventListener.apply(_this5, arguments);
			}]));
			return this;
		}
	}, {
		key: 'removeEventListener',
		value: function removeEventListener(eventName, fn) {
			var _this6 = this;

			this.listeners.forEach(function (item) {
				var _item = _slicedToArray(item, 3),
				    e = _item[0],
				    f = _item[1],
				    wrapped = _item[2];

				if (e === eventName && (!fn || fn === f)) {
					_this6.node.removeEventListener(e, wrapped);
					_this6.listeners.delete(item);
				}
			});
		}
	}, {
		key: 'off',
		value: function off(eventName, fn) {
			this.removeEventListener(eventName, fn);
		}
	}, {
		key: 'emit',
		value: function emit(eventName, detail) {
			var event = new x$8(eventName, { detail: detail });
			this.node.dispatchEvent(event);
			return this;
		}
	}, {
		key: 'find',
		value: function find(selector) {
			return _find(selector, this.node);
		}
	}, {
		key: 'findAll',
		value: function findAll(selector) {
			return _findAll(selector, this.node);
		}
	}, {
		key: 'node',
		get: function get() {
			return this[nodeKey];
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

			return previousSibling ? wrap(previousSibling) : null;
		},
		set: function set(element) {
			this.parent.insertBefore(element, this);
		}
	}, {
		key: 'next',
		get: function get() {
			var nextSibling = this.node.nextSibling;

			return nextSibling ? wrap(nextSibling) : null;
		},
		set: function set(element) {
			this.parent.insertBefore(element, this.next);
		}
	}, {
		key: 'childNodes',
		get: function get() {
			return x$5.from(this.node.childNodes).map(wrap);
		}
	}, {
		key: 'children',
		get: function get() {
			return x$5.from(this.node.children).map(wrap);
		}
	}, {
		key: 'firstChild',
		get: function get() {
			var firstChild = this.node.firstChild;

			return firstChild ? wrap(firstChild) : null;
		},
		set: function set(element) {
			var firstChild = this.firstChild;

			if (firstChild) {
				firstChild.previous = element;
			} else {
				this.append(element);
			}
		}
	}, {
		key: 'lastChild',
		get: function get() {
			var lastChild = this.node.lastChild;

			return lastChild ? wrap(lastChild) : null;
		},
		set: function set(element) {
			var lastChild = this.lastChild;

			if (lastChild) {
				this.lastChild.next = element;
			} else {
				this.append(element);
			}
		}
	}, {
		key: 'listeners',
		get: function get() {
			return this[listenersKey];
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

x$4.assign(wrap, {
	find: _find,
	findAll: _findAll,
	ready: function () {
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

		function ready(_x4) {
			return _ref.apply(this, arguments);
		}

		return ready;
	}()
});

var x$10 = console;

wrap.ready().then(_asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	var url, response, _ref3, version;

	return regeneratorRuntime.wrap(function _callee2$(_context2) {
		while (1) {
			switch (_context2.prev = _context2.next) {
				case 0:
					url = wrap(x$3.getElementById('root')).text() + '/package.json';
					_context2.next = 3;
					return x$2(url);

				case 3:
					response = _context2.sent;
					_context2.next = 6;
					return response.json();

				case 6:
					_ref3 = _context2.sent;
					version = _ref3.version;

					wrap.findAll('.version').forEach(function (element) {
						element.text(version);
					});

				case 9:
				case 'end':
					return _context2.stop();
			}
		}
	}, _callee2, this);
}))).catch(x$10.error);
x$1.assert = x$1.chai.assert;
x$1.mocha.setup('bdd');
}())
