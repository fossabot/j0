/* eslint-disable no-use-before-define, no-magic-numbers */
import {
	Symbol,
	Object,
	isUndefined,
	isInstanceOf,
	isChildClassOf,
	TokenStream,
	Error,
	stringToCodePoints
} from 'j0';

const MODE_REPLACEMENT = 'replacement';
const MODE_FATAL = 'fatal';
const MODE_HTML = 'html';
const FINISHED = Symbol();
const CONTINUE = Symbol();
const ENCODER = Symbol();
const DECODER = Symbol();

const constants = {
	FINISHED,
	CONTINUE,
	ENCODER,
	DECODER
};

class EncoderDecoder {

	constructor(handler) {
		this.handler = handler;
		Object.assign(this, constants);
	}

	static run(input, output, mode) {
		if (isUndefined(mode)) {
			mode = isChildClassOf(this, Decoder) ? MODE_REPLACEMENT : MODE_FATAL;
		}
		const encoderDecoderInstance = new this();
		while (true) {
			const result = this.process(
				input.shift(),
				encoderDecoderInstance,
				input,
				output,
				mode
			);
			if (result !== CONTINUE) {
				return result;
			}
		}
	}

	static process(token, encoderDecoderInstance, input, output, mode) {
		if (isUndefined(mode)) {
			mode = isChildClassOf(this, Decoder) ? MODE_REPLACEMENT : MODE_FATAL;
		}
		const result = encoderDecoderInstance.handler(input, token);
		if (result === CONTINUE || result === FINISHED) {
			return result;
		} else if (isInstanceOf(result, TokenStream)) {
			output.push(result);
		} else if (isInstanceOf(result, Error)) {
			switch (mode) {
			case MODE_REPLACEMENT:
				output.push(0xFFFD);
				break;
			case MODE_HTML:
				output.unshift(0x26, 0x23, ...stringToCodePoints(`${result.codePoint}`), 0x3B);
				break;
			case MODE_FATAL:
				return result;
			default:
			}
		}
		return CONTINUE;
	}

}

class Encoder extends EncoderDecoder {}
class Decoder extends EncoderDecoder {}

class Encoding {

	constructor(params) {
		Object.assign(this, params);
	}

}

Object.assign(Encoding, {
	Encoder,
	Decoder
});

export default Encoding;
