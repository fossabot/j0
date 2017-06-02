/* eslint-disable no-control-regex */
// https://url.spec.whatwg.org/#concept-opaque-host-parser
import {C0ControlPercentEncodeSet} from '../../codePoints';
import {FAILURE} from '../constants';
import utf8PercentEncode from '../utf8PercentEncode';
import validationError from '../validationError';

function parseOpaqueHost(input) {
	if (!input || (/[\x00\x09\x0A\x0D\x20\x23\x2F\x3A\x3F\x40\x5B\x5C\x5D]/).test(input)) {
		validationError('parseOpaqueHost', input);
		return FAILURE;
	}
	return utf8PercentEncode(input, C0ControlPercentEncodeSet);
}

export default parseOpaqueHost;
