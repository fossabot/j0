import Boolean from '../../Boolean';
import noop from '../../noop';
import forEach from '../forEach';

function every(iterable, fn = noop, thisArg) {
	let result = true;
	forEach(iterable, function (value, index) {
		result = fn.call(thisArg, value, index, iterable);
		return !result;
	});
	return Boolean(result);
}

export default every;
