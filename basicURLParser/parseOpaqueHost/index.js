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
	if (!input || forbiddenHostWithoutPercent.includes(input)) {
		validationError('parseOpaqueHost', input);
		return FAILURE;
	}
	return utf8PercentEncode(input, C0ControlPercentEncodeSet);
}

export default parseOpaqueHost;
