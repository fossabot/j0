import forEach from '../forEach';

function reduce(iterable, fn, initialValue = {}, thisArg) {
	let result = initialValue;
	forEach(iterable, function (item, index) {
		result = fn.call(thisArg, result, item, index, iterable);
	});
	return result;
}

export default reduce;
