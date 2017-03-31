import document from '../../document';

function querySelectorAll(selectors, element = document) {
	return element.querySelector(selectors);
}

export default querySelectorAll;
