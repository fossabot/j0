/* eslint-disable no-magic-numbers, max-len, no-control-regex */
// https://infra.spec.whatwg.org/#code-points
import {
	CharRegExp
} from 'j0';
export const surrogate = CharRegExp.compile(/[\uD800-\uDFFF]/);
export const scalarValue = CharRegExp.compile(/[^\uD800-\uDFFF]/);
export const noncharacter = CharRegExp.compile(/[\uFDD0-\uFDEF\uFFFE\uFFFF\u1FFFE\u1FFFF\u2FFFE\u2FFFF\u3FFFE\u3FFFF\u4FFFE\u4FFFF\u5FFFE\u5FFFF\u6FFFE\u6FFFF\u7FFFE\u7FFFF\u8FFFE\u8FFFF\u9FFFE\u9FFFF\uAFFFE\uAFFFF\uBFFFE\uBFFFF\uCFFFE\uCFFFF\uDFFFE\uDFFFF\uEFFFE\uEFFFF\uFFFFE\uFFFFF\u10FFFE\u10FFFF]/);
export const ASCIICodePoint = CharRegExp.compile(/[\x00-\x7F]/);
export const ASCIITabOrNewline = CharRegExp.compile(/[\x09\x0A\x0D]/);
export const ASCIIWhitespace = CharRegExp.compile(/[\x09\x0A\x0C\x0D\x20]/);
export const C0Control = CharRegExp.compile(/[\x00-\x1F]/);
export const C0ControlOrSpace = CharRegExp.compile(C0Control, /\x20/);
export const control = CharRegExp.compile(C0Control, /[\x7F-\x9F]/);
export const ASCIIDigit = CharRegExp.compile(/[\x30-\x39]/);
export const ASCIIUpperHexDigit = CharRegExp.compile(ASCIIDigit, /[\x41-\x46]/);
export const ASCIILowerHexDigit = CharRegExp.compile(ASCIIDigit, /[\x61-\x66]/);
export const ASCIIHexDigit = CharRegExp.compile(ASCIIUpperHexDigit, ASCIILowerHexDigit);
export const ASCIIUpperAlpha = CharRegExp.compile(/[\x41-\x5A]/);
export const ASCIILowerAlpha = CharRegExp.compile(/[\x61-\x7A]/);
export const ASCIIAlpha = CharRegExp.compile(ASCIIUpperAlpha, ASCIILowerAlpha);
export const ASCIIAlphanumeric = CharRegExp.compile(ASCIIDigit, ASCIIAlpha);

export const C0ControlPercentEncodeSet = CharRegExp.compile(/[^\x20-\x7D]/);
export const pathPercentEncodeSet = CharRegExp.compile(C0ControlPercentEncodeSet, /[\x20\x22\x23\x3C\x3E\x3F\x60\x7B\x7D]/);
export const userinfoPercentEncodeSet = CharRegExp.compile(pathPercentEncodeSet, /[\x2F\x3A\x3B\x3D\x40\x5B\x5C\x5D\x5E\x7C]/);
export const forbiddenHost = CharRegExp.compile(/[\x00\x09\x0A\x0D\x20\x23\x25\x2F\x3A\x3F\x40\x5B\x5C\x5D]/);
