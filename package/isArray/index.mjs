import every from '../Array/every';
import isArray from '../Array/isArray';

export default function (...args) {
	return every(args, isArray);
}
