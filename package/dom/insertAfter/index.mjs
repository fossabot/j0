import insertBefore from '../insertBefore';
import nextSibling from '../nextSibling';
import getFirstChild from '../getFirstChild';

function insertAfter(newNode, referenceNode, parentNode) {
	return insertBefore(newNode, referenceNode ? nextSibling(referenceNode) : getFirstChild(parentNode), parentNode);
}

export default insertAfter;
