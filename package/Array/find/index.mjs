import noop from '../../noop';
import isFunction from '../../isFunction';

function getMatcher(ref) {
	return function (value) {
		return ref === value;
	};
}

function find(iterable, fn = noop) {
	let index = 0;
	if (!isFunction(fn)) {
		fn = getMatcher(fn);
	}
	for (const item of iterable) {
		if (fn(item, index, iterable)) {
			return item;
		}
		index += 1;
	}
}

export default find;
