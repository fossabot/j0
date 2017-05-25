(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var wait = function () {
	var _ref31 = _asyncToGenerator(regeneratorRuntime.mark(function _callee7(duration, data) {
		return regeneratorRuntime.wrap(function _callee7$(_context7) {
			while (1) {
				switch (_context7.prev = _context7.next) {
					case 0:
						_context7.next = 2;
						return new Promise(function (resolve) {
							setTimeout(resolve, duration);
						});

					case 2:
						return _context7.abrupt('return', data);

					case 3:
					case 'end':
						return _context7.stop();
				}
			}
		}, _callee7, this);
	}));

	return function wait(_x33, _x34) {
		return _ref31.apply(this, arguments);
	};
}();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function test$1(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype[Symbol.iterator]';


	describe(name, function () {

		it('should return an iterator', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var iterator = generator.call(array);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next = iterator.next(),
				    value = _iterator$next.value,
				    done = _iterator$next.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, array);
		});

		it('should return an iterator which is iterable in for-of syntax', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var iterator = generator.call(array);
			var results = [];
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var value = _step.value;

					results.push(value);
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

			assert.deepEqual(results, array);
		});
	});
}

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
	var _this = this;

	var length = this.length;

	var index = 0;
	return new Iterator(function () {
		return {
			value: _this[index],
			done: length <= index++
		};
	});
}

test$1(generator, 'Array.prototype[Symbol.iterator]#j0');

test$1(Array.prototype[Symbol.iterator]);

function findIndex(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		var value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}

function test$3(find) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.find';


	describe(name, function () {

		it('should return 1', function () {
			var expected = Date.now();
			var array = [new Date(), expected, new Date().toISOString()];
			var actual = find.call(array, function (x) {
				return x === this.expected;
			}, { expected: expected });
			assert.equal(actual, expected);
		});

		it('should return undefined', function () {
			var _ref = [],
			    expected = _ref[0];

			var array = [new Date(), Date.now(), new Date().toISOString()];
			var actual = find.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});
	});
}

test$3(findIndex, 'Array.prototype.find#j0');

test$3(Array.prototype.find);

function findIndex$2(fn, thisArg) {
	for (var i = 0, length = this.length; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}

function test$5(findIndex) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.findIndex';


	describe(name, function () {

		it('should return 0', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var expected = 1;
			var actual = findIndex.call(array, function (x) {
				return x === array[this.expected];
			}, { expected: expected });
			assert.equal(actual, expected);
		});

		it('should return -1', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var expected = -1;
			var actual = findIndex.call(array, function () {
				return false;
			});
			assert.equal(actual, expected);
		});
	});
}

test$5(findIndex$2, 'Array.prototype.findIndex#j0');

test$5(Array.prototype.findIndex);

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
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = iterable[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var item = _step2.value;

				result.push(mapFn.call(thisArg, item, i++));
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
	} else {
		for (var _i = 0, length = iterable.length; _i < length; _i++) {
			result[_i] = mapFn.call(thisArg, iterable[_i], _i);
		}
	}
	return result;
}

function test$7(arrayFrom) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.from';


	describe(name, function () {

		it('should create a new array from an array-like object', function () {
			var v1 = new Date();
			var v2 = Date.now();
			var v3 = new Date().toISOString();
			var actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			});
			var expected = [v1, v2, v3];
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should create a new array from an iterable object', function () {
			var expected = [new Date(), Date.now(), new Date().toISOString()];
			var iterable = _defineProperty({}, Symbol.iterator, function () {
				var count = 0;
				return {
					next: function next() {
						var value = expected[count++];
						return {
							value: value,
							done: !value
						};
					}
				};
			});
			var actual = arrayFrom(iterable);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an array-like object', function () {
			var v1 = new Date();
			var v2 = Date.now();
			var v3 = new Date().toISOString();
			function mapFn(value, index) {
				return [value, index, this];
			}
			var thisArg = {};
			var actual = arrayFrom({
				0: v1,
				1: v2,
				2: v3,
				length: 3
			}, mapFn, thisArg);
			var expected = [v1, v2, v3].map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});

		it('should support map function and thisArg when pass an iterable object', function () {
			var array = [new Date(), Date.now(), new Date().toISOString()];
			var iterable = _defineProperty({}, Symbol.iterator, function () {
				var count = 0;
				return {
					next: function next() {
						var value = array[count++];
						return {
							value: value,
							done: !value
						};
					}
				};
			});
			var thisArg = {};
			function mapFn(value, index) {
				return [value, index, this];
			}
			var actual = arrayFrom(iterable, mapFn, thisArg);
			var expected = array.map(mapFn, thisArg);
			assert.equal(Array.isArray(actual), true);
			assert.deepEqual(actual, expected);
		});
	});
}

test$7(arrayFrom, 'Array.from#j0');

test$7(Array.from);

function includes(searchElement) {
	var fromIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

	for (var i = fromIndex, length = this.length; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

function test$9(includes) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.prototype.includes';


	describe(name, function () {

		it('should find an item', function () {
			var array = [0, 1, 2, 3];
			assert.equal(includes.call(array, 1), true);
			assert.equal(includes.call(array, 4), false);
		});

		it('should find an item from array-like', function () {
			var arrayLike = {
				0: 0,
				1: 1,
				2: 2,
				3: 3,
				length: 4
			};
			assert.equal(includes.call(arrayLike, 1), true);
			assert.equal(includes.call(arrayLike, 4), false);
		});

		it('should find a character from a string', function () {
			var string = 'abcde';
			assert.equal(includes.call(string, 'c'), true);
			assert.equal(includes.call(string, 'f'), false);
		});
	});
}

test$9(includes, 'Array.prototype.includes#j0');

test$9(Array.prototype.includes);

function arrayOf() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	return args;
}

function test$11(arrayOf) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Array.of';


	describe(name, function () {

		it('should create an array', function () {
			var actual = arrayOf(1, 2, 3);
			var expected = [1, 2, 3];
			assert.deepEqual(actual, expected);
		});
	});
}

test$11(arrayOf, 'Array.of#j0');

test$11(Array.of);

var Uint8Array$1 = window.Uint8Array;

var fromCharCode = String.fromCharCode;


var baseMask = 0x3f;
var lastMasks = [baseMask, 0x7f, 0x1f, 0xf, 0x7, 0x3, 0x1];
var availableBits = 6;

function arrayBufferToString(arrayBuffer) {
	var view = new Uint8Array$1(arrayBuffer);
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

var FileReader = window.FileReader;

function readBlob(data, type) {
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

var document$1 = window.document;

function createArrayBuffer(data) {
	return readBlob(new Blob([data]), 'ArrayBuffer');
}

describe('ArrayBuffer/toString', function () {

	it('should return hello', _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						src = 'hello';
						_context.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	})));

	it('should return こんにちは', _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
		var src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee2$(_context2) {
			while (1) {
				switch (_context2.prev = _context2.next) {
					case 0:
						src = 'こんにちは';
						_context2.next = 3;
						return createArrayBuffer(src);

					case 3:
						arrayBuffer = _context2.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 5:
					case 'end':
						return _context2.stop();
				}
			}
		}, _callee2, this);
	})));

	it('should return wagahaiha-nekodearu.txt', _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
		var root, src, arrayBuffer;
		return regeneratorRuntime.wrap(function _callee3$(_context3) {
			while (1) {
				switch (_context3.prev = _context3.next) {
					case 0:
						root = document$1.getElementById('root').text;
						_context3.next = 3;
						return fetch(root + '/arrayBufferToString/wagahaiha-nekodearu.txt');

					case 3:
						_context3.next = 5;
						return _context3.sent.text();

					case 5:
						src = _context3.sent;
						_context3.next = 8;
						return createArrayBuffer(src);

					case 8:
						arrayBuffer = _context3.sent;

						assert.equal(arrayBufferToString(arrayBuffer), src);

					case 10:
					case 'end':
						return _context3.stop();
				}
			}
		}, _callee3, this);
	})));
});

