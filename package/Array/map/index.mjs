import forEach from '../forEach';
import push from '../push';

function map(iterable, fn) {
	const result = [];
	forEach(iterable, function (...args) {
		push(result, fn(...args));
	});
	return result;
}

export default map;
