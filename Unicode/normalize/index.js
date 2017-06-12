import canonicallyDecompose from '../canonicallyDecompose';
import canonicallyCompose from '../canonicallyCompose';
import compatiblyDecompose from '../compatiblyDecompose';
import compatiblyCompose from '../compatiblyCompose';

function normalize(codePoints, form = 'NFC') {
	switch (form) {
	case 'NFD':
		return canonicallyDecompose(codePoints);
	case 'NFC':
		return canonicallyCompose(canonicallyDecompose(codePoints));
	case 'NFKD':
		return compatiblyDecompose(codePoints);
	case 'NFKC':
		return compatiblyCompose(compatiblyDecompose(codePoints));
	default:
	}
	return codePoints;
}

export default normalize;
