(function(){
'use strict';

function isInstanceOf(instance, constructor) {
	return instance instanceof constructor;
}

var Uint8Array$1 = window.Uint8Array;

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
}())
