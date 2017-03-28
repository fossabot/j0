'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

	function _forEach(iterable, fn, thisArg) {
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

	function every(fn, thisArg) {
		var result = true;
		_forEach(this, function () {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			result = fn.call.apply(fn, [thisArg].concat(args));
			return !result;
		});
		return result;
	}

	function push(arrayLike) {
		var _Array$prototype$push;

		for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
			args[_key2 - 1] = arguments[_key2];
		}

		return (_Array$prototype$push = Array.prototype.push).call.apply(_Array$prototype$push, [arrayLike].concat(args));
	}

	function noop(x) {
		return x;
	}

	function map(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = [];
		_forEach(iterable, function () {
			for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
				args[_key3] = arguments[_key3];
			}

			push(result, fn.call.apply(fn, [thisArg].concat(args)));
		});
		return result;
	}

	function from() {
		return Array.from.apply(Array, arguments);
	}

	function slice(iterable, start, end) {
		return from(iterable).slice(start, end);
	}

	function of() {
		return slice(arguments);
	}

	function toString(o) {
		return Object.prototype.toString.call(o);
	}

	function isArray(x) {
		return toString.call(x) === '[object Array]';
	}

	function includes(searchElement) {
		var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		var index = fromIndex;
		var length = this.length;

		if (index < 0) {
			index = length - index;
		}
		if (index < 0) {
			index = 0;
		}
		for (; index < length; index += 1) {
			if (this[index] === searchElement) {
				return true;
			}
		}
		return false;
	}

	if (!Array.from) {
		Array.from = map;
	}
	if (!Array.of) {
		Array.of = of;
	}
	if (!Array.isArray) {
		Array.isArray = isArray;
	}
	if (!Array.prototype.every) {
		Array.prototype.every = every;
	}
	if (!Array.prototype.includes) {
		Array.prototype.includes = includes;
	}
	if (!Array.prototype[Symbol.iterator]) {
		Array.prototype[Symbol.iterator] = function () {
			var _this2 = this;

			var index = 0;
			return {
				next: function next() {
					var result = {
						value: _this2[index],
						done: !(index < _this2.length)
					};
					index += 1;
					return result;
				}
			};
		};
	}

	function isNumber(x) {
		return typeof x === 'number';
	}

	function isFunction(x) {
		return typeof x === 'function';
	}

	if (!Object.prototype[Symbol.iterator]) {
		Object.prototype[Symbol.iterator] = function () {
			var _this3 = this;

			if (isFunction(this.next)) {
				return {
					next: function next() {
						return _this3.next();
					}
				};
			} else if (isNumber(this.length)) {
				var index = 0;
				return {
					next: function next() {
						var result = {
							value: _this3[index],
							done: !(index < _this3.length)
						};
						index += 1;
						return result;
					}
				};
			}
			throw new TypeError('This object is not iterable');
		};
	}

	function join(iterable) {
		var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ',';

		return from(iterable).join(separator);
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

	function shift(iterable) {
		return iterable.shift();
	}

	var postMessage = window.postMessage;

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
				allEvents[eventName] = events;
			}
			return events;
		}
		return allEvents;
	}

	function addEventListener(element, eventName, fn) {
		element.addEventListener(eventName, fn);
		getEventListeners(element, eventName).add(fn);
	}

	if (!window.immediateId) {
		window.immediateId = 0;
	}
	window.immediateId += 1;
	var setImmediateAvailable = void 0;
	var firstImmediate = true;
	var immediateCount = 0;
	var tasks = {};
	var suffix = '_setImmediate' + window.immediateId;
	var _window = window,
	    setImmediateNative = _window.setImmediate;


	function setImmediatePostMessage(fn) {
		if (firstImmediate) {
			firstImmediate = false;
			addEventListener(window, 'message', function (event) {
				var _event$data$split = event.data.split(suffix),
				    _event$data$split2 = _slicedToArray(_event$data$split, 1),
				    key = _event$data$split2[0];

				var task = tasks[key];
				if (task) {
					task();
				}
				delete tasks[key];
			});
		}
		immediateCount += 1;
		postMessage('' + immediateCount + suffix, '*');
		tasks[immediateCount] = fn;
		return immediateCount;
	}

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
		if (postMessage) {
			testImmediate(setImmediatePostMessage, function () {
				if (setImmediateAvailable !== setImmediateNative) {
					setImmediateAvailable = setImmediatePostMessage;
				}
			});
		}
		if (setImmediateNative) {
			testImmediate(setImmediateNative, function () {
				setImmediateAvailable = setImmediateNative;
			});
		}
	});

	var setImmediate = function setImmediate(fn) {
		return setImmediateAvailable(fn);
	};

	var PENDING = 0;
	var FULFILLED = 1;
	var REJECTED = 2;

	var J0Promise = function () {
		function J0Promise(fn) {
			var _this4 = this;

			_classCallCheck(this, J0Promise);

			this.onFulfilled = [];
			this.onRejected = [];
			this.state = PENDING;
			try {
				fn(function (value) {
					_this4.resolve(value);
				}, function (error) {
					_this4.reject(error);
				});
			} catch (error) {
				this.reject(error);
			}
		}

		_createClass(J0Promise, [{
			key: 'resolve',
			value: function resolve() {
				var _this5 = this;

				var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;

				this.state = FULFILLED;
				this.value = value;
				setImmediate(function () {
					var functions = _this5.onFulfilled;
					while (functions[0]) {
						shift(functions)(value);
					}
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				var _this6 = this;

				this.state = REJECTED;
				this.value = error;
				setImmediate(function () {
					var functions = _this6.onRejected;
					while (functions[0]) {
						shift(functions)(error);
					}
				});
			}
		}, {
			key: 'then',
			value: function then(onFulfilled, onRejected) {
				var _this7 = this;

				var promise = new J0Promise(function (onFulfilled2, onRejected2) {
					addThenFunction(_this7.onFulfilled, onFulfilled, onFulfilled2, onRejected2);
					addThenFunction(_this7.onRejected, onRejected, onFulfilled2, onRejected2);
				});
				switch (this.state) {
					case PENDING:
						break;
					case FULFILLED:
						this.resolve();
						break;
					case REJECTED:
						this.reject();
						break;
					default:
						throw new Error('Unknown state: ' + this.state);
				}
				return promise;
			}
		}, {
			key: 'catch',
			value: function _catch(onRejected) {
				return this.then(null, onRejected);
			}
		}], [{
			key: 'resolve',
			value: function resolve(value) {
				return new J0Promise(function (onFulfilled) {
					onFulfilled(value);
				});
			}
		}, {
			key: 'reject',
			value: function reject(error) {
				return new J0Promise(function () {
					throw error;
				});
			}
		}, {
			key: 'race',
			value: function race(promises) {
				return new J0Promise(function (resolve, reject) {
					var finished = false;
					_forEach(promises, function (promise) {
						promise.then(function (result) {
							if (!finished) {
								finished = true;
								resolve(result);
							}
						}, function (error) {
							if (!finished) {
								finished = true;
								reject(error);
							}
						});
					});
				});
			}
		}, {
			key: 'all',
			value: function all(promises) {
				return new J0Promise(function (resolve, reject) {
					var results = [];
					var goal = promises.length;
					var finished = false;
					var count = 0;
					_forEach(promises, function (promise, index) {
						promise.then(function (result) {
							if (!finished) {
								results[index] = result;
								count += 1;
								if (count === goal) {
									resolve(results);
								}
							}
						}, function (error) {
							finished = true;
							reject(error);
						});
					});
				});
			}
		}]);

		return J0Promise;
	}();

	function isThennable(value) {
		return value && isFunction(value.then) && isFunction(value.catch);
	}

	function addThenFunction(list, fn, onFulfilled2, onRejected2) {
		push(list, isFunction(fn) ? function (value) {
			try {
				var value2 = fn(value);
				if (isThennable(value2)) {
					value2.then(onFulfilled2, onRejected2);
				} else {
					onFulfilled2(value2);
				}
			} catch (error2) {
				onRejected2(error2);
			}
		} : onFulfilled2);
	}

	if (!window.Promise) {
		window.Promise = J0Promise;
	}

	function getMatcher(ref) {
		return function (value) {
			return ref === value;
		};
	}

	function find(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = void 0;
		if (!isFunction(fn)) {
			fn = getMatcher(fn);
		}
		_forEach(iterable, function (item, index) {
			if (fn.call(thisArg, item, index, iterable)) {
				result = item;
				return true;
			}
		});
		return result;
	}

	function getMatcher$1(ref) {
		return function (value) {
			return ref === value;
		};
	}

	function find$2(iterable) {
		var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;
		var thisArg = arguments[2];

		var result = void 0;
		if (!isFunction(fn)) {
			fn = getMatcher$1(fn);
		}
		_forEach(iterable, function (item, index) {
			if (fn.call(thisArg, item, index, iterable)) {
				result = index;
				return true;
			}
		});
		return result;
	}

	function splice(array) {
		for (var _len4 = arguments.length, args = Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
			args[_key4 - 1] = arguments[_key4];
		}

		return array.splice.apply(array, args);
	}

	var Map$2 = function () {
		function Map$2() {
			_classCallCheck(this, Map$2);

			this.clear();
		}

		_createClass(Map$2, [{
			key: 'clear',
			value: function clear() {
				this.data = [];
				this.size = 0;
			}
		}, {
			key: 'indexOfKey',
			value: function indexOfKey(key) {
				return find$2(this.data, function (_ref) {
					var _ref2 = _slicedToArray(_ref, 1),
					    itemKey = _ref2[0];

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
				if (index < 0) {
					push(this.data, [key, value]);
				} else {
					this.data[index][1] = value;
				}
				return this;
			}
		}, {
			key: 'get',
			value: function get(key) {
				return find(this.data, function (_ref3) {
					var _ref4 = _slicedToArray(_ref3, 1),
					    itemKey = _ref4[0];

					return itemKey === key;
				});
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
				return map(this.data, function (_ref5) {
					var _ref6 = _slicedToArray(_ref5, 1),
					    key = _ref6[0];

					return key;
				});
			}
		}, {
			key: 'values',
			value: function values() {
				return map(this.data, function (_ref7) {
					var _ref8 = _slicedToArray(_ref7, 2),
					    value = _ref8[1];

					return value;
				});
			}
		}]);

		return Map$2;
	}();

	if (!window.Map) {
		window.Map = Map$2;
		Map$2.prototype[Symbol.iterator] = function () {
			return this.entries();
		};
	}

	function includes$2(iterable, searchElement, fromIndex) {
		return Array.from(iterable).includes(searchElement, fromIndex);
	}

	var Set$2 = function () {
		function Set$2() {
			_classCallCheck(this, Set$2);

			this.clear();
		}

		_createClass(Set$2, [{
			key: 'clear',
			value: function clear() {
				this.data = [];
			}
		}, {
			key: 'has',
			value: function has(value) {
				return includes$2(this.data, value);
			}
		}, {
			key: 'add',
			value: function add(value) {
				if (!this.has(value)) {
					push(this.data, value);
				}
				return this;
			}
		}, {
			key: 'delete',
			value: function _delete(value) {
				var index = find$2(this.data, value);
				if (0 <= index) {
					splice(this.data, index, 1);
				}
				return 0 <= index;
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
			key: 'values',
			value: function values() {
				return slice(this.data);
			}
		}, {
			key: 'size',
			get: function get() {
				return this.data.length;
			}
		}]);

		return Set$2;
	}();

	if (!window.Set) {
		window.Set = Set$2;
		Set$2.prototype[Symbol.iterator] = function () {
			return this.entries();
		};
	}

	window.global = window;

	window.ready = true;
});
