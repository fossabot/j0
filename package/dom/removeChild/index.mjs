import parentNode from '../parentNode';

function removeChild(childNode, parentElement = parentNode(childNode)) {
	parentElement.removeChild(childNode);
}

export default removeChild;
