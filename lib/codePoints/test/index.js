/* eslint-disable no-magic-numbers, max-lines, max-statements */
import {
	surrogate,
	scalarValue,
	noncharacter,
	ASCIICodePoint,
	ASCIITabOrNewline,
	ASCIIWhitespace,
	C0Control,
	C0ControlOrSpace,
	control,
	ASCIIDigit,
	ASCIIUpperHexDigit,
	ASCIILowerHexDigit,
	ASCIIHexDigit,
	ASCIIUpperAlpha,
	ASCIILowerAlpha,
	ASCIIAlpha,
	ASCIIAlphanumeric,
	C0ControlPercentEncodeSet,
	pathPercentEncodeSet,
	userinfoPercentEncodeSet,
	forbiddenHost
} from '../index.js';

describe('codePoints', function () {

	describe('surrogate', function () {

		it('should detect surrogate code points', function () {
			let codePoint = 0xD800 - 1;
			assert.equal(surrogate.includes(codePoint), false);
			for (codePoint = 0xD800; codePoint <= 0xDFFF; codePoint++) {
				assert.equal(surrogate.includes(codePoint), true);
			}
			assert.equal(surrogate.includes(codePoint), false);
		});

	});

	describe('scalarValue', function () {

		it('should detect scalarValue code points', function () {
			let codePoint = 0xD7FF;
			assert.equal(scalarValue.includes(codePoint), true);
			for (codePoint = 0xD800; codePoint <= 0xDFFF; codePoint++) {
				assert.equal(scalarValue.includes(codePoint), false);
			}
			assert.equal(scalarValue.includes(codePoint), true);
		});

	});

	describe('noncharacter', function () {

		it('should detect noncharacter code points', function () {
			let codePoint = 0xFDD0 - 1;
			assert.equal(noncharacter.includes(codePoint), false);
			for (codePoint = 0xFDD0; codePoint <= 0xFDEF; codePoint++) {
				assert.equal(noncharacter.includes(codePoint), true);
			}
			assert.equal(noncharacter.includes(codePoint), false);
			[
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
			.forEach((c) => {
				assert.equal(noncharacter.includes(c), true);
			});
		});

	});

	describe('ASCIICodePoint', function () {

		it('should detect ASCIICodePoint code points', function () {
			for (let codePoint = 0; codePoint <= 0x7F; codePoint++) {
				assert.equal(ASCIICodePoint.includes(codePoint), true);
			}
			for (let codePoint = 0x80; codePoint <= 0xFF; codePoint++) {
				assert.equal(ASCIICodePoint.includes(codePoint), false);
			}
		});

	});

	describe('ASCIITabOrNewline', function () {

		it('should detect ASCIITabOrNewline code points', function () {
			for (const char of '\t\r\n') {
				assert.equal(ASCIITabOrNewline.includes(char.codePointAt(0)), true);
			}
			for (const char of ' 0123abcd') {
				assert.equal(ASCIITabOrNewline.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIWhitespace', function () {

		it('should detect ASCIIWhitespace code points', function () {
			for (const char of ' \t\r\n') {
				assert.equal(ASCIIWhitespace.includes(char.codePointAt(0)), true);
			}
			for (const char of '0123abcd') {
				assert.equal(ASCIIWhitespace.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('C0Control', function () {

		it('should detect C0Control code points', function () {
			for (let codePoint = 0; codePoint <= 0x1F; codePoint++) {
				assert.equal(C0Control.includes(codePoint), true);
			}
			for (let codePoint = 0x20; codePoint <= 0x7F; codePoint++) {
				assert.equal(C0Control.includes(codePoint), false);
			}
			assert.equal(C0Control.includes(' '.codePointAt(0)), false);
		});

	});

	describe('C0ControlOrSpace', function () {

		it('should detect C0ControlOrSpace code points', function () {
			for (let codePoint = 0; codePoint <= 0x1F; codePoint++) {
				assert.equal(C0ControlOrSpace.includes(codePoint), true);
			}
			assert.equal(C0ControlOrSpace.includes(' '.codePointAt(0)), true);
			for (let codePoint = 0x21; codePoint <= 0x7F; codePoint++) {
				assert.equal(C0ControlOrSpace.includes(codePoint), false);
			}
		});

	});

	describe('control', function () {

		it('should detect control code points', function () {
			for (let codePoint = 0x6F; codePoint <= 0xAF; codePoint++) {
				assert.equal(control.includes(codePoint), 0x7F <= codePoint && codePoint <= 0x9F);
			}
		});

	});

	describe('ASCIIDigit', function () {

		it('should detect ASCIIDigit code points', function () {
			for (const char of '0123456789') {
				assert.equal(ASCIIDigit.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\nabcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIDigit.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIUpperHexDigit', function () {

		it('should detect ASCIIUpperHexDigit code points', function () {
			for (const char of '0123456789ABCDEF') {
				assert.equal(ASCIIUpperHexDigit.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\nabcdefghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIUpperHexDigit.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIILowerHexDigit', function () {

		it('should detect ASCIILowerHexDigit code points', function () {
			for (const char of '0123456789abcdef') {
				assert.equal(ASCIILowerHexDigit.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\nghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIILowerHexDigit.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIHexDigit', function () {

		it('should detect ASCIIHexDigit code points', function () {
			for (const char of '0123456789abcdefABCDEF') {
				assert.equal(ASCIIHexDigit.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\nghijklmnopqrstuvwxyzGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIHexDigit.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIUpperAlpha', function () {

		it('should detect ASCIIUpperAlpha code points', function () {
			for (const char of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIUpperAlpha.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\n0123456789abcdefghijklmnopqrstuvwxyz') {
				assert.equal(ASCIIUpperAlpha.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIILowerAlpha', function () {

		it('should detect ASCIILowerAlpha code points', function () {
			for (const char of 'abcdefghijklmnopqrstuvwxyz') {
				assert.equal(ASCIILowerAlpha.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\n0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIILowerAlpha.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIAlpha', function () {

		it('should detect ASCIIAlpha code points', function () {
			for (const char of 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIAlpha.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\n0123456789') {
				assert.equal(ASCIIAlpha.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('ASCIIAlphanumeric', function () {

		it('should detect ASCIIAlphanumeric code points', function () {
			for (const char of '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
				assert.equal(ASCIIAlphanumeric.includes(char.codePointAt(0)), true);
			}
			for (const char of ' \t\r\n') {
				assert.equal(ASCIIAlphanumeric.includes(char.codePointAt(0)), false);
			}
		});

	});

	describe('C0ControlPercentEncodeSet', function () {

		it('should detect C0ControlPercentEncodeSet code points', function () {
			for (let codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(
					C0ControlPercentEncodeSet.includes(codePoint),
					!(0x20 <= codePoint && codePoint <= 0x7E),
					`0x${codePoint.toString(16)}`
				);
			}
			[
				0x20,
				0x22,
				0x23,
				0x3C,
				0x3E,
				0x3F,
				0x60,
				0x7B,
				0x7D,
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
			.forEach((codePoint) => {
				assert.equal(C0ControlPercentEncodeSet.includes(codePoint), false, `0x${codePoint.toString(16)}`);
			});
		});

	});

	describe('pathPercentEncodeSet', function () {

		it('should detect pathPercentEncodeSet code points', function () {
			const added = [
				0x20,
				0x22,
				0x23,
				0x3C,
				0x3E,
				0x3F,
				0x60,
				0x7B,
				0x7D
			];
			for (let codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(
					pathPercentEncodeSet.includes(codePoint),
					!(0x20 <= codePoint && codePoint <= 0x7E) || added.includes(codePoint),
					`0x${codePoint.toString(16)}`
				);
			}
			[
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
			.forEach((codePoint) => {
				assert.equal(pathPercentEncodeSet.includes(codePoint), false, `0x${codePoint.toString(16)}`);
			});
		});

	});

	describe('userinfoPercentEncodeSet', function () {

		it('should detect userinfoPercentEncodeSet code points', function () {
			const added = [
				0x20,
				0x22,
				0x23,
				0x3C,
				0x3E,
				0x3F,
				0x60,
				0x7B,
				0x7D,
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
			];
			for (let codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(
					userinfoPercentEncodeSet.includes(codePoint),
					!(0x20 <= codePoint && codePoint <= 0x7E) || added.includes(codePoint),
					`0x${codePoint.toString(16)}`
				);
			}
		});

	});

	describe('forbiddenHost', function () {

		it('should detect forbiddenHost code points', function () {
			const added = [
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
			];
			for (let codePoint = 0x00; codePoint <= 0xFF; codePoint++) {
				assert.equal(
					forbiddenHost.includes(codePoint),
					added.includes(codePoint),
					`0x${codePoint.toString(16)}`
				);
			}
		});

	});

});
