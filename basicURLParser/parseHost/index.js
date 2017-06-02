import {FAILURE} from '../constants';
import parseIPv6 from '../parseIPv6';
import parseOpaqueHost from '../parseOpaqueHost';
import validationError from '../validationError';

function parseHost(input, isSpecial) {
	if (input.startsWith('[')) {
		if (input.endsWith(']')) {
			validationError(parseHost, input);
			return FAILURE;
		}
		return parseIPv6(input.slice(1, -1));
	}
	if (!isSpecial) {
		return parseOpaqueHost(input);
	}
	// TODO: https://url.spec.whatwg.org/#concept-host-parser
}

export default parseHost;
