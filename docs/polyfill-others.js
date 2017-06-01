(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x$1 = Math;

function acosh(x) {
	return x$1.log(x + x$1.sqrt(x * x - 1));
}

if (!x$1.acosh) {
	x$1.acosh = acosh;
}

function asinh(x) {
	if (x === -Infinity) {
		return x;
	}
	return x$1.log(x + x$1.sqrt(x * x + 1));
}

if (!x$1.asinh) {
	x$1.asinh = asinh;
}

function atanh(x) {
	return x$1.log((1 + x) / (1 - x)) / 2;
}

if (!x$1.atanh) {
	x$1.atanh = atanh;
}

/* eslint no-magic-numbers: ["warn", {ignore: [0, 1, 3]}] */
function cbrt(x) {
	var root = x$1.pow(x$1.abs(x), 1 / 3);
	return x < 0 ? -root : root;
}

if (!x$1.cbrt) {
	x$1.cbrt = cbrt;
}

/* eslint no-magic-numbers: ["warn", {ignore: [-1, 0, 1, 31, 32]}], no-bitwise: "off" */
function clz32(x) {
	if (x <= -1) {
		return 0;
	}
	if (x === null || x <= 1) {
		return 32;
	}
	return 31 - x$1.floor(x$1.log(x >>> 0) * x$1.LOG2E);
}

if (!x$1.clz32) {
	x$1.clz32 = clz32;
}

function cosh(x) {
	var y = x$1.exp(x);
	return (y + 1 / y) / 2;
}

if (!x$1.cosh) {
	x$1.cosh = cosh;
}

function expm1(x) {
	return x$1.exp(x) - 1;
}

if (!x$1.expm1) {
	x$1.expm1 = expm1;
}

var x$2 = Float32Array;

function fround(x) {
	return new x$2([x])[0];
}

if (!x$1.fround) {
	x$1.fround = fround;
}

function hypot() {
	var sum = 0;

	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	for (var i = 0, length = args.length; i < length; i++) {
		var value = args[i];
		sum += value * value;
	}
	return x$1.sqrt(sum);
}

if (!x$1.hypot) {
	x$1.hypot = hypot;
}

/* eslint-disable no-bitwise, no-magic-numbers */
function imul(a, b) {
	var ah = a >>> 16 & 0xffff;
	var al = a & 0xffff;
	var bh = b >>> 16 & 0xffff;
	var bl = b & 0xffff;
	return al * bl + (ah * bl + al * bh << 16 >>> 0) | 0;
}

if (!x$1.imul) {
	x$1.imul = imul;
}

function log10(x) {
	return x$1.log(x) / x$1.LN10;
}

if (!x$1.log10) {
	x$1.log10 = log10;
}

function log1p(x) {
	return x$1.log(x + 1);
}

if (!x$1.log1p) {
	x$1.log1p = log1p;
}

function log2(x) {
	return x$1.log(x) / x$1.LN2;
}

if (!x$1.log2) {
	x$1.log2 = log2;
}

var x$3 = isNaN;

function sign(x) {
	x = +x;
	if (x === 0 || x$3(x)) {
		return x;
	}
	return x > 0 ? 1 : -1;
}

if (!x$1.sign) {
	x$1.sign = sign;
}

function sinh(x) {
	var y = x$1.exp(x);
	return (y - 1 / y) / 2;
}

if (!x$1.sinh) {
	x$1.sinh = sinh;
}

function tanh(x) {
	if (x === Infinity) {
		return 1;
	} else if (x === -Infinity) {
		return -1;
	}
	var y = x$1.exp(2 * x);
	return (y - 1) / (y + 1);
}

if (!x$1.tanh) {
	x$1.tanh = tanh;
}

/* eslint-disable no-bitwise, no-magic-numbers */
function trunc(x) {
	return x - x % 1;
}

if (!x$1.trunc) {
	x$1.trunc = trunc;
}

var x$4 = Object;

function assign(target) {
	for (var _len2 = arguments.length, objects = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		objects[_key2 - 1] = arguments[_key2];
	}

	objects.forEach(function (obj) {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				target[key] = obj[key];
			}
		}
	});
}

if (!x$4.assign) {
	x$4.assign = assign;
}

var x$5 = Array;

var iteratorSymbol = Symbol.iterator;

var Iterator = function () {
	function Iterator(fn) {
		_classCallCheck(this, Iterator);

		this.next = fn;
	}

	_createClass(Iterator, [{
		key: iteratorSymbol,
		value: function value() {
			return this;
		}
	}]);

	return Iterator;
}();

