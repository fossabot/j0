import {
	document,
	dom
} from 'j0';

function findAll(selector, rootElement) {
	const list = (rootElement ? dom(rootElement).node : document).querySelectorAll(selector);
	const result = [];
	for (let i = 0, {length} = list; i < length; i++) {
		result[i] = dom(list[i]);
	}
	return result;
}

export default findAll;
