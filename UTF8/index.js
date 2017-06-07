/* eslint-disable no-magic-numbers, no-bitwise, max-statements */
import {
	Encoding,
	isUndefined,
	Error
} from 'j0';

import {
	ASCIICodePoint
} from '../codePoints';

const UTF8 = new Encoding({
	name: 'UTF8',
	labels: [
		'unicode-1-1-utf-8',
		'utf-8',
		'utf8'
	],
	Decoder: class UTF8Decoder extends Encoding.Decoder {

		constructor() {
			super();
			this.codePoint = 0;
			this.bytesSeen = 0;
			this.bytesNeeded = 0;
			this.lowerBoundary = 0x80;
			this.upperBoundary = 0xBF;
		}

		handler(stream, byte) {
			if (isUndefined(byte)) {
				if (this.bytesNeeded === 0) {
					return this.FINISHED;
				}
				this.bytesNeeded = 0;
				return new Error('UTF8Decode-1');
			}
			if (this.bytesNeeded === 0) {
				if (0x00 <= byte && byte <= 0x7F) {
					return [byte];
				} else if (0xC2 <= byte && byte <= 0xDF) {
					this.bytesNeeded = 1;
					this.codePoint = byte & 0x1F;
				} else if (0xE0 <= byte && byte <= 0xEF) {
					if (byte === 0xE0) {
						this.lowerBoundary = 0xA0;
					} else if (byte === 0xED) {
						this.upperBoundary = 0x9F;
					}
					this.bytesNeeded = 2;
					this.codePoint = byte & 0xF;
				} else if (0xF0 <= byte && byte <= 0xF4) {
					if (byte === 0xF0) {
						this.lowerBoundary = 0x90;
					} else if (byte === 0xF4) {
						this.upperBoundary = 0x8F;
					}
					this.bytesNeeded = 3;
					this.codePoint = byte & 0x7;
				} else {
					return new Error('UTF8Decode-2');
				}
				return this.CONTINUE;
			} else if (byte < this.lowerBoundary || this.upperBoundary < byte) {
				this.codePoint = 0;
				this.bytesNeeded = 0;
				this.bytesSeen = 0;
				this.lowerBoundary = 0x80;
				this.upperBoundary = 0xBF;
				stream.unshift(byte);
				return new Error('UTF8Decode-3');
			}
			this.lowerBoundary = 0x80;
			this.upperBoundary = 0xBF;
			this.codePoint = (this.codePoint << 6) | (byte & 0x3F);
			this.bytesSeen++;
			if (this.bytesSeen !== this.bytesNeeded) {
				return this.CONTINUE;
			}
			const {codePoint} = this;
			this.codePoint = 0;
			this.bytesNeeded = 0;
			this.bytesSeen = 0;
			return [codePoint];
		}

	},
	Encoder: class UTF8Decoder extends Encoding.Decoder {

		handler(stream, codePoint) {
			if (isUndefined(codePoint)) {
				return this.FINISHED;
			} else if (ASCIICodePoint.includes(codePoint)) {
				return [codePoint];
			}
			let count;
			let offset;
			if (0x80 <= codePoint && codePoint <= 0x7FF) {
				count = 1;
				offset = 0xC0;
			} else if (0x800 <= codePoint && codePoint <= 0xFFFF) {
				count = 2;
				offset = 0xE0;
			} else if (0x10000 <= codePoint && codePoint <= 0x10FFFF) {
				count = 3;
				offset = 0xF0;
			}
			const bytes = [(codePoint >> (6 * count)) + offset];
			while (0 < count) {
				const temp = codePoint >> (6 * --count);
				bytes.push(0x80 | (temp & 0x3F));
			}
			return bytes;
		}

	}
});

export default UTF8;
