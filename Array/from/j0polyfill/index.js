import {
	isUndefined,
	passThrough
} from 'j0';

function arrayFrom(iterable, mapFn = passThrough, thisArg) {
	const result = [];
	if (isUndefined(iterable.length)) {
		let i = 0;
		for (const item of iterable) {
			result.push(mapFn.call(thisArg, item, i++));
		}
	} else {
		for (let i = 0, {length} = iterable; i < length; i++) {
			result[i] = mapFn.call(thisArg, iterable[i], i);
		}
	}
	return result;
}
export default arrayFrom;
