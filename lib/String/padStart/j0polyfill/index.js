function padStart(targetLength, padString = ' ') {
	let result = this;
	const d = targetLength - result.length;
	let count = d / padString.length;
	if (0 < count) {
		let pad = '';
		while (0 < count--) {
			pad += padString;
		}
		return pad.slice(0, d) + result;
	}
	return result;
}

export default padStart;
