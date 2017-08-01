function endsWith(fragment) {
	const {length: thisLength} = this;
	const {length} = fragment;
	for (let i = 0; i < length; i++) {
		if (fragment[length - i] !== this[thisLength - i]) {
			return false;
		}
	}
	return true;
}
export default endsWith;
