import insertBefore from '../insertBefore';
import firstChild from '../firstChild';

function prependChild(parentNode, newNode) {
	insertBefore(newNode, firstChild(parentNode), parentNode);
}

export default prependChild;
