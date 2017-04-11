import parentNode from '../parentNode';

function insertBefore(newNode, referenceNode, parent = parentNode(referenceNode)) {
	return parent.insertBefore(newNode, referenceNode);
}

export default insertBefore;
