import document from '../../document';

function querySelectorAll(selectors, element = document) {
	return element.querySelectorAll(selectors);
}

export default querySelectorAll;
