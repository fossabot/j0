/* eslint-disable no-use-before-define, no-magic-numbers */
import {
	Object,
	Set
} from 'j0';

class Encoding {

	constructor(params) {
		Object.assign(this, params);
	}

}

Object.assign(Encoding, {knownEncodings: new Set()});

export default Encoding;
