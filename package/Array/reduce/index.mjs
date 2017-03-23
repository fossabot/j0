function reduce(iterable, fn, initialValue = {}) {
	let result = initialValue;
	let index = 0;
	for (const item of iterable) {
		result = fn(result, item, index, iterable);
		index += 1;
	}
	return result;
}

export default reduce;
