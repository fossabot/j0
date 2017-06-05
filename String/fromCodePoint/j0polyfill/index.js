/* eslint-disable no-magic-numbers, no-bitwise */

import {
	String,
	isFinite,
	RangeError
} from 'j0';

function fromCodePoint(...args) {
	const chars = [];
	const {fromCharCode} = String;
	for (let i = 0, {length} = args; i < length; i++) {
		let codePoint = args[i];
		if (
			!isFinite(codePoint) ||
			codePoint < 0 ||
			codePoint > 0x10FFFF
		) {
			throw new RangeError(`Invalid code point: ${codePoint}`);
		}
		if (codePoint <= 0xFFFF) {
			chars.push(fromCharCode(codePoint));
		} else {
			codePoint -= 0x10000;
			const highSurrogate = (codePoint >> 10) + 0xD800;
			const lowSurrogate = (codePoint % 0x400) + 0xDC00;
			chars.push(fromCharCode(highSurrogate, lowSurrogate));
		}
	}
	return chars.join('');
}

export default fromCodePoint;
