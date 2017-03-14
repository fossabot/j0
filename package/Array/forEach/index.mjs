function forEach(iterable, fn, thisArg = iterable) {
	let index = 0;
	for (const value of iterable) {
		if (fn.call(thisArg, value, index, iterable)) {
			return;
		}
		index += 1;
	}
}

export default forEach;
