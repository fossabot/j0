/* eslint-disable no-magic-numbers, no-bitwise */
function parseHexCodePoint(codePoint) {
	if (codePoint <= 0x40) {
		return codePoint - 0x30;
	}
	return 9 + codePoint & 0xF;
}
export default parseHexCodePoint;
