(function(){
'use strict';

var _window = window,
    String = _window.String,
    Uint8Array = _window.Uint8Array,
    ArrayBuffer = _window.ArrayBuffer,
    DataView = _window.DataView,
    location = _window.location,
    navigator = _window.navigator,
    document = _window.document,
    setTimeout = _window.setTimeout,
    clearTimeout = _window.clearTimeout,
    decodeURIComponent = _window.decodeURIComponent,
    encodeURIComponent = _window.encodeURIComponent;


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
