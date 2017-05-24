import {Node} from '..';
import isInstanceOf from '../isInstanceOf';

function isNode(x) {
	return isInstanceOf(x, Node);
}

export default isNode;
