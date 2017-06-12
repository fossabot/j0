/* eslint-disable no-magic-numbers, no-bitwise */
import {
	ASCIIHexDigit
} from '../../codePoints';
import utf8DecodeWithoutBOM from '../utf8DecodeWithoutBOM';
import parseHexCodePoint from '../parseHexCodePoint';
function percentDecode(input) {
	const output = [];
	for (let i = 0, {length} = input; i < length; i++) {
		const byte = input[i];
		if (byte === 0x25 && ASCIIHexDigit.includes(input[i + 1]) && ASCIIHexDigit.includes(input[i + 2])) {
			const decoded = utf8DecodeWithoutBOM(input.slice(i + 1, i + 3));
			const upper = parseHexCodePoint(decoded[0]);
			const lower = parseHexCodePoint(decoded[1]);
			const bytePoint = upper << 4 | lower;
			output.push(bytePoint);
			i += 2;
		} else {
			output.push(byte);
		}
	}
	return output;
}
export default percentDecode;
