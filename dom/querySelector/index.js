import {document} from '../..';

function querySelectorAll(selectors, element = document) {
	return element.querySelector(selectors);
}

export default querySelectorAll;
