/* eslint-disable no-magic-numbers, no-bitwise */
function stringToCodePoints(string) {
	const codePoints = [];
	for (let i = 0, {length} = string; i < length; i++) {
		const codePoint = string.codePointAt(i);
		if (codePoint < 0xDC00 || 0xDFFF < codePoint) {
			codePoints.push(codePoint);
		}
	}
	return codePoints;
}
export default stringToCodePoints;
