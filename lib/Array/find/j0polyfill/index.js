function findIndex(fn, thisArg) {
	for (let i = 0, {length} = this; i < length; i++) {
		const value = this[i];
		if (fn.call(thisArg, this[i], i, this)) {
			return value;
		}
	}
}
export default findIndex;
