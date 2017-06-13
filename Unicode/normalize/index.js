import {
	String,
	stringToCodePoints,
	unorm
} from 'j0';
// import canonicallyDecompose from '../canonicallyDecompose';
// import canonicallyCompose from '../canonicallyCompose';
// import compatiblyDecompose from '../compatiblyDecompose';

function normalize(codePoints, form = 'NFC') {
	// switch (form) {
	// case 'NFD':
	// 	return canonicallyDecompose(codePoints);
	// case 'NFC':
	// 	return canonicallyCompose(canonicallyDecompose(codePoints));
	// case 'NFKD':
	// 	return compatiblyDecompose(codePoints);
	// case 'NFKC':
	// 	return canonicallyCompose(compatiblyDecompose(codePoints));
	// default:
	// }
	// return codePoints;
	return stringToCodePoints(unorm[form](String.fromCodePoint(...codePoints)));
}

export default normalize;
