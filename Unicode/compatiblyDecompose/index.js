import {
	UnicodeData
} from '../data';
import canonicallySort from '../canonicallySort';

function compatiblyDecompose(codePoints) {
	for (let i = codePoints.length; i--;) {
		const data = UnicodeData[codePoints[i]];
		if (data) {
			const [, , , map] = data;
			if (map) {
				codePoints.splice(i, 1, ...map.slice(1));
			}
		}
	}
	return canonicallySort(codePoints);
}

export default compatiblyDecompose;
