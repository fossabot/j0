import {
	CANONICAL,
	UnicodeData
} from '../data';

function canonicallyDecompose(codePoints) {
	for (let i = codePoints.length; i--;) {
		const data = UnicodeData[codePoints[i]];
		if (data && data[3]) {
			const [, , , map] = data;
			if (map && map[0] === CANONICAL) {
				codePoints.splice(i, 1, ...map.slice(1));
			}
		}
	}
	return codePoints;
}

export default canonicallyDecompose;
