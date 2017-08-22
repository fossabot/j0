import {
	document,
	dom
} from 'j0';

function find(selector, rootElement) {
	const element = (rootElement ? dom(rootElement).node : document).querySelector(selector);
	return element ? dom(element) : null;
}

export default find;
