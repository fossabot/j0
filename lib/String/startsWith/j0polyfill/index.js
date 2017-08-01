function startsWith(fragment) {
	const {length} = fragment;
	for (let i = 0; i < length; i++) {
		if (fragment[i] !== this[i]) {
			return false;
		}
	}
	return true;
}
export default startsWith;
