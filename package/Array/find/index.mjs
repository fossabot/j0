import noop from '../../noop';
import forEach from '../forEach';

function find(iterable, fn = noop, thisArg) {
	let result;
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = item;
			return true;
		}
	});
	return result;
}

export default find;
