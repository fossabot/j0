(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

function join(iterable) {
	var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

	return map(iterable).join(separator);
}

console.log(Object, join);
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

function find(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = -1;
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

function find$1(iterable) {
	var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
	var thisArg = arguments[2];

	var result = void 0;
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = item;
			return true;
		}
	});
	return result;
}

var StringList = function () {
	function StringList(iterable) {
		var _this = this;

		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			map(iterable, function (_ref) {
				var _ref2 = _slicedToArray(_ref, 2),
				    key = _ref2[0],
				    value = _ref2[1];

				_this.append(key, value);
			});
		}
	}

	_createClass(StringList, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return find(this.data, function (_ref3) {
				var _ref4 = _slicedToArray(_ref3, 1),
				    itemName = _ref4[0];

				return itemName === name;
			});
		}
	}, {
		key: 'has',
		value: function has(name) {
			return 0 <= this.indexOf(name);
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			push(this.data, [name, value]);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			var index = this.indexOf(name);
			if (index < 0) {
				this.append(name, value);
			} else {
				this.data[index][1] = value;
			}
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			this.data = filter(this.data, function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 1),
				    itemName = _ref6[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = find$1(this.data, function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 1),
				    itemName = _ref8[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			forEach(this.data, function (_ref9) {
				var _ref10 = _slicedToArray(_ref9, 2),
				    itemName = _ref10[0],
				    value = _ref10[1];

				if (itemName === name) {
					push(result, value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return map(this.data, function (_ref11) {
				var _ref12 = _slicedToArray(_ref11, 2),
				    name = _ref12[0],
				    _ref12$ = _ref12[1],
				    value = _ref12$ === undefined ? '' : _ref12$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorKey]();
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next2 = iterator.next(),
					    value = _iterator$next2.value,
					    done = _iterator$next2.done;

					return {
						value: value && value[1],
						done: done
					};
				}
			};
		}
	}, {
		key: iteratorKey,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

function forEachKey(obj, fn, thisArg) {
	for (var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (fn.call(thisArg, obj[key], key, obj)) {
				return;
			}
		}
	}
}

function toLowerCase(string) {
	return ('' + string).toLowerCase();
}

var Headers$1 = function (_StringList) {
	_inherits(Headers$1, _StringList);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				push(init, [key, value]);
			});
		}
		return _possibleConstructorReturn(this, (Headers$1.__proto__ || Object.getPrototypeOf(Headers$1)).call(this, init));
	}

	_createClass(Headers$1, [{
		key: 'indexOf',
		value: function indexOf(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'indexOf', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'has', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'append', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'set', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'delete', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'get',
		value: function get(name) {
			return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'getAll', this).call(this, toLowerCase(name)).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			var _this3 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return {
				next: function next() {
					while (1) {
						var _iterator$next3 = iterator.next(),
						    value = _iterator$next3.value,
						    done = _iterator$next3.done;

						var key = value && value[0];
						if (done || history.indexOf(key) < 0) {
							push(history, key);
							return {
								value: [key, _this3.get(key)],
								done: done
							};
						}
					}
				}
			};
		}
	}]);

	return Headers$1;
}(StringList);

function tests(Headers, testName) {

	describe(testName, function () {

		it('should have has()', function () {
			var init = {
				'Content-Type': 'text/html',
				'Content-Length': '100'
			};
			var headers = new Headers(init);
			assert.equal(headers.has('Content-Type'), true);
			assert.equal(headers.has('Location'), false);
		});

		it('should have append()', function () {
			var headers = new Headers();
			var name = 'a';
			var value = 'b';
			headers.append(name, value);
			headers.append(name, value);
			assert.deepEqual(headers.get(name), [value, value].join(','));
		});

		it('should have set()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.set(name, value1);
			headers.set(name, value2);
			assert.deepEqual(headers.get(name), value2);
		});

		it('should have get()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.equal(headers.get(name), value1 + ',' + value2);
		});

		it('should have delete()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			assert.equal(headers.has(name), true);
			headers.delete(name);
			assert.equal(headers.has(name), false);
		});

		it('should have entries()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = headers.entries();
			while (1) {
				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[name, value1 + ',' + value2]]);
		});

		it('should have values()', function () {
			var headers = new Headers();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			headers.append(name, value1);
			headers.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = headers.values();
			while (1) {
				var _iterator$next5 = iterator.next(),
				    value = _iterator$next5.value,
				    done = _iterator$next5.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1 + ',' + value2]);
		});
	});
}

tests(Headers$1, 'Headers/j0');

function trim(string) {
	return string.trim();
}

function parse(rawHeaders) {
	var headers = new Headers();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(trim(key), trim(parts.join(':')));
		}
	});
	return headers;
}

describe('Headers/parse', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse(src);
		assert.deepEqual(map(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});

tests(Headers, 'Headers');
}())
