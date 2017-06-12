import {
	CANONICAL,
	UnicodeData
} from '../data';
import canonicallySort from '../canonicallySort';

function canonicallyDecompose(codePoints) {
	for (let i = codePoints.length; i--;) {
		const data = UnicodeData[codePoints[i]];
		if (data) {
			const [, , , map] = data;
			if (map && map[0] === CANONICAL) {
				codePoints.splice(i, 1, ...map.slice(1));
			}
		}
	}
	return canonicallySort(codePoints);
}

export default canonicallyDecompose;
