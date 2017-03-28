import noop from '../../noop';
import forEach from '../forEach';
import push from '../push';

function filter(iterable, fn = noop, thisArg) {
	const result = [];
	forEach(iterable, function (value, index, iterable2) {
		if (fn.call(thisArg, value, index, iterable2)) {
			push(result, value);
		}
	});
	return result;
}

export default filter;
