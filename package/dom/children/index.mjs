import filter from '../../Array/filter';
import childNodes from '../childNodes';

function children(node) {
	return filter(childNodes(node), function ({nodeType = 0}) {
		return nodeType === 1;
	});
}

export default children;
