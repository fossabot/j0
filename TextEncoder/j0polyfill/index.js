import {
	stringToCodePoints,
	createTypedArray,
	Uint8Array,
	getEncoding
} from 'j0';

class TextEncoder {

	constructor() {
		this.encoding = 'utf-8';
		this.Encoder = getEncoding(this.encoding).Encoder;
	}

	encode(inputString = '') {
		const input = stringToCodePoints(inputString);
		const output = [];
		this.Encoder.run(input, output);
		return createTypedArray(Uint8Array, output);
	}

}

export default TextEncoder;
