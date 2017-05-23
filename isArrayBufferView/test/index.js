import {
	Uint8Array,
	Uint8ClampedArray,
	Uint16Array,
	Uint32Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Float32Array,
	Float64Array
} from '../../global';
import isArrayBufferView from '..';

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
