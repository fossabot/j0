import parentNode from '../parentNode';

function removeChild(childNode, parentElement = parentNode(childNode)) {
	if (parentElement) {
		parentElement.removeChild(childNode);
	}
}

export default removeChild;
