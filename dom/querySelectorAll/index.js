import {document} from '../../global';

function querySelectorAll(selectors, element = document) {
	return element.querySelectorAll(selectors);
}

export default querySelectorAll;
