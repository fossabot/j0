import isFunction from '../../isFunction';

function forEach(iterable, fn, thisArg, fromIndex = 0) {
	const {length} = iterable;
	let index;
	if (0 <= length) {
		for (index = fromIndex; index < length; index += 1) {
			if (fn.call(thisArg, iterable[index], index, iterable)) {
				return;
			}
		}
	} else if (isFunction(iterable.next)) {
		index = 0;
		while (1) {
			const {value, done} = iterable.next();
			if (done || fromIndex <= index && fn.call(thisArg, value, index, iterable)) {
				return;
			}
			index += 1;
		}
	} else {
		index = fromIndex;
		for (const value of iterable) {
			if (fn.call(thisArg, value, index, iterable)) {
				return;
			}
			index += 1;
		}
	}
}

export default forEach;
