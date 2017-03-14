import every from '../Array/every';
import Node from '../Node';

function isNode(...args) {
	return every(args, (arg) => {
		return arg instanceof Node;
	});
}

export default isNode;
