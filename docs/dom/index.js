(function(){
'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function isString(x) {
	return typeof x === 'string';
}

var Node = window.Node;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

function isNode(x) {
	return isInstanceOf(x, Node);
}

var iteratorSymbol = Symbol.iterator;

function isFunction(x) {
	return typeof x === 'function';
}

var Number = window.Number;

function forEach(iterable, fn, thisArg) {
	var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	var length = iterable.length;

	var iterator = iterable[iteratorSymbol] ? iterable[iteratorSymbol]() : iterable;
	if (0 <= length) {
		for (var index = fromIndex; index < length; index += 1) {
			if (fn.call(thisArg, iterable[index], index, iterable)) {
				return;
			}
		}
	} else if (isFunction(iterator.next)) {
		var _index = 0;
		while (_index < Number.MAX_SAFE_INTEGER) {
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

var Array = window.Array;

var arrayPush = Array.prototype.push;

function push(arrayLike) {
	for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		args[_key - 1] = arguments[_key];
	}

	return arrayPush.apply(arrayLike, args);
}

function noop(x) {
	return x;
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

var document = window.document;

var nodeKey = Symbol('node');
var eventsKey = Symbol('events');

var J0Element = function () {

	/* eslint-disable max-statements */
	function J0Element() {
		var source = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, J0Element);

		if (source instanceof J0Element) {
			this[nodeKey] = source.node;
		} else if (isString(source)) {
			this[nodeKey] = document.createTextNode(source);
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

			this[nodeKey] = wrap(document['createElement' + (t.indexOf(':') < 0 ? '' : 'NS')](t)).node;
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
			for (var _len2 = arguments.length, value = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
				value[_key2 - 1] = arguments[_key2];
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
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

	return map(rootElement.querySelectorAll(selector), wrap);
}

wrap.find = _find;
wrap.findAll = _findAll;

// import '../*/test';
describe('dom', function () {

	it('should create a new J0Element', function () {
		assert.equal('node' in wrap(), true);
	});
});

describe('J0Element.prototype.text', function () {

	it('should return its textContent', function () {
		var text = '' + Date.now();
		var element = wrap(text);
		assert.equal(element.text, text);
	});

	it('should set its textContent', function () {
		var text1 = Date.now() + '-1';
		var element1 = wrap();
		var text2 = Date.now() + '-2';
		var element2 = wrap({
			c: [element1, text2]
		});
		element1.text = text1;
		assert.equal(element2.text, '' + text1 + text2);
	});
});
}())
