import findIndex from '../Array/findIndex';
import isInstanceOf from '../isInstanceOf';
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
} from '../global';
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
