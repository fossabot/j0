import forEach from '../forEach';
import push from '../push';
import noop from '../../noop';

function map(iterable, fn = noop, thisArg) {
	const result = [];
	forEach(iterable, function (...args) {
		push(result, fn.call(thisArg, ...args));
	});
	return result;
}

export default map;
