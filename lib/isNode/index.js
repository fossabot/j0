import {
	Node,
	isInstanceOf
} from 'j0';

function isNode(x) {
	return isInstanceOf(x, Node);
}

export default isNode;
