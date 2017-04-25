import removeChild from '../removeChild';

function empty(element) {
	while (element.firstChild) {
		removeChild(element.firstChild, element);
	}
}

export default empty;