function generator() {
	var array = this.slice();
	var length = array.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: array[index],
			done: length <= index++
		};
	});
}

var prototype = x$5.prototype;

if (!prototype[iteratorSymbol]) {
	prototype[iteratorSymbol] = generator;
}

function copyWithin(target) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
	var length = this.length;

	if (target < 0) {
		target = length + target;
	}
	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	var copied = this.slice(start, end);
	var total = copied.length;

	if (length < target + total) {
		total = length - target;
	}
	for (var i = 0; i < total; i++) {
		this[target + i] = copied[i];
	}
	return this;
}

var prototype$1 = x$5.prototype;

if (!prototype$1.copyWithin) {
	prototype$1.copyWithin = copyWithin;
}

function entries() {
	var _this = this;

	var index = 0;
	return new Iterator(function () {
		return {
			value: [index, _this[index]],
			done: _this.length < ++index
		};
	});
}

var prototype$2 = x$5.prototype;

if (!prototype$2.entries) {
	prototype$2.entries = entries;
}

function copyWithin$1(value) {
	var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.length;
	var length = this.length;

	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	for (var i = start; i < end; i++) {
		this[i] = value;
	}
	return this;
}

var prototype$3 = x$5.prototype;

if (!prototype$3.fill) {
	prototype$3.fill = copyWithin$1;
}

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

var prototype$4 = x$5.prototype;

if (!prototype$4.find) {
	prototype$4.find = findIndex;
}

function findIndex$1(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

var prototype$5 = x$5.prototype;

if (!prototype$5.findIndex) {
	prototype$5.findIndex = findIndex$1;
}

function isUndefined(x) {
	return typeof x === 'undefined';
}

function passThrough(x) {
	return x;
}

function arrayFrom(iterable) {
	var mapFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : passThrough;
	var thisArg = arguments[2];

	var result = [];
	if (isUndefined(iterable.length)) {
		var i = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var item = _step.value;

				result.push(mapFn.call(thisArg, item, i++));
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
	} else {
		for (var _i = 0, length = iterable.length; _i < length; _i++) {
			result[_i] = mapFn.call(thisArg, iterable[_i], _i);
		}
	}
	return result;
}

if (!x$5.from) {
	x$5.from = arrayFrom;
}

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var length = this.length, i = fromIndex < 0 ? length + fromIndex : fromIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

var prototype$6 = x$5.prototype;

if (!prototype$6.includes) {
	prototype$6.includes = includes;
}

function arrayOf() {
	for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
		args[_key3] = arguments[_key3];
	}

	return args;
}

if (!x$5.of) {
	x$5.of = arrayOf;
}

function generator$1() {
	var _this2 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this2[index],
			done: length <= index++
		};
	});
}

var prototype$7 = String.prototype;

if (!prototype$7[iteratorSymbol]) {
	prototype$7[iteratorSymbol] = generator$1;
}

var x$6 = parseInt;

function repeat(c) {
	var count = x$6(c, 10);
	var results = [];
	for (var i = 0; i < count; i += 1) {
		results.push(this);
	}
	return results.join('');
}

var prototype$8 = String.prototype;

try {
	'0'.repeat(1);
} catch (error) {
	prototype$8.repeat = repeat;
}

var x$7 = window;

function isFunction(x) {
	return typeof x === 'function';
}

