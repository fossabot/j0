import {
	UTF8,
	stringToCodePoints,
	createTypedArray,
	Uint8Array
} from 'j0';

class TextEncoder {

	constructor() {
		this.encoding = 'utf-8';
		this.Encoder = UTF8.Encoder;
	}

	encode(inputString = '') {
		const input = stringToCodePoints(inputString);
		const output = [];
		this.Encoder.run(input, output);
		return createTypedArray(Uint8Array, output);
	}

}

export default TextEncoder;
