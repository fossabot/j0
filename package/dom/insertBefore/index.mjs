import getParent from '../getParent';

function insertBefore(newNode, referenceNode, parentNode = getParent(referenceNode)) {
	return parentNode.insertBefore(newNode, referenceNode);
}

export default insertBefore;
