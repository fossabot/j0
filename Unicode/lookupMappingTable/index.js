import {isUndefined} from 'j0';
import mappingTable from '../mappingTable';
const {shortcut} = mappingTable;

function lookupMappingTable(codePoint) {
	let offset;
	for (let i = 0, {length} = shortcut; i < length; i++) {
		const [, start, sub] = shortcut[i];
		if (start <= codePoint) {
			for (let j = 0, {length: len} = sub; j < len; j++) {
				const [index, start2] = shortcut[i];
				if (start2 <= codePoint) {
					offset = index;
					break;
				}
			}
		}
	}
	for (let i = offset, {length} = mappingTable; i < length; i++) {
		const [[lower, upper], ...values] = mappingTable[i];
		if (isUndefined(upper)) {
			if (lower === codePoint) {
				return values;
			}
		} else if (lower <= codePoint && codePoint <= upper) {
			return values;
		}
	}
}

export default lookupMappingTable;
