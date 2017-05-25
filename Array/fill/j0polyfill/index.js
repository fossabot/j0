function copyWithin(value, start = 0, end = this.length) {
	const {length} = this;
	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	for (let i = start; i < end; i++) {
		this[i] = value;
	}
	return this;
}

export default copyWithin;
