/* eslint-disable no-magic-numbers, no-bitwise */
function codePointAt(index) {
	const first = this.charCodeAt(index);
	if (0xD800 <= first && first <= 0xDBFF && index + 1 < this.length) {
		const second = this.charCodeAt(index + 1);
		if (second >= 0xDC00 && second <= 0xDFFF) {
			return ((first - 0xD800) << 10) + second - 0xDC00 + 0x10000;
		}
	}
	return first;
}
export default codePointAt;