var Blob$1 = window.Blob;

var ArrayBuffer = window.ArrayBuffer;

var DataView = window.DataView;

var TypeError$1 = window.TypeError;

var Promise$1 = window.Promise;

var FormData = window.FormData;

function trim(string) {
	return string.trim();
}

var decodeURIComponent = window.decodeURIComponent;

function parse(body) {
	var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new FormData();

	trim(body).split('&').forEach(function (data) {
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

function isString(x) {
	return typeof x === 'string';
}

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var Uint8ClampedArray$1 = window.Uint8ClampedArray;

var Uint16Array$1 = window.Uint16Array;

var Uint32Array$1 = window.Uint32Array;

var Int8Array$1 = window.Int8Array;

var Int16Array$1 = window.Int16Array;

var Int32Array$1 = window.Int32Array;

var Float32Array$1 = window.Float32Array;

var Float64Array$1 = window.Float64Array;

var viewClasses = [Uint8Array$1, Uint8ClampedArray$1, Uint16Array$1, Uint32Array$1, Int8Array$1, Int16Array$1, Int32Array$1, Float32Array$1, Float64Array$1];
function isArrayBufferView(obj) {
	return 0 <= viewClasses.findIndex(function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}

function cloneBuffer(buf) {
	if (buf.slice) {
		return buf.slice(0);
	}
	var view = new Uint8Array$1(buf.byteLength);
	view.set(new Uint8Array$1(buf));
	return view.buffer;
}

var Body$1 = function () {
	function Body$1() {
		_classCallCheck(this, Body$1);

		this.bodyUsed = false;
	}

	_createClass(Body$1, [{
		key: 'initBody',
		value: function initBody(body) {
			this.bodyInit = body;
			if (!body) {
				this.bodyText = '';
			} else if (isString(body)) {
				this.bodyText = body;
			} else if (isInstanceOf(body, Blob$1)) {
				this.bodyBlob = body;
			} else if (isInstanceOf(body, FormData)) {
				this.bodyFormData = body;
			} else if (isInstanceOf(body, URLSearchParams)) {
				this.bodyText = body.toString();
			} else if (isInstanceOf(body, DataView)) {
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new Blob$1([this.bodyArrayBuffer]);
			} else if (isInstanceOf(body, ArrayBuffer) || isArrayBufferView(body)) {
				this.bodyArrayBuffer = cloneBuffer(body);
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
				return this.isUsed || Promise$1.resolve(this.bodyArrayBuffer);
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
				return Promise$1.resolve(this.bodyBlob);
			} else if (this.bodyArrayBuffer) {
				return Promise$1.resolve(new Blob$1([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return Promise$1.resolve(new Blob$1([this.bodyText]));
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
				return Promise$1.resolve(arrayBufferToString(this.bodyArrayBuffer));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as text');
			} else {
				return Promise$1.resolve(this.bodyText);
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
			return this.text().then(JSON.parse);
		}
	}, {
		key: 'isUsed',
		get: function get() {
			if (this.bodyUsed) {
				return Promise$1.reject(new TypeError$1('Already used'));
			}
			this.bodyUsed = true;
		}
	}]);

	return Body$1;
}();

function tests(Body) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Body';


	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Body();
			});
		});
	});
}

tests(Body$1, 'J0Body');

/* global Body */
tests(Body);

var cancelAnimationFrame = window.cancelAnimationFrame;

var requestAnimationFrame = window.requestAnimationFrame;

describe('cancelAnimationFrame', function () {

	it('should cancel scheduled invocation', _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
		var baseInterval;
		return regeneratorRuntime.wrap(function _callee4$(_context4) {
			while (1) {
				switch (_context4.prev = _context4.next) {
					case 0:
						_context4.next = 2;
						return new Promise(function (resolve) {
							requestAnimationFrame(function (time1) {
								requestAnimationFrame(function (time2) {
									resolve(time2 - time1);
								});
							});
						});

					case 2:
						baseInterval = _context4.sent;

						assert.equal(0 < baseInterval, true);
						_context4.next = 6;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(function () {
								reject(new Error('requestAnimationFrame didn\'t invoke the given function.'));
							}, baseInterval * margin);
							requestAnimationFrame(function () {
								clearTimeout(timer);
								resolve();
							});
						});

					case 6:
						_context4.next = 8;
						return new Promise(function (resolve, reject) {
							var margin = 10;
							var timer = setTimeout(resolve, baseInterval * margin);
							var id = requestAnimationFrame(function () {
								clearTimeout(timer);
								reject(new Error('cancelAnimationFrame didn\'t cancel the invocation.'));
							});
							cancelAnimationFrame(id);
						});

					case 8:
					case 'end':
						return _context4.stop();
				}
			}
		}, _callee4, this);
	})));
});

function clone(obj) {
	return JSON.parse(JSON.stringify(obj));
}

function noop() {
	return 0;
}

describe('Object/clone', function () {

	it('should clone an object', function () {
		var data = { a: 1 };
		var actual = clone(data);
		var expected = { a: 1 };
		assert.deepEqual(actual, expected);
	});

	it('should remove functions', function () {
		var data = {
			a: noop,
			b: 0,
			c: noop
		};
		var actual = clone(data);
		var expected = { b: 0 };
		assert.deepEqual(actual, expected);
	});

	it('should isolate original', function () {
		var data = {
			a: noop,
			b: {},
			c: noop
		};
		var actual = clone(data);
		actual.b.a = 0;
		var expected = { b: { a: 0 } };
		assert.deepEqual(actual, expected);
		assert.deepEqual(data.b, {});
	});
});

function debounce(fn) {
	var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var thisArg = arguments[2];

	var timer = void 0;
	return function () {
		var _this2 = this;

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		clearTimeout(timer);
		timer = setTimeout(function () {
			fn.call.apply(fn, [thisArg || _this2].concat(args));
		}, delay);
	};
}

describe('debounce', function () {

	it('should call the function after the last call', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(value);
			}, 50);
			execute(1);
			execute(2);
			execute(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});

	it('should call the function with its context', function () {
		return new Promise(function (resolve) {
			var execute = debounce(function (value) {
				resolve(this);
			}, 50);
			execute.call(1);
			execute.call(2);
			execute.call(3);
		}).then(function (result) {
			assert.equal(result, 3);
		});
	});
});

var Node = window.Node;

