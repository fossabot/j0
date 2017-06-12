import {
	UnicodeData
} from '../data';

function canonicallySort(codePoints) {
	let buffer = [];
	for (let i = 0, {length} = codePoints; i < length; i++) {
		const codePoint = codePoints[i];
		const data = UnicodeData[codePoint];
		const ccc = (data && data[1]) || 0;
		if (ccc) {
			if (buffer) {
				buffer.push([ccc, codePoint]);
			} else {
				buffer = [[ccc, codePoint]];
				buffer.start = i;
			}
		} else if (buffer) {
			codePoints.splice(
				buffer.start,
				buffer.length,
				buffer.sort(([a], [b]) => {
					return a < b ? -1 : 1;
				})
				.map(([, cp]) => {
					return cp;
				})
			);
			buffer = 0;
		}
	}
	if (buffer) {
		codePoints.splice(
			buffer.start,
			buffer.length,
			buffer.sort(([a], [b]) => {
				return a < b ? -1 : 1;
			})
			.map(([, cp]) => {
				return cp;
			})
		);
		buffer = 0;
	}
	return codePoints;
}

export default canonicallySort;
