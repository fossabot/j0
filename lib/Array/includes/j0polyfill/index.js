function includes(searchElement, fromIndex = 0) {
	for (let {length} = this, i = fromIndex < 0 ? length + fromIndex : fromIndex; i < length; i++) {
		if (this[i] === searchElement) {
			return true;
		}
	}
	return false;
}

export default includes;