function isNode(x) {
	return isInstanceOf(x, Node);
}

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
			this[nodeKey] = document$1.createTextNode(source);
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

			this[nodeKey] = wrap(document$1['createElement' + (t.indexOf(':') < 0 ? '' : 'NS')](t)).node;
			for (var i = 0, length = c.length; i < length; i++) {
				var item = c[i];
				if (item) {
					this.append(item);
				}
			}
			for (var _i2 = 0, _length = e.length; _i2 < _length; _i2++) {
				var _item = e[_i2];
				if (_item) {
					this.on(_item[0], _item[1]);
				}
			}
			for (var _i3 = 0, _length2 = a.length; _i3 < _length2; _i3++) {
				var _item2 = a[_i3];
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
			return find$1(selector, this);
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

function find$1(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document$1;

	var element = rootElement.querySelector(selector);
	return element && wrap(element);
}

function _findAll(selector) {
	var rootElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document$1;

	var list = rootElement.querySelectorAll(selector);
	var result = [];
	for (var i = 0, length = list.length; i < length; i++) {
		result.push(wrap(list[i]));
	}
	return result;
}

wrap.find = find$1;
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

function forEachKey(obj, fn, thisArg) {
	for (var _key4 in obj) {
		if (obj.hasOwnProperty(_key4)) {
			if (fn.call(thisArg, obj[_key4], _key4, obj)) {
				return;
			}
		}
	}
}

function toLowerCase(string) {
	return ('' + string).toLowerCase();
}

var StringList = function () {
	function StringList(iterable) {
		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion3 = true;
			var _didIteratorError3 = false;
			var _iteratorError3 = undefined;

			try {
				for (var _iterator3 = iterable[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
					var _ref6 = _step3.value;

					var _ref7 = _slicedToArray(_ref6, 2);

					var _key5 = _ref7[0];
					var value = _ref7[1];

					this.append(_key5, value);
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

	_createClass(StringList, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return this.data.findIndex(function (_ref8) {
				var _ref9 = _slicedToArray(_ref8, 1),
				    itemName = _ref9[0];

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
			this.data = this.data.filter(function (_ref10) {
				var _ref11 = _slicedToArray(_ref10, 1),
				    itemName = _ref11[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = find(this.data, function (_ref12) {
				var _ref13 = _slicedToArray(_ref12, 1),
				    itemName = _ref13[0];

				return itemName === name;
			});
			return found ? found[1] : null;
		}
	}, {
		key: 'getAll',
		value: function getAll(name) {
			var result = [];
			this.data.forEach(function (_ref14) {
				var _ref15 = _slicedToArray(_ref14, 2),
				    itemName = _ref15[0],
				    value = _ref15[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref16) {
				var _ref17 = _slicedToArray(_ref16, 2),
				    name = _ref17[0],
				    _ref17$ = _ref17[1],
				    value = _ref17$ === undefined ? '' : _ref17$;

				return name + ':' + value;
			}).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			return this.data[iteratorSymbol]();
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
		key: iteratorSymbol,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

var Headers$1 = function (_StringList) {
	_inherits(Headers$1, _StringList);

	function Headers$1(headers) {
		_classCallCheck(this, Headers$1);

		var init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				init.push([key, value]);
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
			var _this5 = this;

			var iterator = _get(Headers$1.prototype.__proto__ || Object.getPrototypeOf(Headers$1.prototype), 'entries', this).call(this);
			var history = [];
			return new Iterator(function () {
				while (1) {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

					var _key6 = value && value[0];
					if (done || history.indexOf(_key6) < 0) {
						history.push(_key6);
						return {
							value: [_key6, _this5.get(_key6)],
							done: done
						};
					}
				}
			});
		}
	}]);

	return Headers$1;
}(StringList);

var Request$1 = function (_Body$) {
	_inherits(Request$1, _Body$);

	function Request$1(input) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Request$1);

		var body = init.body;

		var _this6 = _possibleConstructorReturn(this, (Request$1.__proto__ || Object.getPrototypeOf(Request$1)).call(this));

		if (input instanceof Request$1) {
			body = _this6.inheritFrom(input, body, init);
		} else {
			_this6.url = '' + input;
		}
		_this6.credentials = init.credentials || _this6.credentials || 'omit';
		if (init.headers || !_this6.headers) {
			_this6.headers = new Headers$1(init.headers);
		}
		_this6.method = (init.method || _this6.method || 'GET').toUpperCase();
		_this6.mode = init.mode || _this6.mode || null;
		_this6.referrer = null;
		if ((_this6.method === 'GET' || _this6.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this6.initBody(body);
		return _this6;
	}

	_createClass(Request$1, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref18) {
			var headers = _ref18.headers;

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
			return new Request$1(this, { body: this.bodyInit });
		}
	}]);

	return Request$1;
}(Body$1);

var minOkStatus = 200;
var maxOkStatus = 300;
var redirectStatuses = [301, 302, 303, 307, 308];

var Response$1 = function (_Body$2) {
	_inherits(Response$1, _Body$2);

	function Response$1(body) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Response$1);

		var _this7 = _possibleConstructorReturn(this, (Response$1.__proto__ || Object.getPrototypeOf(Response$1)).call(this));

		_this7.type = 'default';
		_this7.status = 'status' in init ? init.status : minOkStatus;
		_this7.ok = _this7.status >= minOkStatus && _this7.status < maxOkStatus;
		_this7.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this7.headers = new Headers$1(init.headers);
		_this7.url = init.url || '';
		_this7.initBody(body);
		return _this7;
	}

	_createClass(Response$1, [{
		key: 'clone',
		value: function clone() {
			return new Response$1(this.bodyInit, {
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
			return new Response$1(null, {
				status: status,
				headers: { location: url }
			});
		}
	}], [{
		key: 'error',
		value: function error() {
			var response = new Response$1(null, {
				status: 0,
				statusText: ''
			});
			response.type = 'error';
			return response;
		}
	}]);

	return Response$1;
}(Body$1);

var Headers$2 = window.Headers;

function parse$2(rawHeaders) {
	var headers = new Headers$2();
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

var XMLHttpRequest = window.XMLHttpRequest;

function fetch$1(input, init) {
	return new Promise$1(function (resolve, reject) {
		var request = new Request$1(input, init);
		var xhr = new XMLHttpRequest();
		xhr.onload = function () {
			var options = {
				status: xhr.status,
				statusText: xhr.statusText,
				headers: parse$2(xhr.getAllResponseHeaders() || '')
			};
			options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
			var body = 'response' in xhr ? xhr.response : xhr.responseText;
			resolve(new Response$1(body, options));
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
		var _iteratorNormalCompletion4 = true;
		var _didIteratorError4 = false;
		var _iteratorError4 = undefined;

		try {
			for (var _iterator4 = request.headers.entries()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
				var _ref19 = _step4.value;

				var _ref20 = _slicedToArray(_ref19, 2);

				var name = _ref20[0];
				var value = _ref20[1];

				xhr.setRequestHeader(name, value);
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

		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

function tests$2(fetch) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fetch';


	describe(name, function () {

		it('should get this page', function () {
			return fetch('./index.html').then(function (response) {
				return response.text();
			}).then(function (text) {
				assert.equal(/<!doctype/.test(text), true);
			});
		});

		it('should get json', function () {
			return fetch(document.getElementById('root').textContent + '/fetch/test.json').then(function (response) {
				return response.json();
			}).then(function (data) {
				assert.deepEqual(data, { a: 'b' });
			});
		});
	});
}

tests$2(fetch$1, 'J0Fetch');

tests$2(fetch);

var Date$1 = window.Date;

function leftpad(x) {
	var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
	var padChar = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';

	var s = x.toString();
	var pad = length - s.length;
	return 0 < pad ? '' + padChar.charAt(0).repeat(pad) + s : s;
}

var century = 100;
var shortenedLength = 3;

var MonthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var DayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function format(src, template) {
	var date = new Date$1(src);
	if (0 < date) {
		var Y = date.getFullYear();
		var M = date.getMonth();
		var D = date.getDate();
		var d = date.getDay();
		var h = date.getHours();
		var m = date.getMinutes();
		return template.replace(/%YYYY/g, Y.toString()).replace(/%YY/g, leftpad(Y % century)).replace(/%MMMM/g, MonthNames[M]).replace(/%MMM/g, MonthNames[M].slice(0, shortenedLength)).replace(/%MM/g, leftpad(M + 1)).replace(/%M/g, (M + 1).toString()).replace(/%DD/g, leftpad(D)).replace(/%D/g, D.toString()).replace(/%dddd/g, DayNames[d]).replace(/%ddd/g, DayNames[d].slice(0, shortenedLength)).replace(/%hh/, leftpad(h)).replace(/%h/, h.toString()).replace(/%mm/, leftpad(m)).replace(/%m/, m.toString());
	}
	return '';
}

describe('format', function () {

	it('should format a date', function () {
		var src = '2016-01-01T12:00Z';
		var template = '%YYYY%MMM';
		var expected = '2016Jan';
		assert.equal(format(src, template), expected);
	});
});

var setTimeout$1 = window.setTimeout;

var INTERVAL = 100;

var getBody = new Promise$1(function (resolve) {
	function get() {
		var body = document$1.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout$1(get, INTERVAL);
		}
	}
	get();
});

describe('getBody', function () {

	it('should return a promise', function () {
		return getBody.then(function (body) {
			assert.equal(!body.appendChild, false);
		});
	});
});

function tests$4(Headers) {
	var testName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Headers';


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

tests$4(Headers$1, 'Headers/j0');

tests$4(Headers);

function generator$2() {
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

function test$13(generator) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'HTMLCollection/@iterator';


	describe(name, function () {

		it('should create an iterator', function () {
			var parent = document.createElement('div');
			var expected = [document.createElement('div'), document.createElement('div')];
			var _iteratorNormalCompletion5 = true;
			var _didIteratorError5 = false;
			var _iteratorError5 = undefined;

			try {
				for (var _iterator5 = expected[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
					var element = _step5.value;

					parent.appendChild(element);
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

			var iterator = generator.call(parent.childNodes);
			var results = [];
			var index = 0;
			while (1) {
				var _iterator$next6 = iterator.next(),
				    value = _iterator$next6.value,
				    done = _iterator$next6.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, expected);
		});
	});
}

test$13(generator$2, 'HTMLCollection/@iterator/j0');

test$13(HTMLCollection.prototype[Symbol.iterator]);

var window$1 = window.window;

function innerHeight() {
	return window$1.innerHeight;
}

describe('innerHeight', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerHeight(), true);
	});
});

function innerWidth() {
	return window$1.innerWidth;
}

describe('innerWidth', function () {

	it('should return a non-negative integer', function () {
		assert.equal(0 <= innerWidth(), true);
	});
});

var Array$1 = window.Array;

var isArray = Array$1.isArray;

describe('isArray', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isArray(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isArray(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isArray(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isArray(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isArray('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isArray({}), false);
	});

	it('should return true if the arguments are [[]]', function () {
		assert.equal(isArray([]), true);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isArray(function () {}), false);
	});
});

describe('isArrayBufferView', function () {

	it('should return true if the argument is Int8Array', function () {
		assert.equal(isArrayBufferView(new Int8Array(1)), true);
	});

	it('should return true if the argument is Int16Array', function () {
		assert.equal(isArrayBufferView(new Int16Array(1)), true);
	});

	it('should return true if the argument is Int32Array', function () {
		assert.equal(isArrayBufferView(new Int32Array(1)), true);
	});

	it('should return true if the argument is Uint8ClampedArray', function () {
		assert.equal(isArrayBufferView(new Uint8ClampedArray(1)), true);
	});

	it('should return true if the argument is Uint8Array', function () {
		assert.equal(isArrayBufferView(new Uint8Array(1)), true);
	});

	it('should return true if the argument is Uint16Array', function () {
		assert.equal(isArrayBufferView(new Uint16Array(1)), true);
	});

	it('should return true if the argument is Uint32Array', function () {
		assert.equal(isArrayBufferView(new Uint32Array(1)), true);
	});

	it('should return true if the argument is Float32Array', function () {
		assert.equal(isArrayBufferView(new Float32Array(1)), true);
	});

	it('should return true if the argument is Float64Array', function () {
		assert.equal(isArrayBufferView(new Float64Array(1)), true);
	});

	it('should return false if the argument is Object', function () {
		assert.equal(isArrayBufferView({}), false);
	});

	it('should return false if the argument is Number', function () {
		assert.equal(isArrayBufferView(1), false);
	});
});

function isFunction(x) {
	return typeof x === 'function';
}

describe('isFunction', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isFunction(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isFunction(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isFunction(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isFunction(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isFunction('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isFunction({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isFunction([]), false);
	});

	it('should return true if the arguments are [function () {}]', function () {
		assert.equal(isFunction(function () {}), true);
	});
});

describe('isInstanceOf', function () {

	it('should return true if the first argument is an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = new A();
		assert.equal(isInstanceOf(a, A), true);
	});

	it('should return false if the first argument is not an instance of the last argument', function () {
		var A = function A() {
			_classCallCheck(this, A);
		};

		var a = 0;
		assert.equal(isInstanceOf(a, A), false);
	});
});

describe('isNode', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNode(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNode(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isNode(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isNode(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNode('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNode({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNode([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNode(function () {}), false);
	});
});

function isNumber(x) {
	return typeof x === 'number';
}

describe('isNumber', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isNumber(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isNumber(null), false);
	});

	it('should return true if the arguments are [NaN]', function () {
		assert.equal(isNumber(NaN), true);
	});

	it('should return true if the arguments are [123]', function () {
		assert.equal(isNumber(123), true);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isNumber('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isNumber({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isNumber([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isNumber(function () {}), false);
	});
});

describe('isString', function () {

	it('should return false if the arguments are []', function () {
		assert.equal(isString(), false);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isString(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isString(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isString(123), false);
	});

	it('should return true if the arguments are [\'abc\']', function () {
		assert.equal(isString('abc'), true);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isString({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isString([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isString(function () {}), false);
	});
});

describe('isUndefined', function () {

	it('should return true if the arguments are []', function () {
		assert.equal(isUndefined(), true);
	});

	it('should return false if the arguments are [null]', function () {
		assert.equal(isUndefined(null), false);
	});

	it('should return false if the arguments are [NaN]', function () {
		assert.equal(isUndefined(NaN), false);
	});

	it('should return false if the arguments are [123]', function () {
		assert.equal(isUndefined(123), false);
	});

	it('should return false if the arguments are [\'abc\']', function () {
		assert.equal(isUndefined('abc'), false);
	});

	it('should return false if the arguments are [{}]', function () {
		assert.equal(isUndefined({}), false);
	});

	it('should return false if the arguments are [[]]', function () {
		assert.equal(isUndefined([]), false);
	});

	it('should return false if the arguments are [function () {}]', function () {
		assert.equal(isUndefined(function () {}), false);
	});
});

describe('Iterator', function () {

	it('should return a function which returns an iterator', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var result = iterator.next();
		var results = [];
		while (!result.done) {
			results.push(result.value);
			result = iterator.next();
		}
		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});

	it('should return a function which returns an iterator iterable in for-of syntax', function () {
		var value = 0;
		var max = 5;
		var iterator = new Iterator(function () {
			return {
				value: value,
				done: max < value++
			};
		});
		var results = [];
		var _iteratorNormalCompletion6 = true;
		var _didIteratorError6 = false;
		var _iteratorError6 = undefined;

		try {
			for (var _iterator6 = iterator[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
				var result = _step6.value;

				results.push(result);
			}
		} catch (err) {
			_didIteratorError6 = true;
			_iteratorError6 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion6 && _iterator6.return) {
					_iterator6.return();
				}
			} finally {
				if (_didIteratorError6) {
					throw _iteratorError6;
				}
			}
		}

		assert.deepEqual(results, [0, 1, 2, 3, 4, 5]);
	});
});

var storage = void 0;
try {
	storage = localStorage;
	storage.is = 'available';
} catch (err) {
	storage = 0;
}
if (storage) {
	storage.removeItem('is');
} else {
	storage = {
		removeItem: function removeItem(key) {
			delete this[key];
		}
	};
}
var localStorage$1 = storage;

var key = Date.now();

describe('localStorage', function () {

	it('should be writable/readable', function () {
		localStorage$1[key] = key;
		assert.equal(localStorage$1[key], key);
	});

	it('should remove data', function () {
		localStorage$1.removeItem(key);
		assert.equal(localStorage$1[key], {}[key]);
	});
});

function generator$4() {
	return this.entries();
}

describe('Map/@iterator', function () {

	it('should return an iterator', function () {
		var data = [[1, 2], [3, 4]];
		var map = new Map(data);
		var iterator = generator$4.call(map);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next7 = iterator.next(),
			    value = _iterator$next7.value,
			    done = _iterator$next7.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});
});

var Map$2 = function () {
	function Map$2(iterable) {
		_classCallCheck(this, Map$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion7 = true;
			var _didIteratorError7 = false;
			var _iteratorError7 = undefined;

			try {
				for (var _iterator7 = iterable[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
					var _ref21 = _step7.value;

					var _ref22 = _slicedToArray(_ref21, 2);

					var _key7 = _ref22[0];
					var value = _ref22[1];

					this.set(_key7, value);
				}
			} catch (err) {
				_didIteratorError7 = true;
				_iteratorError7 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion7 && _iterator7.return) {
						_iterator7.return();
					}
				} finally {
					if (_didIteratorError7) {
						throw _iteratorError7;
					}
				}
			}
		}
	}

	_createClass(Map$2, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOfKey',
		value: function indexOfKey(key) {
			return this.data.findIndex(function (_ref23) {
				var _ref24 = _slicedToArray(_ref23, 1),
				    itemKey = _ref24[0];

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
			var found = find(this.data, function (_ref25) {
				var _ref26 = _slicedToArray(_ref25, 1),
				    itemKey = _ref26[0];

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
			this.data.forEach(fn, thisArg);
		}
	}, {
		key: 'keys',
		value: function keys() {
			var iterator = this.entries();
			return {
				next: function next() {
					var _iterator$next8 = iterator.next(),
					    value = _iterator$next8.value,
					    done = _iterator$next8.done;

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
					var _iterator$next9 = iterator.next(),
					    value = _iterator$next9.value,
					    done = _iterator$next9.done;

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

	return Map$2;
}();

function tests$6(Map, name) {

	describe(name, function () {

		it('should create an instance', function () {
			assert.doesNotThrow(function () {
				var map = new Map();
				return map;
			});
		});

		it('should return keys', function () {
			var map = new Map();
			assert.deepEqual(Array.from(map.keys()), []);
		});

		it('should return values', function () {
			var map = new Map();
			assert.deepEqual(Array.from(map.values()), []);
		});

		it('should initialize with given array', function () {
			var map = new Map([[0, 1]]);
			assert.deepEqual({
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});

		it('should initialize with given iterable', function () {
			var iterable = _defineProperty({}, Symbol.iterator, regeneratorRuntime.mark(function _callee5() {
				var count;
				return regeneratorRuntime.wrap(function _callee5$(_context5) {
					while (1) {
						switch (_context5.prev = _context5.next) {
							case 0:
								count = 0;

							case 1:
								if (!(count < 1)) {
									_context5.next = 7;
									break;
								}

								_context5.next = 4;
								return [count, count + 1];

							case 4:
								count += 1;
								_context5.next = 1;
								break;

							case 7:
							case 'end':
								return _context5.stop();
						}
					}
				}, _callee5, this);
			}));
			var map = new Map(iterable);
			assert.deepEqual({
				keys: Array.from(map.keys()),
				values: Array.from(map.values())
			}, {
				keys: [0],
				values: [1]
			});
		});
	});
}

tests$6(Map$2, 'J0Map');

tests$6(Map, 'Map');

function clamp(x) {
	var L = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -Infinity;
	var H = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Infinity;

	if (H < L) {
		var _ref27 = [H, L];
		L = _ref27[0];
		H = _ref27[1];
	}
	if (x < L) {
		x = L;
	} else if (H < x) {
		x = H;
	}
	return x;
}

describe('Math/clamp', function () {

	it('should return 1 if the arguments are [0, 1, 2]', function () {
		assert.equal(clamp(0, 1, 2), 1);
	});

	it('should return 2 if the arguments are [0, 2]', function () {
		assert.equal(clamp(0, 2), 2);
	});

	it('should return 2 if the arguments are [2, 1, 3]', function () {
		assert.equal(clamp(2, 1, 3), 2);
	});

	it('should return 2 if the arguments are [2, 3, 1]', function () {
		assert.equal(clamp(2, 3, 1), 2);
	});
});

function p(p1, p2, t) {
	return (1 - 3 * p2 + 3 * p1) * t * t * t + 3 * (p2 - 2 * p1) * t * t + 3 * p1 * t;
}

function cubicBezier(x1, y1, x2, y2, x) {
	function getT(lower, upper) {
		var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

		var t = (lower + upper) / 2;
		if (8 < depth) {
			return t;
		} else if (p(x1, x2, t) < x) {
			// gotten x is lower than x
			return getT(t, upper, depth + 1);
		} else {
			// gotten x is larger than x
			return getT(lower, t, depth + 1);
		}
	}
	return p(y1, y2, getT(0, 1));
}

describe('Math/cubicBezier', function () {

	it('should be linear', function () {
		var sum = 0;
		for (var t = 0; t <= 1; t += 0.1) {
			var d = cubicBezier(0, 0, 1, 1, t) - t;
			sum += d * d;
		}
		assert.equal(sum < 0.0001, true);
	});
});

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

describe('NamedNodeMap/@iterator', function () {

	it('should create an iterator', function () {
		var parent = document.createElement('div');
		var expected = [document.createElement('div'), document.createElement('div')];
		var _iteratorNormalCompletion8 = true;
		var _didIteratorError8 = false;
		var _iteratorError8 = undefined;

		try {
			for (var _iterator8 = expected[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
				var element = _step8.value;

				parent.appendChild(element);
			}
		} catch (err) {
			_didIteratorError8 = true;
			_iteratorError8 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion8 && _iterator8.return) {
					_iterator8.return();
				}
			} finally {
				if (_didIteratorError8) {
					throw _iteratorError8;
				}
			}
		}

		var iterator = generator$6.call(parent.childNodes);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next10 = iterator.next(),
			    value = _iterator$next10.value,
			    done = _iterator$next10.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});
});

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

describe('NodeList/@iterator', function () {

	it('should create an iterator', function () {
		var parent = document.createElement('div');
		var expected = [document.createElement('div'), document.createElement('div')];
		var _iteratorNormalCompletion9 = true;
		var _didIteratorError9 = false;
		var _iteratorError9 = undefined;

		try {
			for (var _iterator9 = expected[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
				var element = _step9.value;

				parent.appendChild(element);
			}
		} catch (err) {
			_didIteratorError9 = true;
			_iteratorError9 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion9 && _iterator9.return) {
					_iterator9.return();
				}
			} finally {
				if (_didIteratorError9) {
					throw _iteratorError9;
				}
			}
		}

		var iterator = generator$8.call(parent.childNodes);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next11 = iterator.next(),
			    value = _iterator$next11.value,
			    done = _iterator$next11.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, expected);
	});
});

function noopTrue() {
	return true;
}

describe('noop/true', function () {

	it('should return true', function () {
		assert.equal(noopTrue(false), true);
	});
});

function noop$1(x) {
	return x;
}

describe('noop', function () {

	it('should be callable', function () {
		assert.doesNotThrow(function () {
			noop$1();
		});
	});

	it('should return the first argument', function () {
		var data = new Date();
		assert.equal(noop$1(data), data);
	});
});

function test$15(MAX_SAFE_INTEGER) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Number.MAX_SAFE_INTEGER';


	describe(name, function () {

		it('should evaluate to true', function () {
			assert.equal(MAX_SAFE_INTEGER + 1, MAX_SAFE_INTEGER + 2);
		});
	});
}

var J0MAX_SAFE_INTEGER = 9007199254740991;

test$15(J0MAX_SAFE_INTEGER, 'J0MAX_SAFE_INTEGER');

test$15(Number.MAX_SAFE_INTEGER);

function assign(target) {
	for (var _len4 = arguments.length, sources = Array(_len4 > 1 ? _len4 - 1 : 0), _key8 = 1; _key8 < _len4; _key8++) {
		sources[_key8 - 1] = arguments[_key8];
	}

	sources.forEach(function (source) {
		forEachKey(source, function (value, key) {
			target[key] = value;
		});
	});
	return target;
}

describe('Object/assign', function () {
	it('should assign values', function () {
		var target = {
			a: 0,
			b: 0,
			c: 0
		};
		var src1 = { b: 1 };
		var src2 = {
			b: 2,
			c: 3
		};
		var returnValue = assign(target, src1, src2);
		var expected = {
			a: 0,
			b: 2,
			c: 3
		};
		assert.equal(target, returnValue);
		assert.deepEqual(returnValue, expected);
	});
});

describe('Object/forEachKey', function () {

	it('should iterate over an object', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len5 = arguments.length, args = Array(_len5), _key9 = 0; _key9 < _len5; _key9++) {
				args[_key9] = arguments[_key9];
			}

			results.push(args);
		});
		assert.deepEqual(results, [[0, 'a', obj], [1, 'b', obj]]);
	});

	it('should stop iteration if fn returns truthy value', function () {
		var obj = {
			a: 0,
			b: 1
		};
		var results = [];
		forEachKey(obj, function () {
			for (var _len6 = arguments.length, args = Array(_len6), _key10 = 0; _key10 < _len6; _key10++) {
				args[_key10] = arguments[_key10];
			}

			results.push(args);
			return true;
		});
		assert.deepEqual(results, [[0, 'a', obj]]);
	});

	it('should ignore properties which is not its own', function () {
		var obj = [1, 2];
		var results = [];
		forEachKey(obj, function () {
			for (var _len7 = arguments.length, args = Array(_len7), _key11 = 0; _key11 < _len7; _key11++) {
				args[_key11] = arguments[_key11];
			}

			results.push(args);
		});
		assert.deepEqual(results, [[1, '0', obj], [2, '1', obj]]);
	});
});

var keys = Object.keys;

describe('Object/keys', function () {

	it('should return an array of keys', function () {
		var data = {
			a: 0,
			b: 0,
			c: 0
		};
		var actual = keys(data);
		var expected = ['a', 'b', 'c'];
		assert.deepEqual(actual, expected);
	});
});

function toString(o) {
	return Object.prototype.toString.call(o);
}

describe('Object/toString', function () {

	it('should convert [] to [object Array]', function () {
		var value = [];
		var expected = '[object Array]';
		assert.equal(toString(value), expected);
	});
});

function onError(error) {
	onError.listener(error);
}

onError.listener = function (error) {
	console.error(error);
};

describe('onError', function () {

	it('should call its listener', function () {
		var count = 0;
		function listener(x) {
			count += x;
		}
		onError.listener = listener;
		onError(1);
		onError(2);
		assert.equal(count, 3);
	});
});

describe('FormData/parse', function () {

	it('should parse string', function () {
		var form = parse('a=b&c=d', {
			data: {},
			append: function append(key, value) {
				this.data[key] = value;
			}
		});
		assert.deepEqual(form.data, {
			a: 'b',
			c: 'd'
		});
	});
});

describe('Headers/parse', function () {

	it('should parse raw String', function () {
		var src = '   Content-Length\t: 1000\nContent-Type  : text/html';
		var headers = parse$2(src);
		assert.deepEqual(Array.from(headers.entries()), [['content-length', '1000'], ['content-type', 'text/html']]);
	});
});

describe('passThrough', function () {

	it('should return the first argument', function () {
		var value = Date.now();
		assert.equal(passThrough(value), value);
	});
});

function preventDefault(event) {
	event.preventDefault();
}

describe('preventDefault', function () {

	it('should be a function', function () {
		assert.equal(isFunction(preventDefault), true);
	});
});

// import postMessage from '../postMessage';
// import addEventListner from '../dom/addEventListener';
if (!window$1.immediateId) {
	window$1.immediateId = 0;
}
window$1.immediateId += 1;
var setImmediateNative = window$1.setImmediate;

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
	return setTimeout$1(fn);
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
setTimeout$1(function () {
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
	this.promise = new J0Promise(noop$1);
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
			var _this11 = this;

			var done = false;
			var onResolve = function onResolve(value) {
				if (done) {
					return;
				}
				done = true;
				_this11.resolve(value);
			};
			var onReject = function onReject(error) {
				if (done) {
					return;
				}
				done = true;
				_this11.reject(error);
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
					throw new TypeError$1('A promise cannot be resolved with itself');
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
			var _this12 = this;

			this.deferreds.forEach(function (deferred) {
				_this12.handle(deferred);
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

function test$17(Promise, name) {

	function onUnexpectedFullfill() {
		throw new Error('onFulfilled was called unexpectedly');
	}

	function onUnexpectedReject(error) {
		throw error || new Error('onRejected was called unexpectedly');
	}

	describe(name, function () {

		it('should call onFulfilled', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onRejected', function () {
			var expected = 123;
			return new Promise(function (resolve, reject) {
				reject(expected);
			}).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			});
		});

		it('should support chained thennables', function () {
			var expected = 32;
			return new Promise(function (resolve) {
				resolve(1);
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				return value * 2;
			}).then(function (value) {
				assert.equal(value, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled immediately if the promise is finished', function () {
			var expected = 123;
			var promise = new Promise(function (resolve) {
				resolve(expected);
			});
			return promise.then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should call onFulfilled added on changing state', function () {
			var expected = 123;
			return new Promise(function (resolve) {
				resolve(expected);
			}).then(function (value) {
				assert.equal(value, expected);
				return value;
			}).then(function (value2) {
				assert.equal(value2, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return results of promises', function () {
			var expected = [1, 2, 3];
			return Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(function (results) {
				assert.deepEqual(results, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of a rejected promise', function () {
			var expected = 2;
			return Promise.all([Promise.resolve(1), Promise.reject(expected), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return a result of the last promise', function () {
			var expected = 3;
			var timeout = 100;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), Promise.resolve(expected)]).then(function (result) {
				assert.equal(result, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the first promise', function () {
			var expected = 1;
			return Promise.race([Promise.reject(1), Promise.reject(2), Promise.resolve(3)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});

		it('should return an error of the last promise', function () {
			var expected = 3;
			var timeout = 100;
			return Promise.race([new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), new Promise(function (resolve) {
				setTimeout(resolve, timeout);
			}), Promise.reject(expected)]).then(onUnexpectedFullfill, function (error) {
				assert.equal(error, expected);
			}).catch(onUnexpectedReject);
		});
	});
}

test$17(J0Promise, 'Promise/j0');

test$17(Promise, 'Promise');

describe('FileReader/read', function () {

	it('should be a function', function () {
		return readBlob;
	});
});

function tests$9(Request, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Request('/');
			});
		});
	});
}

tests$9(Request$1, 'J0Request');

tests$9(Request, 'Request');

describe('requestAnimationFrame', function () {

	it('should call the given function with timeStamp', _asyncToGenerator(regeneratorRuntime.mark(function _callee6() {
		var timeStamp;
		return regeneratorRuntime.wrap(function _callee6$(_context6) {
			while (1) {
				switch (_context6.prev = _context6.next) {
					case 0:
						_context6.next = 2;
						return new Promise(requestAnimationFrame);

					case 2:
						timeStamp = _context6.sent;

						assert(0 < timeStamp, true);

					case 4:
					case 'end':
						return _context6.stop();
				}
			}
		}, _callee6, this);
	})));
});

function tests$11(Response, name) {

	describe(name, function () {

		it('should create a new instance', function () {
			assert.doesNotThrow(function () {
				return new Response();
			});
		});
	});
}

tests$11(Response$1, 'J0Response');

tests$11(Response, 'Response');

describe('scrollBy', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollBy(1, 1);
		});
	});
});

describe('scrollTo', function () {

	it('should receive two numbers', function () {
		assert.doesNotThrow(function () {
			scrollTo(1, 1);
		});
	});
});

function scrollX() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window$1;

	return element.scrollLeft || element.pageXOffset || 0;
}

describe('scrollX', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollX(), true);
	});
});

function scrollY() {
	var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window$1;

	return element.scrollTop || element.pageYOffset || 0;
}

describe('scrollY', function () {
	it('should return a non-negative integer', function () {
		assert.equal(0 <= scrollY(), true);
	});
});

function generator$10() {
	return this.values();
}

describe('Set/@iterator', function () {

	it('should return an iterator', function () {
		var data = [1, 2];
		var map = new Set(data);
		var iterator = generator$10.call(map);
		var results = [];
		var index = 0;
		while (1) {
			var _iterator$next12 = iterator.next(),
			    value = _iterator$next12.value,
			    done = _iterator$next12.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, data);
	});
});

var Set$2 = function () {
	function Set$2(iterable) {
		_classCallCheck(this, Set$2);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion10 = true;
			var _didIteratorError10 = false;
			var _iteratorError10 = undefined;

			try {
				for (var _iterator10 = iterable[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
					var value = _step10.value;

					this.add(value);
				}
			} catch (err) {
				_didIteratorError10 = true;
				_iteratorError10 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion10 && _iterator10.return) {
						_iterator10.return();
					}
				} finally {
					if (_didIteratorError10) {
						throw _iteratorError10;
					}
				}
			}
		}
	}

	_createClass(Set$2, [{
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
			var _this13 = this;

			this.data.forEach(function (value) {
				fn.call(thisArg, value, value, _this13);
			});
		}
	}, {
		key: 'values',
		value: function values() {
			return this.data[iteratorSymbol]();
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
					var _iterator$next13 = iterator.next(),
					    value = _iterator$next13.value,
					    done = _iterator$next13.done;

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

	return Set$2;
}();

function tests$13(Set, name) {

	describe(name, function () {

		it('should support constructor arguments', function () {
			var data = [1, 2, 3];
			var set = new Set(data);
			assert.equal(set.size, 3);
		});

		it('should have add()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.add(4);
			assert.equal(set.size, 4);
		});

		it('should return itself', function () {
			var set = new Set();
			assert.equal(set.add(1), set);
		});

		it('should keep uniqueness', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			set.add(3);
			assert.equal(set.size, 3);
		});

		it('should return true on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(3);
			assert.equal(set.size, 2);
			assert.equal(returnValue, true);
		});

		it('should return false on deleting existing item', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var returnValue = set.delete(4);
			assert.equal(set.size, 3);
			assert.equal(returnValue, false);
		});

		it('should have forEach()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var index = 0;
			var results = [];
			var context = {};
			set.forEach(function () {
				for (var _len8 = arguments.length, args = Array(_len8), _key12 = 0; _key12 < _len8; _key12++) {
					args[_key12] = arguments[_key12];
				}

				args[3] = this;
				results[index++] = args;
			}, context);
			assert.deepEqual(results, [[1, 1, set, context], [2, 2, set, context], [3, 3, set, context]]);
		});

		it('should have has()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			assert.deepEqual([set.has(3), set.has(4)], [true, false]);
		});

		it('should have values()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.values();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next14 = iterator.next(),
				    value = _iterator$next14.value,
				    done = _iterator$next14.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [1, 2, 3]);
		});

		it('should have entries()', function () {
			var set = new Set();
			set.add(1);
			set.add(2);
			set.add(3);
			var iterator = set.entries();
			var index = 0;
			var results = [];
			while (1) {
				var _iterator$next15 = iterator.next(),
				    value = _iterator$next15.value,
				    done = _iterator$next15.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[1, 1], [2, 2], [3, 3]]);
		});
	});
}

tests$13(Set$2, 'J0Set');

tests$13(Set, 'Set');

describe('setImmediate', function () {

	it('should call the function at end of current processes', function () {
		var order = 3;
		var expected = 36;
		return new Promise(function (resolve) {
			setImmediate(function () {
				order *= order;
			});
			order += order;
			setTimeout(resolve, 50);
		}).then(function () {
			assert.equal(order, expected);
		});
	});
});

function stopPropagation(event) {
	event.stopPropagation();
}

describe('stopPropagation', function () {

	it('should be a function', function () {
		assert.equal(isFunction(stopPropagation), true);
	});
});

describe('String/leftpad', function () {

	it('should pad a string with 0', function () {
		assert.equal(leftpad(1), '01');
	});

	it('should pad a string with 0 [length=10]', function () {
		assert.equal(leftpad(1, 10), '0000000001');
	});

	it('should pad a string with * [length=10]', function () {
		assert.equal(leftpad(1, 10, '*+='), '*********1');
	});
});

describe('String/polyfill', function () {

	it('should have repeat', function () {
		assert.equal('a'.repeat(2), 'aa');
	});
});

function repeat(s, length) {
	return s.repeat(length);
}

describe('String/repeat', function () {

	it('should repeat the string for specified times', function () {
		var src = '3';
		var count = 10;
		var expected = '3333333333';
		assert.equal(repeat(src, count), expected);
	});
});

describe('toLowerCase', function () {

	it('should convert cases', function () {
		assert.equal(toLowerCase('ABc'), 'abc');
	});
});

describe('String/trim', function () {

	it('should trim spaces at beginning and ending', function () {
		assert.equal(trim('\r\n\tab\tc\n\r\t'), 'ab\tc');
	});
});

describe('StringList', function () {

	it('should have has()', function () {
		var searchParams = new StringList([['topic', 'a']]);
		assert.equal(searchParams.has('topic'), true);
		assert.equal(searchParams.has('topick'), false);
	});

	it('should have append()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value = 'b';
		searchParams.append(name, value);
		searchParams.append(name, value);
		assert.equal(searchParams.toString(), 'a:b,a:b');
	});

	it('should have set()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.set(name, value1);
		searchParams.set(name, value2);
		assert.equal(searchParams.toString(), 'a:c');
	});

	it('should have get()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.equal(searchParams.get(name), value1);
	});

	it('should have getAll()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		assert.deepEqual(searchParams.getAll(name), [value1, value2]);
	});

	it('should have delete()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		searchParams.delete(name);
		assert.equal(searchParams.toString(), '');
	});

	it('should have entries()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		var index = 0;
		var results = [];
		var iterator = searchParams.entries();
		while (1) {
			var _iterator$next16 = iterator.next(),
			    value = _iterator$next16.value,
			    done = _iterator$next16.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [[name, value1], [name, value2]]);
	});

	it('should have values()', function () {
		var searchParams = new StringList();
		var name = 'a';
		var value1 = 'b';
		var value2 = 'c';
		searchParams.append(name, value1);
		searchParams.append(name, value2);
		var index = 0;
		var results = [];
		var iterator = searchParams.values();
		while (1) {
			var _iterator$next17 = iterator.next(),
			    value = _iterator$next17.value,
			    done = _iterator$next17.done;

			if (done) {
				break;
			}
			results[index++] = value;
		}
		assert.deepEqual(results, [value1, value2]);
	});
});

function test$18(_Symbol) {
	var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Symbol';


	describe(name, function () {

		it('should generate a new symbol', function () {
			var s1 = _Symbol();
			var s2 = _Symbol();
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol even if they have same key', function () {
			var key = 'key';
			var s1 = _Symbol(key);
			var s2 = _Symbol(key);
			assert.equal(s1 !== s2, true);
		});

		it('should generate a new symbol unless the symbol has created by Symbol.for', function () {
			var key = 'key';
			var s1 = _Symbol(key);
			var s2 = _Symbol.for(key);
			assert.equal(s1 !== s2, true);
		});

		it('should get a symbol from a key', function () {
			var key = 'key1';
			var s = _Symbol.for(key);
			assert.equal(_Symbol.for(key), s);
		});

		it('should get a key from a symbol', function () {
			var key = 'key1';
			var s = _Symbol.for(key);
			assert.equal(_Symbol.keyFor(s), key);
		});

		it('should have Symbol.iterator', function () {
			assert.equal(!_Symbol.iterator, false);
		});
	});
}

test$18(Symbol, 'J0Symbol');

test$18(Symbol);

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = isUndefined(context) ? this : context;

		for (var _len9 = arguments.length, args = Array(_len9), _key13 = 0; _key13 < _len9; _key13++) {
			args[_key13] = arguments[_key13];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout$1(function () {
				timer = null;
				if (scheduled) {
					scheduled = null;
					call.apply(thisArg, lastArgs);
				}
			}, interval);
		}
	}
	return call;
}