var x$8 = setTimeout;

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!x$7.immediateId) {
	x$7.immediateId = 0;
}
x$7.immediateId += 1;
var setImmediateNative = x$7.setImmediate;

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
	return x$8(fn);
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
x$8(function () {
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

var x$9 = TypeError;

function noop(x) {
	return x;
}

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
					throw new x$9('A promise cannot be resolved with itself');
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

			this.deferreds.forEach(function (deferred) {
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
				self.deferreds.push(deferred);
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
				promises.forEach(function (promise) {
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
				values.forEach(function (value, index) {
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

x$7.Promise = x$7.Promise || J0Promise;

var x$10 = CustomEvent;

var x$11 = Event;

var x$12 = document;

function CustomEvent$2(event) {
	var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
		bubbles: false,
		cancelable: false
	};

	var evt = x$12.createEvent('CustomEvent');
	evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	return evt;
}
CustomEvent$2.prototype = x$11.prototype;

if (!isFunction(x$10)) {
	x$7.CustomEvent = CustomEvent$2;
}

var Map$1 = function () {
	function Map$1(iterable) {
		_classCallCheck(this, Map$1);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var _ref = _step2.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var key = _ref2[0];
					var value = _ref2[1];

					this.set(key, value);
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
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
			return this.data.findIndex(function (_ref3) {
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
				this.data.push([key, value]);
			}
			return this;
		}
	}, {
		key: 'get',
		value: function get(key) {
			var found = this.data.find(function (_ref5) {
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
				this.data.splice(index, 1);
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
			var _this5 = this;

			this.data.slice().forEach(function (_ref7) {
				var _ref8 = _slicedToArray(_ref7, 2),
				    key = _ref8[0],
				    value = _ref8[1];

				fn.call(thisArg, value, key, _this5);
			});
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				return {
					value: value && value[0],
					done: done
				};
			});
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next2 = iterator.next(),
				    value = _iterator$next2.value,
				    done = _iterator$next2.done;

				return {
					value: value && value[1],
					done: done
				};
			});
		}
	}, {
		key: 'size',
		get: function get() {
			return this.data.length;
		}
	}]);

	return Map$1;
}();

var MAP = x$7.Map;
if (!MAP || !(new MAP([[0, 0]]).size === 1) || !MAP.prototype.forEach) {
	MAP = Map$1;
}
x$7.Map = MAP;

var x$13 = Map;

function generator$2() {
	return this.entries();
}

var prototype$9 = x$13.prototype;

if (!prototype$9[iteratorSymbol]) {
	prototype$9[iteratorSymbol] = generator$2;
}

var Set$1 = function () {
	function Set$1(iterable) {
		_classCallCheck(this, Set$1);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var value = _step3.value;

					this.add(value);
				}
			} catch (err) {
				_didIteratorError3 = true;
				_iteratorError3 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion3 && _iterator3.return) {
						_iterator3.return();
					}
				} finally {
					if (_didIteratorError3) {
						throw _iteratorError3;
					}
				}
			}
		}
	}

	_createClass(Set$1, [{
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
				this.data.push(item);
			}
			return this;
		}
	}, {
		key: 'delete',
		value: function _delete(item) {
			var index = this.indexOf(item);
			if (0 <= index) {
				this.data.splice(index, 1);
			}
			return 0 <= index;
		}
	}, {
		key: 'forEach',
		value: function forEach(fn, thisArg) {
			var _this6 = this;

			this.data.slice().forEach(function (value) {
				fn.call(thisArg, value, value, _this6);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data.slice()[iteratorSymbol]();
		}
	}, {
		key: iteratorSymbol,
		value: function value() {
			return this.values();
		}
	}, {
		key: 'entries',
		value: function entries() {
			var iterator = this.values();
			return {
				next: function next() {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

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

	return Set$1;
}();

var SET = x$7.Set;

if (!SET || !(new SET([0]).size === 1) || !SET.prototype.forEach) {
	SET = Set$1;
}

x$7.Set = SET;

var x$14 = Set;

function generator$4() {
	return this.values();
}

var prototype$10 = x$14.prototype;

if (!prototype$10[iteratorSymbol]) {
	prototype$10[iteratorSymbol] = generator$4;
}

var x$15 = NodeList;

function generator$6() {
	var _this7 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this7[index],
			done: length <= index++
		};
	});
}

var prototype$11 = x$15.prototype;

if (!prototype$11[iteratorSymbol]) {
	prototype$11[iteratorSymbol] = generator$6;
}

var x$16 = HTMLCollection;

function generator$8() {
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

var prototype$12 = x$16.prototype;

if (!prototype$12[iteratorSymbol]) {
	prototype$12[iteratorSymbol] = generator$8;
}

var x$17 = NamedNodeMap;

function generator$10() {
	var _this9 = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this9[index],
			done: length <= index++
		};
	});
}

var prototype$13 = x$17.prototype;

if (!prototype$13[iteratorSymbol]) {
	prototype$13[iteratorSymbol] = generator$10;
}

