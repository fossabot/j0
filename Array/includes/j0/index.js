function includes(searchElement, fromIndex = 0) {
	for (let i = fromIndex, {length} = this; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

export default includes;
