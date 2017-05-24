import {
	Uint8Array,
	String
} from 'j0';
const {fromCharCode} = String;

const baseMask = 0x3f;
const lastMasks = [
	baseMask,
	0x7f,
	0x1f,
	0xf,
	0x7,
	0x3,
	0x1
];
const availableBits = 6;

/* eslint-disable no-bitwise */
function consume(view, index, length) {
	const lastMask = lastMasks[length];
	let charCode = 0;
	let i = 0;
	while (0 < length--) {
		const mask = length === 0 ? lastMask : baseMask;
		const shiftSize = availableBits * i++;
		charCode |= (view[index + length] & mask) << shiftSize;
	}
	return charCode;
}
/* eslint-enable no-bitwise */

function arrayBufferToString(arrayBuffer) {
	const view = new Uint8Array(arrayBuffer);
	const chars = [];
	for (let i = 0; i < view.length; i++) {
		const byte = view[i];
		let length;
		if (byte < 0x80) {
			length = 1;
		} else if (byte < 0xe0) {
			length = 2;
		} else if (byte < 0xf0) {
			length = 3;
		} else if (byte < 0xf8) {
			length = 4;
		} else if (byte < 0xfc) {
			length = 5;
		} else {
			length = 6;
		}
		chars.push(consume(view, i, length));
		i += length - 1;
	}
	const strings = [];
	const chunkLength = 4096;
	while (0 < chars.length) {
		strings.push(fromCharCode(...chars.splice(0, chunkLength)));
	}
	return strings.join('');
}
export default arrayBufferToString;
