function findIndex(fn, thisArg) {
	for (let i = 0, {length} = this; i < length; i++) {
		if (fn.call(thisArg, this[i], i, this)) {
			return i;
		}
	}
	return -1;
}
export default findIndex;
