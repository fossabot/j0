import noop from '../../noop';
import forEach from '../forEach';
import isFunction from '../../isFunction';

function getMatcher(ref) {
	return function (value) {
		return ref === value;
	};
}

function find(iterable, fn = noop, thisArg) {
	let result;
	if (!isFunction(fn)) {
		fn = getMatcher(fn);
	}
	forEach(iterable, function (item, index) {
		if (fn.call(thisArg, item, index, iterable)) {
			result = index;
			return true;
		}
	});
	return result;
}

export default find;
