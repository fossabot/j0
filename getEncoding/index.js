import {
	Set
} from 'j0';

import UTF8 from '../Encoding/UTF8';

const knownEncodings = new Set([UTF8]);

function getEncoding(label) {
	label = label.replace(/^\s+|\s+$/g, '');
	for (const encoding of knownEncodings) {
		if (encoding.labels.has(label)) {
			return encoding;
		}
	}
}

export default getEncoding;
