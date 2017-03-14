import isUndefined from '../../isUndefined';
import isFunction from '../../isFunction';
import Object from '../../Object';
import parseInt from '../../parseInt';
import clamp from '../../Math/clamp';
import MAX_SAFE_INTEGER from '../../Number/MAX_SAFE_INTEGER';

function toLength(value) {
	const len = parseInt(value, 10);
	return clamp(len, 0, MAX_SAFE_INTEGER);
}

function from(arrayLike, mapFn, thisArg) {
	if (arrayLike === null) {
		throw new TypeError('Array.from: requires an array-like object - not null or undefined');
	}
	if (!(isUndefined(mapFn) || isFunction(mapFn))) {
		throw new TypeError('Array.from: when provided, the second argument must be a function');
	}
	const C = this;
	const items = Object(arrayLike);
	const length = toLength(items.length);
	const A = isFunction(C) ? Object(new C(length)) : [];
	for (let k = 0; k < length; k += 1) {
		const value = items[k];
		A[k] = mapFn ? mapFn.call(thisArg, value, k) : value;
	}
	A.length = length;
	return A;
}

export default from;
