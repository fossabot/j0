import forEach from '../forEach';
import push from '../push';
import noop from '../../noop';

function map(iterable, fn = noop, thisArg) {
	const result = [];
	forEach(iterable, function (value, index) {
		push(result, fn.call(thisArg, value, index, iterable));
	});
	return result;
}

export default map;
