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


var INTERVAL = 100;

var getBody = new Promise(function (resolve) {
	function get() {
		var body = document.body;

		if (body) {
			resolve(body);
		} else {
			setTimeout(get, INTERVAL);
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
}())
