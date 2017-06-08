/* eslint-disable no-magic-numbers */
// https://url.spec.whatwg.org/#concept-opaque-host-parser
import {
	ConditionalSet
} from 'j0';
import {
	C0ControlPercentEncodeSet,
	forbiddenHost
} from '../../codePoints';
import {FAILURE} from '../constants';
import utf8PercentEncode from '../utf8PercentEncode';
import validationError from '../validationError';
const forbiddenHostWithoutPercent = ConditionalSet.and(
	forbiddenHost,
	function (x) {
		return x !== 0x25;
	}
);

function parseOpaqueHost(input) {
	const result = [];
	for (let i = 0, {length} = input; i < length; i++) {
		const codePoint = input[i];
		if (forbiddenHostWithoutPercent.includes(codePoint)) {
			validationError('parseOpaqueHost-1', input);
			return FAILURE;
		}
		result.push(...utf8PercentEncode(codePoint, C0ControlPercentEncodeSet));
	}
	if (result.length === 0) {
		validationError('parseOpaqueHost-2', input);
		return FAILURE;
	}
	return result;
}

export default parseOpaqueHost;
