/* eslint-disable no-magic-numbers */
import {
	Boolean,
	isUndefined,
	UTF8,
	String,
	Array
} from 'j0';

class TextDecoder {

	constructor(label = 'utf-8', options = {}) {
		this.encoding = 'utf-8';
		this.fatal = false;
		this.ignoreBOM = Boolean(options.ignoreBOM);
		this.errorMode = 'replacement';
		this.Decoder = UTF8.Decoder;
	}

	decode(input, options = {}) {
		let stream;
		if (!this.doNotFlush) {
			delete this.BOMSeenFlag;
		}
		this.doNotFlush = Boolean(options.stream);
		if (!isUndefined(input)) {
			stream = Array.from(input);
		}
		const output = [];
		this.Decoder.run(stream, output);
		return this.serialize(output);
	}

	serialize(stream) {
		const output = [];
		while (true) {
			const token = stream.shift();
			if (['utf-8', 'utf-16be', 'utf-16le'].includes(this.encoding) && !this.ignoreBOM && this.BOMSeenFlag) {
				if (token === 0xFEFF) {
					this.BOMSeenFlag = true;
				} else if (isUndefined(token)) {
					break;
				} else {
					this.BOMSeenFlag = true;
					output.push(token);
				}
			} else if (isUndefined(token)) {
				break;
			} else {
				output.push(token);
			}
		}
		return String.fromCodePoint(...output);
	}

}

export default TextDecoder;
