/* eslint-disable no-magic-numbers, no-bitwise, max-depth, complexity, max-statements */
import {
	Uint16Array,
	isUndefined
} from 'j0';
import {FAILURE} from '../constants';
import {
	ASCIIHexDigit,
	ASCIIDigit
} from '../../codePoints';
import validationError from '../validationError';
import parseHexCodePoint from '../parseHexCodePoint';
import parseDecCodePoint from '../parseDecCodePoint';

function parseIPv6(input) {
	const address = new Uint16Array(8);
	let pieceIndex = 0;
	let compress = null;
	let pointer = 0;
	let c = input[pointer];
	function increment(by) {
		pointer += by;
		c = input[pointer];
	}
	if (c === 0x3A) {
		if (input[pointer + 1] !== 0x3A) {
			validationError('parseIPv6-1', input);
			return FAILURE;
		}
		increment(2);
		pieceIndex++;
		compress = pieceIndex;
	}
	while (!isUndefined(c)) {
		if (pieceIndex === 8) {
			validationError('parseIPv6-2', input);
			return FAILURE;
		}
		if (c === 0x3A) {
			if (compress !== null) {
				validationError('parseIPv6-3', input);
				return FAILURE;
			}
			increment(1);
			pieceIndex++;
			compress = pieceIndex;
		} else {
			let value = 0;
			let length = 0;
			while (length < 4 && ASCIIHexDigit.includes(c)) {
				value = (value << 4) + parseHexCodePoint(c);
				increment(1);
				length++;
			}
			if (c === 0x2E) {
				if (length === 0) {
					validationError('parseIPv6-4', input);
					return FAILURE;
				}
				increment(-length);
				if (6 < pieceIndex) {
					validationError('parseIPv6-4', input);
					return FAILURE;
				}
				let numbersSeen = 0;
				while (!isUndefined(c)) {
					let ipv4Piece = null;
					if (0 < numbersSeen) {
						if (c === 0x2E && numbersSeen < 4) {
							increment(1);
						} else {
							validationError('parseIPv6-5', input);
							return FAILURE;
						}
					}
					if (!ASCIIDigit.includes(c)) {
						validationError('parseIPv6-6', input);
						return FAILURE;
					}
					while (ASCIIDigit.includes(c)) {
						const number = parseDecCodePoint(c);
						if (ipv4Piece === null) {
							ipv4Piece = number;
						} else if (ipv4Piece === 0) {
							validationError('parseIPv6-7', input);
							return FAILURE;
						} else {
							ipv4Piece = ipv4Piece * 10 + number;
						}
						if (255 < ipv4Piece) {
							validationError('parseIPv6-8', input);
							return FAILURE;
						}
						increment(1);
					}
					address[pieceIndex] = (address[pieceIndex] << 8) + ipv4Piece;
					numbersSeen++;
					if (numbersSeen === 2 || numbersSeen === 4) {
						pieceIndex++;
					}
				}
				if (numbersSeen !== 4) {
					validationError('parseIPv6-9', input);
					return FAILURE;
				}
				break;
			} else if (c === 0x3A) {
				increment(1);
				if (isUndefined(c)) {
					validationError('parseIPv6-10', input);
					return FAILURE;
				}
			} else if (!isUndefined(c)) {
				validationError('parseIPv6-10', input);
				return FAILURE;
			}
			address[pieceIndex] = value;
			pieceIndex++;
		}
	}
	if (compress !== null) {
		let swaps = pieceIndex - compress;
		pieceIndex = 7;
		while (pieceIndex !== 0 && 0 < swaps) {
			const a = pieceIndex;
			const b = compress + swaps - 1;
			[
				address[a],
				address[b]
			] = [
				address[b],
				address[a]
			];
			pieceIndex--;
			swaps--;
		}
	} else if (compress === null && pieceIndex !== 8) {
		validationError('parseIPv6-11', input);
		return FAILURE;
	}
	return address;
}
export default parseIPv6;
