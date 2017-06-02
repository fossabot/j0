import {
	encodeURIComponent
} from 'j0';

function utf8PercentEncode(codePoints, percentEncodeSet) {
	return codePoints
	.replace(percentEncodeSet.globalized, (codePoint) => {
		return encodeURIComponent(codePoint);
	});
}

export default utf8PercentEncode;
