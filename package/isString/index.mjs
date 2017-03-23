import every from '../Array/every';

function isString(x) {
	return typeof x === 'string';
}

export default function (...args) {
	return every(args, isString);
}
