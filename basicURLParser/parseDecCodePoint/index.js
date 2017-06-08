/* eslint-disable no-magic-numbers, no-bitwise */
function parseDecCodePoint(codePoint) {
	return codePoint - 0x30;
}
export default parseDecCodePoint;
