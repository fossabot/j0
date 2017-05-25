function copyWithin(target, start = 0, end = this.length) {
	const {length} = this;
	if (target < 0) {
		target = length + target;
	}
	if (start < 0) {
		start = length + start;
	}
	if (end < 0) {
		end = length + end;
	}
	const copied = this.slice(start, end);
	let {length: total} = copied;
	if (length < target + total) {
		total = length - target;
	}
	for (let i = 0; i < total; i++) {
		this[target + i] = copied[i];
	}
	return this;
}

export default copyWithin;
