'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
	(typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory() : typeof define === 'function' && define.amd ? define(factory) : factory();
})(undefined, function () {
	'use strict';

	function isString(x) {
		return typeof x === 'string';
	}

	var hex = 16;

	var SymbolRegistry = function () {
		function SymbolRegistry() {
			_classCallCheck(this, SymbolRegistry);

			this.seed = Date.now();
			this.registry = [];
		}

		_createClass(SymbolRegistry, [{
			key: 'get',
			value: function get() {
				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
				var salt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();

				var symbol = 'Symbol(' + key + ')' + (this.seed + this.registry.length).toString(hex);
				this.registry.push([symbol, '' + key + salt]);
				return symbol;
			}
		}, {
			key: 'for',
			value: function _for(key) {
				if (isString(key)) {
					var length = this.registry.length;

					for (var i = 0; i < length; i += 1) {
						var item = this.registry[i];
						if (key === item[1]) {
							return item[0];
						}
					}
					return this.get(key, '');
				}
				throw new TypeError('Symbol.for was called with non-string: ' + key);
			}
		}, {
			key: 'keyFor',
			value: function keyFor(sym) {
				var length = this.registry.length;

				for (var i = 0; i < length; i += 1) {
					var item = this.registry[i];
					if (sym === item[0]) {
						return item[1];
					}
				}
			}
		}, {
			key: 'Symbol',
			get: function get() {
				var _this = this;

				var fn = function fn(key) {
					return _this.get(key);
				};
				function define(key, value) {
					Object.defineProperty(fn, key, { value: value });
				}
				function defineSymbol(key) {
					define(key, fn(key));
				}
				defineSymbol('iterator');
				defineSymbol('match');
				defineSymbol('replace');
				defineSymbol('search');
				defineSymbol('split');
				defineSymbol('hasInstance');
				defineSymbol('isConcatSpreadable');
				defineSymbol('unscopables');
				defineSymbol('species');
				defineSymbol('toPrimitive');
				defineSymbol('toStringTag');
				define('for', function (key) {
					return _this.for(key);
				});
				define('keyFor', function (key) {
					return _this.keyFor(key);
				});
				return fn;
			}
		}]);

		return SymbolRegistry;
	}();

	if (!window.Symbol) {
		window.Symbol = new SymbolRegistry().Symbol;
	}

	var iteratorKey = Symbol.iterator;

	function generator() {
		var _this2 = this;

		var length = this.length;

		var index = 0;
		return {
			next: function next() {
				return {
					value: _this2[index],
					done: length <= index++
				};
			}
		};
	}

	if (!Array.prototype[iteratorKey]) {
		Array.prototype[iteratorKey] = generator;
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
			args[_key - 1] = arguments[_key];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function isFunction(x) {
		return typeof x === 'function';
	}

	var MAX_SAFE_INTEGER = 9007199254740991;

	function _forEach(iterable, fn, thisArg) {
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
					var value = _step.value;

					if (fn.call(thisArg, value, _index2, iterable)) {
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

	function noop(x) {
		return x;
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		_forEach(iterable, function (value, index) {
			push(result, fn.call(thisArg, value, index, iterable));
		});
		return result;
	}

	function join(iterable) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

		return map(iterable).join(separator);
	}

	function repeat(c) {
		var count = parseInt(c, 10);
		var results = [];
		for (var i = 0; i < count; i += 1) {
			push(results, this);
		}
		return join(results, '');
	}

	if (!String.prototype.repeat) {
		String.prototype.repeat = repeat;
	}

	// import postMessage from '../postMessage';
	// import addEventListner from '../dom/addEventListener';
	if (!window.immediateId) {
		window.immediateId = 0;
	}
	window.immediateId += 1;
	var _window = window,
	    setImmediateNative = _window.setImmediate;

	var setImmediateAvailable = void 0;
	// let firstImmediate = true;
	// let immediateCount = 0;
	// const tasks = {};
	// const suffix = `_setImmediate${window.immediateId}`;

	// function setImmediatePostMessage(fn) {
	// 	if (firstImmediate) {
	// 		firstImmediate = false;
	// 		addEventListner(window, 'message', function ({data}) {
	// 			if (data.split) {
	// 				const [key] = data.split(suffix);
	// 				const task = tasks[key];
	// 				if (task) {
	// 					task();
	// 				}
	// 				delete tasks[key];
	// 			}
	// 		});
	// 	}
	// 	immediateCount += 1;
	// 	postMessage(`${immediateCount}${suffix}`, '*');
	// 	tasks[immediateCount] = fn;
	// 	return immediateCount;
	// }

	function setImmediateTimeout(fn) {
		return setTimeout(fn);
	}

	function testImmediate(fn, onSuccess) {
		var value = 1;
		var expected = (1 + 1) * 2;
		fn(function () {
			value *= 2;
			if (value === expected) {
				onSuccess();
			}
		});
		value += 1;
	}

	setImmediateAvailable = setImmediateTimeout;
	setTimeout(function () {
		// if (postMessage) {
		// 	testImmediate(setImmediatePostMessage, function () {
		// 		if (setImmediateAvailable !== setImmediateNative) {
		// 			setImmediateAvailable = setImmediatePostMessage;
		// 		}
		// 	});
		// }
		if (setImmediateNative) {
			testImmediate(setImmediateNative, function () {
				setImmediateAvailable = setImmediateNative;
			});
		}
	});

	var setImmediate = function setImmediate(fn) {
		return setImmediateAvailable(fn);
	};

	/* eslint-disable no-underscore-dangle */
	var PENDING = 0;
	var RESOLVED = 1;
	var REJECTED = 2;
	var CHAINED = 3;

	var Deferred = function Deferred() {
		var onResolved = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
		var onRejected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

		_classCallCheck(this, Deferred);

		/* eslint-disable no-use-before-define */
		this.promise = new J0Promise(noop);
		/* eslint-enable no-use-before-define */
		this.onResolved = onResolved;
		this.onRejected = onRejected;
	};

	var J0Promise = function () {
		function J0Promise(fn) {
			_classCallCheck(this, J0Promise);

			this.deferreds = [];
			this.state = PENDING;
			this.exec(fn);
		}

		_createClass(J0Promise, [{
			key: 'is',
			value: function is(state) {
				return this.state === state;
			}
		}, {
			key: 'exec',
			value: function exec(fn) {
				var _this3 = this;

				var done = false;
				var onResolve = function onResolve(value) {
					if (done) {
						return;
					}
					done = true;
					_this3.resolve(value);
				};
				var onReject = function onReject(error) {
					if (done) {
						return;
					}
					done = true;
					_this3.reject(error);
				};
				try {
					fn(onResolve, onReject);
				} catch (error) {
					onReject(error);
				}
			}
		}, {
			key: 'resolve',
			value: function resolve(value) {
				try {
					if (value === this) {
						throw new TypeError('A promise cannot be resolved with itself');
					}
					this.value = value;
					if (isThennable(value)) {
						this.state = CHAINED;
						this.exec(function (resolve, reject) {
							value.then(resolve, reject);
						});
					} else {
						this.state = RESOLVED;
					}
					this.finish();
				} catch (error) {
					this.reject(error);
				}
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				this.state = REJECTED;
				this.value = error;
				this.finish();
			}
		}, {
			key: 'finish',
			value: function finish() {
				var _this4 = this;

				_forEach(this.deferreds, function (deferred) {
					_this4.handle(deferred);
				});
				this.deferreds = null;
			}
		}, {
			key: 'handle',
			value: function handle(deferred) {
				/* eslint-disable consistent-this */
				var self = this;
				/* eslint-enable consistent-this */
				while (self.is(CHAINED)) {
					self = self.value;
				}
				if (self.is(PENDING)) {
					push(self.deferreds, deferred);
					return;
				}
				setImmediate(function () {
					var promise = deferred.promise,
					    _deferred$onResolved = deferred.onResolved,
					    onResolved = _deferred$onResolved === undefined ? null : _deferred$onResolved,
					    _deferred$onRejected = deferred.onRejected,
					    onRejected = _deferred$onRejected === undefined ? null : _deferred$onRejected;

					var resolved = self.is(RESOLVED);
					var callback = resolved ? onResolved : onRejected;
					if (callback === null) {
						if (resolved) {
							promise.resolve(self.value);
						} else {
							promise.reject(self.value);
						}
						return;
					}
					var value = void 0;
					try {
						value = callback(self.value);
					} catch (error) {
						promise.reject(error);
						return;
					}
					promise.resolve(value);
				});
			}
		}, {
			key: 'catch',
			value: function _catch(onRejected) {
				return this.then(null, onRejected);
			}
		}, {
			key: 'then',
			value: function then(onResolved, onRejected) {
				var deferred = new Deferred(onResolved, onRejected);
				this.handle(deferred);
				return deferred.promise;
			}
		}], [{
			key: 'resolve',
			value: function resolve(value) {
				if (isThennable(value)) {
					return value;
				}
				return new J0Promise(function (resolve) {
					resolve(value);
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				return new J0Promise(function (resolve, reject) {
					reject(error);
				});
			}
		}, {
			key: 'race',
			value: function race(promises) {
				return new J0Promise(function (resolve, reject) {
					_forEach(promises, function (promise) {
						promise.then(resolve, reject);
					});
				});
			}
		}, {
			key: 'all',
			value: function all(values) {
				return new J0Promise(function (resolve, reject) {
					var length = values.length;

					if (length === 0) {
						resolve([]);
						return;
					}
					var remaining = length;
					function check(value, index) {
						if (isThennable(value)) {
							value.then(function (value2) {
								check(value2, index);
							}, reject);
							return;
						}
						values[index] = value;
						remaining -= 1;
						if (remaining === 0) {
							resolve(values);
						}
					}
					_forEach(values, function (value, index) {
						check(value, index);
					});
				});
			}
		}]);

		return J0Promise;
	}();

	function isThennable(value) {
		return value && isFunction(value.then) && isFunction(value.catch);
	}

	if (!window.Promise) {
		window.Promise = J0Promise;
	}

	function find(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = void 0;
		_forEach(iterable, function (item, index) {
			if (fn.call(thisArg, item, index, iterable)) {
				result = item;
				return true;
			}
		});
		return result;
	}

	function find$2(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = -1;
		_forEach(iterable, function (item, index) {
			if (fn.call(thisArg, item, index, iterable)) {
				result = index;
				return true;
			}
		});
		return result;
	}

	function splice(array) {
		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		return array.splice.apply(array, args);
	}

	var Map$1 = function () {
		function Map$1(iterable) {
			var _this5 = this;

			_classCallCheck(this, Map$1);

			this.clear();
			if (iterable) {
				_forEach(iterable, function (_ref) {
					var _ref2 = _slicedToArray(_ref, 2),
					    key = _ref2[0],
					    value = _ref2[1];

					_this5.set(key, value);
				});
			}
		}

		_createClass(Map$1, [{
			key: 'clear',
			value: function clear() {
				this.data = [];
			}
		}, {
			key: 'indexOfKey',
			value: function indexOfKey(key) {
				return find$2(this.data, function (_ref3) {
					var _ref4 = _slicedToArray(_ref3, 1),
					    itemKey = _ref4[0];

					return itemKey === key;
				});
			}
		}, {
			key: 'has',
			value: function has(key) {
				return 0 <= this.indexOfKey(key);
			}
		}, {
			key: 'set',
			value: function set(key, value) {
				var index = this.indexOfKey(key);
				if (0 <= index) {
					this.data[index][1] = value;
				} else {
					push(this.data, [key, value]);
				}
				return this;
			}
		}, {
			key: 'get',
			value: function get(key) {
				var found = find(this.data, function (_ref5) {
					var _ref6 = _slicedToArray(_ref5, 1),
					    itemKey = _ref6[0];

					return itemKey === key;
				});
				if (found) {
					return found[1];
				}
			}
		}, {
			key: 'delete',
			value: function _delete(key) {
				var index = this.indexOfKey(key);
				if (0 <= index) {
					splice(this.data, index, 1);
					return true;
				}
				return false;
			}
		}, {
			key: 'entries',
			value: function entries() {
				return this.data[Symbol.iterator]();
			}
		}, {
			key: 'forEach',
			value: function forEach(fn, thisArg) {
				_forEach(this.data, fn, thisArg);
			}
		}, {
			key: 'keys',
			value: function keys() {
				var iterator = this.entries();
				return {
					next: function next() {
						var _iterator$next2 = iterator.next(),
						    value = _iterator$next2.value,
						    done = _iterator$next2.done;

						return {
							value: value && value[0],
							done: done
						};
					}
				};
			}
		}, {
			key: 'values',
			value: function values() {
				var iterator = this.entries();
				return {
					next: function next() {
						var _iterator$next3 = iterator.next(),
						    value = _iterator$next3.value,
						    done = _iterator$next3.done;

						return {
							value: value && value[1],
							done: done
						};
					}
				};
			}
		}, {
			key: 'size',
			get: function get() {
				return this.data.length;
			}
		}]);

		return Map$1;
	}();

	var MAP = window.Map;

	if (!MAP || !(new MAP([[0, 0]]).size === 1) || !MAP.prototype.forEach) {
		MAP = Map$1;
	}

	window.Map = MAP;

	function generator$2() {
		return this.entries();
	}

	if (!Map.prototype[iteratorKey]) {
		Map.prototype[iteratorKey] = generator$2;
	}

	var Set = function () {
		function Set(iterable) {
			var _this6 = this;

			_classCallCheck(this, Set);

			this.clear();
			if (iterable) {
				_forEach(iterable, function (value) {
					_this6.add(value);
				});
			}
		}

		_createClass(Set, [{
			key: 'clear',
			value: function clear() {
				this.data = [];
			}
		}, {
			key: 'indexOf',
			value: function indexOf(item) {
				return this.data.indexOf(item);
			}
		}, {
			key: 'has',
			value: function has(item) {
				return 0 <= this.indexOf(item);
			}
		}, {
			key: 'add',
			value: function add(item) {
				if (!this.has(item)) {
					push(this.data, item);
				}
				return this;
			}
		}, {
			key: 'delete',
			value: function _delete(item) {
				var index = this.indexOf(item);
				if (0 <= index) {
					splice(this.data, index, 1);
				}
				return 0 <= index;
			}
		}, {
			key: 'forEach',
			value: function forEach(fn, thisArg) {
				var _this7 = this;

				_forEach(this.data, function (value) {
					fn.call(thisArg, value, value, _this7);
				});
			}
		}, {
			key: 'values',
			value: function values() {
				return this.data[iteratorKey]();
			}
		}, {
			key: iteratorKey,
			value: function value() {
				return this.values();
			}
		}, {
			key: 'entries',
			value: function entries() {
				var iterator = this.values();
				return {
					next: function next() {
						var _iterator$next4 = iterator.next(),
						    value = _iterator$next4.value,
						    done = _iterator$next4.done;

						return {
							value: !done && [value, value],
							done: done
						};
					}
				};
			}
		}, {
			key: 'size',
			get: function get() {
				return this.data.length;
			}
		}]);

		return Set;
	}();

	var SET = window.Set;

	if (!SET || !(new SET([0]).size === 1) || !SET.prototype.forEach) {
		SET = Set;
	}

	window.Set = SET;

	function generator$4() {
		var _this8 = this;

		var length = this.length;

		var index = 0;
		return {
			next: function next() {
				return {
					value: _this8[index],
					done: length <= index++
				};
			}
		};
	}

	if (NodeList.prototype[iteratorKey]) {
		NodeList.prototype[iteratorKey] = generator$4;
	}

	function generator$6() {
		var _this9 = this;

		var length = this.length;

		var index = 0;
		return {
			next: function next() {
				return {
					value: _this9[index],
					done: length <= index++
				};
			}
		};
	}

	if (HTMLCollection.prototype[iteratorKey]) {
		HTMLCollection.prototype[iteratorKey] = generator$6;
	}

	function generator$8() {
		var _this10 = this;

		var length = this.length;

		var index = 0;
		return {
			next: function next() {
				return {
					value: _this10[index],
					done: length <= index++
				};
			}
		};
	}

	if (NamedNodeMap.prototype[iteratorKey]) {
		NamedNodeMap.prototype[iteratorKey] = generator$8;
	}

	function filter(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		_forEach(iterable, function (value, index, iterable2) {
			if (fn.call(thisArg, value, index, iterable2)) {
				push(result, value);
			}
		});
		return result;
	}

	var StringList = function () {
		function StringList(iterable) {
			var _this11 = this;

			_classCallCheck(this, StringList);

			this.clear();
			if (iterable) {
				map(iterable, function (_ref7) {
					var _ref8 = _slicedToArray(_ref7, 2),
					    key = _ref8[0],
					    value = _ref8[1];

					_this11.append(key, value);
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
				return find$2(this.data, function (_ref9) {
					var _ref10 = _slicedToArray(_ref9, 1),
					    itemName = _ref10[0];

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
				this.data = filter(this.data, function (_ref11) {
					var _ref12 = _slicedToArray(_ref11, 1),
					    itemName = _ref12[0];

					return itemName !== name;
				});
			}
		}, {
			key: 'get',
			value: function get(name) {
				var found = find(this.data, function (_ref13) {
					var _ref14 = _slicedToArray(_ref13, 1),
					    itemName = _ref14[0];

					return itemName === name;
				});
				return found ? found[1] : null;
			}
		}, {
			key: 'getAll',
			value: function getAll(name) {
				var result = [];
				_forEach(this.data, function (_ref15) {
					var _ref16 = _slicedToArray(_ref15, 2),
					    itemName = _ref16[0],
					    value = _ref16[1];

					if (itemName === name) {
						push(result, value);
					}
				});
				return result;
			}
		}, {
			key: 'toString',
			value: function toString() {
				return map(this.data, function (_ref17) {
					var _ref18 = _slicedToArray(_ref17, 2),
					    name = _ref18[0],
					    _ref18$ = _ref18[1],
					    value = _ref18$ === undefined ? '' : _ref18$;

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
						var _iterator$next5 = iterator.next(),
						    value = _iterator$next5.value,
						    done = _iterator$next5.done;

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

	var separator = '&';
	var equal = '=';

	var URLSearchParams$1 = function (_StringList) {
		_inherits(URLSearchParams$1, _StringList);

		function URLSearchParams$1(init) {
			_classCallCheck(this, URLSearchParams$1);

			return _possibleConstructorReturn(this, (URLSearchParams$1.__proto__ || Object.getPrototypeOf(URLSearchParams$1)).call(this, init ? map(init.split(separator), function (entry) {
				return entry.split(equal);
			}) : null));
		}

		_createClass(URLSearchParams$1, [{
			key: 'toString',
			value: function toString() {
				return map(this.data, function (_ref19) {
					var _ref20 = _slicedToArray(_ref19, 2),
					    name = _ref20[0],
					    _ref20$ = _ref20[1],
					    value = _ref20$ === undefined ? '' : _ref20$;

					return name + '=' + value;
				}).join('&');
			}
		}]);

		return URLSearchParams$1;
	}(StringList);

	if (!window.URLSearchParams) {
		window.URLSearchParams = URLSearchParams$1;
	}

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

	var Headers$1 = function (_StringList2) {
		_inherits(Headers$1, _StringList2);

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
				return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'get', this).call(this, toLowerCase(name));
			}
		}, {
			key: 'getAll',
			value: function getAll(name) {
				return _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'getAll', this).call(this, toLowerCase(name));
			}
		}]);

		return Headers$1;
	}(StringList);

	if (!window.Headers) {
		window.Headers = Headers$1;
	}

	function isUndefined(x) {
		return typeof x === 'undefined';
	}

	function isInstanceOf(instance, constructor) {
		return instance instanceof constructor;
	}

	function read(data, type) {
		var reader = new FileReader();
		var promise = new Promise(function (resolve, reject) {
			reader.onload = function () {
				resolve(reader.result);
			};
			reader.onerror = function () {
				reject(reader.error);
			};
			switch (type) {
				case 'ArrayBuffer':
					reader.readAsArrayBuffer(data);
					break;
				case 'BinaryString':
					reader.readAsBinaryString(data);
					break;
				case 'DataURL':
					reader.readAsDataURL(data);
					break;
				default:
					reader.readAsText(data);
					break;
			}
		});
		promise.reader = reader;
		return promise;
	}

	var viewClasses = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
	function isArrayBufferView(obj) {
		return 0 <= find$2(viewClasses, function (constructor) {
			return isInstanceOf(obj, constructor);
		});
	}

	var lastMasks = [0x3f, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
	var availableBits = 6;
	var baseMask = lastMasks[0];

	/* eslint-disable no-bitwise */

	function consume(view, index, length) {
		var lastMask = lastMasks[length];
		var charCode = 0;
		var i = 0;
		while (0 < length--) {
			var mask = length === 0 ? lastMask : baseMask;
			var shiftSize = availableBits * i++;
			charCode |= (view[index + length] & mask) << shiftSize;
		}
		return String.fromCharCode(charCode);
	}
	/* eslint-enable no-bitwise */

	function arrayBufferToString(arrayBuffer) {
		var view = new Uint8Array(arrayBuffer);
		var chars = [];
		for (var i = 0; i < view.length; i++) {
			var byte = view[i];
			var length = void 0;
			if (byte < 0x80) {
				length = 1;
			} else if (byte < 0xe0) {
				length = 2;
			} else if (byte < 0xf0) {
				length = 3;
			} else if (byte < 0xf8) {
				length = 4;
			} else if (byte < 0xfc) {
				length = 5;
			} else {
				length = 6;
			}
			push(chars, consume(view, i, length));
			i += length - 1;
		}
		return chars.join('');
	}

	function trim(string) {
		return string.trim();
	}

	function parse(body) {
		var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();

		_forEach(trim(body).split('&'), function (data) {
			if (data) {
				var _data$split = data.split('='),
				    _data$split2 = _toArray(_data$split),
				    name = _data$split2[0],
				    parts = _data$split2.slice(1);

				name = decodeURIComponent(name.replace(/\+/g, ' '));
				parts = decodeURIComponent(parts.join('=').replace(/\+/g, ' '));
				form.append(name, parts);
			}
		});
		return form;
	}

	var parseAsJSON = JSON.parse;

	function bufferClone(buf) {
		if (buf.slice) {
			return buf.slice(0);
		}
		var view = new Uint8Array(buf.byteLength);
		view.set(new Uint8Array(buf));
		return view.buffer;
	}

	var Body = function () {
		function Body() {
			_classCallCheck(this, Body);

			this.bodyUsed = false;
		}

		_createClass(Body, [{
			key: 'initBody',
			value: function initBody(body) {
				this.bodyInit = body;
				if (!body) {
					this.bodyText = '';
				} else if (isString(body)) {
					this.bodyText = body;
				} else if (isInstanceOf(body, Blob)) {
					this.bodyBlob = body;
				} else if (isInstanceOf(body, FormData)) {
					this.bodyFormData = body;
				} else if (isInstanceOf(body, URLSearchParams)) {
					this.bodyText = body.toString();
				} else if (isInstanceOf(body, DataView)) {
					this.bodyArrayBuffer = bufferClone(body.buffer);
					// IE 10-11 can't handle a DataView body.
					this.bodyInit = new Blob([this.bodyArrayBuffer]);
				} else if (isInstanceOf(body, ArrayBuffer) || isArrayBufferView(body)) {
					this.bodyArrayBuffer = bufferClone(body);
				} else {
					throw new Error('unsupported BodyInit type');
				}
				if (!this.headers.get('content-type')) {
					if (isString(body)) {
						this.headers.set('content-type', 'text/plain;charset=UTF-8');
					} else if (this.bodyBlob && this.bodyBlob.type) {
						this.headers.set('content-type', this.bodyBlob.type);
					} else if (body instanceof URLSearchParams) {
						this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
					}
				}
			}
		}, {
			key: 'arrayBuffer',
			value: function arrayBuffer() {
				if (this.bodyArrayBuffer) {
					return this.isUsed || Promise.resolve(this.bodyArrayBuffer);
				}
				return this.blob().then(function (blob) {
					return read(blob, 'ArrayBuffer');
				});
			}
		}, {
			key: 'blob',
			value: function blob() {
				var rejected = this.isUsed;
				if (rejected) {
					return rejected;
				}
				if (this.bodyBlob) {
					return Promise.resolve(this.bodyBlob);
				} else if (this.bodyArrayBuffer) {
					return Promise.resolve(new Blob([this.bodyArrayBuffer]));
				} else if (this.bodyFormData) {
					throw new Error('could not read FormData body as blob');
				} else {
					return Promise.resolve(new Blob([this.bodyText]));
				}
			}
		}, {
			key: 'text',
			value: function text() {
				var rejected = this.isUsed;
				if (rejected) {
					return rejected;
				}
				if (this.bodyBlob) {
					return read(this.bodyBlob, 'Text');
				} else if (this.bodyArrayBuffer) {
					return Promise.resolve(arrayBufferToString(this.bodyArrayBuffer));
				} else if (this.bodyFormData) {
					throw new Error('could not read FormData body as text');
				} else {
					return Promise.resolve(this.bodyText);
				}
			}
		}, {
			key: 'formData',
			value: function formData() {
				return this.text().then(parse);
			}
		}, {
			key: 'json',
			value: function json() {
				return this.text().then(parseAsJSON);
			}
		}, {
			key: 'isUsed',
			get: function get() {
				if (this.bodyUsed) {
					return Promise.reject(new TypeError('Already used'));
				}
				this.bodyUsed = true;
			}
		}]);

		return Body;
	}();

	var Request = function (_Body) {
		_inherits(Request, _Body);

		function Request(input) {
			var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, Request);

			var body = init.body;

			var _this14 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

			if (input instanceof Request) {
				body = _this14.inheritFrom(input, body, init);
			} else {
				_this14.url = String(input);
			}
			_this14.credentials = init.credentials || _this14.credentials || 'omit';
			if (init.headers || !_this14.headers) {
				_this14.headers = new Headers$1(init.headers);
			}
			_this14.method = (init.method || _this14.method || 'GET').toUpperCase();
			_this14.mode = init.mode || _this14.mode || null;
			_this14.referrer = null;
			if ((_this14.method === 'GET' || _this14.method === 'HEAD') && body) {
				throw new TypeError('Body not allowed for GET or HEAD requests');
			}
			_this14.initBody(body);
			return _this14;
		}

		_createClass(Request, [{
			key: 'inheritFrom',
			value: function inheritFrom(input, body, _ref21) {
				var headers = _ref21.headers;

				if (input.bodyUsed) {
					throw new TypeError('Already read');
				}
				this.url = input.url;
				this.credentials = input.credentials;
				if (!headers) {
					this.headers = new Headers$1(input.headers);
				}
				this.method = input.method;
				this.mode = input.mode;
				if (!body && input.bodyInit !== null) {
					body = input.bodyInit;
					input.bodyUsed = true;
				}
				return body;
			}
		}, {
			key: 'clone',
			value: function clone() {
				return new Request(this, { body: this.bodyInit });
			}
		}]);

		return Request;
	}(Body);

	var minOkStatus = 200;
	var maxOkStatus = 300;
	var redirectStatuses = [301, 302, 303, 307, 308];

	var Response = function (_Body2) {
		_inherits(Response, _Body2);

		function Response(body) {
			var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

			_classCallCheck(this, Response);

			var _this15 = _possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

			_this15.type = 'default';
			_this15.status = 'status' in init ? init.status : minOkStatus;
			_this15.ok = _this15.status >= minOkStatus && _this15.status < maxOkStatus;
			_this15.statusText = 'statusText' in init ? init.statusText : 'OK';
			_this15.headers = new Headers$1(init.headers);
			_this15.url = init.url || '';
			_this15.initBody(body);
			return _this15;
		}

		_createClass(Response, [{
			key: 'clone',
			value: function clone() {
				return new Response(this.bodyInit, {
					status: this.status,
					statusText: this.statusText,
					headers: new Headers$1(this.headers),
					url: this.url
				});
			}
		}, {
			key: 'redirect',
			value: function redirect(url, status) {
				if (redirectStatuses.indexOf(status) < 0) {
					throw new RangeError('Invalid status code');
				}
				return new Response(null, {
					status: status,
					headers: { location: url }
				});
			}
		}], [{
			key: 'error',
			value: function error() {
				var response = new Response(null, {
					status: 0,
					statusText: ''
				});
				response.type = 'error';
				return response;
			}
		}]);

		return Response;
	}(Body);

	function parse$1(rawHeaders) {
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

	function fetch(input, init) {
		return new Promise(function (resolve, reject) {
			var request = new Request(input, init);
			var xhr = new XMLHttpRequest();
			xhr.onload = function () {
				var options = {
					status: xhr.status,
					statusText: xhr.statusText,
					headers: parse$1(xhr.getAllResponseHeaders() || '')
				};
				options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
				var body = 'response' in xhr ? xhr.response : xhr.responseText;
				resolve(new Response(body, options));
			};
			xhr.onerror = function () {
				reject(new TypeError('Network request failed'));
			};
			xhr.ontimeout = function () {
				reject(new TypeError('Network request failed'));
			};
			xhr.open(request.method, request.url, true);
			if (request.credentials === 'include') {
				xhr.withCredentials = true;
			}
			xhr.responseType = 'blob';
			_forEach(request.headers, function (value, name) {
				xhr.setRequestHeader(name, value);
			});
			xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
		});
	}

	if (!window.fetch) {
		window.fetch = fetch;
	}

	var Context = function () {
		function Context() {
			_classCallCheck(this, Context);

			this.next = 0;
		}

		_createClass(Context, [{
			key: 'stop',
			value: function stop() {
				return this.stop;
			}
		}]);

		return Context;
	}();

	var Generator = function () {
		function Generator(fn, thisArg) {
			_classCallCheck(this, Generator);

			this.fn = fn;
			this.self = thisArg;
			this.context = new Context();
		}

		_createClass(Generator, [{
			key: 'next',
			value: function next() {
				var _this16 = this;

				var value = this.fn.call(this.self, this.context);
				var done = value === this.context.stop;
				if (!done) {
					value.then(function (result) {
						_this16.context.sent = result;
					});
				}
				return {
					value: value,
					done: done
				};
			}
		}, {
			key: 'throw',
			value: function _throw(error) {
				throw error;
			}
		}]);

		return Generator;
	}();

	function mark(fn) {
		return fn;
	}

	function wrap(fn1, fn2, thisArg) {
		return new Generator(fn1, thisArg);
	}

	var j0RegeneratorRuntime = {
		mark: mark,
		wrap: wrap
	};

	if (!window.regeneratorRuntime) {
		window.regeneratorRuntime = j0RegeneratorRuntime;
	}

	window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || function (fn) {
		return setTimeout(function () {
			fn(Date.now());
		}, 30);
	};

	window.cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame || function (id) {
		return clearTimeout(id);
	};

	window.global = window;

	window.ready = true;
});
