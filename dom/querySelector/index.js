import {document} from '../../global';

function querySelectorAll(selectors, element = document) {
	return element.querySelector(selectors);
}

export default querySelectorAll;
