function reduce(iterable, fn, initialValue = {}, thisArg) {
	let result = initialValue;
	let index = 0;
	for (const item of iterable) {
		result = fn.call(thisArg, result, item, index, iterable);
		index += 1;
	}
	return result;
}

export default reduce;