describe('throttle', function () {

	it('should call the function intermittently', function () {
		return new Promise(function (resolve) {
			var count = 0;
			var execute = throttle(function (value) {
				count += value;
				if (1 < count) {
					resolve(count);
				}
			}, 50);
			execute(1);
			execute(2);
			execute(3);
			execute(4);
			execute(5);
		}).then(function (result) {
			assert.equal(result, 6);
		});
	});
});

var separator = '&';
var equal = '=';

var URLSearchParams$2 = function (_StringList2) {
	_inherits(URLSearchParams$2, _StringList2);

	function URLSearchParams$2(init) {
		_classCallCheck(this, URLSearchParams$2);

		return _possibleConstructorReturn(this, (URLSearchParams$2.__proto__ || Object.getPrototypeOf(URLSearchParams$2)).call(this, init ? init.replace(/^\?/, '').split(separator).map(function (entry) {
			return entry.split(equal);
		}) : null));
	}

	_createClass(URLSearchParams$2, [{
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref29) {
				var _ref30 = _slicedToArray(_ref29, 2),
				    name = _ref30[0],
				    _ref30$ = _ref30[1],
				    value = _ref30$ === undefined ? '' : _ref30$;

				return name + '=' + value;
			}).join('&');
		}
	}]);

	return URLSearchParams$2;
}(StringList);

