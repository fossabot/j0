import document from '../../document';

function querySelectorAll(element, selectors) {
	return (element === null ? document : element).querySelector(selectors);
}

export default querySelectorAll;
