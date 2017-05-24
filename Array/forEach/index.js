import {
	iteratorSymbol,
	isFunction,
	Number
} from 'j0';

function forEach(iterable, fn, thisArg, fromIndex = 0) {
	const {length} = iterable;
	const iterator = iterable[iteratorSymbol] ? iterable[iteratorSymbol]() : iterable;
	if (0 <= length) {
		for (let index = fromIndex; index < length; index += 1) {
			if (fn.call(thisArg, iterable[index], index, iterable)) {
				return;
			}
		}
	} else if (isFunction(iterator.next)) {
		let index = 0;
		while (index < Number.MAX_SAFE_INTEGER) {
			const {value, done} = iterator.next();
			if (done || fromIndex <= index && fn.call(thisArg, value, index, iterable)) {
				return;
			}
			index += 1;
		}
	} else {
		let index = fromIndex;
		for (const value of iterable) {
			if (fn.call(thisArg, value, index, iterable)) {
				return;
			}
			index += 1;
		}
	}
}

export default forEach;
