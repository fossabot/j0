import parentNode from '../parentNode';

function insertBefore(newNode, referenceNode, parentNode = parentNode(referenceNode)) {
	return parentNode.insertBefore(newNode, referenceNode);
}

export default insertBefore;