function tests$15(URLSearchParams, testName) {

	describe(testName, function () {

		it('should have has()', function () {
			var paramsString = 'q=URLUtils.searchParams&topic=api';
			var searchParams = new URLSearchParams(paramsString);
			assert.equal(searchParams.has('topic'), true);
			assert.equal(searchParams.has('topick'), false);
		});

		it('should have append()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value = 'b';
			searchParams.append(name, value);
			searchParams.append(name, value);
			assert.equal(searchParams.toString(), 'a=b&a=b');
		});

		it('should have set()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.set(name, value1);
			searchParams.set(name, value2);
			assert.equal(searchParams.toString(), 'a=c');
		});

		it('should have get()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			assert.equal(searchParams.get(name), value1);
		});

		it('should have getAll()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			assert.deepEqual(searchParams.getAll(name), [value1, value2]);
		});

		it('should have delete()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			searchParams.delete(name);
			assert.equal(searchParams.toString(), '');
		});

		it('should have entries()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = searchParams.entries();
			while (1) {
				var _iterator$next18 = iterator.next(),
				    value = _iterator$next18.value,
				    done = _iterator$next18.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [[name, value1], [name, value2]]);
		});

		it('should have values()', function () {
			var searchParams = new URLSearchParams();
			var name = 'a';
			var value1 = 'b';
			var value2 = 'c';
			searchParams.append(name, value1);
			searchParams.append(name, value2);
			var index = 0;
			var results = [];
			var iterator = searchParams.values();
			while (1) {
				var _iterator$next19 = iterator.next(),
				    value = _iterator$next19.value,
				    done = _iterator$next19.done;

				if (done) {
					break;
				}
				results[index++] = value;
			}
			assert.deepEqual(results, [value1, value2]);
		});
	});
}

tests$15(URLSearchParams$2, 'J0URLSearchParams');

tests$15(URLSearchParams, 'URLSearchParams');

describe('wait', function () {
	it('should return a promise and it should resolved with given data', _asyncToGenerator(regeneratorRuntime.mark(function _callee8() {
		var start, data, duration, margin, actual;
		return regeneratorRuntime.wrap(function _callee8$(_context8) {
			while (1) {
				switch (_context8.prev = _context8.next) {
					case 0:
						start = Date.now();
						data = start;
						duration = 100;
						margin = 0.9;
						_context8.next = 6;
						return wait(duration, data);

					case 6:
						actual = _context8.sent;

						assert.equal(actual, data);
						assert.equal(margin * duration < Date.now() - start, true);

					case 9:
					case 'end':
						return _context8.stop();
				}
			}
		}, _callee8, this);
	})));
});
}())
