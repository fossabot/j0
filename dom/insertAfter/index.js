import insertBefore from '../insertBefore';
import nextSibling from '../nextSibling';
import firstChild from '../firstChild';

function insertAfter(newNode, referenceNode, parentNode) {
	return insertBefore(newNode, referenceNode ? nextSibling(referenceNode) : firstChild(parentNode), parentNode);
}

export default insertAfter;
