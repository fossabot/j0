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

	function isFunction(x) {
		return typeof x === 'function';
	}

	function _forEach(iterable, fn, thisArg) {
		var fromIndex = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
		var length = iterable.length;

		var index = void 0;
		if (0 <= length) {
			for (index = fromIndex; index < length; index += 1) {
				if (fn.call(thisArg, iterable[index], index, iterable)) {
					return;
				}
			}
		} else if (isFunction(iterable.next)) {
			index = 0;
			while (1) {
				var _iterable$next = iterable.next(),
				    value = _iterable$next.value,
				    done = _iterable$next.done;

				if (done || fromIndex <= index && fn.call(thisArg, value, index, iterable)) {
					return;
				}
				index += 1;
			}
		} else {
			index = fromIndex;
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
		_forEach(iterable, function (value, index) {
			push(result, fn.call(thisArg, value, index, iterable));
		});
		return result;
	}

	function slice(iterable, start, end) {
		return map(iterable).slice(start, end);
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

	var key = Symbol.iterator;

	function getIterator() {
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
		throw new TypeError(this + ' is not iterable');
	}

	if (NodeList.prototype[key]) {
		NodeList.prototype[key] = getIterator;
	}

	if (HTMLCollection.prototype[key]) {
		HTMLCollection.prototype[key] = getIterator;
	}

	if (NamedNodeMap.prototype[key]) {
		NamedNodeMap.prototype[key] = getIterator;
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
				var _this4 = this;

				var done = false;
				var onResolve = function onResolve(value) {
					if (done) {
						return;
					}
					done = true;
					_this4.resolve(value);
				};
				var onReject = function onReject(error) {
					if (done) {
						return;
					}
					done = true;
					_this4.reject(error);
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
				var _this5 = this;

				_forEach(this.deferreds, function (deferred) {
					_this5.handle(deferred);
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
		for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
			args[_key3 - 1] = arguments[_key3];
		}

		return array.splice.apply(array, args);
	}

	var Map = function () {
		function Map() {
			_classCallCheck(this, Map);

			this.clear();
		}

		_createClass(Map, [{
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
				var found = find(this.data, function (_ref3) {
					var _ref4 = _slicedToArray(_ref3, 1),
					    itemKey = _ref4[0];

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

		return Map;
	}();

	if (!window.Map) {
		window.Map = Map;
	}
	(function (prototype) {
		if (Object.prototype[Symbol.iterator] === prototype[Symbol.iterator]) {
			prototype[Symbol.iterator] = function () {
				return this.entries();
			};
		}
		if (!prototype.entries) {
			prototype.entries = function () {
				var result = [];
				this.forEach(function (value, key) {
					result[result.length] = [key, value];
				});
				var length = result.length;

				var index = 0;
				return {
					next: function next() {
						var value = result[index];
						index += 1;
						return {
							value: value,
							done: length < index
						};
					}
				};
			};
		}
		if (!prototype.keys) {
			prototype.keys = function () {
				var result = [];
				this.forEach(function (value, key) {
					result[result.length] = key;
				});
				return result;
			};
		}
		if (!prototype.values) {
			prototype.values = function () {
				var result = [];
				this.forEach(function (value) {
					result[result.length] = value;
				});
				return result;
			};
		}
	})(window.Map.prototype);

	function includes$2(iterable, searchElement, fromIndex) {
		var result = false;
		_forEach(iterable, function (value) {
			result = value === searchElement;
			return result;
		}, null, fromIndex);
		return result;
	}

	var Set = function () {
		function Set() {
			_classCallCheck(this, Set);

			this.clear();
		}

		_createClass(Set, [{
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
				var index = find$2(this.data, function (item) {
					return item === value;
				});
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

		return Set;
	}();

	if (!window.Set) {
		window.Set = Set;
	}
	(function (prototype) {
		if (Object.prototype[Symbol.iterator] === prototype[Symbol.iterator]) {
			prototype[Symbol.iterator] = function () {
				return this.entries();
			};
		}
		if (!prototype.entries) {
			prototype.entries = function () {
				var result = [];
				this.forEach(function (value) {
					result[result.length] = value;
				});
				var length = result.length;

				var index = 0;
				return {
					next: function next() {
						var value = result[index];
						index += 1;
						return {
							value: value,
							done: length < index
						};
					}
				};
			};
		}
		if (!prototype.has) {
			prototype.has = function (value) {
				var result = false;
				this.forEach(function (item) {
					if (!result && item === value) {
						result = true;
					}
				});
				return result;
			};
		}
	})(window.Set.prototype);

	window.global = window;

	window.ready = true;
});
