import forEach from '../forEach';
import noop from '../../noop';

function map(iterable, fn = noop, thisArg) {
	const result = [];
	forEach(iterable, function (value, index) {
		result.push(fn.call(thisArg, value, index, iterable));
	});
	return result;
}

export default map;
