import noop from '../../noop';

function every(array, fn = noop, thisArg = array) {
	const {length} = array;
	for (let i = 0; i < length; i += 1) {
		if (!fn.call(thisArg, array[i], i, array)) {
			return false;
		}
	}
	return true;
}

export default every;
