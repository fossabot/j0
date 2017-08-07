function padEnd(targetLength, padString = ' ') {
	let result = this;
	let count = (targetLength - result.length) / padString.length;
	if (0 < count) {
		while (0 < count--) {
			result += padString;
		}
		return result.slice(0, targetLength);
	}
	return result;
}

export default padEnd;
