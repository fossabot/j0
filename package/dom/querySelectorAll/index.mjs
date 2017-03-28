import document from '../../document';

function querySelectorAll(element, selectors) {
	return (element === null ? document : element).querySelectorAll(selectors);
}

export default querySelectorAll;
