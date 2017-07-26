import {
	isInstanceOf,
	Uint8Array,
	Uint8ClampedArray,
	Uint16Array,
	Uint32Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Float32Array,
	Float64Array
} from 'j0';
const viewClasses = [
	Uint8Array,
	Uint8ClampedArray,
	Uint16Array,
	Uint32Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Float32Array,
	Float64Array
];
function isArrayBufferView(obj) {
	return 0 <= viewClasses
	.findIndex(function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}
export default isArrayBufferView;
