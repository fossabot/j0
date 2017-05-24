function arrayFrom(iterable) {
	const result = [];
	for (const item of iterable) {
		result.push(item);
	}
	return result;
}
export default arrayFrom;
