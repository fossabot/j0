import findIndex from '../Array/findIndex';
import isInstanceOf from '../isInstanceOf';
import Int8Array from '../TypedArray/Int8Array';
import Int16Array from '../TypedArray/Int16Array';
import Int32Array from '../TypedArray/Int32Array';
import Uint8ClampedArray from '../TypedArray/Uint8ClampedArray';
import Uint8Array from '../TypedArray/Uint8Array';
import Uint16Array from '../TypedArray/Uint16Array';
import Uint32Array from '../TypedArray/Uint32Array';
import Float32Array from '../TypedArray/Float32Array';
import Float64Array from '../TypedArray/Float64Array';
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
	return 0 <= findIndex(viewClasses, function (constructor) {
		return isInstanceOf(obj, constructor);
	});
}
export default isArrayBufferView;
