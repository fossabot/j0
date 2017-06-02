/* eslint-disable no-magic-numbers, max-len, no-control-regex */
// https://infra.spec.whatwg.org/#code-points
import {
	CharRegExp
} from 'j0';
export const surrogate = new CharRegExp(/[\uD800-\uDFFF]/);
export const scalarValue = new CharRegExp(/[^\uD800-\uDFFF]/);
export const noncharacter = new CharRegExp(/[\uFDD0-\uFDEF\uFFFE\uFFFF\u1FFFE\u1FFFF\u2FFFE\u2FFFF\u3FFFE\u3FFFF\u4FFFE\u4FFFF\u5FFFE\u5FFFF\u6FFFE\u6FFFF\u7FFFE\u7FFFF\u8FFFE\u8FFFF\u9FFFE\u9FFFF\uAFFFE\uAFFFF\uBFFFE\uBFFFF\uCFFFE\uCFFFF\uDFFFE\uDFFFF\uEFFFE\uEFFFF\uFFFFE\uFFFFF\u10FFFE\u10FFFF]/);
export const ASCIICodePoint = new CharRegExp(/[\x00-\x7F]/);
export const ASCIITabOrNewline = new CharRegExp(/[\x09\x0A\x0D]/);
export const ASCIIWhitespace = new CharRegExp(/[\x09\x0A\x0C\x0D\x20]/);
export const C0Control = new CharRegExp(/[\x00-\x1F]/);
export const C0ControlOrSpace = CharRegExp.compile(C0Control, /\x20/);
export const control = CharRegExp.compile(C0Control, /[\u007F-\u009F]/);
export const ASCIIDigit = new CharRegExp(/[\u0030-\u0039]/);
export const ASCIIUpperHexDigit = CharRegExp.compile(ASCIIDigit, /[\u0041-\u0046]/);
export const ASCIILowerHexDigit = CharRegExp.compile(ASCIIDigit, /[\u0061-\u0066]/);
export const ASCIIHexDigit = CharRegExp.compile(ASCIIUpperHexDigit, ASCIILowerHexDigit);
export const ASCIIUpperAlpha = new CharRegExp(/[\u0041-\u005A]/);
export const ASCIILowerAlpha = new CharRegExp(/[\u0061-\u007A]/);
export const ASCIIAlpha = CharRegExp.compile(ASCIIUpperAlpha, ASCIILowerAlpha);
export const ASCIIAlphanumeric = CharRegExp.compile(ASCIIDigit, ASCIIAlpha);
