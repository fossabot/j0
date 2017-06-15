/* eslint-disable no-magic-numbers, no-control-regex */
// https://infra.spec.whatwg.org/#code-points
import {
	ConditionalSet
} from 'j0';
export const surrogate = ConditionalSet.solo(function (x) {
	return 0xD800 <= x && x <= 0xDFFF;
});
export const scalarValue = ConditionalSet.not(surrogate);
export const noncharacter = ConditionalSet.or(
	function (x) {
		return 0xFDD0 <= x && x <= 0xFDEF;
	},
	function (x) {
		return [
			0xFFFE,
			0xFFFF,
			0x1FFFE,
			0x1FFFF,
			0x2FFFE,
			0x2FFFF,
			0x3FFFE,
			0x3FFFF,
			0x4FFFE,
			0x4FFFF,
			0x5FFFE,
			0x5FFFF,
			0x6FFFE,
			0x6FFFF,
			0x7FFFE,
			0x7FFFF,
			0x8FFFE,
			0x8FFFF,
			0x9FFFE,
			0x9FFFF,
			0xAFFFE,
			0xAFFFF,
			0xBFFFE,
			0xBFFFF,
			0xCFFFE,
			0xCFFFF,
			0xDFFFE,
			0xDFFFF,
			0xEFFFE,
			0xEFFFF,
			0xFFFFE,
			0xFFFFF,
			0x10FFFE,
			0x10FFFF
		]
		.includes(x);
	}
);
export const ASCIICodePoint = ConditionalSet.solo(function (x) {
	return 0 <= x && x <= 0x7F;
});
export const ASCIITabOrNewline = ConditionalSet.solo(function (x) {
	return [
		0x09,
		0x0A,
		0x0D
	]
	.includes(x);
});
export const ASCIIWhitespace = ConditionalSet.solo(function (x) {
	return [
		0x09,
		0x0A,
		0x0C,
		0x0D,
		0x20
	]
	.includes(x);
});
export const C0Control = ConditionalSet.solo(function (x) {
	return 0 <= x && x <= 0x1F;
});
export const C0ControlOrSpace = ConditionalSet.or(
	C0Control,
	function (x) {
		return x === 0x20;
	}
);
export const control = ConditionalSet.or(
	C0Control,
	function (x) {
		return 0x7F <= x && x <= 0x9F;
	}
);
export const ASCIIDigit = ConditionalSet.solo(function (x) {
	return 0x30 <= x && x <= 0x39;
});
export const ASCIIUpperHexDigit = ConditionalSet.or(
	ASCIIDigit,
	function (x) {
		return 0x41 <= x && x <= 0x46;
	}
);
export const ASCIILowerHexDigit = ConditionalSet.or(
	ASCIIDigit,
	function (x) {
		return 0x61 <= x && x <= 0x66;
	}
);
export const ASCIIHexDigit = ConditionalSet.or(
	ASCIIUpperHexDigit,
	ASCIILowerHexDigit
);
export const ASCIIUpperAlpha = ConditionalSet.solo(function (x) {
	return 0x41 <= x && x <= 0x5A;
});
export const ASCIILowerAlpha = ConditionalSet.solo(function (x) {
	return 0x61 <= x && x <= 0x7A;
});
export const ASCIIAlpha = ConditionalSet.or(
	ASCIIUpperAlpha,
	ASCIILowerAlpha
);
export const ASCIIAlphanumeric = ConditionalSet.or(
	ASCIIDigit,
	ASCIIAlpha
);

export const C0ControlPercentEncodeSet = ConditionalSet.or(
	C0Control,
	function (x) {
		return 0x7E < x;
	}
);

export const pathPercentEncodeSet = ConditionalSet.or(
	C0ControlPercentEncodeSet,
	function (x) {
		return [
			0x20,
			0x22,
			0x23,
			0x3C,
			0x3E,
			0x3F,
			0x60,
			0x7B,
			0x7D
		]
		.includes(x);
	}
);
export const userinfoPercentEncodeSet = ConditionalSet.or(
	pathPercentEncodeSet,
	function (x) {
		return [
			0x2F,
			0x3A,
			0x3B,
			0x3D,
			0x40,
			0x5B,
			0x5C,
			0x5D,
			0x5E,
			0x7C
		]
		.includes(x);
	}
);
export const forbiddenHost = ConditionalSet.solo(function (x) {
	return [
		0x00,
		0x09,
		0x0A,
		0x0D,
		0x20,
		0x23,
		0x25,
		0x2F,
		0x3A,
		0x3F,
		0x40,
		0x5B,
		0x5C,
		0x5D
	]
	.includes(x);
});
