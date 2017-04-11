import noop from '../../noop';
import forEach from '../forEach';

function find(iterable, fn = noop, thisArg) {
	let result = -1;
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

export default find;
