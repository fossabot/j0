/* eslint-disable no-magic-numbers */
import {
	Boolean,
	isUndefined,
	String,
	Array,
	getEncoding,
	RangeError,
	Object
} from 'j0';

class TextDecoder {

	constructor(label = 'utf-8', options = {}) {
		const encoding = getEncoding(label);
		if (!encoding) {
			throw new RangeError(`Unknown encoding: ${label}`);
		}
		Object.assign(this, {
			encoding,
			errorMode: options.fatal ? 'fatal' : 'replacement',
			ignoreBOM: Boolean(options.ignoreBOM)
		});
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
		this.encoding.Decoder.run(stream, output);
		return this.serialize(output);
	}

	serialize(stream) {
		const output = [];
		while (true) {
			const token = stream.shift();
			if (['UTF-8', 'UTF-16BE', 'UTF-16LE'].includes(this.encoding) && !this.ignoreBOM && this.BOMSeenFlag) {
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
