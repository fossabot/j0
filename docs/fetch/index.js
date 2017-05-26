(function(){
'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

var Blob = window.Blob;

var ArrayBuffer = window.ArrayBuffer;

var DataView = window.DataView;

var TypeError$1 = window.TypeError;

var Uint8Array = window.Uint8Array;

var Promise$1 = window.Promise;

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

var Uint8ClampedArray = window.Uint8ClampedArray;

var Uint16Array = window.Uint16Array;

var Uint32Array = window.Uint32Array;

var Int8Array = window.Int8Array;

var Int16Array = window.Int16Array;

var Int32Array = window.Int32Array;

var Float32Array = window.Float32Array;

var Float64Array = window.Float64Array;

var viewClasses = [Uint8Array, Uint8ClampedArray, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, Float32Array, Float64Array];
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
				this.bodyArrayBuffer = cloneBuffer(body.buffer);
				// IE 10-11 can't handle a DataView body.
				this.bodyInit = new Blob([this.bodyArrayBuffer]);
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
				return Promise$1.resolve(new Blob([this.bodyArrayBuffer]));
			} else if (this.bodyFormData) {
				throw new Error('could not read FormData body as blob');
			} else {
				return Promise$1.resolve(new Blob([this.bodyText]));
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

	return Body;
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

var StringList = function () {
	function StringList(iterable) {
		_classCallCheck(this, StringList);

		this.clear();
		if (iterable) {
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;

			try {
				for (var _iterator = iterable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var _ref = _step.value;

					var _ref2 = _slicedToArray(_ref, 2);

					var key = _ref2[0];
					var value = _ref2[1];

					this.append(key, value);
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

	_createClass(StringList, [{
		key: 'clear',
		value: function clear() {
			this.data = [];
		}
	}, {
		key: 'indexOf',
		value: function indexOf(name) {
			return this.data.findIndex(function (_ref3) {
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
			this.data = this.data.filter(function (_ref5) {
				var _ref6 = _slicedToArray(_ref5, 1),
				    itemName = _ref6[0];

				return itemName !== name;
			});
		}
	}, {
		key: 'get',
		value: function get(name) {
			var found = this.data.find(function (_ref7) {
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
			this.data.forEach(function (_ref9) {
				var _ref10 = _slicedToArray(_ref9, 2),
				    itemName = _ref10[0],
				    value = _ref10[1];

				if (itemName === name) {
					result.push(value);
				}
			});
			return result;
		}
	}, {
		key: 'toString',
		value: function toString() {
			return this.data.map(function (_ref11) {
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
			return this.data[iteratorSymbol]();
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
		key: iteratorSymbol,
		value: function value() {
			return this.entries();
		}
	}]);

	return StringList;
}();

var Headers = function (_StringList) {
	_inherits(Headers, _StringList);

	function Headers(headers) {
		_classCallCheck(this, Headers);

		var init = [];
		if (headers) {
			forEachKey(headers, function (value, key) {
				init.push([key, value]);
			});
		}
		return _possibleConstructorReturn(this, (Headers.__proto__ || Object.getPrototypeOf(Headers)).call(this, init));
	}

	_createClass(Headers, [{
		key: 'indexOf',
		value: function indexOf(name) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'indexOf', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'has',
		value: function has(name) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'has', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'append',
		value: function append(name, value) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'append', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'set',
		value: function set(name, value) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'set', this).call(this, toLowerCase(name), value);
		}
	}, {
		key: 'delete',
		value: function _delete(name) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'delete', this).call(this, toLowerCase(name));
		}
	}, {
		key: 'get',
		value: function get(name) {
			return _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'getAll', this).call(this, toLowerCase(name)).join(',');
		}
	}, {
		key: 'entries',
		value: function entries() {
			var _this2 = this;

			var iterator = _get(Headers.prototype.__proto__ || Object.getPrototypeOf(Headers.prototype), 'entries', this).call(this);
			var history = [];
			return new Iterator(function () {
				while (1) {
					var _iterator$next3 = iterator.next(),
					    value = _iterator$next3.value,
					    done = _iterator$next3.done;

					var key = value && value[0];
					if (done || history.indexOf(key) < 0) {
						history.push(key);
						return {
							value: [key, _this2.get(key)],
							done: done
						};
					}
				}
			});
		}
	}]);

	return Headers;
}(StringList);

var Request = function (_Body) {
	_inherits(Request, _Body);

	function Request(input) {
		var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

		_classCallCheck(this, Request);

		var body = init.body;

		var _this3 = _possibleConstructorReturn(this, (Request.__proto__ || Object.getPrototypeOf(Request)).call(this));

		if (input instanceof Request) {
			body = _this3.inheritFrom(input, body, init);
		} else {
			_this3.url = '' + input;
		}
		_this3.credentials = init.credentials || _this3.credentials || 'omit';
		if (init.headers || !_this3.headers) {
			_this3.headers = new Headers(init.headers);
		}
		_this3.method = (init.method || _this3.method || 'GET').toUpperCase();
		_this3.mode = init.mode || _this3.mode || null;
		_this3.referrer = null;
		if ((_this3.method === 'GET' || _this3.method === 'HEAD') && body) {
			throw new TypeError('Body not allowed for GET or HEAD requests');
		}
		_this3.initBody(body);
		return _this3;
	}

	_createClass(Request, [{
		key: 'inheritFrom',
		value: function inheritFrom(input, body, _ref13) {
			var headers = _ref13.headers;

			if (input.bodyUsed) {
				throw new TypeError('Already read');
			}
			this.url = input.url;
			this.credentials = input.credentials;
			if (!headers) {
				this.headers = new Headers(input.headers);
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

		var _this4 = _possibleConstructorReturn(this, (Response.__proto__ || Object.getPrototypeOf(Response)).call(this));

		_this4.type = 'default';
		_this4.status = 'status' in init ? init.status : minOkStatus;
		_this4.ok = _this4.status >= minOkStatus && _this4.status < maxOkStatus;
		_this4.statusText = 'statusText' in init ? init.statusText : 'OK';
		_this4.headers = new Headers(init.headers);
		_this4.url = init.url || '';
		_this4.initBody(body);
		return _this4;
	}

	_createClass(Response, [{
		key: 'clone',
		value: function clone() {
			return new Response(this.bodyInit, {
				status: this.status,
				statusText: this.statusText,
				headers: new Headers(this.headers),
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

var Headers$2 = window.Headers;

function parse$1(rawHeaders) {
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

function isUndefined(x) {
	return typeof x === 'undefined';
}

var XMLHttpRequest = window.XMLHttpRequest;

function fetch$1(input, init) {
	return new Promise$1(function (resolve, reject) {
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
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = request.headers.entries()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var _ref14 = _step2.value;

				var _ref15 = _slicedToArray(_ref14, 2);

				var name = _ref15[0];
				var value = _ref15[1];

				xhr.setRequestHeader(name, value);
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

		xhr.send(isUndefined(request.bodyInit) ? null : request.bodyInit);
	});
}

function tests(fetch) {
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

tests(fetch$1, 'J0Fetch');

tests(fetch);
}())
