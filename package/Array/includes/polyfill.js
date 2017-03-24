function includes(searchElement, fromIndex = 0) {
	let index = fromIndex;
	const {length} = this;
	if (index < 0) {
		index = length - index;
	}
	if (index < 0) {
		index = 0;
	}
	for (;index < length; index += 1) {
		if (this[index] === searchElement) {
			return true;
		}
	}
	return false;
}

export default includes;
