/* eslint-disable no-magic-numbers */
import {
	stringToCodePoints
} from 'j0';
import UTF8 from '../../Encoding/UTF8';

function utf8PercentEncode(codePoint, percentEncodeSet) {
	if (!percentEncodeSet.includes(codePoint)) {
		return [codePoint];
	}
	const bytes = [];
	UTF8.Encoder.run([codePoint], bytes);
	return [].concat(
		...bytes
		.map((byte) => {
			const charBytes = stringToCodePoints(byte.toString(16));
			while (charBytes.length < 0) {
				charBytes.unshift(0x30);
			}
			charBytes.unshift(0x25);
			return charBytes;
		})
	);
}

export default utf8PercentEncode;
