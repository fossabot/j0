import removeChild from '../removeChild';

function empty(element) {
	while (element.firstChild) {
		removeChild(element, element.firstChild);
	}
}

export default empty;
