import every from '../Array/every';

function isNumber(x) {
	return typeof x === 'number';
}

export default function (...args) {
	return every(args, isNumber);
}
