function createTypedArray(TypedArray, source) {
	const {length} = source;
	const array = new TypedArray(length);
	for (let i = 0; i < length; i++) {
		array[i] = source[i];
	}
	return array;
}
export default createTypedArray;