var StringList = function () {
	function StringList(iterable) {
		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion4 = true;
			var _didIteratorError4 = false;
			var _iteratorError4 = undefined;

			try {
				for (var _iterator4 = iterable[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
					var _ref9 = _step4.value;

					var _ref10 = _slicedToArray(_ref9, 2);

					var key = _ref10[0];
					var value = _ref10[1];

					this.append(key, value);
				}
			} catch (err) {
				_didIteratorError4 = true;
				_iteratorError4 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion4 && _iterator4.return) {
						_iterator4.return();
					}
				} finally {
					if (_didIteratorError4) {
						throw _iteratorError4;
					}
				}
			}
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
			return this.data.findIndex(function (_ref11) {
				var _ref12 = _slicedToArray(_ref11, 1),
				    itemName = _ref12[0];

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
			this.data.push([name, value]);
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
			this.data = this.data.filter(function (_ref13) {
				var _ref14 = _slicedToArray(_ref13, 1),
				    itemName = _ref14[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = this.data.find(function (_ref15) {
				var _ref16 = _slicedToArray(_ref15, 1),
				    itemName = _ref16[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			this.data.forEach(function (_ref17) {
				var _ref18 = _slicedToArray(_ref17, 2),
				    itemName = _ref18[0],
				    value = _ref18[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref19) {
				var _ref20 = _slicedToArray(_ref19, 2),
				    name = _ref20[0],
				    _ref20$ = _ref20[1],
				    value = _ref20$ === undefined ? '' : _ref20$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorSymbol]();
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next4 = iterator.next(),
				    value = _iterator$next4.value,
				    done = _iterator$next4.done;

				return {
					value: value && value[0],
					done: done
				};
			});
		}
	}, {
		key: 'values',
		value: function values() {
			var iterator = this.entries();
			return new Iterator(function () {
				var _iterator$next5 = iterator.next(),
				    value = _iterator$next5.value,
				    done = _iterator$next5.done;

				return {
					value: value && value[1],
					done: done
				};
			});
		}
	}, {
		key: iteratorSymbol,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_StringList) {
	_inherits(URLSearchParams$2, _StringList);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? init.replace(/^\?/, '').split(separator).map(function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref21) {
				var _ref22 = _slicedToArray(_ref21, 2),
				    name = _ref22[0],
				    _ref22$ = _ref22[1],
				    value = _ref22$ === undefined ? '' : _ref22$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

var URLSearchParams$1 = x$7.URLSearchParams;

if (!(URLSearchParams$1 && new URLSearchParams$1('?a=b').has('a'))) {
	x$7.URLSearchParams = URLSearchParams$2;
}

function toLowerCase(x) {
	return x ? x.toLowerCase() : '';
}

var Headers$1 = function (_StringList2) {
	_inherits(Headers$1, _StringList2);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			x$4.keys(headers).forEach(function (key) {
				init.push([key, headers[key]]);
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
			var _this12 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return new Iterator(function () {
				while (1) {
					var _iterator$next6 = iterator.next(),
					    value = _iterator$next6.value,
					    done = _iterator$next6.done;

					var key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						history.push(key);
						return {
							value: [key, _this12.get(key)],
							done: done
						};
					}
				}
			});
		}
	}]);

	return Headers$1;
}(StringList);

if (!x$7.Headers) {
	x$7.Headers = Headers$1;
}

var x$18 = JSON;

var x$19 = Blob;

var x$20 = ArrayBuffer;

var x$21 = DataView;

var x$22 = Uint8Array;

var x$23 = Promise;

var x$24 = FileReader;

function readBlob(data, type) {
	var reader = new x$24();
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

var x$25 = FormData;

var x$26 = decodeURIComponent;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new x$25();

	body.trim().split('&').forEach(function (data) {
		if (data) {
			var _data$split = data.split('='),
			    _data$split2 = _toArray(_data$split),
			    name = _data$split2[0],
			    parts = _data$split2.slice(1);

			name = x$26(name.replace(/\+/g, ' '));
			parts = x$26(parts.join('=').replace(/\+/g, ' '));
			form.append(name, parts);
		}
	});
	return form;
}

function isString(x) {
	return typeof x === 'string';
}

var x$27 = URLSearchParams;

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var x$28 = Uint8ClampedArray;

var x$29 = Uint16Array;

var x$30 = Uint32Array;

var x$31 = Int8Array;

var x$32 = Int16Array;

var x$33 = Int32Array;

var x$34 = Float64Array;

var viewClasses = [x$22, x$28, x$29, x$30, x$31, x$32, x$33, x$2, x$34];
function isArrayBufferView(obj) {
	return 0 <= viewClasses.findIndex(function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

var fromCharCode = String.fromCharCode;


var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

function arrayBufferToString(arrayBuffer) {
	var view = new x$22(arrayBuffer);
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
		var lastMask = lastMasks[length];
		var charCode = 0;
		var j = 0;
		var offset = length;
		while (0 < offset--) {
			var mask = offset === 0 ? lastMask : baseMask;
			/* eslint-disable no-bitwise */
			charCode |= (view[i + offset] & mask) << availableBits * j++;
			/* eslint-disable no-bitwise */
		}
		chars.push(charCode);
		i += length - 1;
	}
	var strings = [];
	var chunkLength = 4096;
	while (0 < chars.length) {
		strings.push(fromCharCode.apply(undefined, _toConsumableArray(chars.splice(0, chunkLength))));
	}
	return strings.join('');
}

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new x$22(buf.byteLength);
	view.set(new x$22(buf));
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
			} else if (isInstanceOf(body, x$19)) {
				this.bodyBlob = body;
			} else if (isInstanceOf(body, x$25)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, x$27)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, x$21)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new x$19([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, x$20) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
			} else {
				throw new Error('unsupported BodyInit type');
			}
			if (!this.headers.get('content-type')) {
				if (isString(body)) {
					this.headers.set('content-type', 'text/plain;charset=UTF-8');
				} else if (this.bodyBlob && this.bodyBlob.type) {
					this.headers.set('content-type', this.bodyBlob.type);
				} else if (body instanceof x$27) {
					this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
				}
			}
		}
	}, {
		key: 'arrayBuffer',
		value: function arrayBuffer() {
			if (this.bodyArrayBuffer) {
				return this.isUsed || x$23.resolve(this.bodyArrayBuffer);
			}
			return this.blob().then(function (blob) {
				return readBlob(blob, 'ArrayBuffer');
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
				return x$23.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return x$23.resolve(new x$19([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return x$23.resolve(new x$19([this.bodyText]));
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
				return readBlob(this.bodyBlob, 'Text');
			} else if (this.bodyArrayBuffer) {
				return x$23.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return x$23.resolve(this.bodyText);
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
			return this.text().then(x$18.parse);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return x$23.reject(new x$9('Already used'));
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

		var _this13 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

		if (input instanceof Request) {
			body = _this13.inheritFrom(input, body, init);
		} else {
			_this13.url = '' + input;
		}
		_this13.credentials = init.credentials || _this13.credentials || 'omit';
		if (init.headers || !_this13.headers) {
			_this13.headers = new Headers$1(init.headers);
		}
		_this13.method = (init.method || _this13.method || 'GET').toUpperCase();
		_this13.mode = init.mode || _this13.mode || null;
		_this13.referrer = null;
		if ((_this13.method === 'GET' || _this13.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this13.initBody(body);
		return _this13;
	}

	_createClass(Request, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref23) {
			var headers = _ref23.headers;

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

		var _this14 = _possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

		_this14.type = 'default';
		_this14.status = 'status' in init ? init.status : minOkStatus;
		_this14.ok = _this14.status >= minOkStatus && _this14.status < maxOkStatus;
		_this14.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this14.headers = new Headers$1(init.headers);
		_this14.url = init.url || '';
		_this14.initBody(body);
		return _this14;
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

var x$35 = Headers;

function parse$1(rawHeaders) {
	var headers = new x$35();
	// Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
	// https://tools.ietf.org/html/rfc7230#section-3.2
	var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/, ' ');
	preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
		var _line$split = line.split(':'),
		    _line$split2 = _toArray(_line$split),
		    key = _line$split2[0],
		    parts = _line$split2.slice(1);

		if (key) {
			headers.append(key.trim(), parts.join(':').trim());
		}
	});
	return headers;
}

var x$36 = XMLHttpRequest;

function fetch(input, init) {
	return new x$23(function (resolve, reject) {
		var request = new Request(input, init);
		var xhr = new x$36();
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
		var _iteratorNormalCompletion5 = true;
		var _didIteratorError5 = false;
		var _iteratorError5 = undefined;

		try {
			for (var _iterator5 = request.headers.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
				var _ref24 = _step5.value;

				var _ref25 = _slicedToArray(_ref24, 2);

				var name = _ref25[0];
				var value = _ref25[1];

				xhr.setRequestHeader(name, value);
			}
		} catch (err) {
			_didIteratorError5 = true;
			_iteratorError5 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion5 && _iterator5.return) {
					_iterator5.return();
				}
			} finally {
				if (_didIteratorError5) {
					throw _iteratorError5;
				}
			}
		}

		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

// if (!window.fetch) {
// 	window.fetch = j0fetch;
// }
x$7.fetch = fetch;

if (!x$7.Body) {
	x$7.Body = Body;
}

if (!x$7.Response) {
	x$7.Response = Response;
}

if (!x$7.Request) {
	x$7.Request = Request;
}

var x$37 = Date;

x$7.requestAnimationFrame = x$7.requestAnimationFrame || x$7.mozRequestAnimationFrame || x$7.webkitRequestAnimationFrame || x$7.msRequestAnimationFrame || function (fn) {
	return x$8(function () {
		fn(x$37.now());
	}, 30);
};

var x$38 = clearTimeout;

x$7.cancelAnimationFrame = x$7.cancelAnimationFrame || x$7.mozCancelAnimationFrame || function (id) {
	return x$38(id);
};

x$7.global = x$7;
}())
