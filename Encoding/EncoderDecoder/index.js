/* eslint-disable no-use-before-define, no-magic-numbers */
import {
	Symbol,
	Object,
	isUndefined,
	isArray,
	isInstanceOf,
	isChildClassOf,
	Error,
	stringToCodePoints
} from 'j0';

const REPLACEMENT = 'replacement';
const FATAL = 'fatal';
const HTML = 'html';
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

	constructor() {
		Object.assign(this, constants);
	}

	static run(input, output, mode) {
		if (isUndefined(mode)) {
			mode = isChildClassOf(this, Decoder) ? REPLACEMENT : FATAL;
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
			mode = isChildClassOf(this, Decoder) ? REPLACEMENT : FATAL;
		}
		const result = encoderDecoderInstance.handler(input, token);
		if (result === CONTINUE || result === FINISHED) {
			return result;
		} else if (isArray(result)) {
			output.push(...result);
		} else if (isInstanceOf(result, Error)) {
			switch (mode) {
			case REPLACEMENT:
				output.push(0xFFFD);
				break;
			case HTML:
				output.unshift(0x26, 0x23, ...stringToCodePoints(`${result.codePoint}`), 0x3B);
				break;
			case FATAL:
				return result;
			default:
			}
		}
		return CONTINUE;
	}

}

export class Encoder extends EncoderDecoder {}
export class Decoder extends EncoderDecoder {}
