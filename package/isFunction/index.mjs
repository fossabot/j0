import every from '../Array/every';

function isFunction(x) {
	return typeof x === 'function';
}

export default function (...args) {
	return every(args, isFunction);
}
