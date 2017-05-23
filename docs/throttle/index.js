(function(){
'use strict';

var _window = window,
    String = _window.String,
    Object = _window.Object,
    parseInt = _window.parseInt,
    ArrayBuffer = _window.ArrayBuffer,
    DataView = _window.DataView,
    location = _window.location,
    navigator = _window.navigator,
    document = _window.document,
    setTimeout = _window.setTimeout,
    clearTimeout = _window.clearTimeout,
    decodeURIComponent = _window.decodeURIComponent,
    encodeURIComponent = _window.encodeURIComponent,
    TypeError = _window.TypeError,
    Uint8Array = _window.Uint8Array,
    Uint8ClampedArray = _window.Uint8ClampedArray,
    Uint16Array = _window.Uint16Array,
    Uint32Array = _window.Uint32Array,
    Int8Array = _window.Int8Array,
    Int16Array = _window.Int16Array,
    Int32Array = _window.Int32Array,
    Float32Array = _window.Float32Array,
    Float64Array = _window.Float64Array;


function isUndefined(x) {
	return typeof x === 'undefined';
}

function throttle(fn) {
	var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	var context = arguments[2];

	var lastArgs = [];
	var timer = null;
	var scheduled = false;
	function call() {
		var thisArg = isUndefined(context) ? this : context;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		lastArgs = args;
		if (timer) {
			scheduled = true;
		} else {
			fn.apply(thisArg, args);
			timer = setTimeout(function () {
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
}())
