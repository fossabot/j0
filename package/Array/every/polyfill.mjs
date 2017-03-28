import forEach from '../forEach';

function every(fn, thisArg) {
	let result = true;
	forEach(this, function (...args) {
		result = fn.call(thisArg, ...args);
		return !result;
	});
	return result;
}

export default every;
