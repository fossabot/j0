import {isUndefined} from 'j0';
function arrayFrom(iterable) {
	const result = [];
	if (isUndefined(iterable.length)) {
		for (const item of iterable) {
			result.push(item);
		}
	} else {
		for (let i = 0, {length} = iterable; i < length; i++) {
			result[i] = iterable[i];
		}
	}
	return result;
}
export default arrayFrom;
