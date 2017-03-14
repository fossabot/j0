import every from '../Array/every';

function isUndefined(x) {
	return typeof x === 'undefined';
}

export default function (...args) {
	return every(args, isUndefined);
}
