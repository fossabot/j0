function isObject(x) {
	if (x === null) {
		return false;
	}
	const type = typeof x;
	return type === 'object' || type === 'function';
}
export default isObject;
