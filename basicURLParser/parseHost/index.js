/* eslint-disable no-magic-numbers */
import {FAILURE} from '../constants';
import parseIPv6 from '../parseIPv6';
import parseOpaqueHost from '../parseOpaqueHost';
import validationError from '../validationError';
import utf8DecodeWithoutBOM from '../utf8DecodeWithoutBOM';
import utf8Encode from '../utf8Encode';
import percentDecode from '../percentDecode';
import domainToASCII from '../domainToASCII';

function parseHost(input, isSpecial) {
	if (input[0] === 0x5B) {
		if (input[input.length - 1] !== 0x5D) {
			validationError(parseHost, input);
			return FAILURE;
		}
		return parseIPv6(input.slice(1, -1));
	}
	if (!isSpecial) {
		return parseOpaqueHost(input);
	}
	const domain = utf8DecodeWithoutBOM(percentDecode(utf8Encode(input)));
	const asciiDomain = domainToASCII(domain);
}

export default parseHost;
